// PieChart.js
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register the necessary components with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChartModel = () => {
  // Sample data for the pie chart
  const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales 2024 (in USD)',
        data: [12000, 15000, 18000, 20000, 23000, 25000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        color: "#000",
        formatter: (value, context) => {
          // Display both label and value
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}: ${value}`;
        },
        anchor: 'end',
        align: 'start',
        offset: 10,
        font: {
          weight: 'bold',
          size: 12,
        },
      },
    },
  };

  return (
    <div className="container mx-auto p-4 border-2 border-solid rounded-lg border-orange-500">
      <h1 className="text-2xl font-bold text-center mb-4">Pie Chart Example</h1>
      <div className="w-full md:w-1/3 mx-auto">
        <Pie data={data} options={options} width={200} height={200}/>
      </div>
    </div>
  );
};

export default PieChartModel;
