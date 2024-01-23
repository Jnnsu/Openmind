import styled from 'styled-components';
import Profile from './Profile';
import TextArea from '../Input/TextArea';

export default function Answer({ answer, name, createdAt }) {
  const answerContent = answer || `답변을 입력해 주세요.`;
  const profileName = '이름이래요~';
  return (
    <>
      <AnswerContainer>
        <Profile imageSource="https://fastly.picsum.photos/id/345/200/200.jpg?hmac=8FJWKiYOThZ6-UcvLpD_B42M20_KwpSqVMSJ7WFMc4Y" />
        <AnswerRight>
          <ProfileNameAndDate>
            {/* {name} */}
            <ProfileName>{profileName}</ProfileName>
            {/* {createdAt} */}
            <ProfileDate>2주전</ProfileDate>
          </ProfileNameAndDate>
        </AnswerRight>{' '}
      </AnswerContainer>
    </>
  );
}

const AnswerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const ProfileNameAndDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;

const AnswerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`;

const ProfileName = styled.div`
  font-size: 18px;
`;

const ProfileDate = styled.div`
  font-size: 14px;
  color: var(--Grayscale-40);
`;

const AnswerContent = styled.div`
  font-size: 16px;
`;
