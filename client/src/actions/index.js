/* @flow */
import { CALL_API, Schemas } from '../middleware/index';
import type {State} from '../flowTypes'

type CallApi = {
  types: Array<string>,
  endPoint: string,
  schema: Object,
  params: string
}

type Action = | CharactersAction | ComicsAction
type Dispatch = (Action | ThunkAction | PromiseAction) => any;
type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;

export const CHARACTERS_REQUEST = 'CHARACTERS_REQUEST';
export const CHARACTERS_SUCCESS = 'CHARACTERS_SUCCESS';
export const CHARACTERS_FAILURE = 'CHARACTERS_FAILURE';

type CharactersAction = {
  Call_API: CallApi,
  charactersEndpoint: string
}
type FetchCharactersFunction = (charactersEndpoint:string,queryString:string) => CharactersAction
const fetchCharacters:FetchCharactersFunction = (charactersEndpoint, queryString) => ({
  charactersEndpoint,
  [CALL_API]: {
    types: [CHARACTERS_REQUEST, CHARACTERS_SUCCESS, CHARACTERS_FAILURE],
    endPoint: charactersEndpoint,
    schema: Schemas.CHARACTER_ARRAY,
    params: queryString
  }
});

type LoadCharactersFunction = (pageNumber:string, characterId:string) => (dispatch: Dispatch) => void;
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

type ComicsAction = {
  Call_API: CallApi,
  comicsEndpoint: string
}

const fetchComics = (comicsEndpoint, queryString) => ({
  comicsEndpoint,
  [CALL_API]: {
    types: [COMICS_REQUEST, COMICS_SUCCESS, COMICS_FAILURE],
    endPoint: comicsEndpoint,
    schema: Schemas.COMIC_SCHEMA,
    params: queryString
  }
});

type LoadComicsFunction = (pageNumber:string, comicId:string) => (dispatch: Dispatch) => void;
export const loadComics:LoadComicsFunction = (pageNumber,comicId) => dispatch => {
  const offset =
    typeof pageNumber === 'number' ? 0 : (Number(pageNumber) - 1) * 20;

  const comicsEndpoint = !comicId ? 'comics' : `comics/${comicId}`;
  const queryString = `?limit=20&offset=${offset}&`;
  return dispatch(fetchComics(comicsEndpoint, queryString));
};

