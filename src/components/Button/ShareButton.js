import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ShareBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 12px;
`;

const LinkImage = styled.button`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  background: url('./images/Link-icon.png') no-repeat center center;
  border: none;
`;

const LinkButton = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 200px;
  background: ${props => props.theme.colorList['--Brown-40']};
`;

const KakaotalkButton = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 200px;
  background: ${props => props.theme.colorList['--Yellow-50']};
`;

const KakaoImage = styled.button`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  background: url('./images/kakao-icon.png') no-repeat center center;
  border: none;
`;

const FacebookButton = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 200px;
  background: ${props => props.theme.colorList['--Blue-50']};
`;

const FacebookImage = styled.button`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  background: url('./images/facebook-icon.png') no-repeat center center;
  border: none;
`;

const ToastStyle = styled.div`
  z-index: 90;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 20px;
  border-radius: 8px;
  background-color: ${props => props.theme.colorList['--Grayscale-60']};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${props => props.theme.colorList['--Grayscale-10']};
  box-shadow: ${props => props.theme.shadowList['--Shadow-2pt']};

  @media (max-width: 767px) {
    bottom: 100px;
  }
`;

const handleCopyClipBoard = async () => {
  const currentURL = window.location.href;

  try {
    await navigator.clipboard.writeText(currentURL);
  } catch (error) {
    console.log(error);
  }
};

function ShareButton() {
  const [isOpenToast, setIsOpenToast] = useState(false);

  const handleToast = () => {
    setIsOpenToast(true);
    handleCopyClipBoard();
    console.log(isOpenToast);
  };
  useEffect(() => {
    if (isOpenToast) {
      setTimeout(() => setIsOpenToast(false), 3000);
    } //에니메이션 => 살살 사라지게....
  }, [isOpenToast]);

  return (
    <ShareBox>
      <LinkButton>
        <LinkImage
          onClick={handleToast}
          src="./images/Link-icon.png"
          alt="링크아이콘"
        />
        {isOpenToast && <ToastStyle>URL이 복사되었습니다</ToastStyle>}
      </LinkButton>
      <KakaotalkButton>
        <KakaoImage src="./images/kakao-icon.png" alt="카카오아이콘" />
      </KakaotalkButton>
      <FacebookButton>
        <FacebookImage src="./images/facebook.png" alt="페이스북아이콘" />
      </FacebookButton>
    </ShareBox>
  );
}

export default ShareButton;
