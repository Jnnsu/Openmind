import { useState } from 'react';
import * as S from './KebabButtonStyle';

export default function Kebab({ menuItem, questionId, question }) {
  const [isOpenKebabMenu, setIsOpenKebabMenu] = useState();
  const [selectedMenuItem, setSelectedMenuItem] = useState();

  const handleKebabButtonOnClick = () => {
    setIsOpenKebabMenu(!isOpenKebabMenu);
  };

  const handleKebabButtonOnBlur = () => {
    setTimeout(() => {
      setIsOpenKebabMenu(false);
    }, 200);
  };

  const handleKebabMenuItemOnClick = e => {
    if (e.target.innerText === selectedMenuItem) {
      setSelectedMenuItem(null);
    } else {
      setSelectedMenuItem(e.target.innerText);
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
                key={element.text}
                className={className}
                onClick={e => {
                  handleKebabMenuItemOnClick(e);
                  element.onClick(questionId);
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
