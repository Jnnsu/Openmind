import styled from 'styled-components';

export const DropDownContainer = styled.div`
  /* width: 500px; */
  display: flex;
  justify-content: center;
  /* padding: 40px; */
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 500;
  background: var(--Grayscale-10);
  border: ${props =>
    props.IsOpenDropDownMenu
      ? '1px solid var(--Grayscale-60)'
      : '1px solid var(--Grayscale-40)'};
  border-radius: 8px;
  color: ${props =>
    props.IsOpenDropDownMenu ? 'var(--Grayscale-60)' : 'var(--Grayscale-40)'};
  padding: 8px 12px;
  cursor: pointer;
  gap: 4px;

  img {
    width: 14px;
  }
`;

export const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20rem;
  border: 1px solid var(--Grayscale-30);
  border-radius: 8px;
  box-shadow: var(--Shadow-1pt);
  width: 79px;
  font-size: 0.875rem;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-weight: 500;
  color: var(--Grayscale-50);
  overflow: hidden;
`;

export const DropDownItem = styled.button`
  padding: 6px 16px;
  background: var(--Grayscale-10);
  color: var(--Grayscale-50);
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--Blue-50);
  }
`;

export const DefaultItem = styled.div`
  font-size: 14px;
  ${props => props.IsOpenDropDownMenu && `color: var(--Grayscale-60)`}
`;
