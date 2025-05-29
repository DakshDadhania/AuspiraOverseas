"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+919978728781"; // Updated WhatsApp number
  const defaultMessage = "Hello! I'm interested in your bulk bag products. Please provide more information.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  const quickMessages = [
    {
      title: "FIBC Bags Inquiry",
      message: "Hi! I need information about FIBC bags. Can you help me with specifications and pricing?"
    },
    {
      title: "Bulk Order Quote",
      message: "Hello! I need a quote for bulk order. Please contact me with details."
    },
    {
      title: "Custom Solutions",
      message: "Hi! I need custom packaging solutions. Can we discuss my requirements?"
    },
    {
      title: "Product Catalog",
      message: "Hello! Can you please send me your complete product catalog?"
    }
  ];

  const handleQuickMessage = (message: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Quick Messages Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 sm:bottom-24 right-4 z-40 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 max-w-[calc(100vw-2rem)]"
          >
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Quick Contact</h3>
                  <p className="text-sm text-green-100">Choose a message to send</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded-full transition-colors duration-300 touch-target"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Messages */}
            <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
              {quickMessages.map((msg, index) => (
                <motion.button
                  key={msg.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleQuickMessage(msg.message)}
                  className="w-full text-left p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition-colors duration-300 border border-gray-200 hover:border-green-200 touch-target"
                >
                  <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">{msg.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{msg.message}</p>
                </motion.button>
              ))}
            </div>

            {/* Custom Message */}
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 touch-target"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Custom Chat</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <div className="relative">
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center touch-target focus-ring"
            aria-label="WhatsApp Contact"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="whatsapp"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Online Status - Mobile optimized */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="fixed bottom-16 sm:bottom-20 right-4 z-40"
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 max-w-44 sm:max-w-48">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">We're Online!</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Click to chat with us
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default WhatsAppButton; 