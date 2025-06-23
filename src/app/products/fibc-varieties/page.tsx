"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { ArrowRight, Package, ArrowLeft } from "lucide-react";

const FIBCVarietiesPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppQuote = (productName: string) => {
    const phoneNumber = "+919978728781";
    const message = `Hello! I'm interested in getting a quote for ${productName}. Please provide more information.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const fibcTypes = [
    {
      name: "Ventilated FIBC Bag",
      description: "Perfect for products requiring air circulation during storage and transport",
      specifications: "Breathable fabric, Multiple vent options, Standard and custom sizes",
      image: "/images/ventilated-fibc-bag.jpg"
    },
    {
      name: "UN Panel FIBC Bag",
      description: "UN certified for safe transport of hazardous materials",
      specifications: "UN certification, Heavy-duty construction, Safety compliance",
      image: "/images/unpanel-fibc-bag.jpg"
    },
    {
      name: "Conductive FIBC Bag",
      description: "Anti-static properties for sensitive materials",
      specifications: "Conductive yarns, Static dissipation, Safe for flammable materials",
      image: "/images/conductive-fibc-bag.jpg"
    },
    {
      name: "Food Grade FIBC Bag",
      description: "FDA approved for food-grade applications",
      specifications: "Food-safe materials, FDA compliance, Hygienic manufacturing",
      image: "/images/food-grade--fibc-bag.jpg"
    },
    {
      name: "Linear FIBC Bag",
      description: "Cost-effective linear bag design for general applications",
      specifications: "Linear construction, Economic option, Standard capacities",
      image: "/images/linear-fibc-bag.jpg"
    },
    {
      name: "Standard FIBC Bag",
      description: "General purpose bulk storage solution",
      specifications: "Versatile design, Multiple loop options, Custom printing",
      image: "/images/standard-fibc-bag.jpg"
    },
    {
      name: "4-Panel FIBC Bag",
      description: "Four-panel construction for maximum strength and stability",
      specifications: "Four-panel design, Enhanced durability, Heavy-duty applications",
      image: "/images/4-panel-fibc-bag.jpg"
    },
    {
      name: "U-Panel FIBC Bag",
      description: "U-panel design for efficient filling and discharge",
      specifications: "U-panel construction, Easy filling, Cost-effective",
      image: "/images/u-panel-fibc-bag.jpg"
    },
    {
      name: "Tunnel Loop FIBC Bag",
      description: "Tunnel loop design for forklift handling",
      specifications: "Tunnel loops, Forklift compatible, Industrial use",
      image: "/images/tunnel-loop-fibc-bag.jpg"
    },
    {
      name: "Baffle FIBC Bag",
      description: "Internal baffles for maintaining square shape when filled",
      specifications: "Internal baffles, Square shape retention, Premium quality",
      image: "/images/buffle-fibc-bag.jpg"
    },
    {
      name: "Canonical FIBC Bag",
      description: "Canonical design for specialized applications",
      specifications: "Canonical construction, Specialized use, Custom specifications",
      image: "/images/canonical-fibc-bag.jpg"
    },
    {
      name: "2-Loop FIBC Bag",
      description: "Two lifting loops for balanced handling",
      specifications: "Two lifting loops, Balanced lifting, Standard capacity",
      image: "/images/2-loop-fibc-bag.jpg"
    },
    {
      name: "One Loop FIBC Bag",
      description: "Single loop design for specific applications",
      specifications: "Single lifting loop, Compact design, Special applications",
      image: "/images/one-loop-fibc-bag.jpg"
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-700 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container-custom section-padding text-center safe-top">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="px-4"
            >
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Link 
                  href="/products"
                  className="inline-flex items-center space-x-2 text-blue-200 hover:text-white transition-colors duration-300 text-sm sm:text-base focus-ring rounded-lg px-3 py-2"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Back to Products</span>
                </Link>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                FIBC Bag <span className="text-blue-200">Varieties</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
                Specialized FIBC bags designed for specific industry requirements and applications
              </p>
            </motion.div>
          </div>
        </section>

        {/* FIBC Varieties Section */}
        <section ref={ref} className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Package className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our <span className="text-gradient">FIBC Collection</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Each variety is specifically engineered to meet unique industry standards and application requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {fibcTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                >
                  <div className="relative w-full h-64 sm:h-72 md:h-64 lg:h-72 bg-gray-100 overflow-hidden">
                    <img 
                      src={type.image}
                      alt={`${type.name} - High-quality industrial packaging solution`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "/images/placeholder-fibc.jpg";
                        e.currentTarget.alt = "FIBC Bag Product - Image Coming Soon";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6 sm:p-7 md:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{type.name}</h3>
                    <p className="text-gray-600 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base lg:text-lg">{type.description}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">Specifications:</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">{type.specifications}</p>
                    </div>
                    <button 
                      onClick={() => handleWhatsAppQuote(type.name)}
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base lg:text-lg touch-target focus-ring"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-blue-700 to-blue-800 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="px-4"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Need Help Choosing?
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Our experts can help you select the perfect FIBC bag variety for your specific application. 
                Contact us for personalized recommendations and bulk pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <Link
                  href="/contact"
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center touch-target focus-ring"
                >
                  Contact Our Experts
                </Link>
                <Link 
                  href="/products"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center touch-target focus-ring"
                >
                  View All Products
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default FIBCVarietiesPage; 