import { Link } from "react-router-dom";

export default function Hero() {
    return (
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Meet MedGuide AI
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Your AI co‑pilot for in-hand medical facilty.
            </p>
            <Link
              to="/medguide"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg"
            >
              Talk to MedGuide
            </Link>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
                alt="Hero Image"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }