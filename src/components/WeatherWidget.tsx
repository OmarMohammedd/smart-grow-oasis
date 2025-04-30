
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Thermometer, Droplet, Wind, CloudRain, Sun, CloudSun } from 'lucide-react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState({
    temperature: 28,
    humidity: 65,
    condition: 'Sunny',
    windSpeed: 12,
    location: 'Cairo, Egypt',
    time: new Date().toLocaleTimeString(),
  });

  // Simulate real-time weather updates
  useEffect(() => {
    const interval = setInterval(() => {
      const conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain', 'Clear'];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      const randomTemp = Math.floor(Math.random() * 5) + 26; // 26-30°C
      const randomHumidity = Math.floor(Math.random() * 10) + 60; // 60-70%
      
      setWeather({
        ...weather,
        temperature: randomTemp,
        humidity: randomHumidity,
        condition: randomCondition,
        time: new Date().toLocaleTimeString(),
      });
    }, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, [weather]);

  const getWeatherIcon = () => {
    switch(weather.condition) {
      case 'Sunny':
        return <Sun className="h-12 w-12 text-sun-dark" />;
      case 'Partly Cloudy':
        return <CloudSun className="h-12 w-12 text-gray-500" />;
      case 'Cloudy':
        return <Cloud className="h-12 w-12 text-gray-500" />;
      case 'Light Rain':
        return <CloudRain className="h-12 w-12 text-water-dark" />;
      case 'Clear':
        return <Sun className="h-12 w-12 text-sun-dark" />;
      default:
        return <Sun className="h-12 w-12 text-sun-dark" />;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Current Weather</CardTitle>
        <CardDescription>{weather.location} • {weather.time}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {getWeatherIcon()}
            <div className="ml-4">
              <p className="text-3xl font-bold">{weather.temperature}°C</p>
              <p className="text-gray-500">{weather.condition}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <Droplet className="h-5 w-5 text-water-dark mr-2" />
              <span className="text-sm">{weather.humidity}% Humidity</span>
            </div>
            <div className="flex items-center">
              <Wind className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-sm">{weather.windSpeed} km/h Wind</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
