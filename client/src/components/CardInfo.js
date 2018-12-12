/* @flow */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import type { Character } from "../flowTypes/characterTypes";
import type { Comic } from "../flowTypes/comicTypes";
import { MainImage } from "./MainImage";
import { Info } from "./Info";

type Props = {
  data: Character | Comic
};

class CardInfo extends Component<Props> {
  render() {
    const { id, thumbnail, description } = this.props.data;
    return (
      <div className="card small" key={id}>
        {MainImage(thumbnail)}
        {Info(this.props.data)}
        <Link to={`profile/${id}`}>Find Out More</Link>
      </div>
    );
  }
}
export default CardInfo;
