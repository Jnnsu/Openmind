import styled from 'styled-components';

export const LoginForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  background: var(--Grayscale-10);
  border-radius: 16px;
  position: absolute;
  top: 364px;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
