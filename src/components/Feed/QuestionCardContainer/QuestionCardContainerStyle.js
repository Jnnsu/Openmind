import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 100%;
  color: var(--brown-10);
  border-radius: 16px;
  border: 1px solid var(--Brown-30);
  background: var(--Brown-10);
`;

export const CountQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  & span {
    color: var(--Brown-40);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 20px;
    line-height: 25px; /* 125% */
  }
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;
