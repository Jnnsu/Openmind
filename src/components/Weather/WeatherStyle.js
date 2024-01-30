import styled from 'styled-components';

export const CostumSpin = styled.p`
  color: #fff;
`;

export const WeatherDiv = styled.div`
  user-select: none;

  & img {
    width: 40px;
  }

  & span {
    font-size: 1.6rem;
  }

  & p {
    font-size: 1rem;
    font-weight: 300;
  }
`;

export const WeatherContainer = styled.div`
  all: unset;
  width: 400px;
  background: #000;
  position: absolute;
  top: 100px;
  font-size: 20px;
`;
