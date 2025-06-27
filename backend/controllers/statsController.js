import fetchNasaNeoData from '../services/nasaNeoService.js';

export async function getStatsData(req, res, next) {

  try {
    const data = await fetchNasaNeoData(req.query);
    const asteroids = data.near_earth_objects;
    
    const stats = {
      total: asteroids.length,
      hazardous: 0,
      sentry: 0,
    };

    asteroids.forEach((asteroid) => {
      const hazardous = asteroid.is_potentially_hazardous_asteroid;
      const sentry = asteroid.is_sentry_object;

      if (hazardous) stats.hazardous++;
      if (sentry) stats.sentry++;
    });

    res.json(stats);
        
  } catch (err) {
    next(err);
  }

}

export default getStatsData;