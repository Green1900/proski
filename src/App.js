import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Challenge from './Pages/Challenge';
import Nav from './components/Nav';
import MiniGame from './Pages/MiniGame';
import Profile from './Pages/Profile';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/challenge' element={<Challenge />} />
        <Route path='/minigame' element={<MiniGame/> } />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
