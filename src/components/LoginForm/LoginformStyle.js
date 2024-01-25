import styled from 'styled-components';
import { FillButton } from '../Button/FillBoxButton/FillBoxButtonStyle';

export const LoginForm = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  background: var(--Grayscale-10);
  border-radius: 16px;
  position: absolute;
  top: 364px;
`;

export const LoginButton = styled(FillButton)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
