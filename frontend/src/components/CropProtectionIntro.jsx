import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EyeCropIntro = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-10">
        <div className="flex justify-center">
          <div className="bg-green-100 p-4 rounded-full">
            {/* Camera icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-green-800">EyeCrop</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          AI-powered protection for your homegrown fruits and vegetables from
          birds, rodents, and other pests.
        </p>
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
                {/* Raspberry Pi icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="1"></circle>
                  <circle cx="15" cy="9" r="1"></circle>
                  <circle cx="9" cy="15" r="1"></circle>
                  <circle cx="15" cy="15" r="1"></circle>
                </svg>
                How EyeCrop Works
              </CardTitle>
              <CardDescription>
                Our Raspberry Pi & AI-powered approach to crop protection
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-green-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Detection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      AI-powered camera detects birds and rodents in real-time
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      System plays deterrent sounds when animals are detected
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Web app provides statistics and remote monitoring
                      capabilities
                    </p>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Why Use EyeCrop
              </CardTitle>
              <CardDescription>Benefits for home gardeners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">
                    Protect Your Harvest
                  </h3>
                  <p className="text-gray-600">
                    Keep birds and rodents away from your raspberries and
                    strawberries
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">
                    Affordable Solution
                  </h3>
                  <p className="text-gray-600">
                    Built with accessible technology like Raspberry Pi
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">
                    Remote Monitoring
                  </h3>
                  <p className="text-gray-600">
                    Track activity and view stats from anywhere via the web app
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 mb-2">
                    Sustainable Gardening
                  </h3>
                  <p className="text-gray-600">
                    Energy-efficient technology for eco-friendly pest control
                  </p>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
                What's Next for EyeCrop
              </CardTitle>
              <CardDescription>Future developments and roadmap</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="ml-2">
                    <h3 className="font-medium text-green-800">
                      Mobile App Development
                    </h3>
                    <p className="text-sm text-gray-600">
                      For even more convenient monitoring and control
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="ml-2">
                    <h3 className="font-medium text-green-800">
                      Expanded AI Models
                    </h3>
                    <p className="text-sm text-gray-600">
                      Detection of more types of animals and pests
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="ml-2">
                    <h3 className="font-medium text-green-800">
                      Weather & Crop Health Monitoring
                    </h3>
                    <p className="text-sm text-gray-600">
                      Integration with gardening conditions and plant health
                      tracking
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-3 border-l-4 border-green-500 bg-green-50">
                  <div className="ml-2">
                    <h3 className="font-medium text-green-800">
                      Community Partnerships
                    </h3>
                    <p className="text-sm text-gray-600">
                      Collaborating with local gardening communities
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Tech Stack Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-700">Built With</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              IMX500
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              JavaScript
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              Python
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              React
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              SQLite
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              Raspberry Pi
            </span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
              3D Printing
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EyeCropIntro;
