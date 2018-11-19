import React, { Component } from 'react';
import { loadCharacters } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CharactersIndex extends Component {
  componentDidMount() {
    this.props.loadCharacters('characters');
  }

  renderCharacterList = props => {
    const { characters } = props;
    const { ids } = props.characterList;
    return ids.map(function(val) {
      return (
        <div className="card" key={val}>
          <Link to={`characters/${val}`}>
            <h3>{characters[val].name}</h3>
            <span>{characters[val].description}</span>
          </Link>
        </div>
      );
    });
  };
  handleLoadMoreClick = () => {
    console.log();
    this.props.loadCharacters();
  };

  render() {
    if (!this.props.characterList) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3 id="index-header">Your Marvel Characters</h3>
        <button onClick={this.handleLoadMoreClick}>load more</button>
        {this.renderCharacterList(this.props)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.entities.characters,
    characterList: state.pagination.fetchCharacterList.characters
  };
}

export default connect(
  mapStateToProps,
  { loadCharacters }
)(CharactersIndex);
