import type { FC } from 'react';
import '../css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Portfolio from './Portfolio';
import Universe from './Universe';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Universe />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/portfolio/" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
