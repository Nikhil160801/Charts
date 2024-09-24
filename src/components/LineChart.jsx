// LineChart.js
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components with ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartModel = () => {
  // Sample data for the line chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2024 (in USD)',
        data: [12000, 15000, 18000, 22000, 23000, 25000],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Data (2024)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return  <div className="container mx-auto p-4">
  <h1 className="text-2xl font-bold text-center mb-4">Line Chart Example</h1>
  <div className="w-full md:w-1/2 mx-auto">
  <Line data={data} options={options} width={200} height={200}/>
  </div>
</div>

};

export default LineChartModel;
