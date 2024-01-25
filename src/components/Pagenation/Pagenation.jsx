import { Fragment, useEffect, useState } from 'react';
import * as S from './PagenationStyle';

export default function Pagenaion({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];
  const [numberList, setNumberListState] = useState({
    numberBox: pageNumbers,
  });

  useEffect(() => {
    setNumberListState({
      numberBox: pageNumbers,
    });
    if (currentPage > Math.ceil(totalPosts / postsPerPage)) {
      handleReload();
    }
  }, [postsPerPage, currentPage]);

  //reload to last page when size change tablet to PC
  const handleReload = () => {
    paginate(Math.ceil(totalPosts / postsPerPage));
  };

  //make number and activate onpage
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    if (i === currentPage) {
      pageNumbers.push({ id: i, isDone: true });
    } else {
      pageNumbers.push({ id: i, isDone: false });
    }
  }

  //activate onpage when buttonclickevent
  const onNumberToggle = ({ id }) => {
    const newNumberList = numberList.numberBox.map(num =>
      num.id === id
        ? {
            ...num,
            isDone: !num.isDone,
          }
        : num.id !== id && num.isDone === true
          ? {
              ...num,
              isDone: !num.isDone,
            }
          : num,
    );

    setNumberListState({
      ...numberList,
      numberBox: newNumberList,
    });
  };
  //번호 배열 길이 -2 보다 현재페이지 번호가 작으면 ... 제거
  const isLastHellip = () => {
    return currentPage <= numberList.numberBox.length - 3;
  };
  //4보다 현재 페이지가 작은경우 ...제거
  const isFirstHellip = () => {
    return currentPage >= 4;
  };
  //activate fix 1st and last number
  const isFixedNumber = num => {
    return num === 1 || num === numberList.numberBox.length;
  };
  //현재 페이지 +1 보다 각각 값이 크거나 현재페이지 -1 보다 값이 작을 때 번호 활성화
  const isNoneNumber = num => {
    return currentPage + 1 < num || currentPage - 1 > num;
  };
  //1번페이지와 마지막 페이지가 가까워졌을때 현재 화면에 렌더링된 번호 유지
  const isNoneNumberChange = num => {
    return (
      (currentPage === 2 && currentPage + 3 > num) ||
      (currentPage === numberList.numberBox.length - 1 &&
        currentPage - 3 < num) ||
      (currentPage === 1 && currentPage + 4 > num) ||
      (currentPage === numberList.numberBox.length && currentPage - 4 < num)
    );
  };

  return (
    <>
      <S.ListPagination>
        {numberList.numberBox.map((num, index) => {
          return (
            <Fragment key={index}>
              {num.id === numberList.numberBox.length && isLastHellip() ? (
                <S.ListPaginationHellip className="hellip">
                  &hellip;
                </S.ListPaginationHellip>
              ) : null}
              {num.id === 2 && isFirstHellip() ? (
                <S.ListPaginationHellip className="hellip">
                  &hellip;
                </S.ListPaginationHellip>
              ) : null}
              <S.ListPaginationNumber
                key={num.id}
                style={{
                  color: num.isDone ? 'var(--Brown-40)' : 'var(--Grayscale-40)',
                  display:
                    !isNoneNumber(num.id) ||
                    isFixedNumber(num.id) ||
                    isNoneNumberChange(num.id)
                      ? 'flex'
                      : 'none',
                }}
                onClick={() => {
                  onNumberToggle(num.id);
                  paginate(num.id);
                }}
              >
                {num.id}
              </S.ListPaginationNumber>
            </Fragment>
          );
        })}
      </S.ListPagination>
    </>
  );
}
