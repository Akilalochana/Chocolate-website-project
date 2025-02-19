import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Ingredients', href: '#ingredients' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#2A1810]">
      <div className="container mx-auto px-6 border-0 m-0">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold text-amber-100 hover:text-amber-200 transition-colors"
            aria-label="Kastola - Home"
          >
            <div 
           className="absolute bg-cover bg-center w-[87px] h-[87px] top-[8px] rounded-full" 
           style={{ backgroundImage: `url('/images/logo.png')` }}
        />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-amber-100 hover:text-amber-300 transition-colors text-base font-medium px-2 py-1"
                aria-label={item.label}
              >
                {item.label}
              </a>
            ))}
            <button 
              className="ml-4 px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-md transition-colors font-medium"
              aria-label="Shop Now"
            >
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-amber-100 hover:text-amber-300 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-[#2A1810] border-t border-amber-900">
            <div className="px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-amber-100 hover:text-amber-300 transition-colors text-base font-medium py-2"
                  onClick={() => setIsOpen(false)}
                  aria-label={item.label}
                >
                  {item.label}
                </a>
              ))}
              <button 
                className="w-full mt-4 px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-md transition-colors font-medium"
                onClick={() => setIsOpen(false)}
                aria-label="Shop Now"
              >
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;