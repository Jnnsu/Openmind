import styled from 'styled-components';
import { FloatButton } from '../../components/Button/FloatingButton/FloationgButtonStyle';

export const Header = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderImage = styled.div`
  width: 100%;
  height: 23.4rem;
  flex-shrink: 0;
  background: url('/images/header-image.png') lightgray 0px -267.142px / 100% 515.021% no-repeat;
  background-position: center;
  mix-blend-mode: hard-light;
`;

export const UserInfo = styled.div`
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

  & .user-profile-image {
    width: 13.6rem;
    height: 13.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 50%;
  }

  & .user-name {
    color: var(--Grayscale-60);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Actor;
    font-size: 3.2rem;
    line-height: 4rem; /* 125% */
  }

  @media (max-width: 767px) {
    & .logo {
      width: 12.4rem;
      height: 4.9rem;
    }

    & .user-profile-image {
      width: 10.4rem;
      height: 10.4rem;
    }

    & .user-name {
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

export const QuestionListContainer = styled.div`
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

export const CountQuestion = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & img {
    width: 2rem;
    height: 2rem;
  }

  & span {
    color: var(--Grayscale-60);
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 1.6rem;
    line-height: 2.2rem; /* 137.5% */
  }
`;

export const ViewMoreButton = styled(FloatButton)`
  width: 13.4rem;
  height: 3.5rem;
  position: absolute;
  bottom: -44px;
  right: 0;

  color: var(--Grayscale-10);
  font-feature-settings: 'clig' off, 'liga' off;
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

export const ModalFloatButton = styled(FloatButton)`
  position:fixed;
  bottom: 20px;
  right: 20px;
`;

export const QuestionList = styled.div`

`;

export const QuestionCard = styled.div`

`;