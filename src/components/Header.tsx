"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleWhatsAppQuote = () => {
    const phoneNumber = "+919978728781";
    const message = "Hello! I'm interested in getting a quote for your products. Please provide more information.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar - Updated Contact Info */}
      <div className="bg-slate-900/95 backdrop-blur-sm text-white py-2 hidden md:block border-b border-white/10">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">+91 99787 28781</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">sales@auspiraoverseas.in</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">Tankara, Morbi, Gujarat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? "bg-white/85 backdrop-blur-xl shadow-lg border-b border-white/20" 
            : "bg-white/95 backdrop-blur-md"
        }`}
        style={{ marginTop: isScrolled ? "0" : "40px" }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 sm:space-x-3 group focus-ring rounded-lg p-1"
              onClick={handleMobileLinkClick}
            >
              <div className="relative">
                <img 
                  src="/images/logo.jpg" 
                  alt="Auspira Overseas Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-contain shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  Auspira <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Overseas</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 leading-tight">Industrial Bulk Bag Suppliers</p>
              </div>
              {/* Mobile Logo Text */}
              <div className="sm:hidden">
                <h1 className="text-lg font-bold text-slate-900 leading-tight">
                  Auspira <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Overseas</span>
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 px-3 rounded-lg group focus-ring"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={handleWhatsAppQuote}
                className="btn-primary focus-ring"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMenuToggle}
              className="lg:hidden touch-target bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors duration-300 flex items-center justify-center focus-ring"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-lg"
            >
              <div className="container-custom py-4 safe-bottom">
                <nav className="mobile-spacing">
                  {/* Mobile Contact Info */}
                  <div className="md:hidden mb-4 p-4 bg-slate-50 rounded-xl">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span className="text-slate-700">+91 99787 28781</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span className="text-slate-700">sales@auspiraoverseas.in</span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={handleMobileLinkClick}
                          className="block text-slate-700 hover:text-blue-600 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-all duration-300 touch-target focus-ring"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                    className="pt-4 border-t border-slate-200"
                  >
                    <button
                      onClick={() => {
                        handleWhatsAppQuote();
                        handleMobileLinkClick();
                      }}
                      className="btn-primary w-full focus-ring"
                    >
                      Get Quote
                    </button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header; 