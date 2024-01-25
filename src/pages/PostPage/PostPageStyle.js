import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 1199px) {
    padding: 0 32px;
  }
`;

export const ObserveTargetBox = styled.div`
  width: 100%;
  height: 120px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  width: 684px;
  margin-bottom: 9px;
`;

export const DeleteButton = styled.button`
  padding: 8px 24px;
  border-radius: 200px;
  flex-shrink: 0;
  background: var(--brown40);
  color: white;
  font-family: Actor;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 684px;
  margin-top: 54px;
  padding: 16px;
  border: 1px solid var(--brown30);
  border-radius: 16px;
  background: var(--brown10);
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const CountIcon = styled.img`
  width: 24px;
  height: 24px;
  color: var(--brown40);
`;

export const CountContent = styled.div`
  font-family: Actor;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  color: var(--brown40);
`;

export const WriteButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 12px 28px;
  flex-shrink: 0;
  border-radius: 200px;
  background: ${({ theme }) => theme.button.button2};
  color: white;
  font-family: Actor;
  font-size: 20px;
  line-height: 25px;
  box-shadow: var(--shadow-2pt);
`;