import { combineReducers } from 'redux';
import merge from 'lodash/merge';
import paginate from './paginate';
import * as ActionTypes from '../actions';
const entities = (state = {}, action) => {
  if (action.response) {
    return merge({}, state, action.response.normRes.entities);
  }
  return state;
};

/* CODE WRITTEN BELOW ARE COPY/PASTE FROM THE EXAMPLE.
NOT ALL CONCEPTS UNDERSTOOD AS OF 10AM 15/11 */

// "Updates the pagination data for different actions."

/* !!!!!!!!!!!! code here when changing the const name for charactersEndpoint !!!!!!!!!!!!!*/
const pagination = combineReducers({
  fetchCharacterList: paginate({
    mapActionToKey: action => action.charactersEndpoint,
    types: [
      ActionTypes.CHARACTERS_REQUEST,
      ActionTypes.CHARACTERS_SUCCESS,
      ActionTypes.CHARACTERS_FAILURE
    ]
  })
});

const rootReducer = combineReducers({
  entities,
  pagination
});

export default rootReducer;
