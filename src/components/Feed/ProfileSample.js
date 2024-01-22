import styled from 'styled-components';
// import './ProfileSample.css';

const SampleStyle = styled.p`
  display: flex;
  flex-direction: column;

  img {
    width: 48px;
    border-radius: 50%;
  }
`;

function Profile({ imageSource, size }) {
  return (
    <>
      <SampleStyle className="SampleName">
        <img src={imageSource} alt="프로필 이미지" />
      </SampleStyle>
    </>
  );
}

export default Profile;
