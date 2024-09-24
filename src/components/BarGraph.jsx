// BarChart.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartModel = () => {
  // Sample data for the bar chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2024 (in USD)',
        data: [12000, 15000, 18000, 20000, 23000, 25000],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };

  return  <>
  <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          Bar Chart
        </h1>
    <div className="w-full md:w-1/2 mx-auto"><Bar data={data} options={options} width={100} height={100}/></div>
</div>
  </>
  
};

export default BarChartModel;
