import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Edit } from '../../images/Edit.svg';
import { ReactComponent as Rejection } from '../../images/Rejection.svg';
import { ReactComponent as Close } from '../../images/Close.svg';

const KebabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const KebabButton = styled.button`
  width: 26px;
  height: 26px;
  background: #fff;
  border: none;
  outline: none;
`;

const KebabMenu = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border-radius: 8px;
  border: 1px solid var(--Grayscale-30);
  background: var(--Grayscale-10);

  /* 1pt */
  box-shadow: var(--Shadow-1pt);
`;

const KebabMenuItem = styled.button`
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

function Kebab() {
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
    <KebabContainer>
      <KebabButton onClick={handleKebabButtonOnClick}>
        <img src="./images/More.png" alt="케밥 이미지" />
      </KebabButton>
      {isOpenKebabMenu && (
        <KebabMenu>
          {menuItem.map(element => {
            let className = '';
            let src = element.imagePath;
            if (element.text === selectedMenuItem) {
              className = 'selected';
              src = element.imageBluePath;
            }
            return (
              <KebabMenuItem
                className={className}
                onClick={handleKebabMenuItemOnClick}
              >
                {/* <img src={src} alt={element.imageAlt} fill={fill} /> */}
                {/* <Edit fill="blue" /> */}
                {src}
                <span>{element.text}</span>
              </KebabMenuItem>
            );
          })}
          {/* <KebabMenuItem
            className={menuItemClassName[0]}
            onClick={handleKebabMenuItemOnClick}
          >
            <img src="./images/Edit.png" alt="수정 아이콘" />
            <img src={imagePath(selectedMenuItem)} alt="asd" />
            <img src="./images/Edit-blue.png" alt="선택된 수정 아이콘" />
            <span>수정하기</span>
          </KebabMenuItem>
          <KebabMenuItem
            className={menuItemClassName[1]}
            onClick={handleKebabMenuItemOnClick}
          >
            <img src="./images/close.png" alt="삭제 아이콘" />
            <span>질문삭제</span>
          </KebabMenuItem>
          <KebabMenuItem
            className={menuItemClassName[2]}
            onClick={handleKebabMenuItemOnClick}
          >
            <img src="./images/rejection.png" alt="거절 아이콘" />
            <span>답변거절</span>
          </KebabMenuItem> */}
        </KebabMenu>
      )}
    </KebabContainer>
  );
}

export default Kebab;
