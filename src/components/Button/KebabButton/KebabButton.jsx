import { useState } from 'react';
import { ReactComponent as Edit } from '../../images/Edit.svg';
import { ReactComponent as Rejection } from '../../images/Rejection.svg';
import { ReactComponent as Close } from '../../images/Close.svg';
import * as S from './KebabButtonStyle';

export default function Kebab() {
  const [isOpenKebabMenu, setIsOpenKebabMenu] = useState();
  const [selectedMenuItem, setSelectedMenuItem] = useState();

  const handleKebabButtonOnClick = () => {
    setIsOpenKebabMenu(!isOpenKebabMenu);
  };

  const handleKebabMenuItemOnClick = e => {
    setSelectedMenuItem(e.target.innerText);
  };

  const menuItem = [
    {
      text: '수정하기',
      imagePath: <Edit fill="" />,
      imageBluePath: <Edit fill="var(--Blue-50)" />,
      imageAlt: '수정하기 아이콘',
    },
    {
      text: '질문삭제',
      imagePath: <Close fill="" />,
      imageBluePath: <Close fill="var(--Blue-50)" />,
      imageAlt: '질문삭제 아이콘',
    },
    {
      text: '답변거절',
      imagePath: <Rejection fill="" />,
      imageBluePath: <Rejection fill="var(--Blue-50)" />,
      imageAlt: '답변거절 아이콘',
    },
  ];
  const menuItemClassName = [];

  menuItem.forEach(element => {
    if (element === selectedMenuItem) {
      menuItemClassName.push('selected');
    } else {
      menuItemClassName.push('');
    }
  });

  return (
    <S.KebabContainer>
      <S.KebabButton onClick={handleKebabButtonOnClick}>
        <img src="./images/More.png" alt="케밥 이미지" />
      </S.KebabButton>
      {isOpenKebabMenu && (
        <S.KebabMenu>
          {menuItem.map(element => {
            let className = '';
            let image = element.imagePath;
            if (element.text === selectedMenuItem) {
              className = 'selected';
              image = element.imageBluePath;
            }
            return (
              <S.KebabMenuItem
                className={className}
                onClick={handleKebabMenuItemOnClick}
              >
                {image}
                <span>{element.text}</span>
              </S.KebabMenuItem>
            );
          })}
        </S.KebabMenu>
      )}
    </S.KebabContainer>
  );
}
