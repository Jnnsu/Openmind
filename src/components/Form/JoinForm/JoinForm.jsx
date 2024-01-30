import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserData } from '../../../api/api';
import { TEAM } from '../../../constants';
import FillBoxButton from '../../Button/FillBoxButton/FillBoxButton';
import * as S from './JoinFornStyle';

export default function JoinForm() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const userData = {
    name: userName,
    team: TEAM,
  };

  const handleUserNameInputChange = e => {
    setUserName(e.target.value);
  };

  const handleJoinFormSubmit = async e => {
    e.preventDefault();

    if (userName === '') {
      alert('이름을 입력해주세요');
      return;
    }

    try {
      const userDataResponse = await setUserData(userData);
      console.log('Server Response:', userDataResponse);
      const userId = userDataResponse?.id;
      alert(`당신의 UserID는 ${userId}입니다. 반드시 기억해주세요!`);

      if (userId) {
        window.sessionStorage.setItem('userId', userId);
        navigate(`/post/${userId}/answer`);
        return;
      }
      if (!userId) {
        console.error('No id received from server');
        return;
      }
    } catch (error) {
      console.error('Error during postUserData:', error);
    }
  };

  return (
    <S.JoinForm onSubmit={handleJoinFormSubmit}>
      <S.InputGroup>
        <S.InputIcon src="./images/Person.png" alt="사람 아이콘" />
        <S.Input
          value={userName}
          onChange={handleUserNameInputChange}
          placeholder="Username"
          type="text"
          id="username"
          required
        />
        <S.Label htmlFor="username">Username</S.Label>
      </S.InputGroup>
      <FillBoxButton type="submit">새로 생성하기</FillBoxButton>
    </S.JoinForm>
  );
}
