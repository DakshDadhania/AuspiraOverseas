"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, Package, Recycle, Layers, CheckCircle } from "lucide-react";
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
    const message = "Hello! I'm interested in getting a quote for your products. Please provide more information.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const products = [
    {
      id: 1,
      title: "FIBC Bags",
      subtitle: "Flexible Intermediate Bulk Containers",
      description: "High-quality bulk bags designed for efficient storage and transportation of various materials. Available in multiple configurations and specifications.",
      image: "/images/fibc-bag.jpg",
      features: [
        "Multiple lifting loop configurations",
        "Food grade and conductive options",
        "UN panel and ventilated designs",
        "Custom sizes and specifications"
      ],
      icon: Package,
      gradient: "from-blue-500 to-blue-600",
      link: "/products/fibc-bags"
    },
    {
      id: 2,
      title: "Biodegradable Garbage Bags",
      subtitle: "Eco-Friendly Waste Management",
      description: "100% biodegradable and compostable garbage bags that break down naturally. Perfect for environmentally conscious businesses and households.",
      image: "/images/biodegradable-garbage-bag.jpg",
      features: [
        "100% biodegradable material",
        "Compostable and eco-friendly",
        "Various sizes available",
        "Extra strong and leakproof"
      ],
      icon: Recycle,
      gradient: "from-green-500 to-green-600",
      link: "/products/garbage-bags"
    },
    {
      id: 3,
      title: "Garbage Bag",
      subtitle: "Durable Waste Management Solutions",
      description: "High-quality garbage bags ideal for waste management, cleaning applications, and general-purpose use with excellent durability and strength.",
      image: "/images/garbage-bag.jpg",
      features: [
        "High tensile strength",
        "Moisture resistant",
        "Various sizes available",
        "Custom printing available"
      ],
      icon: Layers,
      gradient: "from-purple-500 to-purple-600",
      link: "/products/garbage-bags"
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
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Product Range</span>
          </h2>
          <p className="body-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive packaging solutions designed to meet diverse industry requirements 
            with uncompromising quality and reliability.
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
                Need Custom Solutions?
              </h3>
              <p className="body-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-slate-300 px-4">
                We offer customized packaging solutions tailored to your specific requirements. 
                Contact us for detailed specifications and bulk pricing.
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