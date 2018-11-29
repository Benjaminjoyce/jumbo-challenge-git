/* @flow */

import React from 'react';
import ComicInfo from './Comicinfo';
import { Link } from 'react-router-dom';
import  type { Character } from '../flowTypes/characterTypes'

type Props = {
  character:Character
}


const CharacterProfle = ({ character }:Props) => {
  return (
    <div className="container show-character">
      <div className="row">
        <div className="s12">
          <div className="card" key={character.id}>
            <img
              className="activator"
              src={`${character.thumbnail.path}/portrait_uncanny.${
                character.thumbnail.extension
                }`}
              alt={character.name}
            />
          </div>
          <div className="col 12">
            <h1>{character.name}</h1>
            <div className="desc">
              <h4>A Little About {character.name}</h4>
              <p>{character.description}</p>
            </div>

            <div>
              <div className="row">
                {character.comics.items.map(function (val) {
                  return (
                    <div className="col s4">
                      <h6>{val.name}</h6>
                      <ComicInfo val={val} key={val.name} />
                    </div>
                  );
                })}
              </div>
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
