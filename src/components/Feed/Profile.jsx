import styled from 'styled-components';

export default function ProfileImage({ imageSource, size }) {
  return (
    <>
      <ImageContainer>
        <img src={imageSource} alt="프로필 이미지" width={size} />
      </ImageContainer>
    </>
  );
}

const ImageContainer = styled.div`
  img {
    border-radius: 50%;
  }
`;
