import styled from 'styled-components';

export const WeatherContainer = styled.div`
  width: 150px;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const WeatherTracker = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 50px;
  }
`;
