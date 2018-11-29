/* @flow */

import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import type{ CharactersResults, Character } from '../flowTypes/characterTypes'
import CharacterInfo from './CharacterInfo'
type Props ={
  characters: CharactersResults,
}
type CharacterListFunction = (characters:CharactersResults) => Array<any>

export const CharacterList:CharacterListFunction = (characters) =>
    characters.map(function(character){
       return (<div key={character.id}><CharacterInfo character={character}/>
         </div>)
       })


