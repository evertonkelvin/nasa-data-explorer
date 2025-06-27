let cachedData = null;

async function fetchNasaNeoData(params) {
  if(cachedData) return cachedData;
  
  const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${ process.env.NASA_API_KEY }`;
  
  try {
    const res = await fetch(url);
    
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const neoData = await res.json();
    cachedData = neoData;
    return neoData;

  } catch (err) {
    return err.message
  }
}

export default fetchNasaNeoData;
