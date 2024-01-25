import styled from 'styled-components';

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
