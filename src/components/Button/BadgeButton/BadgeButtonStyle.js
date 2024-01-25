import styled from 'styled-components';

const COLORS = {
  brown: 'var(--Brown-40)',
  gray: 'var(--Grayscale-40)',
};

export const Button = styled.button`
  display: inline-flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${({ $color }) => COLORS[$color]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px; /* 128.571% */

  border-radius: 8px;
  border: 1px solid ${({ $color }) => COLORS[$color]};
  background: var(--Grayscale-10);
`;
