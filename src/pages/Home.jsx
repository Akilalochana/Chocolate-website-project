import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLeaf, FaHeart } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden bg-gradient-to-b from-brown-900 to-brown-800">
        <div className="absolute inset-0 bg-[url('/chocolate-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Discover the Future of Chocolate
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-brown-100">
              Indulge in health-conscious chocolate that doesn't compromise on taste.
            </p>
            <Link
              to="/ingredients"
              className="inline-flex items-center bg-brown-100 text-brown-900 px-8 py-3 rounded-full hover:bg-white transition-colors"
            >
              Explore Our Ingredients
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brown-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Kastola?</h2>
            <p className="text-xl text-brown-600">Redefining chocolate for a healthier future</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLeaf className="text-4xl" />,
                title: "Natural Ingredients",
                description: "Made with nutrient-rich finger millet and premium cocoa"
              },
              {
                icon: <FaHeart className="text-4xl" />,
                title: "Health Conscious",
                description: "Diabetic-friendly with low glycemic index"
              },
              {
                icon: "🌍",
                title: "Sustainable",
                description: "Environmentally conscious production and packaging"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-brown-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-brown-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brown-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Try Kastola?</h2>
            <p className="text-xl mb-8 text-brown-100">
              Join us in revolutionizing the chocolate industry with healthier alternatives.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-brown-100 text-brown-900 px-8 py-3 rounded-full hover:bg-white transition-colors"
            >
              Contact Us
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
