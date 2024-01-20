import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import CardList from './pages/cardList';
import Post from './pages/post';
// import styled from 'styled-components';
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
// import Profile from './components/Profile/profile';
// const Div = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;
function App() {
  const whiteArrowIcon = './images/arrow-right-icon-white.png';
  const brownArrowIcon = './images/arrow-right-icon.png';
  return (
    <>
      <GlobalStyle />
      {/* <Div> */}
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
      <Reaction />
      {/* <Profile imageSource="./images/Photo.png" size="136px" /> */}
      {/* </Div> */}
      {/* <ShareButton /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<CardList />} />
        <Route path="/post/">
          <Route path="/post/{id}" element={<Post />} />
          {/* <Route path='/post/{id}/answer' element={<Answer />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
