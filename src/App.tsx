import type { FC } from 'react';
import './styles/app.css';
import { BrowserRouter, Routes, Route } from './router';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import PortfolioPage from './pages/PortfolioPage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/" element={<ProfilePage />} />
          <Route path="/portfolio/" element={<PortfolioPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
