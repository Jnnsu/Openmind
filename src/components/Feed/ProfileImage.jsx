import styled from 'styled-components';

export default function ProfileImage({ imageSource }) {
  return (
    <>
      <ImageContainer>
        <img src={imageSource} alt="프로필 이미지" />
      </ImageContainer>
    </>
  );
}

const ImageContainer = styled.div`
  img {
    border-radius: 50%;
  }
`;
