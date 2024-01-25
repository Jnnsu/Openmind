import styled from 'styled-components';
import BoxButton from '../BoxButton/BoxButtonStyle';

export const OutlineButton = styled(BoxButton)`
  background: var(--Brown-10);
  border: 1px solid var(--Brown-40);
  color: var(--Brown-40);

  &:focus {
    border: 2px solid var(--Brown-40);
  }

  &:hover {
    background-color: var(--Brown-10);
    border: 2px solid var(--Brown-40);
  }

  &:active {
    background-color: var(--Brown-20);
    border: 2px solid var(--Brown-40);
  }

  &:disabled {
    background-color: var(--Brown-10);
    border: 1px solid var(--Brown-30);
  }
`;
