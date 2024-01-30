import styled from 'styled-components';
import FillBoxButton from '../../components/Button/FillBoxButton/FillBoxButton';

export const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.56);
  flex-shrink: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalContents = styled.div`
  width: 612px;
  height: 454px;
  flex-shrink: 0;
  border-radius: 24px;
  box-shadow: var(--Shadow-3pt);
  background: var(--Grayscale-10);
`;

export const ModalHeader = styled.div`
  display: flex;
  /* width: 532px; */
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  /* display: flex;
  /* width: 100%; */
  /* justify-content: center; */
  /* align-items: center;
  padding: 20px;  */
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
    color: var(--Grayscale-60, #000);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 125% */
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
  padding: 0 0 14px 40px;

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
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 40px 0 40px;
`;

export const ModalMainQuestionArea = styled.textarea`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background: var(--Grayscale-20);
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

export const ModalQuestionExportButton = styled(FillBoxButton)`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* align-self: stretch; */
  border-radius: 8px;
  background: var(--Brown-30);

  color: var(--Grayscale-10);
  font-family: Pretendard;
  line-height: 22px;
`;
