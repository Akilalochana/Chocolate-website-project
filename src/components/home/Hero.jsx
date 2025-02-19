import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import Button from '../shared/Button';

function Hero() {
  return (
    <section id="home" className="h-screen relative overflow-hidden -mt-8">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Main background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('/images/wheat.png')` }}
        />
        
        {/* Gradient overlay - adjusted for better visibility with your image */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-brown-900/60 to-brown-800/20" />
       
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brown-100 to-yellow-200">
            Artisanal Chocolate <br />
            <span className="text-3xl md:text-5xl">For Modern Connoisseurs</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-brown-100">
            Experience luxury reimagined through sustainable, health-conscious chocolate craftsmanship.
          </p>
          <div className="flex gap-4">
            <Button 
              href="#shop"
              variant="primary"
              icon={<FaShoppingCart />}
            >
              Shop Now
            </Button>
            <Button 
              href="#ingredients"
              variant="outline"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Enhanced decorative elements for better transition with your image */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brown-950 to-transparent z-10" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-brown-950 to-transparent z-10" />
    </section>
  );
}

export default Hero; 