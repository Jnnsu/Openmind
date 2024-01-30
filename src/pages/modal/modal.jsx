import { createPortal } from 'react-dom';
import * as S from './ModalStyle';
import TextArea from '../components/Input/TextArea';

export default function Modal({ handleCloseModal, subjectData }) {
  const [name, imageSource, subjectId] = subjectData;
  const SUBJECT_ID = subjectId;
  const [isTextArea, setIsTextArea] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const onClick = e => {
    // 모달 바깥클릭하면 나가는 이벤트
    if (e.target === e.currentTarget) {
      handleCloseModal(e);
    }
  };

  const handleEnterKey = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      postQuestion();
    }
  };

  const textAreaCheck = e => {
    if (e.target.value !== '') {
      setIsTextArea(true);
    } else {
      setIsTextArea(false);
    }
  };

  const postQuestion = async () => {
    try {
      const response = await axios.post(
        `https://openmind-api.vercel.app/3-3/subjects/${SUBJECT_ID}/questions/`,
        {
          subjectId: SUBJECT_ID.id,
          content: inputValue,
          team: '3-3',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 201) {
        window.location.reload(true);
      }
    } catch (error) {
      console.log("modal's send question", error);
      throw new Error('전송에 실패했습니다.');
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
          <S.ModalProfileUserImageBox>
            <img
              className="ModalProfileUserImage"
              src={imageSource}
              alt="프로필 사진"
            />
          </S.ModalProfileUserImageBox>
          <S.ModalProfileUserId>{name}</S.ModalProfileUserId>
        </S.ModalProfileBox>
        <S.ModalMain>
          <S.ModalMainQuestionArea>
            <TextArea
              onKeyDown={handleEnterKey}
              onChange={e => {
                textAreaCheck(e);
                setInputValue(e.target.value);
              }}
            />
          </S.ModalMainQuestionArea>
          {isTextArea && <S.ModalQuestionExportButton onClick={postQuestion} />}
        </S.ModalMain>
      </S.ModalContents>
    </S.ModalContainer>,
    document.body,
  );
}
