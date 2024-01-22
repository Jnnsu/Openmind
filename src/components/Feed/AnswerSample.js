import styled from 'styled-components';
import Profile from './ProfileSample';

function Answer({ answer, name, createdAt, content }) {
  return (
    <>
      <AnswerContainer>
        <Profile
          imageSource="https://fastly.picsum.photos/id/345/200/200.jpg?hmac=8FJWKiYOThZ6-UcvLpD_B42M20_KwpSqVMSJ7WFMc4Y"
          size="48px"
        />
        <AnswerRight>
          <ProfileNameAndDate>
            {name}
            {createdAt}
          </ProfileNameAndDate>
          {content}
        </AnswerRight>
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

export default Answer;
