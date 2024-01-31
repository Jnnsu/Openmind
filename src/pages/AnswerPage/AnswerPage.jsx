import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getQuestionList, getSubject, deleteSubject } from '../../api/api';
import { ReactComponent as Message } from '../../images/Messages.svg';
import * as S from './AnswrePageStyle';

export default function AnswerPage() {
  const [subject, setSubject] = useState({});
  const [questionCount, setQuestionCount] = useState(0);
  const [questionList, setQuestionList] = useState([]);
  const [query, setQuery] = useState({ limit: 10, offset: 0 });
  const [isLoading, setIsLoading] = useState();
  const [isHasNext, setIsHasNext] = useState();

  const { subjectId } = useParams();
  const observer = useRef();
  const lastQuestion = useRef();
  const navigate = useNavigate();

  const questionCountString = questionCount
    ? `${questionCount}개의 질문이 있습니다`
    : '아직 질문이 없습니다';

  const handleDeleteSubjectButtonOnClick = async () => {
    if (
      window.confirm(
        '정말로 이 질문 대상을 삭제하시겠습니까?\n질문 대상의 모든 질문들은 같이 삭제됩니다.',
      )
    ) {
      const result = await deleteSubject(subjectId);
      if (!result) {
        navigate('/');
      } else {
        alert('삭제에 실패하였습니다.');
      }
    } else return;
  };

  const onDeleteItem = questionId => {
    setQuery({ limit: 1, offset: questionList.length - 1 });
    setQuestionList(preQuestionList =>
      preQuestionList.filter(element => element.id !== questionId),
    );
  };

  const handleViewMoreButtonOnClick = async () => {
    if (!isHasNext) {
      return;
    } else {
      setIsLoading(true);
      setQuery({ limit: 10, offset: questionList.length });
    }
  };

  const handleGetQuestionList = useCallback(
    async ({ limit, offset }) => {
      const { next, results } = await getQuestionList(subjectId, limit, offset);
      if (!results) return;
      setIsHasNext(!!next);
      setQuestionList(preQuestionList => [...preQuestionList, ...results]);
      setIsLoading(false);
    },
    [subjectId],
  );

  useEffect(() => {
    if (!isHasNext) {
      return;
    }

    observer.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isLoading) {
          setIsLoading(true);
          setQuery({ limit: 10, offset: questionList.length });
        }
      },
      { threshold: 0 },
    );

    if (lastQuestion.current) {
      observer.current.observe(lastQuestion.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [questionList, isHasNext, isLoading]);

  useEffect(() => {
    (async () => {
      const nextSubject = await getSubject(subjectId);
      if (!nextSubject) return;
      setSubject(nextSubject);
      setQuestionCount(nextSubject.questionCount);
    })();

    handleGetQuestionList(query);
  }, [subjectId, query, handleGetQuestionList]);

  return (
    <>
      <S.Header>
        <S.HeaderImage />
        <S.LogoAndProfileAndShare>
          <a href="/">
            <img className="logo" src="/images/logo.png" alt="로고 이미지" />
          </a>
          <img
            className="header__profileImage"
            src={subject?.imageSource}
            alt="프로필 사진"
          />
          <h1 className="profileName">{subject?.name}</h1>
          <S.ShareButton />
        </S.LogoAndProfileAndShare>
      </S.Header>
      <S.MainContainer>
        <S.QuestionListContainer>
          <S.DeleteSubjectButton onClick={handleDeleteSubjectButtonOnClick}>
            삭제하기
          </S.DeleteSubjectButton>
          <S.CountQuestion>
            <Message fill="var(--Brown-40)" />
            <span>{questionCountString}</span>
          </S.CountQuestion>
          {questionCount > 0 ? (
            <S.QuestionList>
              {questionList.map((element, index, array) => {
                return (
                  <S.QuestionCardWrapper key={element.id}>
                    {index === array.length - 3 && <div ref={lastQuestion} />}
                    <S.QuestionCard
                      key={element.id}
                      subject={subject}
                      question={element}
                      questionList={array}
                      setQuestionList={setQuestionList}
                      index={index}
                      setQuestionCount={setQuestionCount}
                      onDeleteItem={onDeleteItem}
                    />
                  </S.QuestionCardWrapper>
                );
              })}
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
              <img src="/images/empty.png" alt="편지지 이미지" />
            </S.NoQuestionImageContainer>
          )}
        </S.QuestionListContainer>
      </S.MainContainer>
    </>
  );
}
