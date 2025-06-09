"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Globe, Award } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleWhatsAppQuote = () => {
    const phoneNumber = "+919978728781";
    const message = "Hello! I'm interested in getting a quote for your products. Please provide more information.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const slides = [
    {
      id: 1,
      title: "Leading Manufacturer of FIBC Bags",
      subtitle: "BEE Compliant Industrial Bulk Bag Solutions",
      description: "We specialize in manufacturing high-quality FIBC bags, bulk bags, and industrial packaging solutions that meet international standards.",
      image: "/images/hero-slide-1.jpg",
      cta: "Explore Products",
      ctaLink: "/products"
    },
    {
      id: 2,
      title: "Global Export Excellence",
      subtitle: "Trusted Worldwide for Quality & Reliability",
      description: "Our flexible Intermediate Bulk Containers (FIBCs) offer cost-effective packaging solutions for diverse industries across the globe.",
      image: "/images/hero-slide-2.jpg",
      cta: "Learn More",
      ctaLink: "/about"
    },
    {
      id: 3,
      title: "Sustainable Packaging Solutions",
      subtitle: "Biodegradable Garbage Bags & Eco-Friendly Options",
      description: "Committed to environmental responsibility with our range of biodegradable garbage bags and sustainable packaging solutions.",
      image: "/images/hero-slide-3.jpg",
      cta: "Contact Us",
      ctaLink: "/contact"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "BEE Compliant",
      description: "All products meet international quality standards"
    },
    {
      icon: Globe,
      title: "Global Export",
      description: "Serving clients worldwide with reliable delivery"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "ISO certified manufacturing processes"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleSlideSelect = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(30, 41, 59, 0.8)), url('${slide.image}')`
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white safe-top safe-bottom">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto px-4 sm:px-6"
          >
            <h1 className="heading-xl mb-4 sm:mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            
            <h2 className="body-lg font-medium mb-4 sm:mb-6 text-slate-200">
              {slides[currentSlide].subtitle}
            </h2>
            
            <p className="body-md mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-slate-300">
              {slides[currentSlide].description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href={slides[currentSlide].ctaLink}
                className="group relative overflow-hidden bg-white text-slate-900 hover:text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 w-full sm:w-auto touch-target focus-ring"
              >
                <span className="relative z-10">{slides[currentSlide].cta}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
              <button 
                onClick={handleWhatsAppQuote}
                className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:border-white w-full sm:w-auto touch-target focus-ring"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Hidden on mobile for touch friendliness */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 border border-white/20 hidden sm:block touch-target focus-ring"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      
      <button
        onClick={handleNextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300 border border-white/20 hidden sm:block touch-target focus-ring"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Features Bar - Glass Morphism with mobile optimization */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/10 backdrop-blur-xl border-t border-white/20">
        <div className="container-custom py-4 sm:py-6 lg:py-8 safe-bottom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="flex items-center space-x-3 sm:space-x-4 text-white group p-3 sm:p-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-colors duration-300 flex-shrink-0">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-white text-sm sm:text-base">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-tight">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 