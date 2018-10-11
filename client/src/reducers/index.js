import { combineReducers } from 'redux';

import CharacterReducers from './reducer_characters';

const rootReducer = combineReducers({
  characters: CharacterReducers
});

export default rootReducer;
