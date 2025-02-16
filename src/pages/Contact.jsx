import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "support@kastolachocolate.com",
      link: "mailto:support@kastolachocolate.com"
    },
  
    
  ];

  const socialMedia = [
    { icon: <FaInstagram />, name: "Instagram", link:' https://www.instagram.com/kastola_chocolate?utm_source=qr&igsh=dXExd2hkbm5yZjQ4' },
    { icon: <FaFacebook />, name: "Facebook", link: "https://www.facebook.com/share/1EqcnzWkoq/" },
    
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
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-brown-700 max-w-3xl mx-auto">
          We'd love to hear from you! Whether you have questions about our products,
          want to place an order, or just want to say hello.
        </p>
      </motion.section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
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

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center">
                    <div className="text-2xl text-brown-600 mr-4">{info.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{info.title}</h3>
                      <p className="text-brown-600">{info.content}</p>
                    </div>
                  </div>
                </a>
              ))}

              {/* Social Media */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="text-2xl text-brown-600 hover:text-brown-900 transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
