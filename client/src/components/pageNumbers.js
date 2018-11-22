import React from 'react';
import { Link } from 'react-router-dom';

export const pageNumbers = (total, selectedId) => {
  const numbers = [];
  const selectedNum = parseInt(selectedId);
  for (let i = 1; i <= total; i++) {
    numbers.push(i);
  }

  const findDisplayNumbers = () => {
    if (selectedNum <= 6) {
      return numbers.slice(0, 12);
    }
    if (selectedNum === numbers[numbers.length - 1]) {
      return numbers.slice(selectedNum - 12);
    }
    return numbers.slice(selectedNum - 5, selectedNum + 6);
  };

  return findDisplayNumbers(selectedNum).map(function(val) {
    console.log('val:', val, 'selectedId', selectedId);
    const numClassName =
      val === selectedNum ? 'waves-effect active' : 'waves-effect';
    return (
      <li className={numClassName} key={val}>
        <Link action="replace" to={`${val}`} className="text-grey-lighten-5 ">
          {val}
        </Link>
      </li>
    );
  });
};
