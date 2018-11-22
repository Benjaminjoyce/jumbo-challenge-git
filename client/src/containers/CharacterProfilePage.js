import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadComics, loadCharacters } from '../actions';
import CharacterProfile from '../components/CharacterProfile';

class CharacterProfilePage extends Component {
  componentDidMount() {
    this.props.loadCharacters(0, this.props.match.params.id);
  }

  render() {
    if (!this.props.character) {
      console.log(this.props);
      return <div>Loading...</div>;
    }
    const { character } = this.props;
    console.log(this.props);
    return <CharacterProfile character={character} />;

    // Comic info
  }
}

function mapStateToProps(state, props) {
  const FID = !props.match.params.id ? 'FID' : props.match.params.id;

  const thisCharacter =
    state.entities.marvelCharacters && state.entities.marvelCharacters[FID]
      ? state.entities.marvelCharacters[FID]
      : null;
  return {
    character: thisCharacter
  };
}

export default connect(
  mapStateToProps,
  { loadComics, loadCharacters }
)(CharacterProfilePage);
