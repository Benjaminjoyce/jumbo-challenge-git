import React from 'react';
import { PageNumbers } from './pageNumbers';

type Props = {
  total:number,
  currentPage:number
}

const PaginationBar = ({ total, currentPage }:Props) => {
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
