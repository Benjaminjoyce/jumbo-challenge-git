/* @flow */


import { CALL_API, Schemas } from '../middleware/index';
import type{Dispatch,FetchCharactersFunction} from '../flowTypes'

export const CHARACTERS_REQUEST = 'CHARACTERS_REQUEST';
export const CHARACTERS_SUCCESS = 'CHARACTERS_SUCCESS';
export const CHARACTERS_FAILURE = 'CHARACTERS_FAILURE';


const fetchCharacters:FetchCharactersFunction = (charactersEndpoint, queryString) => ({
  charactersEndpoint,
  [CALL_API]: {
    types: [CHARACTERS_REQUEST, CHARACTERS_SUCCESS, CHARACTERS_FAILURE],
    endPoint: charactersEndpoint,
    schema: Schemas.CHARACTER_ARRAY,
    params: queryString
  }
});

type LoadCharactersFunction = (pageNumber?:string, characterId?:string) => (dispatch: Dispatch) => void;
export const loadCharacters: LoadCharactersFunction = (pageNumber, characterId) => dispatch => {
  const offset =
    typeof pageNumber === 'number' ? 0 : (Number(pageNumber) - 1) * 20;
  const charactersEndpoint = !characterId
    ? 'characters'
    : `characters/${characterId}`;
  const queryString = `?limit=20&offset=${offset}&`;
  console.log(dispatch)
  dispatch(fetchCharacters(charactersEndpoint, queryString));
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



export const loadComics = (pageNumber, comicId) => dispatch => {
  const offset =
    typeof pageNumber === 'number' ? 0 : (Number(pageNumber) - 1) * 20;

  const comicsEndpoint = !comicId ? 'comics' : `comics/${comicId}`;
  const queryString = `?limit=20&offset=${offset}&`;
  return dispatch(fetchComics(comicsEndpoint, queryString));
};

