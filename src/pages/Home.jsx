import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { X } from "lucide-react";

function Home() {
  const navigate = useNavigate();
  const hasNavigated = useRef(false);
  const [showConsultation, setShowConsultation] = useState(false);

  const handleArrowClick = () => {
    if (!hasNavigated.current) {
      hasNavigated.current = true;
      navigate("/properties");
    }
  };

useEffect(() => {
  const handleWheel = (e) => {
    if (e.deltaY > 50 && !hasNavigated.current) {
      hasNavigated.current = true;
      navigate("/properties");
    }
  };

  window.addEventListener("wheel", handleWheel, { passive: true });
  return () => window.removeEventListener("wheel", handleWheel);
}, [navigate]);


  return (
    <div className="font-sans text-white overflow-x-hidden bg-[#f5f5f5]">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.03 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </motion.video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

        {/* Optional Minimalist Logo */}
        <div className="absolute top-6 left-6 z-10 text-white text-xl font-bold tracking-widest">
          🌿 Peepal Estates
        </div>

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
          >
            Luxury Homes, Tailored for You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl mb-6 max-w-2xl text-white"
          >
            Peepal Estates delivers modern, elegant living spaces that elevate your lifestyle.
          </motion.p>

          {/* Call-to-Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 mt-2 justify-center"
          >
            <button
              onClick={handleArrowClick}
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              View Properties
            </button>
            <button
              onClick={() => setShowConsultation(true)}
              className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Book a Consultation
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-4 text-sm text-white/80"
          >
            Explore premium homes in Noida • Delhi • Mumbai
          </motion.div>

          {/* Scroll Arrow */}
          <div
            className="mt-16 flex flex-col items-center space-y-3 cursor-pointer"
            onClick={handleArrowClick}
          >
            {[0, 0.3].map((delay, i) => (
              <motion.div
                key={i}
                initial={{ y: 0, opacity: 0.7 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay }}
              >
                <svg
                  className="w-6 h-6 text-white opacity-80 hover:opacity-100 transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      {showConsultation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white text-black rounded-xl shadow-2xl w-full max-w-lg p-8 relative"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setShowConsultation(false)}
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">Book Your Consultation</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="date"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition font-semibold"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Home;
