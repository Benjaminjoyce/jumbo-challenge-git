import React, { Component } from 'react';
import { pageNumbers } from './pageNumbers';

import { pageTotalSelector } from '../middleware/reselect';
import { Link } from 'react-router-dom';

const PaginationBar = ({ total, path, nextUrl }) => {
  if (!total) {
    return <div>!props</div>;
  }

  const totalPages = Math.ceil(total.data.total / 20);
  return (
    <div>
      <ul className="pagination grey darken-4">
        <li className="">
          <Link to={nextUrl(null, -path + 1)}>
            <i className="material-icons">first_page</i>
          </Link>
        </li>
        <li className="">
          <Link to={nextUrl(null, -1)}>
            <i className="material-icons">chevron_left</i>
          </Link>
        </li>

        {pageNumbers(totalPages, path)}
        <li className="">
          <Link to={nextUrl(null, 1)}>
            <i className="material-icons">chevron_right</i>
          </Link>
        </li>
        <li className="">
          <Link to={nextUrl(null, totalPages - path)}>
            <i className="material-icons">last_page</i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PaginationBar;
