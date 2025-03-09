import React from 'react';

const CameraFeed = () => {
  const raspberryPiIP = '192.168.84.25';

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-green-50 rounded-lg shadow-md my-8">
      <div className="flex items-center mb-4">
        <svg 
          className="h-6 w-6 text-green-600 mr-2" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <h1 className="text-2xl font-semibold text-green-800">Field Monitoring</h1>
      </div>
      
      <div className="bg-white p-2 rounded-lg border-2 border-green-200 overflow-hidden">
        <div className="relative pb-2">
          <span className="px-2 py-1 bg-green-600 text-white text-xs rounded absolute top-2 left-2 opacity-75">
            LIVE
          </span>
          <img
            src={`http://${raspberryPiIP}:8000/video`}
            alt="Live Field Monitoring"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
      
      <div className="mt-4 text-sm text-green-700 flex justify-between items-center">
        <div className="flex items-center">
          <svg 
            className="h-4 w-4 mr-1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span>Stream from Raspberry Pi</span>
        </div>
        <button className="px-3 py-1 bg-green-100 hover:bg-green-200 text-green-800 rounded-md transition-colors duration-200">
          Refresh
        </button>
      </div>
    </div>
  );
};

export default CameraFeed;