import { createPortal } from 'react-dom';
import * as S from './ModalStyle';
import TextArea from '../components/Input/TextArea';
import profileImage from '../components/ProfileImage/ProfileImage';

export default function Modal(
  id = '임시 유저 아이디',
  imageSource = '../images/image6.png',
  handleCloseModal,
) {
  const onClick = e => {
    // 모달 바깥클릭하면 나가는 이벤트
    if (e.target === e.currentTarget) {
      handleCloseModal(e);
    }
  };

  return createPortal(
    <S.ModalContainer onClick={onClick}>
      <S.ModalContents>
        <S.ModalHeader>
          <S.ModalHeaderTitleBox>
            <img
              className="messagesIcon"
              src="/images/Messages.svg"
              alt="메세지 아이콘"
            />
            <div className="questionMent">질문을 작성하세요.</div>
          </S.ModalHeaderTitleBox>
          <img
            className="CloseButton"
            onClick={e => handleCloseModal(e)}
            src="./images/Close.svg"
            alt="close icon"
          />
        </S.ModalHeader>
        <S.ModalProfileBox>
          <S.ModalProfileTo className="ModalProfileTo">To.</S.ModalProfileTo>
          {/* <S.ModalProfileUserImageBox> */}
          {/* 유저 사진은 어떻게 할지 아직 안정함.... */}
          {/* <img
              className="ModalProfileUserImage"
              src="/images/image6.png"
              alt="임시 유저 사진"
            />
            <profileImage imageSource={imageSource} />
          </S.ModalProfileUserImageBox> */}
          <S.ModalProfileUserId>{id}</S.ModalProfileUserId>
        </S.ModalProfileBox>
        <S.ModalMain>
          <S.ModalMainQuestionArea>
            <TextArea />
          </S.ModalMainQuestionArea>
          <S.ModalQuestionExportButton />
        </S.ModalMain>
      </S.ModalContents>
    </S.ModalContainer>,
    document.body,
  );
}
