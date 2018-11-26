/* @flow */

import type{ LoadCharactersFunction } from '../flowTypes'
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

export const loadCharacters: LoadCharactersFunction = (pageNumber, characterId) => dispatch => {
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

const fetchComics = (comicsEndpoint, queryString) => ({
  comicsEndpoint,
  [CALL_API]: {
    types: [COMICS_REQUEST, COMICS_SUCCESS, COMICS_FAILURE],
    endPoint: comicsEndpoint,
    schema: Schemas.COMIC_SCHEMA,
    params: queryString
  }
});



export const loadComics: LoadCharactersFunction = (pageNumber, comicId) => dispatch => {
  const offset =
    typeof pageNumber === 'number' ? 0 : (Number(pageNumber) - 1) * 20;

  const comicsEndpoint = !comicId ? 'comics' : `comics/${comicId}`;
  const queryString = `?limit=20&offset=${offset}&`;

  return dispatch(fetchComics(comicsEndpoint, queryString));
};


// pageNumber,
//   characterId,
//   comicId,
//   dispatch