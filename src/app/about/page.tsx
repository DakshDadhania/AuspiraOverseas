"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Target, Zap, Factory, Users, Award, Shield, Globe, Truck, CheckCircle } from "lucide-react";

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppQuote = () => {
    const phoneNumber = "+919978728781";
    const message = "Hello! I'm interested in getting a quote for your products. Please provide more information.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "500+", label: "Satisfied Clients", icon: Users },
    { number: "10K+", label: "Bags Delivered", icon: Factory },
    { number: "25+", label: "Countries Served", icon: Globe },
  ];

  const milestones = [
    { title: "Company Founded", description: "Auspira Overseas was established with a vision to provide quality industrial packaging solutions." },
    { title: "BEE Certification", description: "Achieved BEE compliance and international quality certifications for our manufacturing processes." },
    { title: "Global Expansion", description: "Started exporting to international markets, serving clients across multiple continents." },
    { title: "Eco-Initiative", description: "Launched biodegradable product line, contributing to environmental sustainability." },
    { title: "Digital Transformation", description: "Modernized operations with digital processes and enhanced quality control systems." }
  ];

  const values = [
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in manufacturing, ensuring every product meets international quality requirements.",
      icon: Shield
    },
    {
      title: "Innovation",
      description: "Continuous innovation in product design and manufacturing processes to meet evolving market demands.",
      icon: Zap
    },
    {
      title: "Customer Focus",
      description: "Building long-term relationships with clients through exceptional service and tailored solutions.",
      icon: Users
    },
    {
      title: "Sustainability",
      description: "Committed to environmental responsibility through eco-friendly materials and sustainable practices.",
      icon: Globe
    },
    {
      title: "Reliability",
      description: "Consistent delivery of high-quality products on time, every time, building trust with our partners.",
      icon: CheckCircle
    },
    {
      title: "Global Reach",
      description: "Serving clients worldwide with efficient logistics and comprehensive export capabilities.",
      icon: Truck
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
                About <span className="text-blue-200">Auspira Overseas</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Leading the industry in manufacturing high-quality FIBC bags and industrial packaging solutions 
                with over 15 years of excellence and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={ref} className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-gray-50 rounded-2xl p-8 card-hover"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-700" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                    <div className="w-12 h-1 bg-blue-700 rounded-full mt-2"></div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To become the global leader in manufacturing innovative, sustainable, and high-quality 
                  industrial packaging solutions that exceed customer expectations while contributing to 
                  environmental preservation through eco-friendly practices and cutting-edge technology.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-green-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                    <div className="w-12 h-1 bg-green-700 rounded-full mt-2"></div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To provide world-class FIBC bags and industrial packaging solutions through continuous 
                  innovation, ensuring export excellence and complete satisfaction for both international 
                  and Indian clients while maintaining the highest quality standards and fostering 
                  sustainable growth.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A timeline of growth, innovation, and excellence in industrial packaging solutions
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="hidden md:flex w-4 h-4 bg-blue-700 rounded-full border-4 border-blue-200 flex-shrink-0 z-10"></div>
                    
                    <div className="w-full md:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Core Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide our operations and define our commitment to excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg card-hover"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Excellence */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Manufacturing <span className="text-gradient">Excellence</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our state-of-the-art manufacturing facility is equipped with modern machinery and 
                  follows stringent quality control processes to ensure every product meets international standards.
                </p>
                
                <div className="space-y-4">
                  {[
                    "ISO certified manufacturing processes",
                    "Advanced quality control systems",
                    "Skilled workforce with expertise",
                    "Eco-friendly production methods",
                    "Regular facility inspections welcome"
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
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
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/factory-image.jpg" 
                    alt="Auspira Overseas Manufacturing Facility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 to-blue-800/20 rounded-2xl"></div>
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
                Ready to Partner with Us?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of satisfied clients who trust Auspira Overseas for their 
                industrial packaging needs. Let's build a successful partnership together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsAppQuote}
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Request Quote
                </button>
                <a
                  href="/products"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Products
                </a>
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

export default AboutPage; 