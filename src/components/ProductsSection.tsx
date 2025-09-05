"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, Grape, Leaf, CircleDot, Zap, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const ProductsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleWhatsAppQuote = () => {
    const phoneNumber = "+919978728781";
    const message = "Hello! I'm interested in your fresh fruit and vegetable export products. Please provide more information.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const products = [
    {
      id: 1,
      title: "Pomegranate",
      subtitle: "Premium Quality Fresh Pomegranates",
      description: "Export quality fresh pomegranates with vibrant red color, juicy arils, and exceptional sweetness. Carefully selected and packed to maintain freshness during international shipping.",
      image: "/images/pomegranate-export.jpg", // TODO: Replace with high-quality fresh pomegranate image
      features: [
        "Premium grade A quality",
        "Rich in antioxidants",
        "Proper cold chain maintained",
        "International packaging standards"
      ],
      icon: Grape,
      gradient: "from-red-500 to-red-600",
      link: "/products/pomegranate"
    },
    {
      id: 2,
      title: "Turmeric Fingers",
      subtitle: "High Curcumin Content Turmeric",
      description: "Premium quality dried turmeric fingers with high curcumin content, golden color, and rich aroma. Perfect for international spice markets and pharmaceutical applications.",
      image: "/images/turmeric-fingers-export.jpg", // TODO: Replace with dried turmeric fingers image
      features: [
        "High curcumin content",
        "Natural golden color",
        "Properly dried and processed",
        "Export quality grading"
      ],
      icon: Zap,
      gradient: "from-yellow-500 to-orange-600",
      link: "/products/turmeric"
    },
    {
      id: 3,
      title: "Fresh Onions",
      subtitle: "Premium Red & White Onions",
      description: "High quality fresh onions available in red and white varieties. Properly cured and sorted for maximum shelf life and export quality standards.",
      image: "/images/onion-export.jpg", // TODO: Replace with fresh onions variety image
      features: [
        "Multiple varieties available",
        "Properly cured and sorted",
        "Long shelf life",
        "Uniform size and quality"
      ],
      icon: CircleDot,
      gradient: "from-purple-500 to-purple-600",
      link: "/products/onions"
    },
    {
      id: 4,
      title: "Green Chillies",
      subtitle: "Fresh Spicy Green Chillies",
      description: "Premium quality fresh green chillies with perfect heat levels and vibrant color. Carefully harvested and packed to preserve freshness for international markets.",
      image: "/images/green-chilli-export.jpg", // TODO: Replace with fresh green chillies image
      features: [
        "Perfect heat levels",
        "Vibrant green color",
        "Fresh and crispy texture",
        "Proper packaging for freshness"
      ],
      icon: Zap,
      gradient: "from-green-500 to-green-600",
      link: "/products/green-chillies"
    },
    {
      id: 5,
      title: "Curry Leaves",
      subtitle: "Fresh Aromatic Curry Leaves",
      description: "Fresh curry leaves with intense aroma and flavor, carefully selected and packed to maintain freshness. Essential ingredient for authentic Indian cuisine worldwide.",
      image: "/images/curry-leaves-export.jpg", // TODO: Replace with fresh curry leaves image
      features: [
        "Intense natural aroma",
        "Fresh and green",
        "Carefully selected leaves",
        "Maintains freshness during shipping"
      ],
      icon: Leaf,
      gradient: "from-emerald-500 to-emerald-600",
      link: "/products/curry-leaves"
    }
  ];

  // Show only 3 products on mobile, all products on larger screens
  const displayedProducts = isMobile ? products.slice(0, 3) : products;

  return (
    <section ref={ref} className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Products Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-lg mb-4 sm:mb-6 text-slate-900">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Premium Products</span>
          </h2>
          <p className="body-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Fresh fruits, vegetables, and spices sourced from the finest farms 
            and exported worldwide with guaranteed quality and freshness.
          </p>
        </motion.div>

        {/* Main Products Grid */}
        <div className="mobile-product-grid mb-16 sm:mb-20">
          {displayedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-80 sm:h-72 md:h-80 lg:h-72">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('${product.image}')`
                  }}
                />
                <div className={`absolute top-4 left-4 w-14 h-14 sm:w-14 sm:h-14 bg-gradient-to-r ${product.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <product.icon className="w-7 h-7 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 sm:p-7 lg:p-8">
                <h3 className="heading-sm text-slate-900 mb-3">{product.title}</h3>
                <p className="text-blue-600 font-medium mb-4 text-base sm:text-lg">{product.subtitle}</p>
                <p className="text-slate-600 mb-6 leading-relaxed text-base sm:text-lg">{product.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-4 text-base sm:text-lg">Key Features:</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-slate-600">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link 
                  href="/products"
                  className={`group/btn inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${product.gradient} text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 w-full touch-target focus-ring text-base sm:text-lg`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative z-10">
              <h3 className="heading-md mb-4 sm:mb-6">
                Need Bulk Orders?
              </h3>
              <p className="body-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-slate-300 px-4">
                We offer competitive pricing for bulk orders and can customize packaging 
                according to your specific requirements. Contact us for detailed quotations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <button 
                  onClick={handleWhatsAppQuote}
                  className="bg-white text-slate-900 hover:bg-slate-100 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:shadow-lg touch-target focus-ring"
                >
                  Request Quote
                </button>
                <Link 
                  href="/products"
                  className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:border-white touch-target focus-ring"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection; 