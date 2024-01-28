import styled from 'styled-components';
import ShareButton from '../../components/Button/ShareButton/ShareButton';
import { FloatButton } from '../../components/Button/FloatingButton/FloationgButtonStyle';
import {
  CardContainer,
  CountQuestion,
} from '../../components/Feed/QuestionCardContainer/QuestionCardContainerStyle';
import QuestionList from '../../components/QustionList/QuestionList';

export const Header = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderImage = styled.div`
  width: 100%;
  height: 23.4rem;
  flex-shrink: 0;

  background:
    url('/images/header-image.png'),
    lightgray 0px -267.142px / 100% 515.021% no-repeat;
  background-position: center;
  mix-blend-mode: hard-light;
`;

export const LogoAndProfileAndShare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  margin: 0 auto;
  top: 5rem;
  gap: 1.2rem;

  & .logo {
    width: 17rem;
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
    font-size: 3.2rem;
    line-height: 4rem; /* 125% */
  }

  @media (max-width: 767px) {
    & .logo {
      width: 12.4rem;
      height: 4.9rem;
    }

    & .header__profileImage {
      width: 10.4rem;
      height: 10.4rem;
    }

    & .profileName {
      font-size: 2.4rem;
    }
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  background: var(--Grayscale-20);
  padding: 19rem calc((100vw - 716px) / 2) 14rem;

  @media (max-width: 780px) {
    padding: 19rem 3.2rem 14rem;
  }

  @media (max-width: 767px) {
    padding: 17.5rem 2.4rem 17rem;
  }
`;

export const QuestionListContainer = styled(CardContainer)`
  position: relative;
  min-height: 33rem;

  @media (max-width: 767px) {
    border: 1px solid var(--Brown-20);
  }
`;

export const NoQuestionImageContainer = styled.div`
  height: 25.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteSubjectButton = styled(FloatButton)`
  width: 10.8rem;
  height: 3.5rem;
  position: absolute;
  top: -44px;
  right: 0;

  color: var(--Grayscale-10);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 1.5rem;
  line-height: 2.5rem; /* 166.667% */

  @media (max-width: 767px) {
    width: 8.8rem;
    height: 2.5rem;

    font-size: 1rem;
  }
`;

export const QuestionCard = styled.div`
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

export const QuestionStatus = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex: 1 0 0;
`;

export const QuestionElapsedTime = styled.div`
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

export const QuestionAnswer = styled.div`
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

export const AnswerContainer = styled.div`
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

export const AnswerElapsedTime = styled.div`
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

export const AnswerForm = styled.form`
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

export { ShareButton, CountQuestion, QuestionList };
