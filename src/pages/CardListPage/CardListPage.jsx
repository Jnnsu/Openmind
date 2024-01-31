import * as S from './CardListPageStyle';
import DropDownButton from '../../components/DropDown/DropDownButton';
import OutlineBoxButton from '../../components/Button/OutlineBoxButton/OutlineBoxButton';
import Pagenation from '../../components/Pagenation/Pagenation';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardList() {
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(1);
  const postsPerPage = 8;

  const [sort, setSort] = useState('createdAt');
  const [offset, setOffset] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    async function getListData() {
      try {
        const response = await fetch(
          `https://openmind-api.vercel.app/3-3/subjects/?sort=${sort}&limit=${postsPerPage}&offset=${offset}`,
        );
        const { results, count } = await response.json();
        let sortedData = [...results];

        setResult(sortedData);
        setTotalPosts(count);
      } catch (error) {
        console.error(error);
      }
    }
    getListData();
  }, [postsPerPage, sort, offset]);

  const handleAnswerPage = () => {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      navigate(`/post/${userId}/answer`);
    } else {
      navigate('/');
    }
  };

  const handlePostPage = id => {
    navigate(`/post/${id}`);
  };

  const handleSortOption = option => {
    setSort(option);
  };

  const handlePaginate = async pageNumber => {
    try {
      setOffset((pageNumber - 1) * postsPerPage);

      setCurrentPage(pageNumber);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <S.CardListContainer>
        <S.CardListHeader>
          <S.Logo
            src="./images/logo.png"
            alt="로고 이미지"
            onClick={() => navigate('/')}
          />
          <OutlineBoxButton onClick={handleAnswerPage}>
            답변하러 가기
          </OutlineBoxButton>
        </S.CardListHeader>
        <S.CardListTitleWrapper>
          <S.CardListTitle>누구에게 질문할까요?</S.CardListTitle>
          <DropDownButton
            sortOption={sort}
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
              onClick={() => handlePostPage(item.id)}
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
            <Pagenation
              postsPerPage={postsPerPage}
              totalPosts={totalPosts}
              paginate={handlePaginate}
              currentPage={currentPage}
            />
          </S.CardPagenation>
        </S.CardListFooter>
      </S.CardListContainer>
    </>
  );
}
