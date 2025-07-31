import React from 'react';
import { Code, Trophy, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "48 Hours of Innovation",
      description: "Two full days to bring your wildest ideas to life with cutting-edge technology."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Amazing Prizes",
      description: "Compete for exciting prizes and recognition in multiple categories."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Meet Like-Minded Peers",
      description: "Connect with fellow high school innovators and build lasting friendships."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Learn & Grow",
      description: "Attend workshops, get mentorship, and level up your technical skills."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Join <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Hack Abu Dhabi?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the thrill of creation, collaboration, and competition in the heart of Abu Dhabi. 
            Whether you're a coding veteran or just starting your tech journey, HAD is your launchpad to greatness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className="text-purple-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            What You'll Get
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">48</div>
              <div className="text-sm opacity-90">Hours of Hacking</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm opacity-90">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-sm opacity-90">Food & Swag</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Mentorship</div>
            </div>
          </div>
          <a
            href="https://hackauh.fillout.com/had-register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Join the Innovation
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;