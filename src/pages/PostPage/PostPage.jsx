import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuestionList, getSubject } from '../../api/api';
import * as S from './PostPageStyle';
import Modal from '../modal/modal';
import ProfileImage from '../../components/Feed/ProfileImage/ProfileImage';
import ShareButton from '../../components/Button/ShareButton/ShareButton';

const LIMIT = 10;

const PostPage = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const [subject, setSubject] = useState({});
  const [questionCount, setQuestionCount] = useState(0);
  const [questionList, setQuestionList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHasNext, setIsHasNext] = useState(true);
  const [query, setQuery] = useState({ limit: LIMIT, offset: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: subject?.name,
    imageSource: subject?.imageSource,
    subjectId: subjectId,
  });
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleViewMoreButtonOnClick = () => {
    if (!isHasNext) return;
    setIsLoading(true);
    setQuery(prevQuery => ({ ...prevQuery, offset: prevQuery.offset + LIMIT }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subjectData = await getSubject(subjectId);

        if (!subjectData) {
          navigate('/404'); // 사용자를 찾을 수 없음을 알리는 페이지로 이동합니다.
          return;
        }
        setSubject(subjectData);
        setUserData({ ...subjectData });

        const { count, results } = await getQuestionList(
          subjectId,
          query.limit,
          query.offset,
        );
        // "count": 0,  질문 개수
        // "next": null,  다음 question 주소값..?
        // "previous": null, 이전 question 주소값...?
        // "results": []   질문들..
        setQuestionCount(count);
        setQuestionList(previous => [...previous, ...results]);
        setIsHasNext(results.length === LIMIT);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/error'); // 데이터를 가져오는 중에 오류가 발생한 경우 오류 페이지로 이동합니다.
      }
    };

    fetchData();
  }, [subjectId, navigate, isLoading, query.limit, query.offset]);

  return (
    <>
      <S.Header>
        <S.HeaderImage />
        <S.SubjectInfo>
          <a href="/">
            <img
              className="logo"
              src="/images/logo.png"
              alt="메인페이지 로고"
            />
          </a>
          <ProfileImage
            className="subject-profileimg"
            imageSource={subject?.imageSource}
            alt="프로필 이미지"
            size="136px"
          />
          <h1 className="subject-name">{subject?.name}</h1>
          <ShareButton />
        </S.SubjectInfo>
      </S.Header>
      <S.MainContainer>
        <S.QuestionListContainer>
          <S.CountQuestion>
            <img src="/images/Messages.svg" alt="메세지 아이콘" />
            <span>
              {questionCount
                ? `${questionCount}개의 질문이 있습니다`
                : '아직 질문이 없습니다'}
            </span>
          </S.CountQuestion>
          {questionCount > 0 ? (
            <S.QuestionList>
              {questionList.map((question, index) => (
                <S.FeedCard
                  key={question.subjectId}
                  question={question}
                  index={index}
                  subject={subject}
                  // 필요한 props를 전달합니다.
                />
              ))}
              {isHasNext && (
                <S.ViewMoreButton
                  onClick={handleViewMoreButtonOnClick}
                  disabled={isLoading}
                >
                  질문 더 보기
                </S.ViewMoreButton>
              )}
            </S.QuestionList>
          ) : (
            <S.NoQuestionImageContainer>
              <img src="/images/empty.png" alt="편지함 이미지" />
            </S.NoQuestionImageContainer>
          )}
        </S.QuestionListContainer>
        {/* ModalFloatButton 추가 */}
        <S.ModalFloatButton
          className="question-write-button"
          type="button"
          onClick={openModal}
        >
          질문 작성하기
        </S.ModalFloatButton>
        {isModalOpen && <Modal userData={userData} closeModal={closeModal} />}
      </S.MainContainer>
    </>
  );
};

export default PostPage;
