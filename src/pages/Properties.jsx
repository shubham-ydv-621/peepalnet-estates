import { motion } from "framer-motion";
import { useRef, useState } from "react";

function Properties() {
  const nextRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const scrollToNext = () => {
    if (nextRef.current) {
      nextRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const properties = [
    {
      id: 1,
      name: "The Ashoka Estate",
      location: "New Delhi",
      price: "₹12 Cr",
      owner: "Raj Malhotra",
      age: "12 years",
      description:
        "A stately home blending Mughal architecture with modern luxury in the heart of Delhi.",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Palm Retreat",
      location: "Goa",
      price: "₹8.5 Cr",
      owner: "Maria D'Souza",
      age: "7 years",
      description:
        "Beachside paradise with sea-facing balconies, private pools, and tropical vibes.",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Veda Heights",
      location: "Bangalore",
      price: "₹6.2 Cr",
      owner: "Siddharth Rao",
      age: "4 years",
      description:
        "A tranquil and tech-inspired residence near nature parks and top IT hubs.",
      image:
        "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Meher Villa",
      location: "Jaipur",
      price: "₹5.9 Cr",
      owner: "Anjali Rathore",
      age: "10 years",
      description:
        "Elegant Rajasthani craftsmanship meets royal living in this pink city mansion.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Lotus Mansion",
      location: "Mumbai",
      price: "₹18 Cr",
      owner: "Vikram Mehta",
      age: "5 years",
      description:
        "Skyline views, private elevators, and ultra-modern design in South Mumbai.",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 6,
      name: "Nilgiri Nest",
      location: "Ooty",
      price: "₹4.4 Cr",
      owner: "Kavita Nair",
      age: "9 years",
      description:
        "A hillside bungalow surrounded by tea gardens and cool misty mornings.",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&auto=format&fit=crop&q=60",
    },
  ];
const filteredProperties = properties.filter((p) => {
  const term = searchTerm.trim().toLowerCase();
  return (
    term === "" ||
    p.name.toLowerCase().includes(term) ||
    p.location.toLowerCase().includes(term)
  );
});


  return (
    <div className="pt-28 font-sans bg-[#f9f9f9] text-[#111] overflow-x-hidden min-h-screen">
      {/* Header Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        className="text-center px-6 md:px-20 mb-12"
      >
        <motion.h1
          variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Discover Signature Properties
        </motion.h1>
        <motion.p
          variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Experience India’s finest luxury homes, each designed with character, comfort, and culture in mind.
        </motion.p>
      </motion.section>

    <div className="mb-10 px-6 md:px-20">
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search properties by name or location..."
    className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-lg shadow-sm transition-all duration-200"
  />
</div>


      {/* Property Cards */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 1 } },
        }}
        className="px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 pb-16"
      >
       {filteredProperties.length > 0 ? (
  filteredProperties.map((property) => (
    <motion.div
      key={property.id}
      whileHover={{ scale: 1.03 }}
      className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden transition-all"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-60 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-1">{property.name}</h2>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
          <span>{property.location}</span>
          <span>{property.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{property.description}</p>
        <button
          onClick={() => setSelectedProperty(property)}
          className="mt-2 inline-block px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-all"
        >
          View Details
        </button>
      </div>
    </motion.div>
  ))
) : (
  <div className="col-span-full text-center text-gray-500 text-lg">
    No properties match your search.
  </div>
)}

      </motion.section>

      {/* Scroll Down Arrow */}
      <div className="flex justify-center mt-6 mb-10 cursor-pointer" onClick={scrollToNext}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          >
            <svg
              className="w-6 h-6 text-gray-500 hover:text-black transition"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
          <p className="text-sm mt-1 text-gray-500">Scroll Down</p>
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.div
        ref={nextRef}
        id="next-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white py-20 text-center"
      >
        <h2 className="text-2xl font-semibold mb-2">Interested in a private tour?</h2>
        <p className="text-gray-500 mb-6">Our agents are ready to assist you personally.</p>
        <button
          onClick={() => setShowContactModal(true)}
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Contact Us
        </button>
      </motion.div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="bg-white text-black rounded-xl shadow-2xl w-[90%] max-w-md p-6 relative"
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black transition"
              onClick={() => setSelectedProperty(null)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-semibold mb-4">{selectedProperty.name}</h3>
            <img src={selectedProperty.image} alt="" className="rounded-md mb-4" />
            <p><strong>Owner:</strong> {selectedProperty.owner}</p>
            <p><strong>Age:</strong> {selectedProperty.age}</p>
            <p><strong>Location:</strong> {selectedProperty.location}</p>
            <p><strong>Price:</strong> {selectedProperty.price}</p>
            <p className="text-sm text-gray-600 mt-2">{selectedProperty.description}</p>
          </motion.div>
        </motion.div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
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
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black transition"
              onClick={() => setShowContactModal(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">📞 Mobile: <strong>+91 9416763571</strong></p>
            <p className="mb-2">📧 Email: <strong>shubham22csu444@ncuindia.edu</strong></p>
            <p className="text-sm text-gray-500 mt-4">
              We're available 7 days a week, 10 AM to 7 PM.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Properties;
