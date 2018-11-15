import {
  CHARACTERS_REQUEST,
  CHARACTERS_SUCCESS,
  CHARACTERS_FAILURE
} from '../actions';

export const character_reducer = function(
  state = {
    characters: []
  },
  action
) {
  switch (action.type) {
    case CHARACTERS_REQUEST:
      console.log('from reducer: Request');
      return state;

    case CHARACTERS_SUCCESS:
      const res = Object.values(action.response.entities.characters);
      console.log(res);
      return {
        characters: [...state.characters, ...res]
      };
    //   return Object.assign({}, state, action.response.entities);

    case CHARACTERS_FAILURE:
      console.log('from reducer: Failure');
      return state;

    default:
      console.log('from reducer: default');
      return state;
  }
};
