import React from 'react';
import { Link } from 'react-router-dom';

export const pageNumbers =( total,selectedId )=> {
  const td = Math.ceil(total / 20);
  const numbers = [];
const selectedNum =  parseInt(selectedId)
  for (let i = 0; i <= td; i++) {
    numbers.push(i);
  }
  const displayedNums = numbers.slice((selectedNum-8),(selectedNum+8))
  
  return displayedNums.map(function(val) {
    console.log("val:",val, "selectedId", selectedId)
    const numClassName = val === selectedNum ? 'waves-effect active':"waves-effect"
    return (
      <li className={numClassName} key={val} >
        <Link action="replace" to={`${val}`} className="text-grey-lighten-5 ">
          {val}
        </Link>
      </li>
    );
  });
};

