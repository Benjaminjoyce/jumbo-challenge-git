import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacter } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class CharacterShow extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchCharacter(id);
  }
  renderUrlList(x) {
    return _.map(x, url => {
      console.log(url);
      return (
        <a
          href={url.url}
          className="waves-effect waves-light btn-small"
          key={url}
        >
          {url.type}
        </a>
      );
    });
  }
  renderSeries(x) {
    return _.map(x, y => {
      console.log(y);
      return <li key={y.resourceURI}>{y.name}</li>;
    });
  }

  render() {
    console.log('console.log this.props:', this.props.characters);
    const char = Object.assign({}, [this.props.characters[0]]);
    const character = char[0];
    console.log(character);

    if (!character) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container show-character">
        <div className="row">
          <div className="col l6 m12 s12">
            <img
              className="profilePic"
              src={`${character.thumbnail.path}/portrait_uncanny.${
                character.thumbnail.extension
              }`}
              alt={character.name}
            />
          </div>
          <div className="col l6 m12 s12">
            <h1>{character.name}</h1>
            <div className="desc">
              <h4>A Little About {character.name}</h4>
              <p>{character.description}</p>
            </div>
            <div>
              <h5>{character.name} has featured in these series:</h5>
              <ul>{this.renderSeries(character.series.items)}</ul>
            </div>

            <div>
              <h5>
                Are you {character.name}
                's biggest fan?
              </h5>
              <h6>Follow him here.</h6>
              <ul>{this.renderUrlList(character.urls)}</ul>
            </div>
          </div>
          <Link
            to="/characters"
            className="waves-effect grey darken-4 btn-small"
          >
            Character Idex
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ characters }) {
  return { characters };
}

export default connect(
  mapStateToProps,
  { fetchCharacter }
)(CharacterShow);
