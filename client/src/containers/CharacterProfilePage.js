/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { loadComics, loadCharacters } from '../actions';
import CharacterProfile from '../components/CharacterProfile';
import { type } from 'os';


import type { Match, LoadCharactersFunction,State } from '../flowTypes'
import type {Character} from '../flowTypes/characterTypes'


type Props = {
  loadCharacters: LoadCharactersFunction,
  match: Match,
  character: Character,
  state:State
};


class CharacterProfilePage extends Component<Props> {
  componentDidMount() {
    this.props.loadCharacters(0, this.props.match.params.id);
  }

  //LoadCharacters is an action creator
  //loadCharacters(a : propTypes.number, b: propTypes.string )

  render() {
    if (!this.props.character) {
      return <div>Loading...</div>;
    }
    const { character } = this.props;

    return <CharacterProfile character={character} />;
  }
}

function mapStateToProps(state:State, props:Props) {
  const FID = !props.match.params.id ? 'FID' : props.match.params.id;

  const thisCharacter =
    state.entities.marvelCharacters && state.entities.marvelCharacters[FID]
      ? state.entities.marvelCharacters[FID]
      : null;
  return {
    character: thisCharacter
  };
}

export default withRouter(connect(
  mapStateToProps,
  { loadComics, loadCharacters }
)(CharacterProfilePage));
