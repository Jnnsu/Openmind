import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ShareButton from '../../components/Button/ShareButton/ShareButton';
import { FloatButton } from '../../components/Button/FloatingButton/FloationgButtonStyle';
import {
  CardContainer,
  CountQuestion,
  QuestionList,
} from '../../components/Feed/QuestionCardContainer/QuestionCardContainerStyle';
import { Button as BadgeButton } from '../../components/Button/BadgeButton/BadgeButtonStyle';
import Kebab from '../../components/Button/KebabButton/KebabButton';
import cardCreatedDate from '../../utils/CardCreatedDate';
import { FillButton } from '../../components/Button/FillBoxButton/FillBoxButtonStyle';

export default function AnswerPage() {
  const [subject, setSubject] = useState();
  const [questionList, setQuestionList] = useState();
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const questionCount = subject?.questionCount
    ? `${subject.questionCount}개의 질문이 있습니다`
    : '아직 질문이 없습니다';

  const getAnswerContent = answer => {
    let answerContent;
    if (answer.isRejected) {
      answerContent = <span className="answerIsRejected">답변 거절</span>;
    } else {
      answerContent = <span className="answerContent">{answer.content}</span>;
    }

    return answerContent;
  };

  const handleDeleteQuestionButtonOnClick = async () => {
    try {
      if (
        window.confirm(
          '정말로 이 질문 대상을 삭제하시겠습니까?\n모든 질문들은 같이 삭제됩니다.',
        )
      ) {
        const response = await fetch(
          `https://openmind-api.vercel.app/3-3/subjects/${subjectId}/`,
          {
            method: 'DELETE',
            headers: {
              accept: 'application/json',
            },
          },
        );
        if (response.ok) {
          navigate('/');
        } else {
          alert('삭제에 실패하였습니다.');
        }
      } else return;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getSubject() {
      try {
        const response = await fetch(
          `https://openmind-api.vercel.app/3-3/subjects/${subjectId}/`,
        );
        if (!response.ok) {
          alert('존재하지 않는 이름/아이디 입니다.');
          window.location.href = '/';
        }

        const nextSubject = await response.json();
        setSubject(nextSubject);
      } catch (error) {
        console.log(error);
      }
    }

    async function getQuestionList() {
      try {
        const response = await fetch(
          `https://openmind-api.vercel.app/3-3/subjects/${subjectId}/questions/?limit=10&offset=0`,
        );
        const { results } = await response.json();
        setQuestionList(results);
      } catch (error) {
        console.log(error);
      }
    }

    getSubject();
    getQuestionList();
  }, [subjectId]);

  return (
    <>
      <S.Header>
        <S.HeaderImage />
        <S.LogoAndProfileAndShare>
          <img className="logo" src="/images/logo.png" alt="로고 이미지" />
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
          <S.DeleteSubjectButton onClick={handleDeleteQuestionButtonOnClick}>
            삭제하기
          </S.DeleteSubjectButton>
          <S.CountQuestion>
            <img src="/images/Messages.svg" alt="메세지 아이콘" />
            <span>{questionCount}</span>
          </S.CountQuestion>
          <S.QuestionList>
            {questionList &&
              questionList.map(element => {
                const isAnswered = !!element.answer;
                const color = isAnswered ? 'brown' : 'gray';
                const text = isAnswered ? '답변 완료' : '미답변';

                return (
                  <S.QuestionCard key={element.id}>
                    <S.QuestionStatus>
                      <S.BadgeButton $color={color}>{text}</S.BadgeButton>
                      <S.Kebab />
                    </S.QuestionStatus>
                    <S.QuestionElapsedTime>
                      <span className="questionElapsedTime">
                        질문 · {cardCreatedDate(element.createdAt)}
                      </span>
                      <h3 className="question">{element.content}</h3>
                    </S.QuestionElapsedTime>
                    <S.QuestionAnswer>
                      <img
                        className="main__profileImage"
                        src={subject?.imageSource}
                        alt="프로필 사진"
                      />
                      <S.AnswerContainer>
                        <S.AnswerElapsedTime>
                          <span className="main__profileName">
                            {subject?.name}
                          </span>
                          {isAnswered && (
                            <span className="answerElapsedTime">
                              {cardCreatedDate(element.answer.createdAt)}
                            </span>
                          )}
                        </S.AnswerElapsedTime>
                        {isAnswered ? (
                          getAnswerContent(element.answer)
                        ) : (
                          <S.AnswerForm>
                            <textarea
                              className="answerTextarea"
                              placeholder="답변을 입력해 주세요"
                            />
                            <S.AnswerCompleteButton>
                              답변 완료
                            </S.AnswerCompleteButton>
                          </S.AnswerForm>
                        )}
                      </S.AnswerContainer>
                    </S.QuestionAnswer>
                  </S.QuestionCard>
                );
              })}
          </S.QuestionList>
        </S.QuestionListContainer>
      </S.MainContainer>
    </>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderImage = styled.div`
  width: 100%;
  height: 23.4rem;
  flex-shrink: 0;

  background:
    url('/images/header-image.png'),
    lightgray 0px -267.142px / 100% 515.021% no-repeat;
  background-position: center;
  mix-blend-mode: hard-light;
`;

const LogoAndProfileAndShare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  margin: 0 auto;
  top: 5rem;
  gap: 1.2rem;

  & .logo {
    height: 6.7rem;
  }

  & .header__profileImage {
    width: 13.6rem;
    height: 13.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 50%;
  }

  & .profileName {
    color: var(--Grayscale-60);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 32px;
    line-height: 40px; /* 125% */
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--Grayscale-20);
  padding: 19rem calc((100vw - 716px) / 2) 14rem;
`;

const QuestionListContainer = styled(CardContainer)`
  position: relative;
`;

const DeleteSubjectButton = styled(FloatButton)`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: -44px;
  right: 0;

  color: var(--Grayscale-10);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 1.3rem;
  line-height: 2.5rem; /* 166.667% */
`;

const QuestionCard = styled.div`
  display: flex;
  padding: 3.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  align-self: stretch;

  border-radius: 16px;
  background: var(--Grayscale-10);

  /* 1pt */
  box-shadow: var(--Shadow-1pt);
`;

const QuestionStatus = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex: 1 0 0;
`;

const QuestionElapsedTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  flex: 1 0 0;

  & .questionElapsedTime {
    color: var(--Grayscale-40);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem; /* 128.571% */
  }

  & .question {
    color: var(--Grayscale-60);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 18px;
    line-height: 24px; /* 133.333% */
  }
`;

const QuestionAnswer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  align-self: stretch;

  & .main__profileImage {
    display: flex;
    width: 4.8rem;
    height: 4.8rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  flex: 1 0 0;

  & .answerContent {
    align-self: stretch;
    color: var(--Grayscale-60);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.6rem;
    line-height: 2.2rem; /* 137.5% */
  }

  & .answerIsRejected {
    align-self: stretch;
    color: var(--Red-50);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.6rem;
    line-height: 2.2rem; /* 137.5% */
  }
`;

const AnswerElapsedTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex: 1 0 0;

  & .main__profileName {
    color: var(--Grayscale-60, #000);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 1.8rem;
    line-height: 2.4rem; /* 133.333% */
  }

  & .answerElapsedTime {
    color: var(--Grayscale-40, #818181);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem; /* 128.571% */
  }
`;

const AnswerForm = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  align-self: stretch;

  & .answerTextarea {
    width: 100%;
    height: 186px;
    display: flex;
    padding: 1.6rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
    resize: none;

    color: var(--Grayscale-60);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 1.6rem;
    line-height: 2.2rem; /* 137.5% */

    border: none;
    border-radius: 8px;
    background: var(--Grayscale-20);

    &::placeholder {
      color: var(--Grayscale-40);
      font-feature-settings:
        'clig' off,
        'liga' off;
      font-size: 1.6rem;
      line-height: 2.2rem; /* 137.5% */
    }
  }
`;

const AnswerCompleteButton = styled(FillButton)`
  width: 100%;
  border: 2px solid var(--Brown-40);
`;

const S = {
  Header,
  HeaderImage,
  LogoAndProfileAndShare,
  ShareButton,
  MainContainer,
  QuestionListContainer,
  DeleteSubjectButton,
  CountQuestion,
  QuestionList,
  QuestionCard,
  QuestionStatus,
  BadgeButton,
  Kebab,
  QuestionElapsedTime,
  QuestionAnswer,
  AnswerContainer,
  AnswerElapsedTime,
  AnswerForm,
  AnswerCompleteButton,
};
