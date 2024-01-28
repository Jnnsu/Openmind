import { useState } from 'react';
import * as S from './KebabButtonStyle';

export default function Kebab({
  menuItem,
  questionId,
  question,
  answerModifyId,
}) {
  const [isOpenKebabMenu, setIsOpenKebabMenu] = useState();
  const [selectedMenuItem, setSelectedMenuItem] = useState();
  const [dropLeft, setDropLeft] = useState();

  const handleKebabButtonOnClick = e => {
    if (e.clientX + 110 >= window.innerWidth) {
      setDropLeft(true);
    } else {
      setDropLeft(false);
    }
    setIsOpenKebabMenu(!isOpenKebabMenu);
  };

  const handleKebabButtonOnBlur = () => {
    setTimeout(() => {
      setIsOpenKebabMenu(false);
    }, 150);
  };

  const handleKebabMenuItemOnClick = e => {
    if (e.target.innerText === selectedMenuItem) {
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
            if (element.text === '답변거절' && question.answer.isRejected) {
              className = 'selected';
              image = element.imageBluePath;
            } else if (
              element.text !== '답변거절' &&
              element.text === selectedMenuItem
            ) {
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
