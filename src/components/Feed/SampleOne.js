import styled from 'styled-components';

const Sample = styled.div`
  padding: 50px;
  width: 500px;
  background-color: blue;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;

const SampleStyle = {
  padding: '50px',
  width: '500px',
  'background-color': 'blue',
  'border-radius': '50%',
  overflow: 'hidden',
};

function Profile({ imageSource, size }) {
  return (
    <>
      <Sample>
        <SampleStyle>
          <img
            src={imageSource}
            alt="프로필 이미지"
            width={size}
            // style={{ borderRadius: '50%' }}
          />
        </SampleStyle>
      </Sample>
    </>
  );
}

export default Profile;
