/* @flow */
import React, { Component } from "react";
import { loadCharacters } from "../actions";
import { connect } from "react-redux";
import { CardInfoList } from "../components/CardInfoList";
import { Link, withRouter } from "react-router-dom";
import {
  relevantCharactersSelector,
  pageTotalSelector
} from "../reselect/character_reselector";

import {
  pageComicsTotalSelector,
  relevantComicSelector
} from "../reselect/comic_reselector";

import PaginationBar from "../components/PaginationBar";

import type { Match, Total, State } from "../flowTypes";
import type { CharactersResults } from "../flowTypes/characterTypes";
import type { ComicsResults } from "../flowTypes/comicTypes";
import { InfoType } from "../components/InfoType";
import { Info } from "../components/Info";

type RouterParams = {
  id: string,
  type: string,
  uid: string,
  path: string
};

type Props = {
  results: CharactersResults,
  total: Total,
  loadCharacters: LoadCharactersFunction,
  match: Match
};

type LoadCharactersFunction = RouterParams => void;

class BrowsePage extends Component<Props> {
  componentDidMount() {
    this.props.loadCharacters(this.props.match.params);
  }
  componentDidUpdate(prevProps: Props) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.loadCharacters(this.props.match.params);
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
        <div id="index-container">
          {InfoType(results, this.props.match.params.type)}
        </div>

        <PaginationBar total={total} currentPage={currentPage} />
      </div>
    );
  }
}

type MapStateToPropsFunction = (
  state: State,
  props: Props
) => { results: CharactersResults, total: Total };

const mapStateToProps: MapStateToPropsFunction = (state, props) => {
  if (props.match.params.type === "comics")
    return {
      results: relevantComicSelector(state),
      total: pageComicsTotalSelector(state)
    };
  if (props.match.params.type === "characters")
    return {
      results: relevantCharactersSelector(state),
      total: pageTotalSelector(state)
    };
  // if (props.match.params.type === "creators") return { results: relevantCreatorSelector(state), total: pageTotalSelector(state) }
};

export default withRouter(
  connect(
    mapStateToProps,
    { loadCharacters }
  )(BrowsePage)
);
