import { useState } from 'react';
import * as S from './DropDownButtonStyle';

export default function DropDownButton({ sortOption, onSortOptionChange }) {
  const [isOpenDropDownMenu, setIsOpenDropDownMenu] = useState(false);

  const handlDropDownButtonClick = () => {
    setIsOpenDropDownMenu(!isOpenDropDownMenu);
  };

  const handleSortOption = option => {
    setIsOpenDropDownMenu(false);
    onSortOptionChange(option);
  };

  return (
    <>
      <S.DropDownContainer>
        <S.Button isOpenDropDownMenu onClick={handlDropDownButtonClick}>
          <S.DefaultItem isOpenDropDownMenu={isOpenDropDownMenu}>
            {sortOption === 'name' ? '이름순' : '최신순'}
          </S.DefaultItem>
          {isOpenDropDownMenu === false ? (
            <img src="./images/Arrow-down.png" alt="아래 방향 화살표" />
          ) : (
            <img src="./images/Arrow-up.png" alt="위 방향 화살표" />
          )}
        </S.Button>
        {isOpenDropDownMenu && (
          <S.DropDownMenu>
            <S.DropDownItem onClick={() => handleSortOption('name')}>
              이름순
            </S.DropDownItem>
            <S.DropDownItem onClick={() => handleSortOption('createdAt')}>
              최신순
            </S.DropDownItem>
          </S.DropDownMenu>
        )}
      </S.DropDownContainer>
    </>
  );
}
