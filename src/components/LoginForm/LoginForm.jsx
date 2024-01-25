import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginformStyle';
import Field from '../Input/Field';
import FillBoxButton from '../Button/FillBoxButton/FillBoxButton';
import { postUserData } from '../../api/api';

export default function LoginForm() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const userData = {
    name: userName,
  };

  const handleUserNameChange = e => {
    setUserName(e.target.value);
  };

  const handleLoginButtonSubmit = async e => {
    e.preventDefault();

    console.log(userData);

    try {
      const userDataResponse = await postUserData(userData);
      console.log('Server Response:', userDataResponse);
      const userId = userDataResponse?.id;

      if (userDataResponse && userId) {
        window.sessionStorage.setItem('userId', userId);
        navigate(`/post/${userDataResponse.id}/answer`);
      } else {
        console.error('No id received from server');
      }
    } catch (error) {
      console.error('Error during postUserData:', error);
    }
  };

  return (
    <S.LoginForm onSubmit={handleLoginButtonSubmit}>
      <Field value={userName} onChange={handleUserNameChange} />
      <FillBoxButton type="submit">질문 받기</FillBoxButton>
    </S.LoginForm>
  );
}
