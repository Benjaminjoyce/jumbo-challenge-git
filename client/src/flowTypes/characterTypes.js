/* @flow */
import type{NestedData,Thumbnail,Url} from './index'


//CharacterList.js
export type CharactersResults = {
    results: Array<Characters>
}

export type Characters = {
    [number]: Character
}

export type Character = {
    name: string,
    id: number,
    description: string,
    modified:string,
    thumbnail:Thumbnail,
    resourceURI:string,
    comics: NestedData,
    series: NestedData,
    stories: NestedData,
    events: NestedData,
    urls: Array<Url>,

}
