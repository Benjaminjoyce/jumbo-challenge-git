import { combineReducers } from 'redux';
import merge from 'lodash/merge';
// import paginate from './paginate';

const entities = (state = { characters: {} }, action) => {
  console.log('returning state');
  console.log(action.response);
  if (action.response) {
    console.log('action response + action response.entities');
    return merge({}, state, action.response.entities);
  }
  return state;
};

/* CODE WRITTEN BELOW ARE COPY/PASTE FROM THE EXAMPLE.
NOT ALL CONCEPTS UNDERSTOOD AS OF 10AM 15/11 */

// "Updates the pagination data for different actions."

// const pagination = combineReducers({
//   fetchCharacterList: paginate({
//     mapActionToKey: action => action,
//     types: [
//       ActionTypes.CHARACTERS_REQUEST,
//       ActionTypes.CHARACTERS_SUCCESS,
//       ActionTypes.CHARACTERS_FAILURE
//     ]
//   })
// });

const rootReducer = combineReducers({
  entities
  // pagination
});

export default rootReducer;
