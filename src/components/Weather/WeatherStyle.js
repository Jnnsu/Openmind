import styled from 'styled-components';

export const WeatherContainer = styled.div`
  width: 270px;
  font-size: 1.6rem;
  font-weight: 400;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  @media (max-width: 767px) {
    width: 210px;
    font-size: 1.4rem;
  }
`;

export const WeatherTracker = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & img {
    width: 60px;
  }

  @media (max-width: 767px) {
    & img {
      width: 40px;
    }
  }
`;

export const City = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5px;
  font-size: 1.4rem;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const Weather = styled.div`
  display: flex;
  flex-direction: column;
`;
