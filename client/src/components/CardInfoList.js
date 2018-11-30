/* @flow */

import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import type{ CharactersResults, Character } from '../flowTypes/characterTypes'
import type{ComicsResults} from '../flowTypes/comicTypes'
import CardInfo from './CardInfo'
type Props ={
  ObjectDataList: CharactersResults | ComicsResults
}
type CardInfoListFunction = (ObjectDataList:CharactersResults) => Array<any>

export const CardInfoList:CardInfoListFunction = (ObjectDataList) =>
    ObjectDataList.map(function(ObjectData){
       return (<div key={ObjectData.id}><CardInfo data={ObjectData}/>
         </div>)
       })


