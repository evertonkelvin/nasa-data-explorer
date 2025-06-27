import { useEffect, useState } from 'react';
import { getDiameterChartData } from '../services/api';
import { getDiscoveryChartData } from '../services/api';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  LineElement,
  PointElement,
);
    
export default function Dashboard() {
  const [diameterChartData, setDiameterChartData] = useState([]);
  const [discoveryChartData, setDiscoveryChartData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadChartsData = async () => {
      try {
        const diameterChartRes = await getDiameterChartData();
        const discoveryChartRes = await getDiscoveryChartData();
        
        setDiameterChartData({
          labels: diameterChartRes.map((d) => d.range),
          datasets: [
            {
              label: 'Asteroids',
              data: diameterChartRes.map((d) => d.count),
              backgroundColor: '#00d9ff',
            },
          ],
        });

        setDiscoveryChartData({
          labels: discoveryChartRes.map((d) => d.year),
          datasets: [
            {
              label: 'Discoveries',
              data: discoveryChartRes.map((d) => d.count),
              borderColor: '#00d9ff',
              backgroundColor: 'rgba(0, 217, 255, 0.2)',
            },
          ],
        });

      } catch (err) {
          setError(`Failed to load data: ${err.message}`);
      } finally {
          setLoading(false);
      }
    }

    loadChartsData();
  }, []);

  return(
    <div className="dashboard">
      <h1>NASA NEO Dashboard</h1>
      <div className="charts">
        <div className="chart">
          <h3>Asteroids by Diameter</h3>
          {loading
            ? <p>Loading...</p>
            : <Bar data={diameterChartData} />}
        </div>
        <div className="chart">
          <h3>New Discoveries Over Time</h3>
          {loading
            ? <p>Loading...</p>
            : <Line data={discoveryChartData} />}
        </div>
      </div>
    </div>
  );
}