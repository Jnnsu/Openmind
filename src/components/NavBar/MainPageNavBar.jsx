import * as S from './MainPageNavBarStyle';
import OutlineBoxButton from '../../components/Button/OutlineBoxButton/OutlineBoxButton';
import { useNavigate } from 'react-router-dom';
import Weather from '../Weather/Weather';

export default function NavBar() {
  const navigate = useNavigate();

  const handleQuestionButtonClick = () => {
    navigate('/list');
  };

  return (
    <S.NavBar>
      <Weather />
      <OutlineBoxButton
        appendix={
          <img
            src={`${process.env.PUBLIC_URL}/images/arrow-right-icon.png`}
            alt="화살표"
            width="18"
          />
        }
        onClick={handleQuestionButtonClick}
      >
        질문하러 가기
      </OutlineBoxButton>
    </S.NavBar>
  );
}
