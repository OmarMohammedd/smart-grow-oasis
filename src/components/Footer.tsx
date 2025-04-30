import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-garden-600" />
              <span className="ml-2 text-xl font-bold text-garden-700">Smart Garden</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Bringing intelligence to your garden, one plant at a time.
            </p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-garden-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-garden-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-garden-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-garden-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-garden-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-garden-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-gray-600 hover:text-garden-600 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/diagnosis" className="text-sm text-gray-600 hover:text-garden-600 transition-colors">
                  Plant Diagnosis
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-garden-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Features</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-garden-600 transition-colors">
                  Automated Irrigation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-garden-600 transition-colors">
                  Real-time Monitoring
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-garden-600 transition-colors">
                  Plant Health Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-garden-600 transition-colors">
                  Smart Lighting
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-garden-600 transition-colors">
                  Water Tank Monitoring
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-garden-600 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-garden-600 transition-colors">
                  User Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-garden-600 transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-garden-600 transition-colors">
                  Troubleshooting
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Smart Garden System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
