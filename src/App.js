import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import CardList from './pages/cardList';
import Post from './pages/post';
// import styled from 'styled-components';
// import Field from './components/Input/Field';
import TextArea from './components/Input/TextArea';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/color';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TextArea />
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
