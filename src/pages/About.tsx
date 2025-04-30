
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Leaf, Droplet, Thermometer, Sun } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <div className="bg-garden-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-garden-800 mb-6">About Smart Garden System</h1>
              <p className="text-xl text-gray-600">
                Transforming how you care for your plants with cutting-edge technology and intelligent automation
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Smart Garden System was born out of a shared passion for both plants and technology. Our team of engineers and plant enthusiasts recognized a common problem: maintaining optimal growing conditions for plants requires consistent attention and expertise that many plant lovers simply don't have time for.
              </p>
              <p className="text-gray-600 mb-4">
                We set out to create a solution that would make advanced plant care techniques accessible to everyone, from busy professionals to retirees with mobility limitations, and from novice gardeners to experienced horticulturists.
              </p>
              <p className="text-gray-600">
                After two years of research, development, and testing with hundreds of plant varieties, we launched Smart Garden System to help people grow healthier plants with less effort while conserving resources like water and electricity.
              </p>
            </div>
            <div className="bg-garden-100 rounded-lg p-8">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Smart garden system installed in a home" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Leaf className="h-5 w-5 text-garden-600 mr-2" />
                  <span className="text-gray-700">Launched 2023</span>
                </div>
                <div className="flex items-center">
                  <Droplet className="h-5 w-5 text-garden-600 mr-2" />
                  <span className="text-gray-700">40% Water Savings</span>
                </div>
                <div className="flex items-center">
                  <Sun className="h-5 w-5 text-garden-600 mr-2" />
                  <span className="text-gray-700">25+ Plant Types</span>
                </div>
                <div className="flex items-center">
                  <Thermometer className="h-5 w-5 text-garden-600 mr-2" />
                  <span className="text-gray-700">4 Sensor Types</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-garden-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-garden-700 p-6 rounded-lg">
                <div className="bg-garden-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Install Sensors</h3>
                <p className="text-garden-100">
                  Place the wireless sensors in your plant pots or garden beds. The sensors monitor soil moisture, light, temperature, and humidity in real-time.
                </p>
              </div>
              <div className="bg-garden-700 p-6 rounded-lg">
                <div className="bg-garden-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect Hub</h3>
                <p className="text-garden-100">
                  Connect the central hub to your home WiFi. The hub receives data from sensors and controls the irrigation and lighting systems based on plant needs.
                </p>
              </div>
              <div className="bg-garden-700 p-6 rounded-lg">
                <div className="bg-garden-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Monitor & Control</h3>
                <p className="text-garden-100">
                  Use the app or web dashboard to monitor plant conditions, customize care routines, and receive alerts. The system automatically waters and adjusts lighting.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3">How is Smart Garden different from basic irrigation timers?</h3>
              <p className="text-gray-600">
                Unlike basic timers that water on a fixed schedule regardless of conditions, Smart Garden monitors actual soil moisture and only waters when plants need it. It also tracks environmental factors and learns over time.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3">Do I need to be tech-savvy to use the system?</h3>
              <p className="text-gray-600">
                Not at all. Smart Garden is designed to be user-friendly with simple setup and an intuitive interface. Once installed, the system runs automatically with minimal input needed.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3">How many plants can one system monitor?</h3>
              <p className="text-gray-600">
                The standard system supports up to 12 sensors, ideal for apartment gardens or small outdoor spaces. Our premium system supports up to 48 sensors for larger gardens.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3">Is the system suitable for outdoor gardens?</h3>
              <p className="text-gray-600">
                Yes, our sensors are weather-resistant and designed for both indoor and outdoor use. The hub should be placed indoors, but it can communicate with sensors up to 100 feet away.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
