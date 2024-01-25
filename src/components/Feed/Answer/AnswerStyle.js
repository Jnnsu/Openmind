import styled from 'styled-components';

export const AnswerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

export const ProfileNameAndDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;

export const AnswerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`;

export const ProfileName = styled.div`
  font-size: 18px;
`;

export const ProfileDate = styled.div`
  font-size: 14px;
  color: var(--Grayscale-40);
`;

export const AnswerContent = styled.div`
  font-size: 16px;
`;
