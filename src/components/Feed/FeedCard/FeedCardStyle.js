import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  padding: 32px;
  border-radius: 16px;
  box-shadow: var(--Shadow-1pt);
  background: white;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuestionTime = styled.div`
  color: var(--Grayscale-40);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const QuestionContent = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const AnswerContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

export const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  width: 120;
`;

export const AnswerProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AnswerName = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const AnswerDate = styled.div`
  color: var(--Grayscale-40);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const AnsweredContent = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const RefuseContent = styled.div`
  color: var(--red);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const Foooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 18px;
  border-top: 1px solid var(--Grayscale-30);
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 32px;
`;

export const ProfileImage = styled.div`
  width: 49px;
  height: 49px;
`;