import styled from 'styled-components';
import { QuestionList } from '../Feed/QuestionCardContainer/QuestionCardContainerStyle';
import { Button as BadgeButton } from '../../components/Button/BadgeButton/BadgeButtonStyle';
import Kebab from '../../components/Button/KebabButton/KebabButton';
import { FillButton } from '../../components/Button/FillBoxButton/FillBoxButtonStyle';
import Reaction from '../../components/Feed/Reaction/Reaction';
import { FloatButton } from '../Button/FloatingButton/FloationgButtonStyle';

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

  @media (max-width: 767px) {
    padding: 2.4rem;
    gap: 2.4rem;
  }
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
    font-size: 1.8rem;
    line-height: 2.4rem; /* 133.333% */
  }

  @media (max-width: 767px) {
    & .questionElapsedTime {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
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

  @media (max-width: 767px) {
    & .main__profileImage {
      width: 3.2rem;
      height: 3.2rem;
    }
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

  @media (max-width: 767px) {
    & .main__profileName {
      font-size: 1.4rem;
      line-height: 1.8rem; /* 128.571% */
    }
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

    &:focus {
      border: 1px solid var(--Brown-40);
    }

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

export const AnswerCompleteButton = styled(FillButton)`
  width: 100%;
  border: 2px solid var(--Brown-40);
  justify-content: center;

  &:disabled {
    cursor: default;
  }
`;

export const ViewMoreButton = styled(FloatButton)`
  width: 13.4rem;
  height: 3.5rem;
  position: absolute;
  bottom: -44px;
  right: 0;

  color: var(--Grayscale-10);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Pretendard;
  font-size: 1.5rem;
  line-height: 2.5rem; /* 166.667% */

  &:disabled {
    cursor: default;
    background: var(--Brown-30);
  }

  @media (max-width: 767px) {
    width: 10.6rem;
    height: 2.5rem;

    font-size: 1rem;
  }
`;

export { QuestionList, BadgeButton, Kebab, Reaction };
