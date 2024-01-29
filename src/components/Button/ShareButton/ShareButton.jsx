import { useEffect, useState } from 'react';
import * as S from './ShareButtonStyle';
import { copyClipBoard } from '../../../utils/copyClipBoard';

const handleCopyClipBoard = () => {
  copyClipBoard(window.location.href);
};

export default function ShareButton() {
  const [isOpenToast, setIsOpenToast] = useState(false);
  const { Kakao } = window;
  const deployedUrl = '배포된 사이트 주소';

  const handleToast = () => {
    setIsOpenToast(true);
    handleCopyClipBoard();
  };

  const handleKakaotalkButtonOnClick = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '카카오톡 공유',
        description: '카카오톡 공유',
        imageUrl: '',
        link: {
          mobileWebUrl: window.location.href, // deployedUrl
          webUrl: window.location.href, // deployedUrl
        },
      },
      buttons: [
        {
          title: '카카오톡 공유 확인하러 가기',
          link: {
            mobileWebUrl: window.location.href, // deployedUrl
            webUrl: window.location.href, // deployedUrl
          },
        },
      ],
    });
  };

  const handleFacebookButtonOnClick = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
  };

  useEffect(() => {
    // Kakao.cleanup();
    // Kakao.init(process.env.REACT_APP_KAKAOSHARE_API_KEY);

    if (isOpenToast) {
      setTimeout(() => setIsOpenToast(false), 3000);
    }
  }, [Kakao, isOpenToast]);

  return (
    <S.ShareBox>
      <S.LinkButton onClick={handleToast}>
        <S.LinkImage src="./images/Link-icon.png" alt="링크아이콘" />
        {isOpenToast && <S.ToastStyle>URL이 복사되었습니다</S.ToastStyle>}
      </S.LinkButton>
      <S.KakaotalkButton onClick={handleKakaotalkButtonOnClick}>
        <S.KakaoImage src="./images/kakao-icon.png" alt="카카오아이콘" />
      </S.KakaotalkButton>
      <S.FacebookButton onClick={handleFacebookButtonOnClick}>
        <S.FacebookImage src="./images/facebook.png" alt="페이스북아이콘" />
      </S.FacebookButton>
    </S.ShareBox>
  );
}
