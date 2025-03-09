import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AnimalWeeklyChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartType, setChartType] = useState('line');

  useEffect(() => {
    // Fetch data from the HTTP endpoint
    fetch('http://172.20.10.8:8000/report')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(jsonData => {
        // Process data to get counts by day of week
        processDataByDayOfWeek(jsonData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const processDataByDayOfWeek = (jsonData) => {
    // Initialize object to store daily counts
    const dayCounts = {
      0: 0, // Sunday
      1: 0, // Monday
      2: 0, // Tuesday
      3: 0, // Wednesday
      4: 0, // Thursday
      5: 0, // Friday
      6: 0  // Saturday
    };
    
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Count animals for each day of the week
    jsonData.forEach(item => {
      const timestamp = new Date(item.timestamp);
      const dayOfWeek = timestamp.getDay(); // 0-6, 0 is Sunday
      
      // Increment the count for this day
      dayCounts[dayOfWeek] += 1;
    });
    
    // Convert to format suitable for recharts
    const chartData = Object.keys(dayCounts).map(day => ({
      day: dayNames[parseInt(day)],
      count: dayCounts[day],
      dayNum: parseInt(day) // For sorting
    }));
    
    // Sort by day of week
    chartData.sort((a, b) => a.dayNum - b.dayNum);
    
    setData(chartData);
  };

  if (loading) return <div className="text-center p-8 text-green-700">Loading animal data...</div>;
  if (error) return <div className="text-center p-8 text-red-600">Error: {error}</div>;
  if (!data || data.length === 0) return <div className="text-center p-8 text-green-700">No animal data available</div>;

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="bg-green-50 border-b border-green-100">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold text-green-700">Animals Detected By Day of Week</CardTitle>
          <div className="flex space-x-2">
            <button 
              onClick={() => setChartType('bar')}
              className={`px-3 py-1 rounded-md ${chartType === 'bar' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}
            >
              Bar
            </button>
            <button 
              onClick={() => setChartType('line')}
              className={`px-3 py-1 rounded-md ${chartType === 'line' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}
            >
              Line
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'line' ? (
              <LineChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="day" 
                  tick={{ fill: '#166534' }}
                />
                <YAxis tick={{ fill: '#166534' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f0fdf4', 
                    borderColor: '#166534',
                    borderRadius: '6px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  labelStyle={{ color: '#166534', fontWeight: 'bold' }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="count" 
                  name="Number of Animals" 
                  stroke="#166534" 
                  strokeWidth={2}
                  dot={{ fill: '#166534', r: 4 }}
                  activeDot={{ fill: '#166534', r: 6, stroke: '#fff', strokeWidth: 2 }}
                />
              </LineChart>
            ) : (
              <BarChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="day"
                  tick={{ fill: '#166534' }}
                />
                <YAxis tick={{ fill: '#166534' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f0fdf4', 
                    borderColor: '#166534',
                    borderRadius: '6px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  labelStyle={{ color: '#166534', fontWeight: 'bold' }}
                />
                <Legend />
                <Bar 
                  dataKey="count" 
                  name="Number of Animals" 
                  fill="#166534" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-gray-600 text-center">
          Total animals detected: {data.reduce((sum, item) => sum + item.count, 0)}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimalWeeklyChart;