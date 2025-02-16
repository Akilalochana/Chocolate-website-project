import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeartbeat, FaWeight, FaSeedling, FaSun, FaAppleAlt, FaShieldAlt } from 'react-icons/fa';

function Ingredients() {
  const benefits = [
    {
      icon: <FaHeartbeat className="text-3xl" />,
      title: "Diabetic-Friendly",
      description: "Low glycaemic index ensures steady blood sugar levels."
    },
    {
      icon: <FaSeedling className="text-3xl" />,
      title: "Nutrient-Rich",
      description: "Packed with calcium, iron, protein, and essential vitamins."
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Gluten-Free",
      description: "Safe for individuals with gluten sensitivities."
    },
    {
      icon: <FaHeartbeat className="text-3xl" />,
      title: "Supports Heart Health",
      description: "Rich in flavonoids and healthy fats that lower bad cholesterol."
    },
    {
      icon: <FaWeight className="text-3xl" />,
      title: "Aids Weight Management",
      description: "High fibre content promotes satiety and digestive health."
    },
    {
      icon: <FaSun className="text-3xl" />,
      title: "Sustained Energy",
      description: "Slow-release carbs provide long-lasting energy."
    },
    {
      icon: <FaAppleAlt className="text-3xl" />,
      title: "Promotes Healthy Skin",
      description: "Antioxidants help combat oxidative stress and ageing."
    }
  ];

  const targetGroups = [
    {
      image: "/images/IMG-20250216-WA0011.jpg",
      title: "For Athletes & Sports Enthusiasts",
      description: "Perfect pre or post-workout snack providing sustained energy and muscle recovery support with natural proteins."
    },
    {
      image: "/images/IMG-20250216-WA0013.jpg",
      title: "For Elderly Care",
      description: "Rich in calcium and essential nutrients that support bone health and cognitive function in older adults."
    },
    {
      image: "/images/IMG-20250216-WA0015.jpg",
      title: "For Expectant Mothers",
      description: "Packed with folic acid, iron, and essential nutrients crucial for maternal and fetal health."
    },
    {
      image: "/images/IMG-20250216-WA0014.jpg",
      title: "For Health Conscious",
      description: "A guilt-free indulgence that satisfies cravings while supporting your wellness journey."
    }
  ];

  return (
    <section id="ingredients" className="py-20 bg-brown-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Why Kastola Chocolate?</h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto">
            Kastola Chocolate is not just a treat; it's a lifestyle choice. Our unique recipe combines 
            the goodness of finger millet with premium chocolate, creating a product that is delicious, 
            nutritious, and suitable for everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img 
              src="/images/IMG-20250216-WA0008.jpg" 
              alt="Kastola Chocolate Ingredients" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-900/50 to-transparent rounded-2xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid gap-6"
          >
            {benefits.slice(0, 4).map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-brown-600">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-brown-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.slice(4).map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="text-brown-600 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-brown-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-32 mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Perfect for Everyone</h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto">
            Discover how Kastola Chocolate adapts to different lifestyles and nutritional needs,
            providing health benefits for people of all ages and activities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targetGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src={group.image}
                  alt={group.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900 via-brown-900/70 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-bold mb-2">{group.title}</h3>
                  <p className="text-sm text-brown-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {group.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <button className="bg-brown-900 text-white px-8 py-3 rounded-full hover:bg-brown-800 transition-colors">
            Discover Your Perfect Chocolate
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Ingredients; 