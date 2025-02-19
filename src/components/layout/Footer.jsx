import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#2A1810] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Kastola</h3>
            <p className="text-brown-100">
              Crafting premium chocolate experiences with health-conscious ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-brown-100 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-brown-100 hover:text-white">About</a></li>
              <li><a href="#products" className="text-brown-100 hover:text-white">Products</a></li>
              <li><a href="#contact" className="text-brown-100 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-brown-100">
          
              <li>Email: hello@kastola.com</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-brown-100 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-brown-100 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-brown-100 hover:text-white">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brown-800 mt-12 pt-8 text-center text-brown-100">
          <p>
            © 2024 Kastola. Made with <FaHeart className="inline-block text-red-500" /> in Sweet City
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 