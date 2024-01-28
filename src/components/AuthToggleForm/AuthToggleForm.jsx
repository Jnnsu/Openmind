import { useState } from 'react';
import * as S from './AuthToggleFormStyle';
import LoginForm from '..//LoginForm/LoginForm';
import JoinForm from '../JoinForm/JoinForm';

export default function AuthToggleForm() {
  const [activeForm, setActiveForm] = useState('login');

  const handleLoginButtonClick = () => {
    setActiveForm('login');
  };
  const handleJoinButtonClick = () => {
    setActiveForm('join');
  };

  return (
    <S.FormContainer>
      <S.ButtonContainer>
        <S.LoginButton
          onClick={handleLoginButtonClick}
          active={activeForm === 'login'}
        >
          Login
        </S.LoginButton>
        <S.JoinButton
          onClick={handleJoinButtonClick}
          active={activeForm === 'join'}
        >
          Join
        </S.JoinButton>
      </S.ButtonContainer>

      <S.FormContent active={activeForm === 'login'}>
        <LoginForm />
      </S.FormContent>
      <S.FormContent active={activeForm === 'join'}>
        <JoinForm />
      </S.FormContent>
    </S.FormContainer>
  );
}
