import { motion } from "framer-motion";
import { useState } from "react";

function About() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="pt-28 min-h-screen bg-[#f9f9f9] text-[#111] px-6 md:px-20 font-sans overflow-x-hidden">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          About <span className="text-black">Peepal Estates</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          We are redefining modern luxury living by blending architectural brilliance
          with personalized experiences, tailored to elevate your lifestyle.
        </p>
      </motion.section>

      {/* Features */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20"
      >
        {[
          {
            title: "Curated Luxury",
            description:
              "Each property is handpicked to ensure it meets the highest standards of design, comfort, and sophistication.",
            icon: "🏛️",
          },
          {
            title: "Trusted Experts",
            description:
              "Our seasoned real estate advisors provide personalized guidance tailored to your unique goals.",
            icon: "🤝",
          },
          {
            title: "End-to-End Support",
            description:
              "From discovery to deal closure and beyond, we’re with you every step of the way.",
            icon: "🛠️",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 text-center"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black text-white py-14 px-6 md:px-20 text-center rounded-2xl max-w-5xl mx-auto shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Your Dream Home Awaits
        </h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Connect with us to explore the most exclusive properties tailored just for you.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all"
        >
          Contact Our Team
        </button>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="bg-white text-black rounded-xl shadow-2xl w-[90%] max-w-sm p-6 relative"
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black transition"
              onClick={() => setShowModal(false)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">📞 Mobile: <strong>+91 9416763571</strong></p>
            <p className="mb-2">📧 Email: <strong>shubham22csu444@ncuindia.edu</strong></p>
            <p className="text-sm text-gray-500 mt-4">
              We’re available every day from 10 AM to 7 PM.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default About;
