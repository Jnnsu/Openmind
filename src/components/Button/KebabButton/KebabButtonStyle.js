import styled from 'styled-components';

export const KebabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`;

export const KebabButton = styled.button`
  width: 26px;
  height: 26px;
  background: #fff;
  border: none;
  outline: none;
`;

export const KebabMenu = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20px;
  left: 20px;
  overflow: hidden;

  border-radius: 8px;
  border: 1px solid var(--Grayscale-30);
  background: var(--Grayscale-10);

  /* 1pt */
  box-shadow: var(--Shadow-1pt);
`;

export const KebabMenuItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 500;
  line-height: 18px;
  padding: 6px 16px;
  background: var(--Grayscale-10);
  color: var(--Grayscale-50);
  border: none;
  gap: 8px;

  &:hover {
    color: var(--Grayscale-60);
    background: var(--Grayscale-20);
  }

  &.selected {
    color: var(--Blue-50);
  }

  & img {
    width: 14px;
    height: 14px;
  }
`;
