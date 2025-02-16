import React from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaLeaf, FaHeart } from 'react-icons/fa';

const Ingredients = () => {
  const ingredients = [
    {
      name: "Finger Millet",
      description: "A nutrient-rich grain that's high in calcium, protein, and fiber. It helps maintain steady blood sugar levels.",
      benefits: ["Rich in calcium", "High in fiber", "Low glycemic index", "Gluten-free"],
      icon: <FaSeedling />
    },
    {
      name: "Premium Cocoa",
      description: "Ethically sourced, high-quality cocoa beans that provide rich flavor and numerous health benefits.",
      benefits: ["Antioxidant-rich", "Heart-healthy", "Natural mood booster", "Source of minerals"],
      icon: <FaLeaf />
    },
    {
      name: "Natural Sweeteners",
      description: "Carefully selected natural sweeteners that maintain the perfect balance of taste without compromising health.",
      benefits: ["Low glycemic impact", "Natural origin", "Zero artificial additives", "Diabetic-friendly"],
      icon: <FaHeart />
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-brown-50 to-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-brown-900 mb-6">
          Our Premium Ingredients
        </h1>
        <p className="text-lg md:text-xl text-brown-700 max-w-3xl mx-auto">
          Every ingredient in Kastola Chocolate is carefully selected to ensure the perfect balance 
          of taste, health, and sustainability.
        </p>
      </motion.section>

      {/* Ingredients Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl text-brown-600 mb-4">{ingredient.icon}</div>
                <h2 className="text-2xl font-bold mb-4 text-brown-900">{ingredient.name}</h2>
                <p className="text-brown-600 mb-6">{ingredient.description}</p>
                <div className="space-y-2">
                  {ingredient.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-brown-700">
                      <span className="w-2 h-2 bg-brown-600 rounded-full mr-2"></span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16 bg-brown-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Our Quality Promise</h2>
            <p className="text-lg text-brown-100">
              We source only the finest ingredients and maintain strict quality control throughout 
              our production process. Every bar of Kastola Chocolate is crafted with precision 
              and care to ensure you get the best taste and health benefits.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Ingredients;
