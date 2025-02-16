import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
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
                  <span className="mr-2">📧</span> hello@kastola.com
                </p>
              
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 