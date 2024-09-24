// AnimatedLanding.js
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnimatedLanding = () => {
  // Animation for the main title
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 15 },
    delay: 200,
  });

  // Animation for charts
  const chartAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 220, friction: 20 },
    delay: 400,
  });


  const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="rounded-lg flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Title Animation */}
      <animated.h1
        style={titleAnimation}
        className="text-5xl max-md:text-4xl max-sm:text-2xl font-bold text-white mb-3"
      >
        Get Started with Charts
      </animated.h1>
        <h2 className='text-slate-50 font-bold m-2'>For more charts, look into the navigation menu</h2>

      {/* Animated Charts */}
      <animated.div style={chartAnimation} className="flex flex-wrap justify-center space-x-8 mb-8">

        {/* Pie Chart */}
        <div className="w-64 h-64 bg-white p-4 rounded-lg shadow-lg">
          <Pie data={pieData} options={{ responsive: true }} />
        </div>

      </animated.div>

      {/* Call-to-Action Button */}
      <animated.div style={titleAnimation}>
        <Link
          to="/bar"
          className="px-6 py-3 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300"
        >
          Get Started
        </Link>
      </animated.div>
    </div>
  );
};

export default AnimatedLanding;
