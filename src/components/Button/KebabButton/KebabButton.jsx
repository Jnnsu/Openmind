import { useState } from 'react';
import * as S from './KebabButtonStyle';

export default function Kebab({ menuItem, question }) {
  const [isOpenKebabMenu, setIsOpenKebabMenu] = useState();
  const [selectedMenuItem, setSelectedMenuItem] = useState();
  const [dropLeft, setDropLeft] = useState();
  const [isReject, setIsReject] = useState();

  const handleKebabButtonOnClick = e => {
    if (e.clientX + 110 >= window.innerWidth) {
      setDropLeft(true);
    } else {
      setDropLeft(false);
    }
    setIsReject(menuItem[2].isBlue);
    setIsOpenKebabMenu(!isOpenKebabMenu);
  };

  const handleKebabButtonOnBlur = () => {
    setTimeout(() => {
      setIsOpenKebabMenu(false);
    }, 150);
  };

  const handleKebabMenuItemOnClick = e => {
    if (
      e.currentTarget.lastElementChild.textContent === '수정하기' &&
      !question.answer
    ) {
      return;
    }
    if (e.target.innerText === selectedMenuItem || isReject) {
      setSelectedMenuItem(null);
    } else {
      setSelectedMenuItem(e.currentTarget.innerText);
    }
  };

  return (
    <S.KebabContainer>
      <S.KebabButton
        onClick={handleKebabButtonOnClick}
        onBlur={handleKebabButtonOnBlur}
      >
        <img src="/images/More.png" alt="케밥 이미지" />
      </S.KebabButton>
      {isOpenKebabMenu && (
        <S.KebabMenu $dropLeft={dropLeft}>
          {menuItem.map(element => {
            let className = '';
            let image = element.imagePath;
            if (element.isBlue || element.text === selectedMenuItem) {
              className = 'selected';
              image = element.imageBluePath;
            }

            return (
              <S.KebabMenuItem
                key={element.text}
                className={className}
                onClick={e => {
                  handleKebabMenuItemOnClick(e);
                  element.onClick();
                }}
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
