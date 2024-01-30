import styled from 'styled-components';

export const WeatherContainer = styled.div`
  width: 150px;
  font-size: 1.6rem;
  font-weight: 400;

  @media (max-width: 767px) {
    width: 150px;
    font-size: 1.2rem;
  }
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

  @media (max-width: 767px) {
    flex-direction: row;
    gap: 5px;

    & img {
      width: 30px;
    }
  }
`;
