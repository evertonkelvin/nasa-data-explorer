import { useEffect, useState } from 'react';
import { getDiameterChartData } from '../services/api';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement } from 'chart.js';

Chart.register(BarElement);
    
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
                label: 'Objects',
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

  const barOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.parsed.y} objects`,
        },
      },
    },
  };

  return(
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="charts">
        <div className="chart">
          <h3>Objects by Diameter</h3>
          <Bar data={diameterChartData} options={barOptions} />
        </div>
      </div>
    </div>
  );
}