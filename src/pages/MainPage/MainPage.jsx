import * as S from './MainPageStyle';
import NavBar from '../../components/NavBar/MainPageNavBar';
import AuthToggleForm from '../../components/Form/AuthToggleForm/AuthToggleForm';
import { ProfileForm } from '../../components/Form/ProfileForm/ProfileForm';
import { useRecoilValue } from 'recoil';
import { weatherState } from '../../atom/atom';

export default function Main() {
  const userId = sessionStorage.getItem('userId');
  const userName = sessionStorage.getItem('userName');
  const weatherInfo = useRecoilValue(weatherState);
  const backgroundImage = weatherInfo.weather
    ? `${process.env.PUBLIC_URL}/images/${weatherInfo.weather}.jpg`
    : `${process.env.PUBLIC_URL}/images/MainPageBackground.png`;

  return (
    <S.MainPageContainer backgroundImage={backgroundImage}>
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
    </S.MainPageContainer>
  );
}
