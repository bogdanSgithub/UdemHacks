import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { format } from 'date-fns';

const ImageCardGrid = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the public directory
    fetch('/animalData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(jsonData => {
        // Sort by most recent timestamp and take top 6
        const sortedData = [...jsonData].sort((a, b) => 
          new Date(b.timestamp) - new Date(a.timestamp)
        ).slice(0, 6);
        
        setData(sortedData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-8 text-green-700">Loading agricultural data...</div>;
  if (error) return <div className="text-center p-8 text-red-600">Error: {error}</div>;
  if (!data || data.length === 0) return <div className="text-center p-8 text-green-700">No agricultural data available</div>;

  return (
    <div className="container mx-auto p-4 mt-24">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Data Collection</h1>
      
      <div className="mb-4 text-green-700 font-medium text-center">
        Displaying top 6 most recent Animals
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <Card key={index} className="w-full aspect-square shadow-lg border-green-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="bg-green-50 border-b border-green-100">
              <CardTitle className="text-xl font-bold text-green-700 capitalize">{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex-grow flex items-center justify-center">
              <div className="overflow-hidden rounded-md w-full aspect-square">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
            <CardFooter className="text-sm text-gray-600 bg-green-50 border-t border-green-100">
              {format(new Date(item.timestamp), 'PPpp')}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ImageCardGrid;