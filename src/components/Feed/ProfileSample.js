import styled from 'styled-components';
// import './ProfileSample.css';

const SampleStyle = styled.p`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
`;

function Profile({ imageSource, size }) {
  return (
    <>
      <SampleStyle className="SampleName">
        <img
          src={imageSource}
          alt="프로필 이미지"
          width={size}
          // style={{ borderRadius: '50%' }}
        />
        <img
          src={imageSource}
          alt="프로필 이미지"
          width={size}
          // style={{ borderRadius: '50%' }}
        />
        <img
          src={imageSource}
          alt="프로필 이미지"
          width={size}
          // style={{ borderRadius: '50%' }}
        />
        <img
          src={imageSource}
          alt="프로필 이미지"
          width={size}
          // style={{ borderRadius: '50%' }}
        />
      </SampleStyle>
    </>
  );
}

export default Profile;
