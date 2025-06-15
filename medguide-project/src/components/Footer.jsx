import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="bg-teal-600 text-black py-12 mb-0">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
          <div>
            <h4 className="text-white font-semibold mb-4 text-3xl">MedGuide</h4>
            <p className="text-slate-300">Your AI co-pilot for getting medical treatment in-hand.</p>
          </div>
          <div>
            <Link to="/about" className="text-white font-semibold mb-4 text-lg">About Us</Link>
          </div>
          <div>
            <Link to="/faq" className="text-white font-semibold mb-4 text-lg">Frequently Asked Questions</Link>
          </div>
        </div>
        <div className="text-center text-sm text-white mt-8 padding-top: 50px mb--4">
          © {new Date().getFullYear()} MedGuide. All rights reserved.
        </div>
      </footer>
    );
  }