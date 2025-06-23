"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { Package, Recycle, Layers, CheckCircle, ArrowRight, Download, Eye } from "lucide-react";

const ProductsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppQuote = (productName?: string) => {
    const phoneNumber = "+919978728781";
    const message = productName 
      ? `Hello! I'm interested in getting a quote for ${productName}. 
      Please provide more information.`
      : "Hello! I'm interested in getting a quote for your products. Please provide more information.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const mainProducts = [
    {
      id: 1,
      title: "FIBC Bags",
      subtitle: "Flexible Intermediate Bulk Containers",
      description: "Comprehensive range of FIBC bags designed for various industrial applications with different configurations and specifications.",
      image: "/images/fibc-bag.jpg",
      features: [
        "Multiple lifting loop configurations",
        "Food grade and conductive options",
        "UN panel and ventilated designs",
        "Custom sizes and specifications",
        "BEE compliant manufacturing",
        "International quality standards"
      ],
      icon: Package,
      gradient: "from-blue-500 to-blue-600",
      applications: ["Chemicals", "Agriculture", "Food Industry", "Construction", "Mining", "Pharmaceuticals"]
    },
    {
      id: 2,
      title: "Biodegradable Garbage Bags",
      subtitle: "Eco-Friendly Waste Management Solutions",
      description: "100% biodegradable and compostable garbage bags that naturally decompose, supporting environmental sustainability initiatives.",
      image: "/images/biodegradable-garbage-bag.jpg",
      features: [
        "100% biodegradable material",
        "Compostable and eco-friendly",
        "Various sizes and thicknesses",
        "Extra strong and leakproof",
        "Suitable for wet waste",
        "Quick decomposition"
      ],
      icon: Recycle,
      gradient: "from-green-500 to-green-600",
      applications: ["Households", "Hotels", "Restaurants", "Hospitals", "Offices", "Municipal Corporations"]
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
        "UV stabilized options",
        "Custom printing available",
        "Various sizes and weights",
        "Cost-effective solution"
      ],
      icon: Layers,
      gradient: "from-purple-500 to-purple-600",
      applications: ["Agriculture", "Fertilizers", "Cement", "Animal Feed", "Rice & Grains", "Chemical Powders"]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-700 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container-custom section-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Our <span className="text-blue-200">Products</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Comprehensive range of industrial packaging solutions designed to meet 
                diverse requirements with uncompromising quality and reliability.
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
                Explore our extensive range of industrial packaging solutions
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
                    <p className="text-xl text-blue-600 font-medium mb-6">{product.subtitle}</p>
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
                      {product.id === 1 ? (
                        <>
                          <Link 
                            href="/products/fibc-varieties"
                            className={`inline-flex items-center space-x-2 bg-gradient-to-r ${product.gradient} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}
                          >
                            <Eye className="w-5 h-5" />
                            <span>View Categories</span>
                          </Link>
                          <button 
                            onClick={() => handleWhatsAppQuote(product.title)}
                            className="inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                          >
                            <Download className="w-5 h-5" />
                            <span>Request Quote</span>
                          </button>
                        </>
                      ) : (
                        <button 
                          onClick={() => handleWhatsAppQuote(product.title)}
                          className="inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                        >
                          <Download className="w-5 h-5" />
                          <span>Request Quote</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <div 
                        className="aspect-[4/3] h-80 sm:h-80 md:h-96 bg-cover bg-center"
                        style={{ 
                          backgroundImage: `url('${product.image}')`,
                          backgroundPosition: 'center center'
                        }}
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
                  All our products meet international quality standards and are manufactured 
                  using state-of-the-art equipment with rigorous quality control processes.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "BEE Compliance",
                      description: "All products meet Bureau of Energy Efficiency standards"
                    },
                    {
                      title: "ISO Certification",
                      description: "Manufacturing processes certified under ISO quality standards"
                    },
                    {
                      title: "International Standards",
                      description: "Products comply with global export quality requirements"
                    },
                    {
                      title: "Regular Testing",
                      description: "Comprehensive quality testing for strength, durability, and safety"
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
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assured</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every product undergoes strict quality control processes to ensure 
                    maximum performance and reliability for our global clients.
                  </p>
                </div>
              </motion.div>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need Custom Solutions?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                We offer customized packaging solutions tailored to your specific requirements. 
                Get in touch for detailed specifications, bulk pricing, and custom designs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleWhatsAppQuote()}
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Request Quote
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Catalog</span>
                </button>
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