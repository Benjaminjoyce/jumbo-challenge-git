/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';
import {Comics, Comic}  from '../flowTypes'

type Props ={
  results:Comics,
  val:Comic
}

type ComicsListFunction = (results:Comics) => React.Element<typeof div>
const ComicsList:ComicsListFunction = ({ results }:Props) => {

  return results.map(function (val:Comic) {

    return (
      <div className="card small" key={val.id}>
        <div className="waves-effect waves-block waves-light">
          <img
            className="activator"
            src={`${val.thumbnail.path}/portrait_fantastic.${
              val.thumbnail.extension
              }`}
            alt={val.title}
          />
          <hr />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {val.title}
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

export default ComicsList;
