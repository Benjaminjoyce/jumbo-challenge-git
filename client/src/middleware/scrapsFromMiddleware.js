export const callApi = (
  { dispatch, getState },
  endpoint,
  type
) => next => action => {
  console.log('from middleware line 2');
  console.log('logging type', type);
  console.log('logging endpoint', endpoint);
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const fullUrl = API_START + 'characters' + API_END;
  console.log(fullUrl);
  fetch(fullUrl)
    .then(res => res.json())
    .then(res => dispatch({ type: 'PAYLOAD_SUCCESS', res }));
  return Promise.resolve(getState());
};

export const callApi = (endpoint, schema) => {
  const fullUrl = `${API_START}${endpoint}${API_END}`;
  return fetch(fullUrl).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        console.log('ERROR');
      }
      return normalize(json.data.results, schema);
    })
  );
};

type: 'API',
endpoint: 'characters',
method: 'fetch'

/* calls the marvel api and returns a list of characters in the form of entities based from schemas
entities:{
  characters:{
    1009144: {id: 1009144, name: "A.I.M.", ...}
    1009146: {id: 1009146, name: "Abomination ...}
  }
  results:[1009144, 1009146]
}
*/

export function createSlimAsyncMiddleware({ dispatch, getState }) {
  return next => action => {
    const { types, callAPI, shouldCallAPI = () => true } = action;
    if (!actionIsValid(action)) next(action);
    if (!shouldCallAPI(getState())) {
      return Promise.resolve(getState());
    }
    const [pendingType, successType, errorType] = types;
    dispatch({ type: pendingType });
    return callAPI()
      .then(response => {
        dispatch({
          type: successType,
          payload: response
        });
        return Promise.resolve(getState());
      })
      .catch(error => {
        dispatch({
          type: errorType,
          payload: error
        });
        return Promise.reject(error);
      });
  };
}
