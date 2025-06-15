import React, { useState } from "react";
import Tesseract from "tesseract.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MedGuide() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageToText = () => {
    if (!file) return alert("Please select a file.");
    setLoading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      const imageDataUrl = reader.result;
      const result = await Tesseract.recognize(imageDataUrl, "eng");
      setText(result.data.text);
      setLoading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-slate-100 shadow-xl rounded-2xl p-8 max-w-[600px] h-auto w-full text-center">
        <h1 className="text-4xl font-bold text-teal-600 mb-6">
          🩺 Upload Prescription
        </h1>
        <p className="text-gray-400 text-sm">*Please upload well-written image with proper lighting*</p>
        <br />
        <input
          type="file"
          accept=".png, .jpg, .jpeg,"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full mb-4 text-md"
        />
        <br /><br />
        <button
          onClick={handleImageToText}
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-full transition duration-300 text-lg"
        >
          Extract Text
        </button>

        {loading && (
          <p className="mt-4 text-teal-500 font-medium">🔍 Reading handwriting...</p>
        )}

{text && (
  <div className="mt-8 w-full text-left">
    <div className="bg-white shadow-lg rounded-lg border-l-4 border-teal-600 p-5 max-h-80 overflow-auto">
      <h3 className="text-xl font-bold text-teal-600 mb-3">📝 Extracted Text</h3>
      <div className="bg-blue-50 p-4 rounded text-sm font-mono whitespace-pre-wrap text-gray-800 leading-relaxed">
        {text}
      </div>
    </div>
  </div>
)}

      </div>
    </div>
    <Footer />
    </>
  );
}

export default MedGuide;