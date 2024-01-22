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
import Profile from './components/Feed/ProfileSample';
import Answer from './components/Feed/AnswerSample';
import Test from './test';

// const ProfileImg = '../images/avatar1.png';

function App() {
  const whiteArrowIcon = './images/arrow-right-icon-white.png';
  const brownArrowIcon = './images/arrow-right-icon.png';

  return (
    <>
      <GlobalStyle />
      {/* <ShareButton /> */}
      <Routes>
        <Route path="*" element={<Test />} />

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
