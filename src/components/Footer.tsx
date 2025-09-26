import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-4">
              {'<Dev />'}
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Turning ideas into code, and code into solutions.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-gray-500 mb-8">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of</span>
              <Coffee size={16} className="text-yellow-500" />
              <span>using</span>
              <Code size={16} className="text-blue-400" />
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-500">
                  © {new Date().getFullYear()} Asil Zain. All rights reserved.
                </p>
                <div className="flex space-x-8 text-gray-500">
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    Privacy
                  </a>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    Terms
                  </a>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    Sitemap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;