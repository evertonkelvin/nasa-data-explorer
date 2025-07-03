let cachedData = null;

export async function fetchNasaNeoData() {
  if(cachedData) {
    return cachedData;
  }

  try {
    const pages = [0, 1, 2, 3, 4];
    const responses = await Promise.all(
      pages.map((page) =>
        fetch(
          `https://api.nasa.gov/neo/rest/v1/neo/browse?page=${page}&size=20&api_key=${ process.env.NASA_API_KEY || 'DEMO_KEY' }`
        )
      )
    );

    const neoData = await Promise.all(
      responses.map((res) => {
        if (!res.ok) {
          throw new Error(`NASA API responded with ${res.status}`);
        }
        
        return res.json();
      })
    );
    
    cachedData = neoData.flatMap((d) => d.near_earth_objects || []);;
    return cachedData;

  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch NASA NEO data.');
  }
}

export function bucketToArray(obj, labelKey) {
  return Object.keys(obj).map(key => ({ [labelKey]: key, count: obj[key] }));
}

