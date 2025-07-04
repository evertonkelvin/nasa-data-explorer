import { Link } from 'react-router-dom';

export default function AsteroidCard({ asteroid }) {
  
  return (
    <div className="card">
      <h3>{asteroid.name}</h3>
      <p>Diameter: {asteroid.estimated_diameter.kilometers.estimated_diameter_max}</p>
      <p>Orbiting: {asteroid.close_approach_data[0]?.orbiting_body ?? 'No info'}</p>
      <p>Magnitude: {asteroid.absolute_magnitude_h}</p>
      <p>Hazardous: {asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
      <Link
        to={`/asteroids/${asteroid.id}`}
        state={{ asteroid }}>
        See more
      </Link>
    </div>
  );
}