import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeartbeat, FaWeight, FaSeedling, FaGlobe, FaStar, FaSun, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="h-screen relative overflow-hidden bg-gradient-to-b from-brown-900 to-brown-800">
          <div className="absolute inset-0 bg-[url('/chocolate-bg.jpg')] bg-cover bg-center opacity-30" />
          <div className="container mx-auto px-4 h-full flex items-center relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Discover the Future of Chocolate
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-brown-100">
                Indulge in health-conscious chocolate that doesn't compromise on taste.
              </p>
              <button
                onClick={() => window.location.href = '#ingredients'}
                className="inline-flex items-center bg-brown-100 text-brown-900 px-8 py-3 rounded-full hover:bg-white transition-colors"
              >
                Explore Our Ingredients
              </button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-brown-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">About Kastola Chocolate</h2>
              <p className="text-lg text-brown-700">
                Founded on December 2, 2023, with a mission to redefine indulgence by blending health, 
                taste, and sustainability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-brown-700">
                  "To pioneer a new era of chocolate by blending health, taste, and sustainability, 
                  crafting innovative treats that nourish both body and soul."
                </p>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-brown-700">
                  "To create a world where healthier, sustainable chocolate is the norm, revolutionizing 
                  indulgence for future generations and fostering a positive impact on both people and the planet."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section id="ingredients" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Premium Ingredients</h2>
              <p className="text-xl text-brown-600">The finest ingredients for the perfect chocolate</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaSeedling />,
                  title: "Finger Millet",
                  description: "Rich in calcium, protein, and fiber. Helps maintain steady blood sugar levels."
                },
                {
                  icon: <FaLeaf />,
                  title: "Premium Cocoa",
                  description: "Ethically sourced, high-quality cocoa beans for rich flavor and health benefits."
                },
                {
                  icon: <FaHeartbeat />,
                  title: "Natural Sweeteners",
                  description: "Carefully selected natural sweeteners for perfect taste without compromising health."
                }
              ].map((ingredient, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-brown-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl text-brown-600 mb-4">{ingredient.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{ingredient.title}</h3>
                  <p className="text-brown-600">{ingredient.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-brown-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-brown-600">We'd love to hear from you!</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-brown-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-600"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-brown-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-600"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-brown-700 mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border border-brown-200 focus:outline-none focus:ring-2 focus:ring-brown-600 h-32"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brown-900 text-white py-3 rounded-lg hover:bg-brown-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <p className="flex items-center text-brown-600">
                      <span className="mr-2">📍</span> 123 Chocolate Avenue, Sweet City
                    </p>
                    <p className="flex items-center text-brown-600">
                      <span className="mr-2">📧</span> support@kastolachocolate.com
                    </p>
                    <p className="flex items-center text-brown-600">
                      <span className="mr-2">📞</span> +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-2xl text-brown-600 hover:text-brown-900">
                      <FaInstagram />
                    </a>
                    <a href="#" className="text-2xl text-brown-600 hover:text-brown-900">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-2xl text-brown-600 hover:text-brown-900">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
