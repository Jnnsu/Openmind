import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserDataList } from '../../api/api';
import FillBoxButton from '../Button/FillBoxButton/FillBoxButton';
import * as S from './LoginformStyle';

export default function LoginForm() {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleUserNameInputChange = e => {
    setUserName(e.target.value);
  };

  const handleUserIdInputChange = e => {
    setUserId(e.target.value);
  };

  const handleLoginFormSubmit = async e => {
    e.preventDefault();

    if (userName === '') {
      alert('이름을 입력해주세요');
      return;
    }
    if (userId === '') {
      alert('id를 입력해주세요');
      return;
    }

    try {
      const response = await getUserDataList();
      const userDataList = response.results;

      // DB에는 id가 숫자, input은 문자열이므로 userId를 숫자로 변환
      const numericUserId = parseInt(userId, 10);

      const user = userDataList.find(
        user => user.id === numericUserId && user.name === userName,
      );

      if (user) {
        window.sessionStorage.setItem('userId', userId);
        navigate(`/post/${userId}/answer`);
        return;
      }
      if (!user) {
        alert('일치하는 사용자가 없습니다.');
        return;
      }
    } catch (error) {
      console.error('Error during postUserData:', error);
    }
  };

  return (
    <div>
      <S.LoginForm onSubmit={handleLoginFormSubmit}>
        <S.InputGroup>
          <S.InputIcon
            src="./images/Person.png"
            alt="사람 아이콘"
            fill="none"
          />
          <S.Input
            value={userName}
            onChange={handleUserNameInputChange}
            placeholder="Username"
            type="text"
            id="username"
          />
          <S.Label htmlFor="username">Username</S.Label>
        </S.InputGroup>

        <S.InputGroup>
          <S.InputIcon
            src={`${process.env.PUBLIC_URL}/images/lock.svg`}
            alt="id 아이콘"
          />
          <S.Input
            value={userId}
            onChange={handleUserIdInputChange}
            placeholder="UserID"
            type="password"
            id="userid"
          />
          <S.Label htmlFor="userid">UserID</S.Label>
        </S.InputGroup>

        <FillBoxButton type="submit">질문 받기</FillBoxButton>
      </S.LoginForm>
    </div>
  );
}
