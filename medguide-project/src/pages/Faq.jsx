import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const faqData = [
  {
    question: "What does this platform do?",
    answer: "It's an AI-based smart platform that help users convert complex, non-readable medical notes/prescriptions into clear, digital text."
  },
  {
    question: "Who is it for?",
    answer: "Patients, doctors, and pharmicists — basically anyone who wants a clear understandable copy of their prescription."
  },
  {
    question: "Is it paid or any hidden charges?",
    answer: "This platform is Absolutely Free to use with no hidden charges."
  },
  {
    question: "Is it scalable and secure?",
    answer: "Absolutely. It's built to scale for medical centers and individual users, with complete data privacy."
  }
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden" id="fade-in2">
      <Navbar />

      {/* Floating Decorations */}
      <div className="absolute w-[150px] h-[150px] bg-gradient-to-tr from-teal-600 to-cyan-700 rounded-full blur-[80px] opacity-50 animate-float1 top-[10%] left-[5%]"></div>
      <div className="absolute w-[150px] h-[150px] bg-gradient-to-tr from-teal-600 to-cyan-700 rounded-full blur-[80px] opacity-50 animate-float2 top-[15%] right-[5%]"></div>
      <div className="absolute w-[150px] h-[150px] bg-gradient-to-tr from-teal-600 to-cyan-700 rounded-full blur-[80px] opacity-50 animate-float3 bottom-[10%] left-[8%]"></div>
      <div className="absolute w-[150px] h-[150px] bg-gradient-to-tr from-teal-600 to-cyan-700 rounded-full blur-[80px] opacity-50 animate-float4 bottom-[15%] right-[8%]"></div>

      <div className="relative z-10 flex-grow px-4 py-12 md:px-8">
        <div className="max-w-4xl mx-auto bg-slate-200 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-lg max-h-[80vh] overflow-y-auto">
          <h2 className="text-3xl md:text-4xl text-center font-extrabold uppercase tracking-wider text-teal-600 mb-8 relative">
            Frequently Asked Questions
            <span className="block w-[60px] h-[3px] bg-gradient-to-r from-teal-600 to-cyan-700 rounded mx-auto mt-2"></span>
          </h2>

          {faqData.map((faq, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div
                onClick={() => handleToggle(index)}
                className={`flex justify-between items-center cursor-pointer bg-teal-600 text-white rounded-xl px-6 py-4 transition-all border border-white/10 hover:bg-teal-500`}
              >
                <h3 className={`font-semibold text-[1.1rem] transition-colors ${expanded === index ? 'text-black' : ''}`}>
                  {faq.question}
                </h3>
                <span className={`transform transition-transform ${expanded === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
              {expanded === index && (
                <div className="px-6 py-4 border-t border-white/10 text-black leading-relaxed bg-transparent">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
