import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadComics, loadCharacters } from '../actions';
import ComicInfo from './comic_info';

class CharacterProfile extends Component {
  CID = this.props.match.params.id;
  componentDidMount() {
    const CID = this.props.match.params.id;
    this.props.loadCharacters(CID, 0);
  }

  renderCharacterList = () => {
    const { character } = this.props;
    return (
      <div className="card" key={character.id}>
        <img
          className="activator"
          src={`${character.thumbnail.path}/portrait_fantastic.${
            character.thumbnail.extension
          }`}
          alt={character.name}
        />
        <h3>{character.name}</h3>
        <span>{character.description}</span>
        {character.comics.items.map(function(val) {
          return <ComicInfo val={val} key={val.name} />;
        })}
      </div>
    );
  };

  render() {
    if (!this.props.character) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {this.renderCharacterList(
          this.props.characters,
          this.handleLoadMoreClick
        )}
      </div>
    );
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
)(CharacterProfile);
