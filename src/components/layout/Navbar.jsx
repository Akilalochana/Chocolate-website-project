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
    <nav className="fixed w-full z-50 bg-gradient-to-r from-amber-950/95 via-brown-900/95 to-amber-950/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-amber-100">
            Kastola
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-amber-100 hover:text-amber-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-amber-100 text-amber-950 px-6 py-2 rounded-full hover:bg-amber-200 transition-colors">
              <FaShoppingCart className="inline-block mr-2" />
              Cart (0)
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-100"
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
                  className="block px-3 py-2 text-amber-100 hover:bg-amber-900/50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button 
                className="w-full text-left px-3 py-2 text-amber-100 hover:bg-amber-900/50 rounded-md"
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