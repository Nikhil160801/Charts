// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import LineChartModel from './components/LineChart';
import PieChartModel from './components/PieChart';
import BarChartModel from './components/BarGraph';
import DoubleBarChart from './components/DoubleBar';
import StackedAreaChart from './components/StackedAreaChart';
import { Home } from './pages/HomePage';
import Footer from './components/Footer';
import SalesBarChart from './components/SingleSideDoubleBar';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bar" element={<BarChartModel/>} />
          <Route path="/line" element={<LineChartModel />} />
          <Route path="/pie" element={<PieChartModel />} />
          <Route path="/doublebar" element={<DoubleBarChart />} />
          <Route path="/stackedareachart" element={<StackedAreaChart />} />
          <Route path="/singlesidedoublebar" element={<SalesBarChart />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
