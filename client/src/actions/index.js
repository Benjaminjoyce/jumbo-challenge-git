import { CALL_API, Schemas } from '../middleware/index';

export const CHARACTERS_REQUEST = 'CHARACTERS_REQUEST';
export const CHARACTERS_SUCCESS = 'CHARACTERS_SUCCESS';
export const CHARACTERS_FAILURE = 'CHARACTERS_FAILURE';

const fetchCharacters = (charactersEndpoint, fetchParams) => ({
  charactersEndpoint,
  [CALL_API]: {
    types: [CHARACTERS_REQUEST, CHARACTERS_SUCCESS, CHARACTERS_FAILURE],
    endPoint: charactersEndpoint,
    schema: Schemas.CHARACTER_ARRAY,
    params: fetchParams
  }
});

export const loadCharacters = charactersKey => (dispatch, getState) => {
  const { limit = 20, offset } =
    getState().pagination.fetchCharacterList.characters || {};

  const charactersEndpoint = `${charactersKey}`;

  let nextOffset = typeof offset === 'undefined' ? 0 : offset + 20;
  const fetchParams = `?limit=${limit}&offset=${nextOffset}&`;
  return dispatch(fetchCharacters(charactersEndpoint, fetchParams));
  // }
};

export const loadCharactersById = charactersKey => (dispatch, getState) => {
  const charactersEndpoint = `${charactersKey}`;
  const fetchParams = '?';
  return dispatch(fetchCharacters(charactersEndpoint, fetchParams));
  // }
};

//https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=19&apikey=b1c72
