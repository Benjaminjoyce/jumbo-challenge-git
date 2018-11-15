import { normalize, schema } from 'normalizr';
import md5 from 'md5';

const PUBLIC_KEY = 'b1c72a0afbf59ab882734e43dacbe92e';
const PRIV_KEY = '5847f3a1d10b67891e417a8e0fe5131ea96e2d92';
const ts = Date.now();
const hash = md5(ts + PRIV_KEY + PUBLIC_KEY);
//Marvel Api Keys and required specs to make an api request
const API_START = 'https://gateway.marvel.com:443/v1/public/';
const API_END = `?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
//The only part of the api request that will change will be the Endpoint which will
//have API_START prepennded and API_END appenped

export const CALL_API = 'Call API';

//Schemas for characterlist

const characterSchema = new schema.Entity('characters');

const characterListSchema = new schema.Array(characterSchema);
export const Schemas = {
  CHARACTER_ARRAY: characterListSchema
};

//CALLED BY THE DEFAULT MIDDLEWARE, EXECUTES AN APICALL

const callApi = (endpoint, schema) => {
  const fullUrl = `${API_START}${endpoint}${API_END}`;
  return fetch(fullUrl).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return Object.assign({}, normalize(json.data.results, schema));
    })
  );
};

//******** START MIDDLEWARE HERE **********///
//MIDDLEWARE THAT DECIDES WHAT HAPPENS WITH THE ACTION
export default store => next => action => {
  const callAPI = action[CALL_API];
  //validate action

  //if the action is 'undefined' pass onto the next middleware
  if (typeof callAPI === 'undefined') {
    return next(action);
  }
  //object assign the endpoints to callAPI to make it easier to pass onto the next function
  let { endPoint } = callAPI;
  const { schema, types } = callAPI;
  /*validation requirements
  -there are 3 types (request,success and failure)
    -must be strings
  -endpoint must be a string
  
  */

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

  return callApi(endPoint, schema).then(
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
