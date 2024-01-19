import styled from 'styled-components';

const ProfileImage = styled.div`
  width: 48px;
  border-radius: 50%;
`;

function Profile(imageSource, size) {
  return (
    <ProfileImage>
      <img src={imageSource} alt="asd" width={size}></img>
    </ProfileImage>
  );
}

export default Profile;
