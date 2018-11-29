/* @flow */
import type{NestedData,Thumbnail,Url} from './index'


//CharacterList.js

// [{123123:{ id: name }}, { id, }]
export type CharactersResults = Array<Character>;

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
    comics: CharacterComics,
    series: NestedData,
    stories: NestedData,
    events: NestedData,
    urls: Array<Url>,

}
type CharacterComics = {
    items: Array<CharacterComicItems>,
    collectionURI: string,
    available: number
}
export type CharacterComicItems = {
    name: string,
    resourceURI: string
}