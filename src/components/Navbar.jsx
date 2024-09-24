import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white flex max-md:flex-col m-4 rounded-lg animate-float shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Chart.js</Link>
        </div>
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} mt-2 md:mt-0`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <Link to="/bar" className="hover:underline">BarGraph</Link>
          </li>
          <li>
            <Link to="/doublebar" className="hover:underline">DoubleGraph</Link>
          </li>
          <li>
            <Link to="/stackedareachart" className="hover:underline">StackedAreaChart</Link>
          </li>
          <li>
            <Link to="/line" className="hover:underline">LineChart</Link>
          </li>
          <li>
            <Link to="/pie" className="hover:underline">PieChart</Link>
          </li>
          <li>
            <Link to="/singlesidedoublebar" className="hover:underline">SalesChart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
