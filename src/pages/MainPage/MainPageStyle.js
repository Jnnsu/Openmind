import styled from 'styled-components';

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: var(--Grayscale-20);
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('${props => props.backgroundImage}');
  background-size: cover;
  background-position: center;
`;

export const LogoImage = styled.img`
  width: 456px;
  position: absolute;
  top: 160px;

  @media (max-width: 767px) {
    width: 248px;
    top: 80px;
  }
`;

export const BackgroundImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
