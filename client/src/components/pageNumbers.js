/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';


type Props = {
  totalPages: number,
  currentPage: number
}

export const PageNumbers = ({ totalPages, currentPage }: Props) => {
  const leftArrows = [
    { to: '1', icon: 'first_page' },
    { to: (currentPage - 1).toString(), icon: 'chevron_left' }
  ];
  const rightArrows = [
    { to: (currentPage + 1).toString(), icon: 'chevron_right' },
    { to: totalPages.toString(), icon: 'last_page' }
  ];
  const numbers = [];
  const selectedNum = parseInt(currentPage);
  for (let i = 1; i <= totalPages; i++) {
    numbers.push(i);
  }

  const findDisplayNumbers = (selectedNum: number) => {

    if (selectedNum <= 6) {
      return numbers.slice(0, 12);
    }
    if (selectedNum === numbers[numbers.length - 1]) {
      return numbers.slice(selectedNum - 12);
    }
    return numbers.slice(selectedNum - 5, selectedNum + 6);
  };

  const renderNumbers = () =>
    findDisplayNumbers(selectedNum).map(function (val: number) {

      const numClassName =
        val === selectedNum ? 'waves-effect active grey ' : 'waves-effect';
      return (
        <li className={numClassName} key={val}>
          <Link action="replace" to={`${val}`} className="text-grey-lighten-5 ">
            {val}
          </Link>
        </li>
      );
    });

  const arrows = x =>
    x.map(function (val) {
      return (
        <li key={val.icon}>
          <Link to={val.to}>
            <i className="material-icons">{val.icon}</i>
          </Link>
        </li>
      );
    });
  return (
    <ul className="pagination blue-grey lighten-5">
      {arrows(leftArrows)}
      {renderNumbers()}
      {arrows(rightArrows)}
    </ul>
  );
};
