/* @flow */ 

import type{Comics} from './comicTypes';
import type {Characters} from './characterTypes';

export type RouterParams = {
    id: string
};

export type Match = {
    params: RouterParams
};


export type Thumbnail = {
    extension: string,
    path: string,
}

export type NestedData = {
    name: string,
    resourceURI: string,
    type?:string

}

export type Url = {

}

// export type LoadComics = (a: number, b: RouterParams) => FetchActions


export type PaginationData = {
    offset: number,
    total: number,
    limit: number,
    count: number,
    isFetching?: boolean
}

export type Total = {
    data: PaginationData,
    ids: Array<number>
}



type ComicsAction = {
    Call_API: CallApi,
    comicsEndpoint: string
}
export type Action = | CharactersAction | ComicsAction



type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;
export type Dispatch = (Action | ThunkAction | PromiseAction) => any;





export type LoadCharactersFunction = (charactersEndpoint?: number | string, queryString?: number | string) => (dispatch?: Dispatch, getState?: GetState) => void
export type LoadComicsFunction = (comicsEndpoint?: number | string, queryString?: number | string) => Dispatch => FetchCharactersFunction


export type FetchCharactersFunction = (charactersEndpoint:string,queryString:string) => CharactersAction

type CallApi = {
    types: Array<string>,
    endPoint: string,
    schema: Object,
    params: string
}

type CharactersAction = {
    Call_API: CallApi,
    charactersEndpoint: string

}




export type DispatchReturn ={
    type:string,
  response: ResData

}

export type ResData = {
pagination: PaginationData,
normRes: Entities
}



export type State = {
    entities:Object,
    pagination:Object
}


export type Entities ={
    comics?:Comics,
    marvelCharacters?:Characters
}