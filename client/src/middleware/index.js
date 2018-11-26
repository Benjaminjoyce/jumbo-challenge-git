import { normalize, schema } from 'normalizr';
import md5 from 'md5';

const PUBLIC_KEY = 'f4a98ab558f3985f917fbc86ab5bf8a5';
const PRIV_KEY = '037048bbc0323698281e29bb0f596cfc365018c2';
const ts = Date.now();
const hash = md5(ts + PRIV_KEY + PUBLIC_KEY);
//Marvel Api Keys and required specs to make an api request
const API_ROOT = 'https://gateway.marvel.com:443/v1/public/';
const API_END = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
//The only part of the api request that will change will be the Endpoint which will
//have API_START prepennded and API_END appenped

export const CALL_API = 'Call API';



//Schemas for characterlist

const characterSchema = new schema.Entity('marvelCharacters');
const characterArraySchema = new schema.Array(characterSchema);

const comicSchema = new schema.Entity(
  'comics',
  {},
  { idAttribute: 'resourceURI' }
);
const comicsArraySchema = new schema.Array(comicSchema);

export const Schemas = {
  CHARACTER_ARRAY: characterArraySchema,
  COMIC_SCHEMA: comicsArraySchema
};

const apiRoot = 'http://gateway.marvel.com/v1/public/';
//CALLED BY THE DEFAULT MIDDLEWARE, EXECUTES AN APICALL

const callApi = (endpoint, schema, params) => {
  console.log(typeof schema)
  console.log(schema)
  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 && endpoint.indexOf(apiRoot)
      ? API_ROOT + endpoint
      : endpoint;
  return fetch(`${fullUrl}${params}${API_END}`).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      console.log(json.data);
      const { offset, limit, count, total } = json.data;
      const pagination = { offset, limit, count, total };

      let normRes = Object.assign({}, normalize(json.data.results, schema));

      return { normRes, pagination };
    })
  );
};

export default store => next => action => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }
  let { endPoint } = callAPI;
  const { schema, types, params } = callAPI;

  if (typeof endPoint === 'function') {
    endPoint = endPoint(store.getState());
  }
  if (types.length !== 3 && !types.every(type => typeof type === 'string')) {
    throw new Error(
      'Please check your types. Three types are required. Each type MUST be a string type'
    );
  }

  //
  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  //ARRAY DESTRUCTERING
  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));

  return callApi(endPoint, schema, params).then(
    response => next(actionWith({ response, type: successType })),
    error =>
      next(
        actionWith({
          type: failureType,
          error: error.message || 'Something bad happened'
        })
      )
  );
};
