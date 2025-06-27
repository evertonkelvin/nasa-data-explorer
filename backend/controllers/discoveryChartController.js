import fetchNasaNeoData from '../services/nasaNeoService.js';

function bucketToArray(obj, labelKey) {
  return Object.keys(obj).map(key => ({ [labelKey]: key, count: obj[key] }));
}

export async function getDiscoveryChartData(req, res, next) {

  try {
    const data = await fetchNasaNeoData(req.query);
    const asteroids = data.near_earth_objects;
    const discoveries = {};

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