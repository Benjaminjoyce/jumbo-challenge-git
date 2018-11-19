import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { loadCharactersById } from '../actions';

class CharacterProfile extends Component {
  componentDidMount() {
    const CID = this.props.match.params.id;

    console.log('characters', this.props.characters);
    console.log('props', this.props);
    this.props.loadCharactersById(`characters/${CID}`);
  }
  renderCharacterList = props => {
    const { characters, characterList } = this.props;
    const CID = this.props.match.params.id;
    console.log('props IN RENDER', props);
    console.log('ids in render', characterList);
    console.log('characters in render', characters);

    return (
      <div className="card" key={characters[CID].id}>
        <img
          className="activator"
          src={`${characters[CID].thumbnail.path}/portrait_fantastic.${
            characters[CID].thumbnail.extension
          }`}
          alt={characters[CID].name}
        />
        <h3>{characters[CID].name}</h3>
        <span>{characters[CID].description}</span>
        {characters[CID].comics.items.map(function(val) {
          return (
            <div className="card" key={val.name}>
              <h5>{val.name}</h5>
              <span>{val.resourceURI}</span>
              <h3>{console.log(val)}</h3>
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    if (!this.props.characters) {
      return <div>Loading...</div>;
    }
    return <div>{this.renderCharacterList(this.props.characters)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    characters: state.entities.characters,
    characterList: state.pagination.fetchCharacterList
  };
}

export default connect(
  mapStateToProps,
  { loadCharactersById }
)(CharacterProfile);

// if (!target_character == {}) {
//     let urlEnd = `characters/${CID}`;
//     console.log(urlEnd);
// }
