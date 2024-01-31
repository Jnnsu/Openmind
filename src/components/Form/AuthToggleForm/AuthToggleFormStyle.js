import styled from 'styled-components';

export const FormContainer = styled.div`
  position: absolute;
  top: 364px;
  width: 400px;

  @media (max-width: 767px) {
    width: 305px;
    top: 260px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 3px;
`;

export const LoginButton = styled.button`
  width: 40%;
  height: 100%;
  border: none;
  font-size: 1.6rem;
  border-radius: 8px 8px 0 0;
  box-shadow: ${({ active }) =>
    active ? '0 4px 8px rgba(0, 0, 0, 0.35)' : '0 4px 8px rgba(0, 0, 0, 0.1)'};
  background: #fff;
  opacity: ${({ active }) => (active ? '1' : '0.4')};
`;

export const JoinButton = styled.button`
  width: 40%;
  height: 100%;
  border: none;
  font-size: 1.6rem;
  border-radius: 8px 8px 0 0;
  box-shadow: ${({ active }) =>
    active ? '0 4px 8px rgba(0, 0, 0, 0.35)' : '0 4px 8px rgba(0, 0, 0, 0.1)'};
  background: #fff;
  opacity: ${({ active }) => (active ? '1' : '0.4')};
`;

export const FormContent = styled.div`
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  transition:
    opacity 100ms ease-in-out,
    visibility 100ms ease-in-out;
  position: absolute;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;
