import * as S from './BadgeButtonStyle';

function Modal() {
  return;
  <modalContainer>
    <modalContents>
      <modalHeader>
        <modalHeaderimage />
        <modalHeaderText>질문을 작성하세요</modalHeaderText>
        <modalCloseButton>
          <modalCloseImage />
        </modalCloseButton>
      </modalHeader>
      <modalMain>
        <modalMainTo>
          <modalMainToProfile />
          <modalMainToId />
        </modalMainTo>
        <modalMainQuestionArea>
          <modalMainQuestionAreaText />
        </modalMainQuestionArea>
      </modalMain>
      <modalQuestionExportButton />
    </modalContents>
  </modalContainer>;
}

export default Modal;
