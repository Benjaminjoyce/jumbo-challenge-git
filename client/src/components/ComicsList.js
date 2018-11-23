import React from 'react';
import { Link } from 'react-router-dom';

const ComicsList = ({ results }) => {
  return results.map(function(val) {
    return (
      <div className="card small" key={val.id}>
        <div className="waves-effect waves-block waves-light">
          <h3>{val}</h3>
        </div>
      </div>
    );
  });
};

export default ComicsList;
