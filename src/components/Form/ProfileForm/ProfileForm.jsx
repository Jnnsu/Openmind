import { useNavigate } from 'react-router-dom';
import FillBoxButton from '../../Button/FillBoxButton/FillBoxButton';
import * as S from './ProfileFormStyle';

export const ProfileForm = ({ userId, userName }) => {
  const navigate = useNavigate();

  const handleAnswerButtonClick = () => {
    navigate(`/post/${userId}/answer`);
  };

  const handleLogoutButtonClick = () => {
    window.sessionStorage.removeItem('userId');
    window.sessionStorage.removeItem('userName');
    window.location.reload();
  };

  return (
    <S.ProfileContainer>
      <p>
        <span>{userName}</span>님 환영합니다!
      </p>
      <S.ButtonContainer>
        <FillBoxButton type="submit" onClick={handleAnswerButtonClick}>
          질문 받기
        </FillBoxButton>
        <FillBoxButton type="submit" onClick={handleLogoutButtonClick}>
          로그아웃
        </FillBoxButton>
      </S.ButtonContainer>
    </S.ProfileContainer>
  );
};
