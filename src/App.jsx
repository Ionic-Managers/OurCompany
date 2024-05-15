import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ProjectPage from './pages/ProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import TeamPage from './pages/TeamPage';
import DiscussProjectPage from './pages/DiscussProjectPage';
import NotFoundPage from './pages/NotFoundPage';

import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} exact />
      <Route path="/project" element={<ProjectPage />} exact />
      <Route path="/project/:id" element={<ProjectDetailPage />} />
      <Route path="/team" element={<TeamPage />} exact />
      <Route path="/discuss-project" element={<DiscussProjectPage />} exact />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
