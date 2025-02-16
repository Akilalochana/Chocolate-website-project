import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeartbeat, FaWeight, FaSeedling, FaGlobe, FaStar, FaSun } from 'react-icons/fa';

const About = () => {
  const benefits = [
    { icon: <FaHeartbeat />, title: 'Diabetic-Friendly', desc: 'Low glycaemic index ensures steady blood sugar levels' },
    { icon: <FaLeaf />, title: 'Nutrient-Rich', desc: 'Packed with calcium, iron, protein, and essential vitamins' },
    { icon: <FaSeedling />, title: 'Gluten-Free', desc: 'Safe for individuals with gluten sensitivities' },
    { icon: <FaHeartbeat />, title: 'Heart Health', desc: 'Rich in flavonoids and healthy fats that lower bad cholesterol' },
    { icon: <FaWeight />, title: 'Weight Management', desc: 'High fibre content promotes satiety and digestive health' },
    { icon: <FaSun />, title: 'Sustained Energy', desc: 'Slow-release carbs provide long-lasting energy' },
    { icon: <FaStar />, title: 'Healthy Skin', desc: 'Antioxidants help combat oxidative stress and ageing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brown-50 to-brown-100">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-brown-900 mb-6">
          About Kastola Chocolate
        </h1>
        <p className="text-lg md:text-xl text-brown-700 max-w-3xl mx-auto">
          Founded on December 2, 2023, with a mission to redefine indulgence by blending health, 
          taste, and sustainability.
        </p>
      </motion.section>

      {/* Mission & Vision */}
      <section className="bg-brown-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="p-8 rounded-lg bg-brown-800"
            >
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-brown-100">
                "To pioneer a new era of chocolate by blending health, taste, and sustainability, 
                crafting innovative treats that nourish both body and soul."
              </p>
            </motion.div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="p-8 rounded-lg bg-brown-800"
            >
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-brown-100">
                "To create a world where healthier, sustainable chocolate is the norm, revolutionizing 
                indulgence for future generations and fostering a positive impact on both people and the planet."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Kastola Chocolate?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl text-brown-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-brown-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-brown-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Where to Find Us</h2>
          <p className="text-lg mb-6">
            Kastola Chocolate is available in select stores and online. 
            Order your favourite flavour today and experience the future of chocolate!
          </p>
          <div className="space-y-4">
            <p className="text-brown-700">
              <span className="font-semibold">🛒 Order Online:</span> Coming Soon!
            </p>
            <p className="text-brown-700">
              <span className="font-semibold">📧 Contact:</span>{' '}
              <a href="mailto:support@kastolachocolate.com" className="text-brown-600 hover:text-brown-900">
                support@kastolachocolate.com
              </a>
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <a href="#" className="text-brown-600 hover:text-brown-900">Instagram</a>
              <a href="#" className="text-brown-600 hover:text-brown-900">Facebook</a>
              <a href="#" className="text-brown-600 hover:text-brown-900">Twitter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
