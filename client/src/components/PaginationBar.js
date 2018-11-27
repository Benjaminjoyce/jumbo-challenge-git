import React, { Component } from 'react';
import { PageNumbers } from './pageNumbers';

import { pageTotalSelector } from '../reselect/character_reselector';
import { Link } from 'react-router-dom';

const PaginationBar = ({ total, currentPage }) => {
  if (!total) {
    return <div>!props</div>;
  }

  const totalPages = Math.ceil(total.data.total / 20);

  return (
    <div>
      <PageNumbers totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
};

export default PaginationBar;
