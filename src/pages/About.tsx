
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Award, Server, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-garden-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="gradient-text font-bold mb-6">
              About Smart Garden System
            </h1>
            <p className="text-xl text-gray-600">
              Revolutionizing the way people care for their plants through intelligent technology, 
              data-driven decisions, and automated routines.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Smart Garden System, we believe that everyone deserves to experience the joy of successful gardening. 
                Our mission is to combine cutting-edge technology with the natural world to create gardens that thrive 
                with minimal effort and maximum efficiency.
              </p>
              <p className="text-gray-600 mb-4">
                We're dedicated to developing tools that not only make gardening more accessible but also more sustainable. 
                By optimizing water usage, energy consumption, and plant care, we're contributing to a greener future.
              </p>
            </div>
            <div className="bg-garden-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <Award className="h-10 w-10 text-garden-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Quality</h3>
                    <p className="text-gray-600 text-sm">Premium components and rigorous testing ensure reliability.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <Server className="h-10 w-10 text-garden-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Technology</h3>
                    <p className="text-gray-600 text-sm">Advanced sensors and AI algorithms for precision gardening.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <Shield className="h-10 w-10 text-garden-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Security</h3>
                    <p className="text-gray-600 text-sm">End-to-end encryption keeps your garden data private.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <Leaf className="h-10 w-10 text-garden-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
                    <p className="text-gray-600 text-sm">Eco-friendly practices in both our products and operations.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-garden-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our system combines hardware and software to create an intelligent garden ecosystem.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-garden-300 transform -translate-x-1/2"></div>
            
            {/* Steps */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                    <div className="bg-white p-6 rounded-xl shadow-sm inline-block md:float-right">
                      <h3 className="text-xl font-semibold mb-2">Install Sensors</h3>
                      <p className="text-gray-600">
                        Place our wireless sensors in your garden to monitor soil moisture, 
                        light levels, temperature, and humidity. The sensors are weatherproof 
                        and run on long-lasting batteries.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-garden-500 border-4 border-white transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="md:pl-12">
                    <img 
                      src="https://source.unsplash.com/random/600x400/?garden,sensor" 
                      alt="Sensor installation" 
                      className="rounded-xl shadow-md"
                    />
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="hidden md:block md:order-2 mb-8 md:mb-0 md:pl-12">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold mb-2">Connect the Hub</h3>
                      <p className="text-gray-600">
                        The Smart Garden Hub connects to your home Wi-Fi and 
                        communicates with all your sensors. It also controls 
                        your irrigation system and optional grow lights.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-garden-500 border-4 border-white transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="md:order-1 md:pr-12">
                    <img 
                      src="https://source.unsplash.com/random/600x400/?smart,home" 
                      alt="Smart Hub" 
                      className="rounded-xl shadow-md"
                    />
                  </div>
                  <div className="md:hidden mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-semibold mb-2">Connect the Hub</h3>
                      <p className="text-gray-600">
                        The Smart Garden Hub connects to your home Wi-Fi and 
                        communicates with all your sensors. It also controls 
                        your irrigation system and optional grow lights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-8 md:mb-0 md:pr-12">
                    <div className="bg-white p-6 rounded-xl shadow-sm inline-block md:float-right">
                      <h3 className="text-xl font-semibold mb-2">Monitor & Control</h3>
                      <p className="text-gray-600">
                        Use our mobile app or web dashboard to view real-time 
                        data, receive alerts, and control your garden from anywhere. 
                        The system also makes automatic adjustments based on your plants' needs.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-garden-500 border-4 border-white transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="md:pl-12">
                    <img 
                      src="https://source.unsplash.com/random/600x400/?dashboard,app" 
                      alt="Dashboard monitoring" 
                      className="rounded-xl shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-6">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate experts behind Smart Garden System.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative mx-auto w-48 h-48 mb-4 rounded-full overflow-hidden">
                <img
                  src="https://source.unsplash.com/random/200x200/?woman,portrait"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-garden-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Plant biologist with 15 years of experience in sustainable agriculture.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative mx-auto w-48 h-48 mb-4 rounded-full overflow-hidden">
                <img
                  src="https://source.unsplash.com/random/200x200/?man,portrait"
                  alt="Michael Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-garden-600 mb-2">CTO</p>
              <p className="text-gray-600 text-sm">
                IoT specialist who previously worked at leading smart home companies.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative mx-auto w-48 h-48 mb-4 rounded-full overflow-hidden">
                <img
                  src="https://source.unsplash.com/random/200x200/?woman,portrait,2"
                  alt="Emily Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Emily Rodriguez</h3>
              <p className="text-garden-600 mb-2">Head of AI</p>
              <p className="text-gray-600 text-sm">
                AI researcher specializing in computer vision for plant disease recognition.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative mx-auto w-48 h-48 mb-4 rounded-full overflow-hidden">
                <img
                  src="https://source.unsplash.com/random/200x200/?man,portrait,2"
                  alt="David Peterson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">David Peterson</h3>
              <p className="text-garden-600 mb-2">Design Director</p>
              <p className="text-gray-600 text-sm">
                Product designer with a passion for creating intuitive user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
