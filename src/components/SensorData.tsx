
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Thermometer, Droplet, Sun, Water } from 'lucide-react';

interface SensorReadingProps {
  title: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  progress: number;
  progressColor: string;
}

const SensorReading = ({ title, value, unit, icon, progress, progressColor }: SensorReadingProps) => (
  <div className="mb-4">
    <div className="flex items-center justify-between mb-1">
      <div className="flex items-center">
        {icon}
        <span className="ml-2 text-sm font-medium">{title}</span>
      </div>
      <span className="text-sm font-semibold">
        {value} {unit}
      </span>
    </div>
    <Progress value={progress} className={`h-2 ${progressColor}`} />
  </div>
);

const SensorData = () => {
  const [sensorData, setSensorData] = useState({
    soilMoisture: 62,
    temperature: 24,
    lightLevel: 78,
    waterLevel: 85,
    lastUpdated: new Date().toLocaleTimeString(),
  });

  // Simulate sensor data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData({
        soilMoisture: Math.floor(Math.random() * 15) + 55, // 55-70%
        temperature: Math.floor(Math.random() * 6) + 22, // 22-27°C
        lightLevel: Math.floor(Math.random() * 20) + 70, // 70-90%
        waterLevel: Math.max(sensorData.waterLevel - 1, 65), // Slowly decreasing
        lastUpdated: new Date().toLocaleTimeString(),
      });
    }, 10000); // Update every 10 seconds
    
    return () => clearInterval(interval);
  }, [sensorData]);

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center justify-between">
          <span>Real-time Sensor Data</span>
          <span className="text-xs text-gray-500">Last update: {sensorData.lastUpdated}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SensorReading
          title="Soil Moisture"
          value={sensorData.soilMoisture}
          unit="%"
          icon={<Droplet className="h-4 w-4 text-water-dark" />}
          progress={sensorData.soilMoisture}
          progressColor="bg-water-dark"
        />
        
        <SensorReading
          title="Temperature"
          value={sensorData.temperature}
          unit="°C"
          icon={<Thermometer className="h-4 w-4 text-red-500" />}
          progress={(sensorData.temperature / 40) * 100} // Assuming max is 40°C
          progressColor="bg-red-500"
        />
        
        <SensorReading
          title="Light Level"
          value={sensorData.lightLevel}
          unit="%"
          icon={<Sun className="h-4 w-4 text-sun-dark" />}
          progress={sensorData.lightLevel}
          progressColor="bg-sun-dark"
        />
        
        <SensorReading
          title="Water Tank Level"
          value={sensorData.waterLevel}
          unit="%"
          icon={<Water className="h-4 w-4 text-blue-500" />}
          progress={sensorData.waterLevel}
          progressColor="bg-blue-500"
        />

        {sensorData.waterLevel < 70 && (
          <div className="mt-4 p-2 bg-red-100 text-red-700 text-sm rounded">
            ⚠️ Water tank level is low! Consider refilling soon.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SensorData;
