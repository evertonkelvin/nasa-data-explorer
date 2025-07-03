const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

async function fetchData(path) {
  const res = await fetch(`${BASE_URL}${path}`);

  if (!res.ok) {
    throw new Error('Failed to load API data.');
  }

  return res.json();
}

export const getAllNasaNeoData = () => fetchData('/nasa/neo');
export const getDiameterChartData = () => fetchData('/api/diameter-chart');
export const getDiscoveryChartData = () => fetchData('/api/discovery-chart');
export const getStatsData = () => fetchData('/api/stats');