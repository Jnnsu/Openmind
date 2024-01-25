import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${({ $isAnswered }) =>
    $isAnswered ? 'var(--Brown-40)' : 'var(--Grayscale-40)'};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px; /* 128.571% */

  border-radius: 8px;
  border: 1px solid
    ${({ $isAnswered }) =>
      $isAnswered ? 'var(--Brown-40)' : 'var(--Grayscale-40)'};
  background: var(--Grayscale-10);
`;
