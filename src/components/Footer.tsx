import React from 'react';
import { Mail, Instagram, Calendar, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Hack Abu Dhabi
              </span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Empowering the next generation of innovators through technology, creativity, and collaboration.
            </p>
          </div>

          {/* Event Details */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Event Details</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">December 13-14, 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-slate-300">Abu Dhabi, UAE</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:team@hackabudhabi.com"
                className="flex items-center justify-center md:justify-end space-x-2 text-slate-300 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>team@hackabudhabi.com</span>
              </a>
              <a
                href="https://instagram.com/hackauh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end space-x-2 text-slate-300 hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
                <span>@hackauh</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Hack Abu Dhabi. Built with passion for the next generation of innovators.
          </p>
          <div className="mt-4">
            <a
              href="https://hackauh.fillout.com/had-register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;