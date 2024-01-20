import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ShareBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 12px;
`;

const SharedButton = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 200px;
  cursor: pointer;
`;

const LinkButton = styled(SharedButton)`
  background: var(--Brown-40);
`;

const KakaotalkButton = styled(SharedButton)`
  background: var(--Yellow-50);
`;

const FacebookButton = styled(SharedButton)`
  background: var(--Blue-50);
`;

const ShareImage = styled.button`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
`;

const LinkImage = styled(ShareImage)`
  background: url('./images/Link-icon.png') no-repeat center center;
`;

const KakaoImage = styled(ShareImage)`
  background: url('./images/kakao-icon.png') no-repeat center center;
`;

const FacebookImage = styled(ShareImage)`
  background: url('./images/facebook-icon.png') no-repeat center center;
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
  background-color: var(--Grayscale-60);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--Grayscale-10);
  box-shadow: var(--Shadow-2pt);

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
    } //애니메이션 => 살살 사라지게.... 다른거 다 완성후 추가적으로 효과 넣어보자.
  }, [isOpenToast]);

  return (
    <ShareBox>
      <LinkButton onClick={handleToast}>
        <LinkImage src="./images/Link-icon.png" alt="링크아이콘" />
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
