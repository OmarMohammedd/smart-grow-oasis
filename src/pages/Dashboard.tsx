
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WeatherWidget from '@/components/WeatherWidget';
import SensorData from '@/components/SensorData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Water, Sun, CloudRain, Droplet, Plant, Lightbulb } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

// Simulated historical data for charts
const generateHistoricalData = () => {
  const data = [];
  const now = new Date();
  
  for (let i = 23; i >= 0; i--) {
    const time = new Date(now);
    time.setHours(now.getHours() - i);
    
    data.push({
      time: time.getHours() + ':00',
      moisture: Math.floor(Math.random() * 15) + 55, // 55-70%
      temperature: Math.floor(Math.random() * 6) + 22, // 22-27°C
      light: Math.floor(Math.random() * 20) + 70, // 70-90%
      waterLevel: Math.max(85 - i * 0.8, 65), // Declining from 85% to ~65%
    });
  }
  
  return data;
};

const generateWaterUsageData = () => {
  return [
    { name: 'Mon', amount: Math.floor(Math.random() * 30) + 20 },
    { name: 'Tue', amount: Math.floor(Math.random() * 30) + 20 },
    { name: 'Wed', amount: Math.floor(Math.random() * 30) + 20 },
    { name: 'Thu', amount: Math.floor(Math.random() * 30) + 20 },
    { name: 'Fri', amount: Math.floor(Math.random() * 30) + 20 },
    { name: 'Sat', amount: Math.floor(Math.random() * 30) + 20 },
    { name: 'Sun', amount: Math.floor(Math.random() * 30) + 20 },
  ];
};

const Dashboard = () => {
  const [historicalData] = useState(generateHistoricalData());
  const [waterUsageData] = useState(generateWaterUsageData());
  const [irrigationEnabled, setIrrigationEnabled] = useState(true);
  const [lightingEnabled, setLightingEnabled] = useState(true);
  const [lightIntensity, setLightIntensity] = useState([60]);
  const [irrigationThreshold, setIrrigationThreshold] = useState([40]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-8">System Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <WeatherWidget />
            </div>
            <div>
              <SensorData />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Historical Data (Last 24 Hours)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={historicalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="moisture" 
                          stroke="#2196F3" 
                          name="Soil Moisture (%)"
                          strokeWidth={2}
                          dot={false}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="temperature" 
                          stroke="#F44336" 
                          name="Temperature (°C)"
                          strokeWidth={2}
                          dot={false}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="light" 
                          stroke="#FFC107" 
                          name="Light Level (%)"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Water Usage (Last Week)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={waterUsageData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="amount" name="Water (ml)" fill="#2196F3" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-md">
                    <div className="flex items-center">
                      <CloudRain className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="text-sm text-blue-700">Weekly water usage: 175ml</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>System Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="irrigation">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="irrigation">
                      <Water className="h-4 w-4 mr-2" />
                      Irrigation
                    </TabsTrigger>
                    <TabsTrigger value="lighting">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Lighting
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="irrigation" className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="irrigation-mode" 
                          checked={irrigationEnabled} 
                          onCheckedChange={setIrrigationEnabled} 
                        />
                        <Label htmlFor="irrigation-mode">Automatic Irrigation</Label>
                      </div>
                      <span className={irrigationEnabled ? "text-green-500 text-sm" : "text-gray-500 text-sm"}>
                        {irrigationEnabled ? "Enabled" : "Disabled"}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="irrigation-threshold">Moisture Threshold</Label>
                        <span className="text-sm text-gray-500">{irrigationThreshold}%</span>
                      </div>
                      <Slider 
                        id="irrigation-threshold" 
                        value={irrigationThreshold} 
                        onValueChange={setIrrigationThreshold} 
                        min={20} 
                        max={80} 
                        step={1} 
                        disabled={!irrigationEnabled}
                      />
                      <p className="text-xs text-gray-500">
                        System will water plants when soil moisture falls below this level
                      </p>
                    </div>
                    
                    <div className="pt-4 grid grid-cols-2 gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-blue-500 text-blue-500 hover:bg-blue-50"
                        disabled={!irrigationEnabled}
                      >
                        <Droplet className="h-4 w-4 mr-2" />
                        Test Irrigation
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-green-500 text-green-500 hover:bg-green-50"
                      >
                        <Plant className="h-4 w-4 mr-2" />
                        View Schedule
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="lighting" className="space-y-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="lighting-mode" 
                          checked={lightingEnabled} 
                          onCheckedChange={setLightingEnabled} 
                        />
                        <Label htmlFor="lighting-mode">Smart Lighting</Label>
                      </div>
                      <span className={lightingEnabled ? "text-green-500 text-sm" : "text-gray-500 text-sm"}>
                        {lightingEnabled ? "Enabled" : "Disabled"}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="light-intensity">Light Intensity</Label>
                        <span className="text-sm text-gray-500">{lightIntensity}%</span>
                      </div>
                      <Slider 
                        id="light-intensity" 
                        value={lightIntensity} 
                        onValueChange={setLightIntensity} 
                        min={10} 
                        max={100} 
                        step={1} 
                        disabled={!lightingEnabled}
                      />
                      <p className="text-xs text-gray-500">
                        Adjusts the brightness of grow lights
                      </p>
                    </div>
                    
                    <div className="pt-4 grid grid-cols-2 gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-yellow-500 text-yellow-500 hover:bg-yellow-50"
                        disabled={!lightingEnabled}
                      >
                        <Sun className="h-4 w-4 mr-2" />
                        Test Lights
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-green-500 text-green-500 hover:bg-green-50"
                      >
                        <Plant className="h-4 w-4 mr-2" />
                        Light Schedule
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-md p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">System Status</p>
                          <p className="text-lg font-medium">Online</p>
                        </div>
                        <div className="p-2 bg-green-100 rounded-full">
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-md p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">Connected Sensors</p>
                          <p className="text-lg font-medium">4 / 4</p>
                        </div>
                        <div className="p-2 bg-blue-100 rounded-full">
                          <Server className="h-4 w-4 text-blue-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm">Temperature Sensor</span>
                      </div>
                      <span className="text-xs text-gray-500">Battery: 92%</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm">Soil Moisture Sensor</span>
                      </div>
                      <span className="text-xs text-gray-500">Battery: 87%</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm">Light Sensor</span>
                      </div>
                      <span className="text-xs text-gray-500">Battery: 95%</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm">Water Level Sensor</span>
                      </div>
                      <span className="text-xs text-gray-500">Battery: 78%</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-sm font-medium mb-2">System Information</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div className="flex justify-between">
                        <span>Last Update:</span>
                        <span>Just now</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Firmware Version:</span>
                        <span>v2.1.4</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Irrigation:</span>
                        <span>Today, 08:15 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Next Scheduled Action:</span>
                        <span>Irrigation at 07:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
