import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.56);
  flex-shrink: 0;
`;

export const ModalContents = styled.div`
  width: 612px;
  height: 454px;
  flex-shrink: 0;
  border-radius: 24px;
  box-shadow: var(--Shadow-3pt);
  background: var(--GrayScale-10);
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 532px;
  justify-content: space-between;
  align-items: center;
`;

export const ModalHeaderTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 16px;

  & .messageIcon {
    width: 28px;
    height: 28px;
  }

  & .questionMent {
    font-size: 1.5rem;
    line-height: 30px;
    font-family: Actor;
    color: var(--Grayscale-60);
  }

  & .CloseButton {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }
`;

export const ModalProfileBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  & .ModalProfileTo {
    line-height: 24px;
    font-size: 18px;
    font-family: Actor;
    color: var(--Grayscale-60);
  }

  & .ModalProfileUserId {
    font-family: Pretendard;
    color: var(--Grayscale-60);
    line-height: 22px;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const ModalProfileUserImageBox = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;

  & .ModalProfileUserImage {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 28px;
  }
`;

export const ModalMain = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const ModalMainQuestionArea = styled.div`
  display: flex;
  width: 532px;
  height: 180px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--Grayscale-20);
`;

export const ModalMainQuestionAreaText = styled.div`
  flex: 1 0 0;
  align-self: stretch;
  color: var(--Grayscale-40);
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  &::placeholder {
    color: var(--Grayscale-40);
    opacity: 0.5;
  }
`;

export const ModalQuestionExportButton = styled.button`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Brown-30);

  color: var(--Grayscale-10);
  font-family: Pretendard;
  line-height: 22px;
`;
