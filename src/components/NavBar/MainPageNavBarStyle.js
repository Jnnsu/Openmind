import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 45px 130px;

  & button {
    display: flex;
    align-items: center;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px 100px;
    gap: 140px;

    & button {
      font-size: 1.4rem;
      line-height: 18px;
      padding: 12px 8px;
      height: 34px;
    }
  }
`;
