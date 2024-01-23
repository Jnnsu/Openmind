import styled from 'styled-components';

export default function FloatingButton({ ButtonName }) {
  return <FloatButton>{ButtonName}</FloatButton>;
}

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
