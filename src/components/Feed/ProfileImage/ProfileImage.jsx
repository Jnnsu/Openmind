import * as S from './ProfileImageStyle';

export default function ProfileImage({ imageSource, size }) {
  return (
    <>
      <S.ImageContainer>
        <img src={imageSource} alt="프로필 이미지" width={size} height={size}/>
      </S.ImageContainer>
    </>
  );
}
