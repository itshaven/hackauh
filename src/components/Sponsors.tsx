import React from 'react';
import { Heart, Building, Code, Zap, Users } from 'lucide-react';

const Sponsors: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Become a <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Sponsor</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join us in empowering the next generation of innovators and get your brand in front of 1000+ talented young developers
          </p>
        </div>

        {/* Sponsorship Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
            <div className="text-purple-600 mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Reach 1000+ Students
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Connect with the brightest young minds in the UAE and showcase your brand to future tech leaders.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
            <div className="text-blue-600 mb-4">
              <Building className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Brand Visibility
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Get prominent logo placement, social media mentions, and direct engagement with participants.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
            <div className="text-green-600 mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Support Innovation
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Help nurture the next generation of innovators and be part of their journey to success.
            </p>
          </div>
        </div>

        {/* Sponsorship Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white text-center">
            <Building className="w-12 h-12 mx-auto mb-4 text-purple-200" />
            <h3 className="text-2xl font-bold mb-4">Title Sponsor</h3>
            <p className="text-purple-100 mb-6">Maximum visibility and exclusive partnership benefits</p>
            <a
              href="mailto:team@hackabudhabi.com"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-200" />
            <h3 className="text-2xl font-bold mb-4">Gold Sponsor</h3>
            <p className="text-yellow-100 mb-6">Premium branding and engagement opportunities</p>
            <a
              href="mailto:team@hackabudhabi.com"
              className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl p-8 text-white text-center">
            <Code className="w-12 h-12 mx-auto mb-4 text-gray-200" />
            <h3 className="text-2xl font-bold mb-4">Silver Sponsor</h3>
            <p className="text-gray-100 mb-6">Great exposure and community support recognition</p>
            <a
              href="mailto:team@hackabudhabi.com"
              className="inline-block bg-white text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <Heart className="w-12 h-12 mx-auto mb-6 text-white/90" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Partner With Us
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of the largest high school hackathon in the UAE and help shape the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:team@hackabudhabi.com"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Become a Sponsor
              </a>
              <a
                href="mailto:team@hackabudhabi.com"
                className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Get Sponsor Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;