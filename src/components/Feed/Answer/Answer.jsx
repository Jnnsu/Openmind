import * as S from './AnswerStyle';
import Profile from './Profile';
import TextArea from '../Input/TextArea';

export default function Answer({ answer, name, createdAt }) {
  const answerContent = answer || `답변을 입력해 주세요.`;
  const profileName = '이름이래요~';
  return (
    <>
      <S.AnswerContainer>
        <Profile imageSource="https://fastly.picsum.photos/id/345/200/200.jpg?hmac=8FJWKiYOThZ6-UcvLpD_B42M20_KwpSqVMSJ7WFMc4Y" />
        <S.AnswerRight>
          <S.ProfileNameAndDate>
            {/* {name} */}
            <S.ProfileName>{profileName}</S.ProfileName>
            {/* {createdAt} */}
            <S.ProfileDate>2주전</S.ProfileDate>
          </S.ProfileNameAndDate>
        </S.AnswerRight>{' '}
      </S.AnswerContainer>
    </>
  );
}
