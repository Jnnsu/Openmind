  import { useParams } from 'react-router-dom';
  import { useEffect, useState } from 'react';
  import { getQuestionList, getSubject } from '../../api/api';
  import * as S from './PostPageStyle';
  
  export default function AnswerPage() {
    const [subject, setSubject] = useState({});
    const [questionCount, setQuestionCount] = useState(0);
    const [questionList, setQuestionList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isHasNext, setIsHasNext] = useState(false);
      //모달띄우는 버튼
    const handleModalQuestion = () => {
      setIsShowModal(!isShowModal);
    };

  
    const { subjectId } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const nextSubject = await getSubject(subjectId);
          if (!nextSubject) return;
          setSubject(nextSubject);
          setQuestionCount(nextSubject.questionCount);
  
          const { next, results } = await getQuestionList(subjectId, offset);
          if (!results) return;
          setIsHasNext(!!next);
          setQuestionList(prevQuestionsList => [...prevQuestionsList, ...results]);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [subjectId, offset]);
  
    const handleViewMoreButtonOnClick = async () => {
      if (!isHasNext) return;
      setIsLoading(true);
      setOffset(prevOffset => prevOffset + questionList.length);
    };
  
    return (
      <>
        <S.Header>
          <S.HeaderImage />
          <S.LogoAndProfile>
            <img className="logo" src="/images/logo.png" alt="로고 이미지" />
            <img className="header__profileImage" src={subject?.imageSource} alt="프로필 사진" />
            <h1 className="profileName">{subject?.name}</h1>
          </S.LogoAndProfile>
        </S.Header>
        <S.MainContainer>
          <S.QuestionListContainer>
            <S.CountQuestion>
              <img src="/images/Messages.svg" alt="메세지 아이콘" />
              <span>{questionCount ? `${questionCount}개의 질문이 있습니다` : '아직 질문이 없습니다'}</span>
            </S.CountQuestion>
            {questionCount > 0 ? (
              <QuestionList>
                {questionList.map((element, index, array) => (
                  <QuestionCard
                    key={element.id}
                    subject={subject}
                    question={element}
                    questionList={array}
                    setQuestionList={setQuestionList}
                    index={index}
                    setQuestionCount={setQuestionCount}
                  />
                ))}
                {isHasNext && (
                  <S.ViewMoreButton onClick={handleViewMoreButtonOnClick} disabled={isLoading}>
                    질문 더 보기
                  </S.ViewMoreButton>
                )}
              </QuestionList>
            ) : (
              <S.NoQuestionImageContainer>
                <img src="/images/empty.png" alt="편지지 이미지" />
              </S.NoQuestionImageContainer>
            )}
          </S.QuestionListContainer>
          <S.ModalFloatButton
            className="question-write-button"
            type="button"
            onClick={handleModalQuestion}
            >
            질문 작성하기
          </S.ModalFloatButton>
          <S.ModalFloatButton
            className='question-write-button-mobile'
            type="button"
            onClick={handleModalQuestion}
            >
            질문 작성
          </S.ModalFloatButton>
          {isShowModal && <ModalQustion handleClose={handleModalQuestion}/>}
          {/* ModalQustion은 임시 이름, 모달창 임포트해서 쓸 것 */}

        </S.MainContainer>
      </>
    );
  }
  
  

