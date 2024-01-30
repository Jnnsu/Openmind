import { useNavigate } from 'react-router-dom';
import * as S from './MainPageStyle';
import NavBar from '../../components/NavBar/MainPageNavBar';
import AuthToggleForm from '../../components/Form/AuthToggleForm/AuthToggleForm';
import { ProfileForm } from '../../components/Form/ProfileForm/ProfileForm';
import { useEffect, useState } from 'react';

export default function Main() {
  // const [userId, setUserId] = useState('');
  // const [userName, setUserName] = useState('');
  const userId = sessionStorage.getItem('userId');
  const userName = sessionStorage.getItem('userName');

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const storedUserId = sessionStorage.getItem('userId');
  //   const storedUserName = sessionStorage.getItem('userName');

  //   if (storedUserId && storedUserName) {
  //     setUserId(storedUserId);
  //     setUserName(storedUserName);
  //   }
  // }, [navigate]);

  return (
    <S.MainPageContainer>
      <NavBar />
      <S.LogoImage
        src={`${process.env.PUBLIC_URL}/images/logo.svg`}
        alt="OPENMIND 로고"
      />
      {userId && userName ? (
        <ProfileForm userId={userId} userName={userName} />
      ) : (
        <AuthToggleForm />
      )}
      <S.BackgroundImage
        src={`${process.env.PUBLIC_URL}/images/mainPageBackground.png`}
        alt="메인 패이지 배경 그림"
      />
    </S.MainPageContainer>
  );
}
