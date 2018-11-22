import { combineReducers } from 'redux';
import merge from 'lodash/merge';
import paginate from './paginate';
import * as ActionTypes from '../actions';
const entities = (
  state = {
    marvelCharacters: {},
    comics: {}
  },
  action
) => {
  if (action.response) {
    return merge({}, state, action.response.normRes.entities);
  }
  return state;
};

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
