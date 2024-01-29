// import React, { useEffect, useState } from 'react';

// function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
//   const [pageNumbers, setPageNumbers] = useState([]);
//   const visiblePages = 5;

// useEffect(() => {
//   전체 페이지 수 계산
//   const calculateTotalPages = async () => {
//     const response = await fetch(
//       `https://openmind-api.vercel.app/3-3/subjects/`,
//     );
//     const data = await response.json();
//     const totalItems = data.count;
//     const totalPages = Math.ceil(totalItems / postPerPage);
//     setTotalPages(totalPages);
//   };

//   calculateTotalPages();
// }, [postPerPage]);

//   useEffect(() => {
//     페이지 숫자 목록 생성
//     const calculatePageNumbers = () => {
//       const totalPageCount = Math.ceil(totalPosts / postsPerPage);

//       let startPage;
//       let endPage;

//       if (totalPageCount <= visiblePages) {
//         startPage = 1;
//         endPage = totalPageCount;
//       } else {
//         if (currentPage <= Math.ceil(visiblePages / 2)) {
//           startPage = 1;
//           endPage = visiblePages;
//         } else if (
//           currentPage + Math.floor(visiblePages / 2) >=
//           totalPageCount
//         ) {
//           startPage = totalPageCount - visiblePages + 1;
//           endPage = totalPageCount;
//         } else {
//           startPage = currentPage - Math.floor(visiblePages / 2);
//           endPage = startPage + visiblePages - 1;
//         }
//       }

//       const numbers = [];
//       for (let i = startPage; i <= endPage; i++) {
//         numbers.push(i);
//       }
//       setPageNumbers(numbers);
//     };

//     calculatePageNumbers();
//   }, [totalPosts, postsPerPage, currentPage, visiblePages]);

//   const handlePageClick = pageNumber => {
//     paginate(pageNumber);
//   };

//   const handleNextClick = () => {
//     const totalPageCount = Math.ceil(totalPosts / postsPerPage);

//     if (currentPage < totalPageCount) {
//       const startPage = Math.min(
//         currentPage + 1,
//         totalPageCount - visiblePages + 1,
//       );
//       const endPage = Math.min(startPage + visiblePages - 1, totalPageCount);

//       const numbers = [];
//       for (let i = startPage; i <= endPage; i++) {
//         numbers.push(i);
//       }
//       setPageNumbers(numbers);
//     }
//   };

//   const handlePrevClick = () => {
//     if (currentPage > 1) {
//       const endPage = currentPage - 1;
//       const startPage = Math.max(endPage - visiblePages + 1, 1);

//       const numbers = [];
//       for (let i = startPage; i <= endPage; i++) {
//         numbers.push(i);
//       }
//       setPageNumbers(numbers);
//     }
//   };

//   return (
//     <div>
//       <img
//         src="./images/Arrow-left.png"
//         alt="왼쪽 화살표 아이콘"
//         onClick={handlePrevClick}
//         style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
//       />
//       {pageNumbers.map(number => (
//         <span
//           key={number}
//           onClick={() => handlePageClick(number)}
//           style={{
//             margin: '10px',
//             color:
//               currentPage === number
//                 ? 'var(--Brown-40)'
//                 : 'var(--Grayscale-40)',
//           }}
//         >
//           {number}
//         </span>
//       ))}
//       {currentPage < Math.ceil(totalPosts / postsPerPage) && (
//         <img
//           src="./images/Arrow-right.png"
//           alt="오른쪽 화살표 아이콘"
//           onClick={handleNextClick}
//         />
//       )}
//     </div>
//   );
// }

// export default Pagination;

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

      const visiblePages = 5; // Adjust the number of visible pages as needed
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
