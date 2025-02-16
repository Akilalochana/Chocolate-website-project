import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brown-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Kastola</h3>
            <p className="text-brown-100">
              Redefining chocolate for a healthier future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-brown-100 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-brown-100 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('ingredients')}
                  className="text-brown-100 hover:text-white transition-colors"
                >
                  Ingredients
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-brown-100 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-brown-100">
              <li>123 Chocolate Avenue</li>
              <li>Sweet City, SC 12345</li>
              <li>support@kastolachocolate.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-brown-100 hover:text-white transition-colors text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-brown-100 hover:text-white transition-colors text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-brown-100 hover:text-white transition-colors text-xl">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brown-800 mt-8 pt-8 text-center text-brown-100">
          <p className="flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> by Kastola &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
