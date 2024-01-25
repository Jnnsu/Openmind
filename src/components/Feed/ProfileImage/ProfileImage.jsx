import * as S from './ProfileImageStyle';

export default function ProfileImage({ imageSource }) {
  return (
    <>
      <S.ImageContainer>
        <img src={imageSource} alt="프로필 이미지" />
      </S.ImageContainer>
    </>
  );
}
