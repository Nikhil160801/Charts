// BarChart.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DoubleBarChart = () => {
  // Sample data for two years with positive and negative values
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2024 (in USD)',
        data: [12000, -15000, 18000, -20000, 23000, 25000],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Sales 2023 (in USD)',
        data: [-10000, 14000, -16000, 19000, 22000, -21000],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
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
        text: 'Sales Comparison (2023 vs 2024)',
      },
    },
    scales: {
      x: {
        stacked: false, // Set this to true if you want a stacked bar chart
      },
      y: {
        beginAtZero: true,
        min: -25000, // Adjust to accommodate negative values
        max: 25000,
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Double Bar Chart</h1>
      <div className="w-full md:w-2/3 mx-auto">
        <Bar data={data} options={options} width={200} height={200}/>
      </div>
    </div>
  );
};

export default DoubleBarChart;
