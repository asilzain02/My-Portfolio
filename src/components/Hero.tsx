import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';


const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Software Engineer';

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 150);

    return () => clearInterval(typingEffect);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-4xl font-bold text-white">
                  AZ
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Asil Zain
            </span>
          </h1>

          <div className="text-3xl md:text-4xl mb-8 font-light">
            <span className="text-gray-300">I'm a </span>
            <span className="text-blue-400 font-mono">
              {text}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
            </span>
          </div>

          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Open to opportunities in Software Development, Web, and AI-driven projects.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
            <a
              href="/MyCV.pdf"
              download="AsilZain_CV.pdf"
              //className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 hover:border-gray-500 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
            <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 hover:border-gray-500 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Download size={20} />
              <span>Download CV</span>
        
            </button>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/asilzain02', color: 'hover:text-gray-400' },
              { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:asilzain02@gmail.com', color: 'hover:text-green-400' },
            ].map(({ icon: Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                className={`text-gray-500 ${color} transform hover:scale-125 transition-all duration-300`}
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;