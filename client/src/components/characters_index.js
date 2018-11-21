import React, { Component } from 'react';
import { loadCharacters } from '../actions';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { relevantCharactersSelector } from '../middleware/reselect';

class CharactersIndex extends Component {
  CID = this.props.match.params.id;
  componentDidMount() {
    this.props.loadCharacters('characters', this.props.match.params.id);
  }

  renderCharacterList = props => {
    const { results } = props;
    return results.map(function(val) {
      return (
        <div className="card" key={val.id}>
          <Link to={`profile/${val.id}`}>
            <h3>{val.name}</h3>
            <span>{val.description}</span>
          </Link>
        </div>
      );
    });
  };

  handleclick = () => {};

  render() {
    if (!this.props.results) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {}
        {}
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
