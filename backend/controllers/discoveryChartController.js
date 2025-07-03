import { fetchNasaNeoData, bucketToArray } from '../services/nasaNeoService.js';

export async function getDiscoveryChartData(req, res, next) {

  try {
    const asteroids = await fetchNasaNeoData();
    let discoveries = {};

    asteroids.forEach((asteroid) => {
      const dateStr = asteroid.orbital_data?.first_observation_date;

      if (dateStr) {
        const year = new Date(dateStr).getFullYear();
        discoveries[year] = (discoveries[year] || 0) + 1;
      }
    });

    res.json(bucketToArray(discoveries, 'year').sort((a, b) => a.year - b.year));
        
  } catch (err) {
    next(err);
  }

}

export default getDiscoveryChartData;