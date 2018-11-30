/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import CardInfo from './CardInfo';
import  type{ Character } from '../flowTypes/characterTypes'

type Props = {
  character:Character
}

const Profile = ({ character }:Props) => {
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
  );
};

export default Profile;
