"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, Package, Recycle, Layers, CheckCircle } from "lucide-react";

const ProductsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      id: 1,
      title: "FIBC Bags",
      subtitle: "Flexible Intermediate Bulk Containers",
      description: "High-quality bulk bags designed for efficient storage and transportation of various materials. Available in multiple configurations and specifications.",
      image: "/images/fibc-bags-product.jpg",
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
      image: "/images/garbage-bags-product.jpg",
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
      title: "PP Woven Bags",
      subtitle: "Durable Polypropylene Solutions",
      description: "High-strength polypropylene woven bags ideal for packaging grains, fertilizers, chemicals, and other bulk materials with excellent durability.",
      image: "/images/pp-woven-bags-product.jpg",
      features: [
        "High tensile strength",
        "Moisture resistant",
        "UV stabilized options",
        "Custom printing available"
      ],
      icon: Layers,
      gradient: "from-purple-500 to-purple-600",
      link: "/products/pp-woven-bags"
    }
  ];

  const fibcTypes = [
    { name: "Ventilated FIBC Bag", description: "Perfect for products requiring air circulation" },
    { name: "UN Panel FIBC Bag", description: "UN certified for hazardous materials transport" },
    { name: "Conductive FIBC Bag", description: "Anti-static properties for sensitive materials" },
    { name: "Linear FIBC Bag", description: "Cost-effective linear bag design" },
    { name: "Food Grade FIBC Bag", description: "FDA approved for food-grade applications" },
    { name: "Standard FIBC Bag", description: "General purpose bulk storage solution" },
    { name: "Tunnel Loop FIBC Bag", description: "Enhanced lifting and handling capabilities" },
    { name: "U Panel FIBC Bag", description: "Optimized for maximum storage capacity" },
    { name: "4 Panel FIBC Bag", description: "Four-panel construction for stability" },
    { name: "One Loop FIBC Bag", description: "Single loop design for specific applications" },
    { name: "Two Loop FIBC Bag", description: "Twin loop configuration for balanced lifting" },
    { name: "Buffle FIBC Bag", description: "Internal baffles for shape retention" }
  ];

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
        <div className="mobile-grid mb-16 sm:mb-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-44 sm:h-48">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url('${product.image}')`
                  }}
                />
                <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${product.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <product.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="heading-sm text-slate-900 mb-2">{product.title}</h3>
                <p className="text-blue-600 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{product.subtitle}</p>
                <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{product.description}</p>

                {/* Features */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link 
                  href={product.link}
                  className={`group/btn inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${product.gradient} text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto touch-target focus-ring text-sm sm:text-base`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FIBC Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6 sm:p-8 lg:p-12 border border-white/50 shadow-lg"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="heading-md text-slate-900 mb-4 sm:mb-6">
              FIBC Bag <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Varieties</span>
            </h3>
            <p className="body-lg text-slate-600 max-w-2xl mx-auto px-4">
              We manufacture a comprehensive range of FIBC bags to meet specific industry requirements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {fibcTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.03 }}
                className="glass-card p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border border-slate-200/50 hover:border-blue-200"
              >
                <h4 className="font-bold text-slate-900 mb-2 text-base sm:text-lg leading-tight">{type.name}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
                <Link 
                  href="/contact"
                  className="bg-white text-slate-900 hover:bg-slate-100 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:shadow-lg touch-target focus-ring"
                >
                  Request Quote
                </Link>
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