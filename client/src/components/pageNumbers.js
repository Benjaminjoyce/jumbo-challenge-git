import React from 'react';
import { Link } from 'react-router-dom';

export const pageNumbers = t => {
  const td = Math.ceil(t / 20);
  const numbers = [];
  let i = 0;
  for (let i = 0; i <= td; i++) {
    numbers.push(i);
  }
  return numbers.map(function(val) {
    return (
      <li className="waves-effect" key={val}>
        <Link action="replace" to={`${val}`} className="text-grey-lighten-5 ">
          {val}
        </Link>
      </li>
    );
  });
};
