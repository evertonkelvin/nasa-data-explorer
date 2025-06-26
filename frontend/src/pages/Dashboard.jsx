import { useEffect, useState } from 'react';
import { getDiameterChartData } from '../services/api';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);
    
export default function Dashboard() {
  const [diameterChartData, setDiameterChartData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadDiameterChartData = async () => {
      try {
        const diameterChartRes = await getDiameterChartData();
        
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
      } catch (err) {
          setError(`Failed to load data: ${err.message}`);
      } finally {
          setLoading(false);
      }
    }

    loadDiameterChartData();
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
      </div>
    </div>
  );
}