import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can participate in Hack Abu Dhabi?",
      answer: "Hack Abu Dhabi is exclusively for high school students (ages 14-18). You don't need prior coding experience - we welcome beginners and experts alike!"
    },
    {
      question: "Do I need a team to participate?",
      answer: "No! You can register individually and we'll help you find teammates during our team formation session. Teams can have 2-4 members maximum."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, charger, any hardware you want to use, and your creativity! We'll provide food, drinks, WiFi, and a great venue. Don't forget a sleeping bag if you plan to stay overnight."
    },
    {
      question: "Is there a registration fee?",
      answer: "No! Hack Abu Dhabi is completely free for all participants. This includes meals, snacks, workshops, and all event activities."
    },
    {
      question: "Will there be mentors and workshops?",
      answer: "Absolutely! We'll have experienced mentors available throughout the event, plus workshops on web development, mobile apps, AI/ML, and more."
    },
    {
      question: "What if I'm new to programming?",
      answer: "Perfect! We have beginner-friendly workshops and mentors specifically to help newcomers. Many successful projects have been built by first-time hackers."
    },
    {
      question: "What kind of projects can we build?",
      answer: "Anything you can imagine! Web apps, mobile apps, games, hardware projects, AI solutions - the sky's the limit. We encourage innovative solutions to real-world problems."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers! Here's everything you need to know about Hack Abu Dhabi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl mb-4 border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <div className="text-purple-400 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-300 mb-6">Still have questions?</p>
          <a
            href="mailto:team@hackabudhabi.com"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;