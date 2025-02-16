import React from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaLeaf, FaHeartbeat } from 'react-icons/fa';

function Ingredients() {
  const ingredients = [
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
  ];

  return (
    <section id="ingredients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Premium Ingredients</h2>
          <p className="text-xl text-brown-600">
            The finest ingredients for the perfect chocolate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
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
  );
}

export default Ingredients; 