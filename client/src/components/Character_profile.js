import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { loadCharacters } from '../actions';

class CharacterProfile extends Component {
  componentDidMount() {
    const CID = this.props.match.params.id;
    let target_character =
      this.props.characters.find(obj => (obj.id = CID)) || {};
    this.renderCharacter(target_character);
  }
  render() {
    return (
      <div>
        <h1>CharacterProfile</h1>
        <div>{this.renderCharacter}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(CharacterProfile);

// if (!target_character == {}) {
//     let urlEnd = `characters/${CID}`;
//     console.log(urlEnd);
// }
