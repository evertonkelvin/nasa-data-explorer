import './App.css';
import { useEffect, useState } from 'react';
import { getAllNasaNeoData } from './services/api';

function App() {

  const [nasaNeoData, setNasaNeoData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNasaNeoData = async () => {
      try {
        const neoData = await getAllNasaNeoData();
        setNasaNeoData(neoData);
      } catch (err) {
          setError("Failed to load data");
      } finally {
          setLoading(false);
      }
    }

    loadNasaNeoData();
  }, []);

  return (
    <>
    </>
  )
}

export default App
