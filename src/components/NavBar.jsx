import { useState, useEffect } from "react";
import mylogo from "/assets/my_logo.png"; // Make sure this is in your `public/assets/`

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll effect for background color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pb-10 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-white text-2xl font-bold tracking-wide flex items-center gap-2">
          <img src={mylogo} alt="My Logo" className="w-20 h-10" />
          
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["About", "Skills", "Projects", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="relative text-white transition duration-300 hover:text-gray-400 after:block after:content-[''] after:h-0.5 after:bg-gray-400 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-gray-900 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {["About", "Skills", "Projects", "Contact"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="block py-3 text-white text-center hover:text-gray-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
