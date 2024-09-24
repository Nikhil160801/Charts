// StackedAreaChart.js
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Register the required components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // Required for area chart fill
);

const StackedAreaChart = () => {
  // Sample data for the stacked area chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2023 (in USD)',
        data: [3000, 4000, 3200, 5000, 4200, 6100],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Fill area with color
        fill: true, // Enable fill under the line
      },
      {
        label: 'Sales 2024 (in USD)',
        data: [5000, 6000, 4800, 7000, 6200, 8100],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Fill area with color
        fill: true, // Enable fill under the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Stacked Area Chart Example',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        stacked: true, // Stack the datasets on the Y-axis
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sales (in USD)',
        },
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Stacked Area Chart</h1>
      <div className="w-full md:w-2/3 mx-auto">
        <Line data={data} options={options} width={200} height={200}/>
      </div>
    </div>
  );
};

export default StackedAreaChart;
