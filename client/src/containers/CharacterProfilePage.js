/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { loadComics, loadCharacters } from '../actions';
import Profile from '../components/Profile';
import { type } from 'os';
import { CardInfoList } from '../components/CardInfoList';


import type { Match,State } from '../flowTypes'
import type {Character} from '../flowTypes/characterTypes'


type Props = {
  loadCharacters: LoadCharactersFunction,
  match: Match,
  character: Character,
  state:State,
  mapStateToProps:MapStateToPropsFunction
  
};

type LoadCharactersFunction = (pageNumber:string,characterId:string) => void
class CharacterProfilePage extends Component<Props> {
  componentDidMount() {
    this.props.loadCharacters(this.props.match.url);
    console.log((this.props.match.url).split('/'))
    console.log(this.props.match.url)
  }
  render() {
    if (!this.props.character) {
      return <div>Loading...</div>;
    }
    const { character } = this.props;
    return (
    
    <div>
      <Profile character={character} />
     </div>
     );
  }
}

type MapStateToPropsFunction = (state:State,props:Props) => {character:Character}
const mapStateToProps:MapStateToPropsFunction = (state,props) => {
  let characterId = props.match.params.id || undefined;
  let character = state.entities.marvelCharacters[characterId] || undefined;
  return {
    character
  };
}

export default withRouter(connect(
  mapStateToProps,
  { loadComics, loadCharacters }
)(CharacterProfilePage));
