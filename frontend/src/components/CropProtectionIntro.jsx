import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CropProtectionIntro = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-10">
        <div className="flex justify-center">
          <div className="bg-green-100 p-4 rounded-full">
            {/* Shield icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-green-800">Eye Crop</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Protect your crops and vegetables from animals, birds, and other pests for better yields and healthier produce.
        </p>
        <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="how" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="how">How It Works</TabsTrigger>
          <TabsTrigger value="why">Why Use It</TabsTrigger>
          <TabsTrigger value="next">What's Next</TabsTrigger>
        </TabsList>
        
        <TabsContent value="how" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                {/* Question mark icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                How Eye Crop Works
              </CardTitle>
              <CardDescription>
                Our innovative approach to crop protection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-green-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Detection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Advanced sensors detect animal movement and presence</p>
                  </CardContent>
                </Card>
                
                <Card className="border-green-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">AI identifies specific threats and their patterns</p>
                  </CardContent>
                </Card>
                
                <Card className="border-green-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Targeted deterrents activate to protect your crops</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="why" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                {/* Star icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Why Use Eye Crop
              </CardTitle>
              <CardDescription>
                Benefits of using our solution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">Increased Yield</h3>
                  <p className="text-gray-600">Protect up to 90% of your crops from animal damage</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">Eco-Friendly</h3>
                  <p className="text-gray-600">Non-harmful deterrents that respect wildlife</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">Cost-Effective</h3>
                  <p className="text-gray-600">Save money on expensive fencing and repellents</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">Data Insights</h3>
                  <p className="text-gray-600">Learn about wildlife patterns in your area</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="next" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                {/* Compass icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
                What's Next
              </CardTitle>
              <CardDescription>
                Future developments and roadmap
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="ml-2">
                    <h3 className="font-medium text-green-800">Mobile App Integration</h3>
                    <p className="text-sm text-gray-600">Get real-time alerts and control your system from anywhere</p>
                  </div>
                </div>
                <div className="flex items-center p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="ml-2">
                    <h3 className="font-medium text-green-800">Species Recognition</h3>
                    <p className="text-sm text-gray-600">Advanced AI to identify specific animal species</p>
                  </div>
                </div>
                <div className="flex items-center p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="ml-2">
                    <h3 className="font-medium text-green-800">Weather Integration</h3>
                    <p className="text-sm text-gray-600">Adaptive protection based on weather conditions</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Join Our Waitlist
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CropProtectionIntro;