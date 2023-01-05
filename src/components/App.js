import '../css/App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from './Profile.jsx'
import Portfolio from './Portfolio.jsx'
import Universe from './Universe';

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={`/`} element={<Universe />} />
          <Route path={`/profile/`} element={<Profile />} />
          <Route path={`/portfolio/`} element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;