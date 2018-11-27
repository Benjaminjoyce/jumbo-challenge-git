/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import type{ CharactersResults, Character } from '../flowTypes'

export const CharacterList = ({ results }: CharactersResults) => {
  return results.map(function (val: Character) {
    return (
      <div className="card small" key={val.id}>
        <div className="waves-effect waves-block waves-light">
          <img
            className="activator"
            src={`${val.thumbnail.path}/portrait_fantastic.${
              val.thumbnail.extension
              }`}
            alt={val.name}
          />
          <hr />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {val.name}
          </span>
          <span>{val.description}</span>
          <p>
            <Link to={`profile/${val.id}`}>Find Out More</Link>
          </p>
        </div>
      </div>
    );
  });
};
