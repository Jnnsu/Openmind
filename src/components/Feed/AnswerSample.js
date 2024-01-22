import styled from 'styled-components';
import Profile from './ProfileSample';

function Answer({ answer, name, createdAt }) {
  const answerContent =
    answer ||
    `그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다.
            찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를
            청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에
            피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은
            방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다.
            이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃
            보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은 피다. 피가
            그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는
            봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다.`;
  return (
    <>
      <AnswerContainer>
        <Profile imageSource="https://fastly.picsum.photos/id/345/200/200.jpg?hmac=8FJWKiYOThZ6-UcvLpD_B42M20_KwpSqVMSJ7WFMc4Y" />
        <AnswerRight>
          <ProfileNameAndDate>
            {/* {name} */}
            <ProfileName>김준형바보</ProfileName>
            {/* {createdAt} */}
            <ProfileDate>2주전</ProfileDate>
          </ProfileNameAndDate>
          {/* {answer} */}
          <AnswerContent>{answerContent}</AnswerContent>
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

export default Answer;
