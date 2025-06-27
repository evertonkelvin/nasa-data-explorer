import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AsteroidList from './pages/AsteroidList';
import NavBar from './components/NavBar';

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/asteroids" element={<AsteroidList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
