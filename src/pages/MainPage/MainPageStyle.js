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
`;

export const LogoImage = styled.img`
  width: 456px;
  position: absolute;
  top: 160px;
`;

export const BackgroundImage = styled.img`
  width: 100vw;
  /* position: absolute;
  top: 205px;
  z-index: -1; */
`;
