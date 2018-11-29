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