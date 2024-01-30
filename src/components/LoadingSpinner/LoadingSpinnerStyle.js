import styled from 'styled-components';

export const LoadingSpinner = styled.div`
  user-select: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;

  & img {
    width: 50px;
  }
`;
