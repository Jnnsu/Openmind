import styled from 'styled-components';

const FloatButton = styled.button`
  display: flex;
  gap: 8px;
  width: 208px;
  height: 54px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  border: none;
  background: var(--Brown-40);
  font-size: 20px;
  color: var(--Grayscale-10);
  box-shadow: var(--Shadow-2pt);
  cursor: pointer;
`;

function FloatingButton() {
  return <FloatButton>질문 작성하기</FloatButton>;
}

export default FloatingButton;
