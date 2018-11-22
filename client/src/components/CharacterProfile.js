import React from 'react';
import ComicInfo from './Comicinfo';
import { Link } from 'react-router-dom';

const CharacterProfle = ({ character }) => {
  console.log(character);
  return (
    <div className="container show-character">
      <div className="row">
        <div className="col l6 m12 s12">
          <div className="card" key={character.id}>
            <img
              className="activator"
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
              <h5>Are you {character.name}'s biggest fan?</h5>
              <h6>Follow him.</h6>
              <ul>
                {character.comics.items.map(function(val) {
                  return <ComicInfo val={val} key={val.name} />;
                })}
              </ul>
            </div>
          </div>
          <Link
            to="/characters/1"
            className="waves-effect grey darken-4 btn-small"
          >
            Character Idex
          </Link>
        </div>
        <h3>{character.name}</h3>
        <span>{character.description}</span>
      </div>
    </div>
  );
};

export default CharacterProfle;