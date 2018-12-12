/* @flow */

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loadCharacters } from "../actions";
import Profile from "../components/Profile";
import { type } from "os";
import { CardInfoList } from "../components/CardInfoList";

import type { Match, State, RouterParams } from "../flowTypes";
import type { Character } from "../flowTypes/characterTypes";

type Props = {
  loadCharacters: LoadCharactersFunction,
  match: Match,
  character: Character,
  state: State,
  mapStateToProps: MapStateToPropsFunction
};

type LoadCharactersFunction = (params: RouterParams) => void;
class ProfilePage extends Component<Props> {
  componentDidMount() {
    this.props.loadCharacters(this.props.match.params);
  }
  render() {
    if (!this.props.character) {
      return <div>Loading...</div>;
    }
    const { character } = this.props;
    return (
      <div>
        <Profile character={character} />
      </div>
    );
  }
}

type MapStateToPropsFunction = (
  state: State,
  props: Props
) => { character: Character };
const mapStateToProps: MapStateToPropsFunction = (state, props) => {
  const { uid, type } = props.match.params;
  let characterId = uid;
  let bg = state.entities[type];
  const character = bg[uid];
  return {
    character: character
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { loadCharacters }
  )(ProfilePage)
);
