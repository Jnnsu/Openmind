import styled from 'styled-components';

export const ShareBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 12px;
`;

export const SharedButton = styled.div`
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

export const LinkButton = styled(SharedButton)`
  background: var(--Brown-40);
`;

export const KakaotalkButton = styled(SharedButton)`
  background: var(--Yellow-50);
`;

export const FacebookButton = styled(SharedButton)`
  background: var(--Blue-50);
`;

export const ShareImage = styled.button`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
`;

export const LinkImage = styled(ShareImage)`
  background: url('/images/Link-icon.png') no-repeat center center;
`;

export const KakaoImage = styled(ShareImage)`
  background: url('/images/kakao-icon.png') no-repeat center center;
`;

export const FacebookImage = styled(ShareImage)`
  background: url('/images/facebook-icon.png') no-repeat center center;
`;

export const ToastStyle = styled.div`
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
