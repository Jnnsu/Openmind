import { useState } from 'react';
import styled from 'styled-components';

const DropDownContainer = styled.div`
  width: 500px;
  padding: 40px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;
  background: ${props => props.theme.colorList['--Grayscale-10']};
  border: 1px solid ${props => props.theme.colorList['--Grayscale-40']};
  border-radius: 8px;
  color: ${props => props.theme.colorList['--Grayscale-40']};
  padding: 8px 12px;

  &:active {
    color: ${props => props.theme.colorList['--Grayscale-60']};
  }
`;

const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.colorList['--Grayscale-30']};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadowList['--Shadow-1pt']};
  width: 79px;
  font-size: 1.4rem;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-weight: 500;
  color: ${props => props.theme.colorList['--Grayscale-50']};
  overflow: hidden;
`;

const DropDownItem = styled.button`
  padding: 6px 16px;
  background: ${props => props.theme.colorList['--Grayscale-10']};
  color: ${props => props.theme.colorList['--Grayscale-60']};
  border: none;

  &:hover {
    color: ${props => props.theme.colorList['--Blue-50']};
  }
`;

const DefaultItem = styled.div`
  font-size: 14px;
  ${props =>
    props.IsOpenDropDownMenu &&
    `color: ${props.theme.colorList['--Grayscale-60']}`}
`;

function DropDownButton({ onClick }) {
  const [isOpenDropDownMenu, setIsOpenDropDownMenu] = useState();

  const handlDropDownButtonClick = () => {
    setIsOpenDropDownMenu(!isOpenDropDownMenu);
  };

  return (
    <>
      <DropDownContainer>
        <Button onClick={handlDropDownButtonClick}>
          <DefaultItem isOpenDropDownMenu={isOpenDropDownMenu}>
            이름순
          </DefaultItem>
          <img src="./images/Arrow-down.png" alt="아래 방향 화살표" />
        </Button>
        {isOpenDropDownMenu && (
          <DropDownMenu>
            <DropDownItem onClick={onClick}>이름순</DropDownItem>
            <DropDownItem onClick={onClick}>최신순</DropDownItem>
          </DropDownMenu>
        )}
      </DropDownContainer>
    </>
  );
}

export default DropDownButton;
