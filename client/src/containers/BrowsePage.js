/* @flow */
import React, { Component } from 'react';
import { loadCharacters } from '../actions';
import { connect } from 'react-redux';
import  {CardInfoList} from '../components/CardInfoList';
import { Link,withRouter } from 'react-router-dom';
import {
  relevantCharactersSelector,
  pageTotalSelector
} from '../reselect/character_reselector';

import {pageComicsTotalSelector, relevantComicSelector} from '../reselect/comic_reselector'

import PaginationBar from '../components/PaginationBar';
 
import type { Match, Total,State } from '../flowTypes'
import type {CharactersResults} from '../flowTypes/characterTypes'

type Props = {
  match: Match,
  results: CharactersResults,
  total: Total,
  loadCharacters:LoadCharactersFunction
}

type LoadCharactersFunction = string => void

class BrowsePage extends Component<Props>{
  componentDidMount() {
    this.props.loadCharacters(this.props.match.params);
    console.log("charactersPage")
  

  }
  componentDidUpdate(prevProps: Props) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.loadCharacters(this.props.match.params);
    }
  }

  render() {
    if (!this.props.results) {
      console.log(this.props)
      return <div>Loading...</div>;

    }
    const { total, results } = this.props;
    const currentPage = Number(this.props.match.params.id);
    console.log(this.props)
    return (
      <div>
        <Link to={(currentPage + 1).toString()}>
          <button>next</button>
        </Link>
        <div id="index-container">
           {CardInfoList(results)}
        </div>
        <PaginationBar total={total} currentPage={currentPage} />
      </div>
    );
  }
}


type MapStateToPropsFunction = (state:State,props:Props) => {results:CharactersResults,total:Total,path:string}

const mapStateToProps:MapStateToPropsFunction = (state, props) => {
console.log(props.match.params.type)
if(props.match.params.type === 'comics'){
return{  
  results: relevantComicSelector(state),
  total: pageComicsTotalSelector(state)
  };
}

  return {
    results: relevantCharactersSelector(state),
    total: pageTotalSelector(state),
  };
};

export default withRouter(connect(
  mapStateToProps,
  { loadCharacters }
)(BrowsePage));
