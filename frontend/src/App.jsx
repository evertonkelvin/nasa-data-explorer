import './App.css';
import { useEffect, useState } from 'react';
import { getAllNasaNeoData } from './services/api';
import AsteroidCard from './components/AsteroidCard';

function App() {

  const [nasaNeoData, setNasaNeoData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNasaNeoData = async () => {
      try {
        const neoData = await getAllNasaNeoData();
        setNasaNeoData(neoData.near_earth_objects);
      } catch (err) {
          setError(`Failed to load data: ${err.message}`);
      } finally {
          setLoading(false);
      }
    }

    loadNasaNeoData();
  }, []);

  return (
    <>
      <h1>NASA Near Earth Objects</h1>
      <div className="container">
        {nasaNeoData.map((asteroid) => (
          <AsteroidCard key={asteroid.id} asteroid={asteroid} />
        ))}
      </div>
    </>
  )
}

export default App
