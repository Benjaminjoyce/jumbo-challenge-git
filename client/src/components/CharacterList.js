/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import { CharactersResults, Character } from '../flowTypes'
type Props ={
  results:CharactersResults,
  val:Character
}

type CharacterListFunction = (results:CharactersResults) =>Array
export const CharacterList:CharacterListFunction = ({ results }:Props ) => {
  return results.map(function (val:Character) {
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
