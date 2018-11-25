import React, { Component } from 'react';
import { loadCharacters } from '../actions';
import { connect } from 'react-redux';
import { CharacterList } from '../components/CharacterList';
import { Link } from 'react-router-dom';
import {
  relevantCharactersSelector,
  pageTotalSelector
} from '../reselect/character_reselector';

import PaginationBar from '../components/PaginationBar';

class CharactersPage extends Component {
  componentDidMount() {
    this.props.loadCharacters(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.path !== this.props.path) {
      this.props.loadCharacters(this.props.path);
    }
  }

  render() {
    if (!this.props.results) {
      return <div>Loading...</div>;
    }
    const { total, results } = this.props;
    const currentPage = Number(this.props.match.params.id);
    return (
      <div>
        <Link to={(currentPage + 1).toString()}>
          <button>next</button>
        </Link>
        <div id="index-container">
          <CharacterList results={results} />
        </div>
        <PaginationBar total={total} currentPage={currentPage} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    results: relevantCharactersSelector(state),
    total: pageTotalSelector(state),
    path: props.match.params.id
  };
};

export default connect(
  mapStateToProps,
  { loadCharacters }
)(CharactersPage);
