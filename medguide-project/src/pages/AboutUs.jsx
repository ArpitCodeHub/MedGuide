import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-gray-900 px-4 sm:px-8 py-10 sm:py-16 mt-3" id="fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-teal-600 mb-4 sm:mb-6">🩺 Welcome to MedGuide</h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
          Your trusted solution for decoding handwritten prescriptions effortlessly. We help users convert complex, non-readable medical notes into clear, digital text, ensuring accurate understanding and accessibility. Whether it's deciphering doctor’s handwriting or simplifying prescription details, MedGuide ensures clarity in healthcare communication. Let’s make prescriptions easier to read, one scan at a time!
          </p>
        </div>

        {/* Features Section (Gradient Background) */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-teal-600 to-cyan-700 text-gray-300 rounded-lg shadow-xl p-4 sm:p-8" id="fade-in2">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">🔹 Key Features </h2>
          <ul className="grid gap-3 sm:gap-4 text-white">
            <li> Handwriting to Digital Conversion – Easily transform difficult-to-read prescriptions into clear, digital text.
            </li>
            <li> AI-Powered Medicine Identification – Recognize medicines, dosages, and instructions for better understanding.
            </li>
            <li> Secure & Private Processing – Ensure safe handling of medical data with top-tier encryption.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;