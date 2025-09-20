"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const products = [
    { name: "Premium Pomegranates", href: "/products" },
    { name: "Turmeric Fingers", href: "/products" },
    { name: "Fresh Onions", href: "/products" },
    { name: "Green Chillies", href: "/products" },
    { name: "Curry Leaves", href: "/products" },
    { name: "Bulk Orders", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 99787 28781", "Owner: Shubh Fefar"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["auspiraoverseas10@gmail.com", "sales@auspiraoverseas.in"]
    },
    {
      icon: MapPin,
      title: "Office address",
      details: ["Shop No. 6, Second Floor", "Laxminarayan Complex, Tankara"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <img 
                src="/images/logo.jpg" 
                alt="Auspira Overseas Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-contain shadow-lg"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                  Auspira <span className="text-green-400">Overseas</span>
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">Premium Fruit & Vegetable Exporter</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Leading exporter of premium fresh fruits, vegetables, and spices including pomegranates, 
              turmeric fingers, onions, green chillies, and curry leaves to global markets.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300 touch-target focus-ring"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center space-x-2 group py-1 focus-ring rounded text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-2"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Our Products</h4>
            <ul className="space-y-2 sm:space-y-4">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center space-x-2 group py-1 focus-ring rounded text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-2"></span>
                    <span>{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Get In Touch</h4>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1 text-sm sm:text-base">{info.title}</h5>
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-gray-300 text-xs sm:text-sm leading-relaxed">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-gray-800"
      >
        <div className="container-custom py-6 sm:py-8">
          <div className="bg-green-600/10 rounded-2xl p-6 sm:p-8 text-center">
            <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Subscribe to our newsletter for the latest updates on fresh produce availability, seasonal offers, and export opportunities.
            </p>
            <form 
              action="https://formspree.io/f/movwwakp"
              method="POST"
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white placeholder-gray-400 text-sm sm:text-base touch-target"
              />
              <input type="hidden" name="form_type" value="newsletter" />
              <button type="submit" className="btn-primary px-6 sm:px-8 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Auspira Overseas. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors duration-300 focus-ring rounded px-1 py-1">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors duration-300 focus-ring rounded px-1 py-1">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-green-400 transition-colors duration-300 focus-ring rounded px-1 py-1">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 