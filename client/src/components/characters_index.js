import React, { Component } from 'react';
import { loadCharacters } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { relevantCharactersSelector } from '../middleware/reselect';

class CharactersIndex extends Component {
  CID = this.props.match.params.id;
  componentDidMount() {
    console.log('props component did mount', this.props);
    this.props.loadCharacters('characters', this.props.match.params.id);
  }

  renderCharacterList = props => {
    const { results } = props;
    return results.map(function(val) {
      return (
        <div className="card" key={val.id}>
          <Link to={`characters/${val.id}`}>
            <h3>{val.name}</h3>
            <span>{val.description}</span>
          </Link>
        </div>
      );
    });
  };

  handleclick = () => {
    this.props.forceUpdate();
  };

  render() {
    console.log('props render', this.props);
    if (!this.props.results) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {console.log('props', this.props.results)}
        {console.log(this.props.match.params.id)}
        <h3 id="index-header">Your Marvel Characters</h3>
        <Link
          to={(Number(this.props.match.params.id) + 1).toString()}
          onClick={() => this.handleclick()}
        >
          <button>load more</button>
        </Link>
        {this.renderCharacterList(this.props)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: relevantCharactersSelector(state)
  };
};

export default connect(
  mapStateToProps,
  { loadCharacters }
)(CharactersIndex);
