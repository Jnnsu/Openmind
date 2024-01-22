import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import CardList from './pages/cardList';
import Post from './pages/post';
import styled from 'styled-components';
// import Field from './components/Input/Field';
import TextArea from './components/Input/TextArea';
import GlobalStyle from './styles/GlobalStyle';
import FloatingButton from './components/Button/FloatingButton';
import ShareButton from './components/Button/ShareButton';
import BadgeButton from './components/Button/BadgeButton';
import DropDownButton from './components/DropDown/DropDownButton';
import Kebab from './components/Button/KebabButton';
import FillBoxButton from './components/Button/FillBoxButton';
import OutlineBoxButton from './components/Button/OutlineBoxButton';
import Reaction from './components/Feed/Reaction';
import Card from './components/Feed/Card';
import Answer from './components/Feed/AnswerSample';
import Profile from './components/Feed/ProfileSample';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 50px;
  background-color: gray;
`;

export default function Test() {
  const whiteArrowIcon = './images/arrow-right-icon-white.png';
  const brownArrowIcon = './images/arrow-right-icon.png';
  return (
    <>
      <Div>
        <TextArea />
        <br />
        <FillBoxButton
          text="질문 받기"
          imageSource={whiteArrowIcon}
          imageAlt="흰색 화살표 아이콘"
        />
        <br />
        <OutlineBoxButton
          text="답변하러 가기"
          imageSource={brownArrowIcon}
          imageAlt="갈색 화살표 아이콘"
        />
        <br />
        <FloatingButton />
        <br />
        <ShareButton />
        <br />
        <BadgeButton isAnswered={true} />
        <br />
        <BadgeButton isAnswered={false} />
        <br />
        <DropDownButton />
        <br />
        <Kebab />
        <br />
        <Reaction />
        <br />
        <Card />
        <Profile imageSource="https://fastly.picsum.photos/id/345/200/200.jpg?hmac=8FJWKiYOThZ6-UcvLpD_B42M20_KwpSqVMSJ7WFMc4Y" />
        <Answer />

        {/* <Answer />
        <span>뭐여 왜 안돼</span>
        <Profile imageSource="./images/image6.png" size="136px" />
        <Profile imageSource={ProfileImg} size="136px" /> */}
      </Div>
      {/* <ShareButton /> */}
    </>
  );
}
