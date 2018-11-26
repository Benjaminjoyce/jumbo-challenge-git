import { loadCharacters } from '../actions';

type RouterParams = {
    id: string
};

export type Match = {
    params: RouterParams
};

type Comics = {
    items: Array<ComicList>,
    collectionURI: string,
    available: number

}

type ComicList = {
    name: string,
    resourceURI: string
}

type Thumbnail = {
    extension: string,
    path: string,
}


export type Character = {
    comics: Comics,
    thumbnail: Thumbnail,
    id: number,
    name: string,
    description: string,

}

export type CharactersResults = {
    results: Array<Character>
}


export type LoadComics = (a: number, b: RouterParams) => FetchActions


export type PaginationData = {
    offset: number,
    total: number,
    limit: number,
    count: number,
    isFetching: boolean
}

export type Total = {
    data: PaginationData,
    ids: Array<number>
}


type FetchAction = {
    types: Array<string>,
    endpoint: string,
    schema: object,
    params: string
}


type Dispatch = (action: FetchAction | ThunkAction | PromiseAction) => any;
type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;



export type LoadCharactersFunction = (a: number | string, b: number | string) => (dispatch: Dispatch, getState: GetState) => void

