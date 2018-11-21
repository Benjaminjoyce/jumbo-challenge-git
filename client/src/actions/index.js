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

export const loadCharacters = (charactersKey, pageNumber) => (
  dispatch,
  getState
) => {
  const { limit = 20 } =
    getState().pagination.fetchCharacterList.characters || {};
  const offset = (Number(pageNumber) - 1) * 20;
  console.log('pageNumber', pageNumber);
  console.log('offset', offset);
  const charactersEndpoint = `${charactersKey}`;

  const fetchParams = `?limit=${limit}&offset=${offset}&`;
  return dispatch(fetchCharacters(charactersEndpoint, fetchParams));
};

export const COMICS_SUCCESS = 'COMICS_SUCCESS';
export const COMICS_REQUEST = 'COMICS_REQUEST';
export const COMICS_FAILURE = 'COMICS_FAILURE';

const fetchComics = comicsEndpoint => ({
  comicsEndpoint,
  [CALL_API]: {
    types: [COMICS_REQUEST, COMICS_SUCCESS, COMICS_FAILURE],
    endPoint: comicsEndpoint,
    schema: Schemas.COMIC_SCHEMA,
    params: '?'
  }
});

export const loadComics = comicsKey => dispatch => {
  const comicsEndpoint = `${comicsKey}`;
  console.log('loadComics');
  return dispatch(fetchComics(comicsEndpoint));
};
