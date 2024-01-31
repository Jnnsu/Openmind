import * as S from './CardListPageStyle';
import DropDownButton from '../../components/DropDown/DropDownButton';
import OutlineBoxButton from '../../components/Button/OutlineBoxButton/OutlineBoxButton';
import Pagenation from '../../components/Pagenation/Pagenation';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardList() {
  const [result, setResult] = useState([]);
  const [sortOption, setSortOption] = useState('date');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const navigate = useNavigate();

  useEffect(() => {
    async function getListData() {
      try {
        const response = await fetch(
          `https://openmind-api.vercel.app/3-3/subjects/?limit=${postsPerPage}`,
        );
        const { results, count } = await response.json();
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
        setTotalPosts(count);
      } catch (error) {
        console.error(error);
      }
    }
    getListData();
  }, [sortOption, postsPerPage]);

  const fetchDataForPage = async pageNumber => {
    const offset = (currentPage - 1) * postsPerPage;
    const url = `https://openmind-api.vercel.app/3-3/subjects/?limit=${postsPerPage}&offset=${offset}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error(error);
    }
  };

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
    setSortOption(option);
  };

  const handlePaginate = async pageNumber => {
    try {
      // console.log('Handling pagination for page:', pageNumber);
      setCurrentPage(pageNumber);
      const data = await fetchDataForPage(pageNumber);
      setResult(data);
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
