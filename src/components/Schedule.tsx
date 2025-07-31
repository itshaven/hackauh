import React from 'react';
import { Clock, Coffee, Code, Trophy, Users, Lightbulb } from 'lucide-react';

const Schedule: React.FC = () => {
  const scheduleDay1 = [
    { time: '9:00 AM', event: 'Registration & Check-in', icon: <Users className="w-5 h-5" /> },
    { time: '10:00 AM', event: 'Opening Ceremony', icon: <Trophy className="w-5 h-5" /> },
    { time: '11:00 AM', event: 'Team Formation & Ideation', icon: <Lightbulb className="w-5 h-5" /> },
    { time: '12:00 PM', event: 'Hacking Begins!', icon: <Code className="w-5 h-5" /> },
    { time: '1:00 PM', event: 'Lunch Break', icon: <Coffee className="w-5 h-5" /> },
    { time: '3:00 PM', event: 'Workshop: Web Development', icon: <Code className="w-5 h-5" /> },
    { time: '5:00 PM', event: 'Workshop: Mobile App Development', icon: <Code className="w-5 h-5" /> },
    { time: '7:00 PM', event: 'Dinner & Networking', icon: <Coffee className="w-5 h-5" /> },
    { time: '9:00 PM', event: 'Midnight Snacks & Continued Hacking', icon: <Coffee className="w-5 h-5" /> },
  ];

  const scheduleDay2 = [
    { time: '8:00 AM', event: 'Breakfast & Morning Energy', icon: <Coffee className="w-5 h-5" /> },
    { time: '10:00 AM', event: 'Final Sprint & Bug Fixes', icon: <Code className="w-5 h-5" /> },
    { time: '12:00 PM', event: 'Project Submissions Due', icon: <Clock className="w-5 h-5" /> },
    { time: '1:00 PM', event: 'Lunch & Demo Prep', icon: <Coffee className="w-5 h-5" /> },
    { time: '2:00 PM', event: 'Project Presentations', icon: <Trophy className="w-5 h-5" /> },
    { time: '4:00 PM', event: 'Judging & Deliberation', icon: <Users className="w-5 h-5" /> },
    { time: '5:00 PM', event: 'Awards Ceremony', icon: <Trophy className="w-5 h-5" /> },
    { time: '6:00 PM', event: 'Closing & Networking', icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Event <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Schedule</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Two action-packed days of innovation, learning, and competition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Day 1 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Day 1 - December 13, 2025
            </h3>
            <div className="space-y-4">
              {scheduleDay1.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <div className="text-purple-400">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{item.event}</span>
                      <span className="text-purple-300 text-sm font-mono">{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Day 2 - December 14, 2025
            </h3>
            <div className="space-y-4">
              {scheduleDay2.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <div className="text-blue-400">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{item.event}</span>
                      <span className="text-blue-300 text-sm font-mono">{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;