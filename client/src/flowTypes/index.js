

type RouterParams = {
    id: string
};

export type Match = {
    params: RouterParams
};

type CharacterComics = {
    items: Array<CharacterComicItems>,
    collectionURI: string,
    available: number

}

//ComicInfo
export type CharacterComicItems = {
    name: string,
    resourceURI: string
}

type Thumbnail = {
    extension: string,
    path: string,
}

//CharacterProfile.js
export type Character = {
    comics: CharacterComics,
    thumbnail: Thumbnail,
    id: number,
    name: string,
    description: string,

}

//CharacterList.js
export type CharactersResults = {
    results: Array<Character>
}


// export type LoadComics = (a: number, b: RouterParams) => FetchActions


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


type CallApi = {
    types: Array<string>,
    endPoint: string,
    schema: object,
    params: string
}

type CharactersAction = {
    Call_API: CallApi,
    charactersEndpoint: string

}

type ComicsAction = {
    Call_API: CallApi,
    comicsEndpoint: string
}
export type Action = | CharactersAction | ComicsAction



type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;
type Dispatch = (action: FetchAction | ThunkAction | PromiseAction) => any;






export type LoadCharactersFunction = (a: number | string, b: number | string) => (dispatch: Dispatch, getState: GetState) => void
export type LoadComicsFunction = (a: number | string, b: number | string) => (dispatch: Dispatch, getState: GetState) => void

export type Comics = {
    [string]: Comic
}



export type Comic = {
    characters: CharacterComics,
    description: string,
    creators: ComicCreators,
    dates: Array<ComicDates>,
    digitalId: number,
    events: ComicEvents,
    format: string,
    id: number,
    prices: Array<ComicPrices>,
    series: ComicSeries,
    stories: ComicStories,
    thumbnail: ComicsThumbnail,
    title: string,
    upc: string,
    urls: Array<ComicUrl>,
    pageCount:number

}

export type ComicUrl = {
    type: string,
    url: string
}

export type ComicsThumbnail = {
    extension: string,
    path: string
}

type ComicStories = {
    available: number,
    collectionURI: string,
    items: Array<ComicStoriesItem>
}

type ComicStoriesItem = {
    resourceURI: string,
    name: string,
    type: string
}
type ComicSeries = {
    name: string,
    resourceURI: string
}
type ComicPrices = {
    type: string,
    prices: number
}

type ComicEvents = {
    available: number,
    collectionURI: string,
    items: Array
}

type ComicDates = {
    type: string,
    date: number
}

type ComicCreators = {
    available: number,
    returned: number,
    collectionURI: string,
    items: Array<ComicCreatorItems>

}

type ComicCreatorItems = {
    resourceURI: string,
    name: string,
    role: string
}



