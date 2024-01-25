import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import CardListPage from './pages/CardListPage';
import PostPage from './pages/PostPage';
import AnswerPage from './pages/AnswerPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/list" element={<CardListPage />} />
      <Route path="/post/">
        <Route path="/post/{id}" element={<PostPage />} />
        <Route path="/post/:subjectId/answer" element={<AnswerPage />} />
      </Route>
    </Routes>
  );
}
