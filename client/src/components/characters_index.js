import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCharacters } from '../actions';

class CharactersIndex extends Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  renderCharacterList() {
    return _.map(this.props.characters, character => {
      return (
        <div className="card small" key={character.id}>
          <div className="waves-effect waves-block waves-light">
            <img
              className="activator"
              src={`${character.thumbnail.path}/portrait_fantastic.${
                character.thumbnail.extension
              }`}
              alt={character.name}
            />
            <hr />
          </div>

          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {character.name}
            </span>
            <span>{character.description}</span>
            <p>
              <Link to={`/characters/${character.id}`}>Find Out More</Link>
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h3 id="index-header">Your Marvel Characters</h3>
        <div id="index-container">{this.renderCharacterList()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { characters: state.characters };
}

export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharactersIndex);
