import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, UserCircle } from "lucide-react";

function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/properties", label: "Properties" },
    { to: "/about", label: "About Us" },
  ];

  const isActive = (path) => location.pathname === path;
  const isDarkPage = ["/properties", "/about"].includes(location.pathname);

  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-500 ${
    isDarkPage
      ? "bg-black/30 backdrop-blur-lg"
      : "bg-white/10 backdrop-blur-md"
  }`;

  return (
    <>
      <header className={headerClasses}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center text-white">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            Peepal Estates
          </Link>

          {/* Desktop Nav + Profile Icon */}
          <div className="hidden md:flex items-center space-x-6 text-lg font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.to} {...link} active={isActive(link.to)} />
            ))}
            <button
              onClick={() => setShowProfileModal(true)}
              className="hover:text-gray-300 transition"
            >
              <UserCircle size={26} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md text-white px-6 py-4 space-y-4 text-lg font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block ${
                  isActive(link.to)
                    ? "font-semibold"
                    : "hover:text-gray-300 transition"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowProfileModal(true);
              }}
              className="block hover:text-gray-300"
            >
              Profile
            </button>
          </div>
        )}
      </header>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-[#1f1f1f] text-white rounded-xl shadow-2xl w-full max-w-md p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowProfileModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <h2 className="text-2xl font-bold text-center mb-6">
              Welcome to Peepal Estates
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />

              <button className="w-full py-3 bg-white text-black rounded-full hover:bg-gray-100 transition font-semibold">
                Login / Signup
              </button>

              <button className="w-full py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition font-medium">
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ to, label, active }) {
  return (
    <Link
      to={to}
      className={`relative inline-block px-1 transition duration-300 ${
        active ? "font-semibold" : "hover:text-gray-300"
      }`}
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 hover:w-full"></span>
    </Link>
  );
}

export default Header;
