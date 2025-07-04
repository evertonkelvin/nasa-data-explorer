import { fetchNasaNeoData } from '../services/nasaNeoService.js';

export async function getNasaNeoData(req, res, next) {
  try {
    const data = await fetchNasaNeoData();
    res.json(data);

  } catch (err) {
    next(err);
  }
}

export default getNasaNeoData;