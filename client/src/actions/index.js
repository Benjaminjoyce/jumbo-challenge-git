import { CALL_API, Schemas } from '../middleware/index';

export const CHARACTERS_REQUEST = 'CHARACTERS_REQUEST';
export const CHARACTERS_SUCCESS = 'CHARACTERS_SUCCESS';
export const CHARACTERS_FAILURE = 'CHARACTERS_FAILURE';

const fetchCharacters = (charactersEndpoint, queryString) => ({
  charactersEndpoint,
  [CALL_API]: {
    types: [CHARACTERS_REQUEST, CHARACTERS_SUCCESS, CHARACTERS_FAILURE],
    endPoint: charactersEndpoint,
    schema: Schemas.CHARACTER_ARRAY,
    params: queryString
  }
});

export const loadCharacters = (pageNumber, characterId) => (
  dispatch,
  getState
) => {
  const offset =
    typeof pageNumber === 'number' ? 0 : (Number(pageNumber) - 1) * 20;
  const charactersEndpoint = !characterId
    ? 'characters'
    : `characters/${characterId}`;

  const queryString = `?limit=20&offset=${offset}&`;
  return dispatch(fetchCharacters(charactersEndpoint, queryString));
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

  return dispatch(fetchComics(comicsEndpoint));
};
