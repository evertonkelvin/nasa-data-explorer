import { useLocation, useNavigate } from 'react-router-dom';

export default function AsteroidDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const asteroid = state?.asteroid;

  if (!asteroid) {
    return (
      <div className="error">
        No asteroid data. 
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  };

  return (
    <div className="details">
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{asteroid.name}</h2>
      <p>ID: <b>{asteroid.id}</b></p>
      <p>Absolute Magnitude: <b>{asteroid.absolute_magnitude_h}</b></p>
      <p>Hazardous: <b>{asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</b></p>
      <p>Monitored by Sentry: <b>{asteroid.is_sentry_object ? 'Yes' : 'No'}</b></p>
      <p>Estimated Maximum Diameter: <b>{asteroid.estimated_diameter?.kilometers?.estimated_diameter_max.toFixed(2)} KM</b></p>
      <p>Estimated Minimum Diameter: <b>{asteroid.estimated_diameter?.kilometers?.estimated_diameter_min.toFixed(2)} KM</b></p>
      <p>First Observation Date: <b>{
        new Date(asteroid.orbital_data?.first_observation_date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric"
      })}</b></p>
      <p>Last Observation Date: <b>{
        new Date(asteroid.orbital_data?.last_observation_date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric"
      })}</b></p>
      <p>Orbit Class Description: <b>{asteroid.orbital_data?.orbit_class?.orbit_class_description}</b></p>
      <p>
        <a href={asteroid.nasa_jpl_url} target="_blank">
          NASA Link
        </a>
      </p>
    </div>
  );
}
