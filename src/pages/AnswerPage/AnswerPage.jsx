import { useParams } from 'react-router-dom';
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
  const { subjectId } = useParams();

  useEffect(() => {
    async function getSubject() {
      try {
        const response = await fetch(
          `https://openmind-api.vercel.app/3-3/subjects/${subjectId}/`,
        );
        const nextSubject = await response.json();
        setSubject(nextSubject);
      } catch (error) {
        console.log(error);
      }
    }

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
      <S.QuestionListContainer>
        <S.QuestionList>
          <S.DeleteQuestionsButton>삭제하기</S.DeleteQuestionsButton>
        </S.QuestionList>
      </S.QuestionListContainer>
    </>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;

  background-color: black;
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

const QuestionListContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--Grayscale-20);
`;

// const QuestionList = styled.div`
// `

const DeleteQuestionsButton = styled(FloatButton)`
  width: 10rem;
  height: 3.5rem;
  position: absolute;

  color: var(--Grayscale-10);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 15px;
  line-height: 25px; /* 166.667% */
`;

const S = {
  Header,
  HeaderImage,
  LogoAndProfileAndShare,
  ShareButton,
  QuestionListContainer,
  QuestionList,
  DeleteQuestionsButton,
};
