
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FeatureCard from '@/components/FeatureCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Droplet, Thermometer, Plant, Sun, Water } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="gradient-text font-bold mb-6">
              Smart Garden System
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Harness the power of technology to grow healthier plants with less effort. 
              Real-time monitoring and intelligent automation for your garden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button className="bg-garden-600 hover:bg-garden-700 text-white px-8 py-6 rounded-md text-lg">
                  View Live Dashboard
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-garden-600 text-garden-600 hover:bg-garden-50 px-8 py-6 rounded-md text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            />
          </svg>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold gradient-text mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Smart Garden System combines sensors, automation, and AI to make gardening effortless and efficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Automated Irrigation"
              description="Smart watering based on soil moisture levels ensures your plants get exactly what they need, when they need it."
              icon={Droplet}
            />
            <FeatureCard
              title="Real-time Monitoring"
              description="Track temperature, humidity, soil moisture, and light intensity from anywhere via our intuitive dashboard."
              icon={Thermometer}
            />
            <FeatureCard
              title="Plant Health Analysis"
              description="AI-powered diagnosis identifies plant diseases and provides treatment recommendations by analyzing leaf photos."
              icon={Plant}
            />
            <FeatureCard
              title="Smart Lighting Control"
              description="Schedule lighting or let the system automatically adjust based on ambient light conditions for optimal plant growth."
              icon={Sun}
            />
            <FeatureCard
              title="Water Tank Monitoring"
              description="Never run dry with real-time water level tracking and timely alerts when refilling is needed."
              icon={Water}
            />
            <FeatureCard
              title="Weather Integration"
              description="The system adjusts care routines based on current and forecasted weather conditions in your area."
              icon={Cloud}
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-garden-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Experience the Future of Gardening</h2>
                  <p className="text-gray-600 mb-6">
                    Join thousands of smart gardeners who have revolutionized their plant care routine with our intelligent system.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-garden-600 hover:bg-garden-700 text-white px-6 py-3 rounded-md">
                      Contact Us Today
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-garden-600 p-8 md:p-12 lg:p-16 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Smart Garden?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Reduce water usage by up to 40%</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Save time with automated maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Identify and treat plant issues early</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Optimize growing conditions year-round</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>Easy installation and intuitive controls</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
