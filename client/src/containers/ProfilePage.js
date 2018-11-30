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
class ProfilePage extends Component<Props> {
  componentDidMount() {
    this.props.loadCharacters(this.props.match.params);

  }
  render() {
    if (!this.props.character) {
      console.log(this.props)
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
  const {Uid,type} = props.match.params
  let characterId = Uid
  let bg = state.entities[type]
  const character = bg[Uid]
  console.log(type)
  console.log(character)
  return {
    character:character
  };
}

export default withRouter(connect(
  mapStateToProps,
  { loadComics, loadCharacters }
)(ProfilePage));
