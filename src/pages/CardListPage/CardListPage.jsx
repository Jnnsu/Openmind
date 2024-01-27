import * as S from './CardListPageStyle';
import DropDownButton from '../../components/DropDown/DropDownButton';
import OutlineBoxButton from '../../components/Button/OutlineBoxButton/OutlineBoxButton';
import Pagenaion from '../../components/Pagenation/Pagenation';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../constants';

export default function CardList() {
  const [result, setResult] = useState([]);
  const [sortOption, setSortOption] = useState('date');

  const navigate = useNavigate();

  useEffect(() => {
    async function getListData() {
      try {
        const response = await fetch(API.SUBJECT);
        const { results } = await response.json();
        // const resultArray = results.results || [];
        // setResult(resultArray);
        let sortedData = [...results];

        if (sortOption === 'name') {
          sortedData = sortedData.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (sortOption === 'date') {
          sortedData = sortedData.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          );
        }

        setResult(sortedData);
      } catch (error) {
        console.error(error);
      }
    }
    getListData();
  }, [sortOption]);

  const handleAnswerPage = () => {
    navigate('/post/:subjectId/answer');
  };

  const handleSortOption = option => {
    setSortOption(option);
  };

  return (
    <>
      <S.CardListContainer>
        <S.CardListHeader>
          <Link to="./">
            <S.Logo src="./images/logo.png" alt="로고 이미지" />
          </Link>
          <OutlineBoxButton onClick={handleAnswerPage}>
            답변하러 가기
          </OutlineBoxButton>
        </S.CardListHeader>
        <S.CardListTitleWrapper>
          <S.CardListTitle>누구에게 질문할까요?</S.CardListTitle>
          <DropDownButton
            sortOption={sortOption}
            onSortOptionChange={handleSortOption}
          />
        </S.CardListTitleWrapper>
        <S.CardListMain>
          {result.map((item, index) => (
            <S.Card
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.imageSource}
              questionCount={item.questionCount}
            >
              <S.CardTop>
                <img src={item.imageSource} alt="" />
                <S.CardNickname>{item.name}</S.CardNickname>
              </S.CardTop>
              <S.CardBottom>
                <S.ReceiveQuestion>
                  <img src="./images/Messages.svg" alt="메세지 아이콘" />
                  <div>받은 질문</div>
                </S.ReceiveQuestion>
                <div>{item.questionCount}개</div>
              </S.CardBottom>
            </S.Card>
          ))}
        </S.CardListMain>
        <S.CardListFooter>
          <S.CardPagenation>
            <img src="./images/Arrow-left.png" alt="왼쪽 화살표 아이콘" />
            {/* <Pagenaion /> */}
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <img src="./images/Arrow-right.png" alt="오른쪽 화살표 아이콘" />
          </S.CardPagenation>
        </S.CardListFooter>
      </S.CardListContainer>
    </>
  );
}
