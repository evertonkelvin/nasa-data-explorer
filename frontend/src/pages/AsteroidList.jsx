import { useEffect, useState } from 'react';
import { getAllNasaNeoData } from '../services/api';
import AsteroidCard from "../components/AsteroidCard";

export default function AsteroidList() {
  const [nasaNeoData, setNasaNeoData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nameSearch, setNameSearch] = useState('');
  const [showHazardous, setShowHazardous] = useState(false);

  useEffect(() => {
    const loadNasaNeoData = async () => {
      try {
        const neoData = await getAllNasaNeoData();
        setNasaNeoData(neoData);
      } catch (err) {
          setError('Failed to load data');
      } finally {
          setLoading(false);
      }
    }

    loadNasaNeoData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }
  
  const filteredAsteroids = nasaNeoData
    .filter((asteroid) =>
      asteroid.name.toLowerCase().includes(nameSearch.toLowerCase())
    )
    .filter((asteroid) =>
      !showHazardous || asteroid.is_potentially_hazardous_asteroid
    );
  
  return (
    <>
      <h1>NASA Near Earth Objects</h1>
      <div className="filters">
        <span>Showing {filteredAsteroids.length} asteroids</span>
        <div className="filter-controls">
          <input
            type="text"
            placeholder="Search by name"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={showHazardous}
              onChange={(e) => setShowHazardous(e.target.checked)}
            />
            Hazardous asteroids
          </label>
        </div>
      </div>
      <div className="container">
        {filteredAsteroids.length 
          ? filteredAsteroids.map((asteroid) => (
            <AsteroidCard key={asteroid.id} asteroid={asteroid} />
          ))
          : <p className="error">No Asteroid Data</p>
        }
      </div>
    </>
  );
}