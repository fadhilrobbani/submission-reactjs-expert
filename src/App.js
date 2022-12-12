import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import BottomBar from './components/BottomBar';
import Navbar from './components/Navbar';
import DetailThreadPage from './pages/DetailThreadPage';
import HomePage from './pages/HomePage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import LoginPage from './pages/LoginPage';
import NewThreadPage from './pages/NewThreadPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';

function App() {
  const { isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewThreadPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/leaderboards" element={<LeaderboardsPage />} />
          <Route path="/threads/:id" element={<DetailThreadPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer>
        <BottomBar />
      </footer>
    </>
  );
}

export default App;
