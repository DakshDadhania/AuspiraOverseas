"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { Grape, Zap, CircleDot, Leaf, CheckCircle, ArrowRight, Download, Eye } from "lucide-react";

const ProductsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppQuote = (productName?: string) => {
    const phoneNumber = "+919978728781";
    const message = productName 
      ? `Hello! I'm interested in getting a quote for ${productName}. 
      Please provide more information about pricing and availability.`
      : "Hello! I'm interested in getting a quote for your fresh fruit and vegetable export products. Please provide more information.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const mainProducts = [
    {
      id: 1,
      title: "Premium Pomegranates",
      subtitle: "Export Quality Fresh Pomegranates",
      description: "Premium quality fresh pomegranates with deep red color, juicy arils, and exceptional sweetness. Carefully selected from the finest orchards and packed using international standards.",
      image: "/images/pomegranate-export.jpg", // TODO: Replace with premium pomegranate export image
      features: [
        "Grade A export quality",
        "Rich in antioxidants and vitamins",
        "Proper cold storage maintained",
        "International packaging standards",
        "Long shelf life guaranteed",
        "Available year-round"
      ],
      icon: Grape,
      gradient: "from-red-500 to-red-600",
      applications: ["Fresh Fruit Markets", "Juice Industry", "Health Supplements", "Retail Chains", "Hotels & Restaurants", "Food Processing"]
    },
    {
      id: 2,
      title: "Turmeric Fingers",
      subtitle: "High Curcumin Content Premium Turmeric",
      description: "Premium quality dried turmeric fingers with high curcumin content, natural golden color, and rich aroma. Perfect for international spice markets and pharmaceutical applications.",
      image: "/images/turmeric-fingers-export.jpg", // TODO: Replace with dried turmeric fingers export image
      features: [
        "High curcumin content (3-7%)",
        "Natural golden yellow color",
        "Properly dried and processed",
        "Export quality grading",
        "Free from artificial additives",
        "Certified organic available"
      ],
      icon: Zap,
      gradient: "from-yellow-500 to-orange-600",
      applications: ["Spice Industry", "Pharmaceutical Companies", "Food Processing", "Ayurvedic Medicine", "Cosmetic Industry", "Export Markets"]
    },
    {
      id: 3,
      title: "Fresh Onions",
      subtitle: "Premium Red & White Onion Varieties",
      description: "High quality fresh onions available in red and white varieties. Properly cured, sorted, and graded for maximum shelf life and export quality standards.",
      image: "/images/onion-export.jpg", // TODO: Replace with fresh onions variety export image
      features: [
        "Multiple varieties available",
        "Properly cured and sorted",
        "Extended shelf life",
        "Uniform size and quality",
        "Free from damages",
        "Bulk packaging options"
      ],
      icon: CircleDot,
      gradient: "from-purple-500 to-purple-600",
      applications: ["Food Processing", "Restaurants", "Retail Markets", "Dehydration Industry", "Pickle Manufacturing", "International Trade"]
    },
    {
      id: 4,
      title: "Green Chillies",
      subtitle: "Fresh Spicy Green Chillies",
      description: "Premium quality fresh green chillies with perfect heat levels, vibrant color, and crispy texture. Carefully harvested and packed to preserve freshness during international shipping.",
      image: "/images/green-chilli-export.jpg", // TODO: Replace with fresh green chillies export image
      features: [
        "Optimal heat levels",
        "Vibrant green color",
        "Fresh and crispy texture",
        "Proper cold chain maintained",
        "Various sizes available",
        "Export quality packaging"
      ],
      icon: Zap,
      gradient: "from-green-500 to-green-600",
      applications: ["Fresh Vegetable Markets", "Food Processing", "Restaurants", "Pickle Industry", "Spice Manufacturing", "International Cuisine"]
    },
    {
      id: 5,
      title: "Curry Leaves",
      subtitle: "Fresh Aromatic Curry Leaves",
      description: "Fresh curry leaves with intense aroma and authentic flavor. Carefully selected, cleaned, and packed to maintain freshness. Essential ingredient for authentic Indian cuisine worldwide.",
      image: "/images/curry-leaves-export.jpg", // TODO: Replace with fresh curry leaves export image
      features: [
        "Intense natural aroma",
        "Fresh and vibrant green",
        "Carefully selected leaves",
        "Maintains freshness during shipping",
        "Proper cleaning and sorting",
        "Authentic Indian variety"
      ],
      icon: Leaf,
      gradient: "from-emerald-500 to-emerald-600",
      applications: ["Indian Restaurants", "Spice Blends", "Food Processing", "International Markets", "Ayurvedic Products", "Culinary Industry"]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container-custom section-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Our <span className="text-green-200">Premium Products</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Fresh fruits, vegetables, and spices sourced from the finest farms 
                and exported worldwide with guaranteed quality and freshness.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Products */}
        <section ref={ref} className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Product <span className="text-gradient">Categories</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our extensive range of premium agricultural export products
              </p>
            </motion.div>

            <div className="space-y-20">
              {mainProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`w-12 h-12 bg-gradient-to-r ${product.gradient} rounded-lg flex items-center justify-center mb-6`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {product.title}
                    </h3>
                    <p className="text-xl text-green-600 font-medium mb-6">{product.subtitle}</p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{product.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => handleWhatsAppQuote(product.title)}
                        className={`inline-flex items-center space-x-2 bg-gradient-to-r ${product.gradient} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}
                      >
                        <Download className="w-5 h-5" />
                        <span>Request Quote</span>
                      </button>
                      <button 
                        onClick={() => handleWhatsAppQuote(product.title)}
                        className="inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                      >
                        <Eye className="w-5 h-5" />
                        <span>Get Details</span>
                      </button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="aspect-[4/3] h-80 sm:h-80 md:h-96 w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Quality <span className="text-gradient">Standards</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  All our agricultural products meet international food safety standards and are processed 
                  using state-of-the-art facilities with rigorous quality control processes.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Food Safety Certified",
                      description: "All products meet international food safety and quality standards"
                    },
                    {
                      title: "Cold Chain Management",
                      description: "Proper temperature control maintained throughout the supply chain"
                    },
                    {
                      title: "Export Quality Standards",
                      description: "Products comply with global export quality requirements"
                    },
                    {
                      title: "Regular Quality Testing",
                      description: "Comprehensive testing for freshness, quality, and safety parameters"
                    }
                  ].map((standard, index) => (
                    <motion.div
                      key={standard.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex space-x-4"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{standard.title}</h3>
                        <p className="text-gray-600">{standard.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assured</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every product undergoes strict quality control processes to ensure 
                    maximum freshness and nutritional value for our global clients.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need Bulk Orders?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                We offer competitive pricing for bulk orders and can customize packaging 
                according to your specific requirements. Get in touch for detailed quotations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleWhatsAppQuote()}
                  className="bg-white text-green-700 hover:bg-green-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Request Quote
                </button>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>Contact Us</span>
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

export default ProductsPage; 