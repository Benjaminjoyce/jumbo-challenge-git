import { CALL_API, Schemas } from '../middleware/index';

export const CHARACTERS_REQUEST = 'CHARACTERS_REQUEST';
export const CHARACTERS_SUCCESS = 'CHARACTERS_SUCCESS';
export const CHARACTERS_FAILURE = 'CHARACTERS_FAILURE';

const fetchCharacters = charactersEndpoint => ({
  [CALL_API]: {
    types: [CHARACTERS_REQUEST, CHARACTERS_SUCCESS, CHARACTERS_FAILURE],
    endPoint: charactersEndpoint,
    schema: Schemas.CHARACTER_ARRAY
  }
});

export const loadCharacters = urlApiEnd => (dispatch, getState) => {
  const charactersEndpoint = urlApiEnd || {};

  //if statement to determine if the character list is being extended

  //if statement to determine if the character is currently loaded

  return dispatch(fetchCharacters(charactersEndpoint));
};
