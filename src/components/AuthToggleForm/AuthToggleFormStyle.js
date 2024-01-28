import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  position: absolute;
  top: 364px;
  width: 400px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const LoginButton = styled.button`
  width: 40%;
  height: 100%;
  border: none;
  font-size: 1.6rem;

  background: ${({ active }) => (active ? '#182' : '#fff')};
`;

export const JoinButton = styled.button`
  width: 40%;
  height: 100%;
  border: none;
  font-size: 1.6rem;

  background: ${({ active }) => (active ? '#182' : '#fff')};
`;

export const FormContent = styled.div`
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  transition:
    opacity 100ms ease-in-out,
    visibility 100ms ease-in-out;
  position: absolute;
  width: 100%;
`;
