import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Dark Chocolate Truffles",
      description: "72% dark chocolate with finger millet",
      price: "$24.99",
      image: "/images/dark-truffle.jpg"
    },
    {
      id: 2,
      name: "Artisanal Pralines",
      description: "Natural-sweetened praline collection",
      price: "$29.99",
      image: "/images/pralines.jpg"
    },
    {
      id: 3,
      name: "Origin Series Bars",
      description: "Single-origin chocolate bars",
      price: "$19.99",
      image: "/images/bars.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white" id="products">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Featured Collection</h2>
          <p className="text-xl text-brown-600">
            Handcrafted with passion and precision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-[300px] transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-brown-100 mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">{product.price}</span>
                  <button className="bg-brown-100 text-brown-900 px-4 py-2 rounded-full hover:bg-white transition-colors flex items-center gap-2">
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts; 