/* @flow */
import { CALL_API, Schemas } from "../middleware/index";
import type { State, RouterParams } from "../flowTypes";

type CallApi = {
  types: Array<string>,
  endPoint: string,
  schema: Object,
  params: string
};

export type Action = CharactersAction | ComicsAction;
type Dispatch = (Action | ThunkAction | PromiseAction) => any;
type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;

export const CHARACTERS_REQUEST = "CHARACTERS_REQUEST";
export const CHARACTERS_SUCCESS = "CHARACTERS_SUCCESS";
export const CHARACTERS_FAILURE = "CHARACTERS_FAILURE";

type CharactersAction = {
  Call_API: CallApi,
  charactersEndpoint: string
};

type FetchCharactersFunction = (
  charactersEndpoint: string,
  queryString: string
) => CharactersAction;
const fetchCharacters: FetchCharactersFunction = (
  charactersEndpoint,
  queryString
) => ({
  charactersEndpoint,
  [CALL_API]: {
    types: [CHARACTERS_REQUEST, CHARACTERS_SUCCESS, CHARACTERS_FAILURE],
    endPoint: charactersEndpoint,
    schema: Schemas.CHARACTER_ARRAY,
    params: queryString
  }
});

type LoadCharactersFunction = (
  params: RouterParams
) => (dispatch: Dispatch) => void;
export const loadCharacters: LoadCharactersFunction = params => dispatch => {
  let { type, id, uid } = params;
  let pageNumber = ((Number(id) - 1) * 20) | 0;
  let endPoint = uid ? `${type}/${uid}` : `${type}`;
  let queryString = uid ? "?" : `?limit=20&offset=${pageNumber}&`;

  if (type === "comics") {
    return dispatch(fetchComics(endPoint, queryString));
  }
  dispatch(fetchCharacters(endPoint, queryString));
};

export const COMICS_SUCCESS = "COMICS_SUCCESS";
export const COMICS_REQUEST = "COMICS_REQUEST";
export const COMICS_FAILURE = "COMICS_FAILURE";

type ComicsAction = {
  Call_API: CallApi,
  comicsEndpoint: string
};

const fetchComics = (comicsEndpoint, queryString) => ({
  comicsEndpoint,
  [CALL_API]: {
    types: [COMICS_REQUEST, COMICS_SUCCESS, COMICS_FAILURE],
    endPoint: comicsEndpoint,
    schema: Schemas.COMIC_SCHEMA,
    params: queryString
  }
});
