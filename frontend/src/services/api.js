const BASE_URL = "http://localhost:3000";

export const getAllNasaNeoData = async () => {
  const res = await fetch(`${BASE_URL}/nasa/neo`);
  const data = await res.json();
  return data;
}

export const getDiameterChartData = async () => {
  const res = await fetch(`${BASE_URL}/api/diameter-chart`);
  const data = await res.json();
  return data;
}

export const getDiscoveryChartData = async () => {
  const res = await fetch(`${BASE_URL}/api/discovery-chart`);
  const data = await res.json();
  return data;
}