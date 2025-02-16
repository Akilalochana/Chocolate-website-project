import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-brown-950/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-white">
            Kastola
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-brown-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-brown-100 text-brown-900 px-6 py-2 rounded-full hover:bg-white transition-colors">
              <FaShoppingCart className="inline-block mr-2" />
              Cart (0)
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:bg-brown-800 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button 
                className="w-full text-left px-3 py-2 text-white hover:bg-brown-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <FaShoppingCart className="inline-block mr-2" />
                Cart (0)
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar; 