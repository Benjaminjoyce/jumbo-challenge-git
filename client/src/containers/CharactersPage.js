/* @flow */
import React, { Component } from 'react';
import { loadCharacters } from '../actions';
import { connect } from 'react-redux';
import { CharacterList } from '../components/CharacterList';
import { Link,withRouter } from 'react-router-dom';
import {
  relevantCharactersSelector,
  pageTotalSelector
} from '../reselect/character_reselector';

import PaginationBar from '../components/PaginationBar';

import type { Match, Total, LoadCharactersFunction,State } from '../flowTypes'
import type {CharactersResults} from '../flowTypes/characterTypes'

type Props = {
  match: Match,
  loadCharacters: LoadCharactersFunction,
  results: CharactersResults,
  total: Total
}


class CharactersPage extends Component<Props>{
  componentDidMount() {
    this.props.loadCharacters(this.props.match.params.id);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.loadCharacters(this.props.match.params.id);
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

const mapStateToProps = (state:State, props: Props) => {
  return {
    results: relevantCharactersSelector(state),
    total: pageTotalSelector(state),
    path: props.match.params.id
  };
};

export default withRouter(connect(
  mapStateToProps,
  { loadCharacters }
)(CharactersPage));
