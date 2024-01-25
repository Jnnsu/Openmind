import { useEffect, useState } from 'react';
import * as S from './ShareButtonStyle';
import { copyClipBoard } from '../../../utils/copyClipBoard';

const handleCopyClipBoard = () => {
  copyClipBoard(window.location.href);
};

export default function ShareButton() {
  const [isOpenToast, setIsOpenToast] = useState(false);

  const handleToast = () => {
    setIsOpenToast(true);
    handleCopyClipBoard();
  };
  useEffect(() => {
    if (isOpenToast) {
      setTimeout(() => setIsOpenToast(false), 3000);
    }
  }, [isOpenToast]);

  return (
    <S.ShareBox>
      <S.LinkButton onClick={handleToast}>
        <S.LinkImage src="./images/Link-icon.png" alt="링크아이콘" />
        {isOpenToast && <S.ToastStyle>URL이 복사되었습니다</S.ToastStyle>}
      </S.LinkButton>
      <S.KakaotalkButton>
        <S.KakaoImage src="./images/kakao-icon.png" alt="카카오아이콘" />
      </S.KakaotalkButton>
      <S.FacebookButton>
        <S.FacebookImage src="./images/facebook.png" alt="페이스북아이콘" />
      </S.FacebookButton>
    </S.ShareBox>
  );
}
