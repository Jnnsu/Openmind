import * as S from './MainPageStyle';
import NavBar from '../../components/NavBar/MainPageNavBar';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function Main() {
  return (
    <S.MainPageContainer>
      <NavBar />
      <S.LogoImage
        src={`${process.env.PUBLIC_URL}/images/logo.svg`}
        alt="OPENMIND 로고"
      />
      <LoginForm />
      <S.BackgroundImage
        src={`${process.env.PUBLIC_URL}/images/mainPageBackground.png`}
        alt="메인 패이지 배경 그림"
      />
    </S.MainPageContainer>
  );
}
