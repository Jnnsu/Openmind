import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px;
  background: var(--Grayscale-10);
  border-radius: 16px;
  position: absolute;
  top: 364px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  & span {
    font-weight: 700;
  }

  & p {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  & button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 767px) {
    width: 305px;
    top: 260px;

    & p {
      font-size: 1.6rem;
    }

    & button {
      font-size: 1.4rem;
      height: 34px;
    }
  }
`;
