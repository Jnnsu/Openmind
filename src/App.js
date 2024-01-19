import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import CardList from './pages/cardList';
import Post from './pages/post';
// import styled from 'styled-components';
// import Field from './components/Input/Field';
import TextArea from './components/Input/TextArea';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import BoxButton from './components/Button/BoxButton';
import FloatingButton from './components/Button/FloatingButton';
import ShareButton from './components/Button/ShareButton';
import BadgeButton from './components/Button/BadgeButton';
import DropDownButton from './components/DropDown/DropDownButton';
import Kebab from './components/Button/KebabButton';
// import Profile from './components/Profile/profile';

// const Div = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;
function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {/* <Div> */}
        <TextArea />
        <BoxButton type="answer" size="small" />
        <BoxButton type="question" />
        <FloatingButton />
        <ShareButton />
        <BadgeButton isAnswered={true} />
        <BadgeButton isAnswered={false} />
        <DropDownButton />
        <Kebab />
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
      </ThemeProvider>
    </>
  );
}

export default App;
