import React from 'react';
import { Link } from 'react-router-dom';

export const renderCharacterList = results => {
  return results.map(function(val) {
    return (
      <div className="card" key={val.id}>
        <Link to={`profile/${val.id}`}>
          <h3>{val.name}</h3>
          <span>{val.description}</span>
        </Link>
      </div>
    );
  });
};
