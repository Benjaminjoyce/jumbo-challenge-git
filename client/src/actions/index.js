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

export const loadCharacters = () => (dispatch, getState) => {
  const { charactersKey = 'characters', limit = 20, count = 0, offset } =
    getState().pagination.fetchCharacterList.characters || {};
  console.log('before if', count);
  const charactersEndpoint = `${charactersKey}`;

  let nextOffset = typeof offset === 'undefined' ? 0 : offset + 20;
  const fetchParams = `?limit=${limit}&offset=${nextOffset}&`;
  return dispatch(fetchCharacters(charactersEndpoint, fetchParams));
  // }
};

//https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=19&apikey=b1c72
