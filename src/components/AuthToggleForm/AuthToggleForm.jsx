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
        {/* {activeForm === 'login' ? (
          <S.JoinButton onClick={handleJoinButtonClick}>
            계정 새로 생성하기
          </S.JoinButton>
        ) : (
          <S.LoginButton onClick={handleLoginButtonClick}>
            로그인 하러가기
          </S.LoginButton>
        )} */}

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
          Join Us
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
