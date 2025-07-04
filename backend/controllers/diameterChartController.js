import { fetchNasaNeoData, bucketToArray } from '../services/nasaNeoService.js';

export async function getDiameterChartData(req, res, next) {

  try {
    const asteroids = await fetchNasaNeoData();
    
    const diameterBuckets = {
      '<3 km': 0,
      '3-6 km': 0,
      '6-9 km': 0,
      '>9 km': 0,
    };

    asteroids.forEach((asteroid) => {
      const diameter = parseFloat(asteroid.estimated_diameter?.kilometers?.estimated_diameter_max)

      if (!isNaN(diameter)) {
        if (diameter < 3) diameterBuckets['<3 km'] += 1;
        else if (diameter < 6) diameterBuckets['3-6 km'] += 1;
        else if (diameter < 9) diameterBuckets['6-9 km'] += 1;
        else diameterBuckets['>9 km'] += 1;
      }
    });

    res.json(bucketToArray(diameterBuckets, 'range'));
    
  } catch (err) {
    next(err);
  }

}

export default getDiameterChartData;