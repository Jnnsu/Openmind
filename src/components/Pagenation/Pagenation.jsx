import React, { useEffect, useState } from 'react';

function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const generatePageNumbers = () => {
      const totalPageCount = Math.ceil(totalPosts / postsPerPage);

      if (totalPageCount <= 1) {
        setPageNumbers([]);
        return;
      }

      const visiblePages = 5;
      const middlePage = Math.ceil(visiblePages / 2);

      let startPage = currentPage - middlePage + 1;
      let endPage = currentPage + middlePage - 1;

      if (startPage < 1) {
        startPage = 1;
        endPage = visiblePages;
      }

      if (endPage > totalPageCount) {
        endPage = totalPageCount;
        startPage = Math.max(1, endPage - visiblePages + 1);
      }

      const numbers = [];
      for (let i = startPage; i <= endPage; i++) {
        numbers.push(i);
      }
      setPageNumbers(numbers);
    };

    generatePageNumbers();
  }, [totalPosts, postsPerPage, currentPage]);

  const handlePageClick = pageNumber => {
    paginate(pageNumber);
  };

  return (
    <div>
      {currentPage > 1 && (
        <span onClick={() => handlePageClick(currentPage - 1)}>{'<'}</span>
      )}
      {pageNumbers.map(number => (
        <span
          key={number}
          onClick={() => handlePageClick(number)}
          style={{
            margin: '10px',
            color:
              currentPage === number
                ? 'var(--Brown-40)'
                : 'var(--Grayscale-40)',
          }}
        >
          {number}
        </span>
      ))}
      {currentPage < Math.ceil(totalPosts / postsPerPage) && (
        <span onClick={() => handlePageClick(currentPage + 1)}>{'>'}</span>
      )}
    </div>
  );
}

export default Pagination;
