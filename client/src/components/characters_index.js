import React, { Component } from 'react';
import { loadCharacters } from '../actions';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

class CharactersIndex extends Component {
  // renderCharacterList(props) {
  //   const char = this.props.characters;
  //   const characterList = char.map(char => (
  //     <Link to={`/characters/${char.id}`}>
  //       <li className="list-group-item" key={char.id}>
  //         <div className="card" style={{ width: '18rem' }}>
  //           <img
  //             className="card-img-top"
  //             src={`${char.thumbnail.path}/portrait_uncanny.${
  //               char.thumbnail.extension
  //             }`}
  //             alt={char.name}
  //           />
  //           <h5 className="card-title">{char.name}</h5>
  //           <p className="card-text">{char.description}</p>
  //         </div>
  //       </li>
  //     </Link>
  //   ));
  //   return <ul>{characterList}</ul>;
  // }

  componentDidMount() {
    this.props.loadCharacters();
  }

  handleLoadMoreClick = () => {
    console.log('CLICKED');
    this.props.loadCharacters();
  };

  render() {
    return (
      <div>
        <h3 id="index-header">Your Marvel Characters</h3>
        <button onClick={this.handleLoadMoreClick}>load more</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.entities.characters
  };
}

export default connect(
  mapStateToProps,
  { loadCharacters }
)(CharactersIndex);
