import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaGlobe } from 'react-icons/fa';

function About() {
  const features = [
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Natural Ingredients",
      description: "We use only the finest natural ingredients, including our signature finger millet blend."
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: "Health Conscious",
      description: "Our chocolates are crafted to be healthier without compromising on taste."
    },
    {
      icon: <FaGlobe className="text-4xl" />,
      title: "Sustainable",
      description: "We're committed to sustainable practices in every step of our process."
    }
  ];

  return (
    <section id="about" className="py-20 bg-brown-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">About Kastola Chocolate</h2>
          <p className="text-lg text-brown-700">
            Founded with a vision to redefine chocolate, we blend traditional craftsmanship 
            with innovative health-conscious ingredients.
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
              To pioneer a new era of chocolate by blending health, taste, and sustainability, 
              crafting innovative treats that nourish both body and soul.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-brown-700">
              To create a world where healthier, sustainable chocolate is the norm, 
              revolutionizing indulgence for future generations.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="text-brown-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-brown-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About; 