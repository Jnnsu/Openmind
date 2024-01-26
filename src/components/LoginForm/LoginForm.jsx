import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserData, getUserDataList } from '../../api/api';
import TEAM from '../../constants';
import Field from '../Input/Field';
import FillBoxButton from '../Button/FillBoxButton/FillBoxButton';
import * as S from './LoginformStyle';

export default function LoginForm() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const userData = {
    name: userName,
    team: TEAM,
  };

  const handleUserNameChange = e => {
    setUserName(e.target.value);
  };

  const handleLoginButtonSubmit = async e => {
    e.preventDefault();

    // const userDataList = await getUserDataList();
    // if (userName === userDataList.name) {
    //   alert('이미 사용중인 이름입니다.')

    //   return;
    // }

    try {
      const userDataResponse = await setUserData(userData);
      console.log('Server Response:', userDataResponse);
      const userId = userDataResponse?.id;

      if (userId) {
        window.sessionStorage.setItem('userId', userId);
        navigate(`/post/${userId}/answer`);
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
