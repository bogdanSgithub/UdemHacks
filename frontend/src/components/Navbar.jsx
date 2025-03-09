import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-50 border-b border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="ml-2 text-lg font-medium text-green-800">ProjectX</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                to="/" 
                className={`${location.pathname === '/' 
                  ? 'text-green-800 border-b-2 border-green-600' 
                  : 'text-green-600 hover:text-green-800 hover:border-b-2 hover:border-green-600'} px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                Home
              </Link>
              <Link 
                to="/report" 
                className={`${location.pathname === '/report' 
                  ? 'text-green-800 border-b-2 border-green-600' 
                  : 'text-green-600 hover:text-green-800 hover:border-b-2 hover:border-green-600'} px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                Report
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-green-600 hover:text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-50 border-b border-green-200">
            <Link 
              to="/" 
              className={`${location.pathname === '/' 
                ? 'bg-green-100 text-green-800' 
                : 'text-green-600 hover:bg-green-100 hover:text-green-800'} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/report" 
              className={`${location.pathname === '/report' 
                ? 'bg-green-100 text-green-800' 
                : 'text-green-600 hover:bg-green-100 hover:text-green-800'} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsMenuOpen(false)}
            >
              Report
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;