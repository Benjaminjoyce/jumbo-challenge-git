/* @flow */
import type {NestedData,Thumbnail,Url} from './index'

export type ComicsResults = {
    results: Array<Comic>
}

export type Comics = {
    [string]: Comic
}

export type Comic = {
    characters: NestedData,
    description: string,
    creators: ComicCreators,
    dates: Array<ComicDates>,
    digitalId: number,
    events: NestedData,
    format: string,
    id: number,
    prices: Array<ComicPrices>,
    series: ComicSeries,
    stories: NestedData,
    thumbnail: Thumbnail,
    title: string,
    upc: string,
    urls: Array<Url>,
    pageCount:number
}

//Comic Specific Types
type ComicSeries = {
    name: string,
    resourceURI: string,
    items: Array<SeriesItems>

}

type SeriesItems = {
    resourceURI:string,
    name:string
}

type ComicPrices = {
    type: string,
    price: number
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

//END COMIC SPECIFIC TYPES