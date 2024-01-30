import styled from 'styled-components';
// import BadgeButton from '../../Button/BadgeButton/BadgeButton';
import { Button as BadgeButton } from '../../Button/BadgeButton/BadgeButtonStyle';

export const FeedCardContainer = styled.div`
  width: 684px;
  height: auto;
  background: var(--Grayscale-10);
  box-shadow: var(--Shadow-1pt);
  border-radius: 16px;
  display: flex;
  width: 100%;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CardCreatedDateAndQuestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;

  & span {
    color: var(--Grayscale-40);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
  }

  & h3 {
    align-self: stretch;

    color: var(--Grayscale-60);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
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

export { BadgeButton };