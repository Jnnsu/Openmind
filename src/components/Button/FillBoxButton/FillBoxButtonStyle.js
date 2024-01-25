import styled from 'styled-components';
import BoxButton from '../BoxButton/BoxButton';

export const FillButton = styled(BoxButton)`
  background: var(--Brown-40);
  color: var(--Grayscale-10);

  &:focus {
    border: 2px solid var(--Brown-50);
  }

  &:hover {
    background-color: var(--Brown-40);
    border: 2px solid var(--Brown-50);
  }

  &:active {
    background-color: var(--Brown-50);
    border: 2px solid var(--Brown-50);
  }

  &:disabled {
    background-color: var(--Brown-30);
    border: none;
  }
`;
