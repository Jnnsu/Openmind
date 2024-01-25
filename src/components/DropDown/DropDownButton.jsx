import { useState } from 'react';
import * as S from './DropDownButtonStyle';

export default function DropDownButton({ onClick }) {
  const [isOpenDropDownMenu, setIsOpenDropDownMenu] = useState();

  const handlDropDownButtonClick = () => {
    setIsOpenDropDownMenu(!isOpenDropDownMenu);
  };

  return (
    <>
      <S.DropDownContainer>
        <S.Button onClick={handlDropDownButtonClick}>
          <S.DefaultItem isOpenDropDownMenu={isOpenDropDownMenu}>
            이름순
          </S.DefaultItem>
          <img src="./images/Arrow-down.png" alt="아래 방향 화살표" />
        </S.Button>
        {isOpenDropDownMenu && (
          <S.DropDownMenu>
            <S.DropDownItem onClick={onClick}>이름순</S.DropDownItem>
            <S.DropDownItem onClick={onClick}>최신순</S.DropDownItem>
          </S.DropDownMenu>
        )}
      </S.DropDownContainer>
    </>
  );
}
