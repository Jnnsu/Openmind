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

export default function AnswerPage() {
  const [subject, setSubject] = useState();
  // const [questionList, setQuestionList] = useState();
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const questionCount = subject?.questionCount
    ? `${subject.questionCount}개의 질문이 있습니다`
    : '아직 질문이 없습니다';

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
          navigate('/');
        }
        const nextSubject = await response.json();
        setSubject(nextSubject);
      } catch (error) {
        console.log(error);
      }
    }

    // async function getQuestionList() {
    //   try {
    //     const response = await fetch(`https://openmind-api.vercel.app/3-3/subjects/${subjectId}/questions/?limit=10&offset=0`);

    //   }
    // }

    getSubject();
  }, [subjectId]);

  return (
    <>
      <S.Header>
        <S.HeaderImage />
        <S.LogoAndProfileAndShare>
          <img className="logo" src="/images/logo.png" alt="로고 이미지" />
          <img
            className="profileImage"
            src={subject?.imageSource}
            alt="프로필 사진"
          />
          <h1 className="profileName">{subject?.name}</h1>
          <S.ShareButton />
        </S.LogoAndProfileAndShare>
      </S.Header>
      <S.MainContainer>
        <S.QuestionListContainer>
          <S.DeleteQuestionsButton onClick={handleDeleteQuestionButtonOnClick}>
            삭제하기
          </S.DeleteQuestionsButton>
          <S.CountQuestion>
            <img src="/images/Messages.svg" alt="메세지 아이콘" />
            <span>{questionCount}</span>
          </S.CountQuestion>
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

  & .profileImage {
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

const DeleteQuestionsButton = styled(FloatButton)`
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

const S = {
  Header,
  HeaderImage,
  LogoAndProfileAndShare,
  ShareButton,
  MainContainer,
  QuestionListContainer,
  DeleteQuestionsButton,
  CountQuestion,
};
