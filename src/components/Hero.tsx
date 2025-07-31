import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import Countdown from './Countdown';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Hack
            </span>
            <span className="text-white"> Abu Dhabi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The ultimate high school hackathon experience. Build, innovate, and compete with the brightest young minds in the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl">
          <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <Calendar className="w-5 h-5 text-purple-400" />
            <span className="text-white font-medium">Dec 13-14, 2025</span>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">Abu Dhabi, UAE</span>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <Users className="w-5 h-5 text-green-400" />
            <span className="text-white font-medium">High School Students</span>
          </div>
        </div>

        <div className="w-full max-w-4xl mb-12">
          <Countdown />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://hackauh.fillout.com/had-register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;