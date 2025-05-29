"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Zap, Users, CheckCircle, Factory, Truck, Shield, Award } from "lucide-react";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "10K+", label: "Bags Delivered", icon: Factory },
    { number: "25+", label: "Countries Served", icon: Truck },
    { number: "15+", label: "Years Experience", icon: Award },
  ];

  const whyChooseUs = [
    {
      title: "Extra Strong & Durable",
      description: "Our FIBC bags are manufactured with high-quality materials ensuring maximum strength and durability for heavy-duty applications.",
      icon: Shield
    },
    {
      title: "Leakproof Design",
      description: "Advanced manufacturing techniques ensure our bags are completely leakproof, perfect for storing various materials safely.",
      icon: CheckCircle
    },
    {
      title: "100% Biodegradable Options",
      description: "We offer eco-friendly biodegradable garbage bags that decompose naturally, contributing to environmental sustainability.",
      icon: Zap
    },
    {
      title: "Global Export Standards",
      description: "All our products meet international quality standards and BEE compliance for global export requirements.",
      icon: Award
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* About Us Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Auspira Overseas</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A reputable manufacturer of bulk bags that complies with BEE standards, 
            conducting business as Industrial Bulk Bag Suppliers with a commitment to excellence.
          </p>
        </motion.div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mt-2"></div>
              </div>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              To become the global leader in manufacturing innovative, sustainable, and 
              high-quality industrial packaging solutions that exceed customer expectations 
              while contributing to environmental preservation through eco-friendly practices.
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2"></div>
              </div>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              To provide world-class FIBC bags and industrial packaging solutions through 
              continuous innovation, ensuring export excellence and complete satisfaction 
              for both international and Indian clients while maintaining the highest quality standards.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card rounded-2xl p-8 mb-20 border border-slate-200"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Auspira Overseas</span>?
          </h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We are dedicated to fostering strong, mutually beneficial relationships 
            with our clientele through exceptional quality and service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
              className="glass-card rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white mt-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              International Quality Standards
            </h3>
            <p className="text-xl leading-relaxed mb-8 text-slate-200">
              Our flexible Intermediate Bulk Containers (FIBCs), also referred to as bulk bags, 
              are composed of flexible woven polypropylene and offer a cost-effective and efficient 
              way to package, store, and handle a variety of products. Our large industrial bags 
              maximize storage capacity, lower transportation costs, and enhance flow control.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              International quality requirements are followed in the production of our bulk bags, 
              and we encourage inspection of the production line to ensure complete transparency 
              and quality assurance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 