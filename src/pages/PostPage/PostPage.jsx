import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuestionList, getSubject  } from '../../api/api';
import * as S from './PostPageStyle';

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

  const handleViewMoreButtonOnClick = () => {
    if (!isHasNext) return;
    setIsLoading(true);
    setQuery(prevQuery => ({ ...prevQuery, offset: prevQuery.offset + LIMIT }));
  };

  //모달띄우는 버튼
  const handleModalQuestion = () => {
    setIsShowModal(!isShowModal);
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subjectData = await getSubject (subjectId);
        if (!subjectData) {
          navigate('/404'); // 사용자를 찾을 수 없음을 알리는 페이지로 이동합니다.
          return;
        }
        setSubject(subjectData);

        const { questionCount, questionList } = await getQuestionList(subjectId, query.limit, query.offset);
        setQuestionCount(questionCount);
        setQuestionList(prevQuestionList => [...prevQuestionList, ...questionList]);
        setIsHasNext(questionList.length === query.limit);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/error'); // 데이터를 가져오는 중에 오류가 발생한 경우 오류 페이지로 이동합니다.
      }
    };

    fetchData();
  }, [subjectId, query, navigate]);

  return (
    <>
      <S.Header>
        <S.HeaderImage />
        <S.SubjectInfo>
          <a href='/'>
            <img className='logo' src='/images/logo.png' alt='메인페이지 로고'/>
          </a>
          <img className="subject-profile-image" src={subject?.profileImage} alt="프로필 이미지" />
          <h1 className="subject-name">{subject?.name}</h1>
          <p className="subject-description">{subject?.description}</p>
        </S.SubjectInfo>
      </S.Header>
      <S.MainContainer>
        <S.QuestionListContainer>
          <S.CountQuestion>
            <span>{questionCount ? `${questionCount}개의 질문이 있습니다` : '아직 질문이 없습니다'}</span>
          </S.CountQuestion>
          {questionCount > 0 ? (
            <S.QuestionList>
              {questionList.map((question, index) => (
                <S.QuestionCard
                  key={question.subjectId}
                  question={question}
                  index={index}
                  // 필요한 props를 전달합니다.
                />
              ))}
              {isHasNext && (
                <S.ViewMoreButton onClick={handleViewMoreButtonOnClick} disabled={isLoading}>
                  질문 더 보기
                </S.ViewMoreButton>
              )}
            </S.QuestionList>
          ) : (
            <S.NoQuestionImageContainer>
              <span>아직 질문이 없습니다.</span>
            </S.NoQuestionImageContainer>
          )}
        </S.QuestionListContainer>
        {/* ModalFloatButton 추가 */}
        <S.ModalFloatButton
          className="question-write-button"
          type="button"
          onClick={handleModalQuestion}
          subjectData={[subject?.name, subject?.imageSource, subjectId]}
        >
          질문 작성하기
        </S.ModalFloatButton>

        {/* 모달이 열려있을 때 모달 컴포넌트를 렌더링합니다. */}
        {isShowModal && <ModalQustion handleClose={handleModalQuestion} />}
     
      </S.MainContainer>
    </>
  );
};

export default PostPage;
