import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import AsteroidList from './pages/AsteroidList'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/asteroids" element={<AsteroidList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
