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
    { number: "500+", label: "Satisfied Clients", icon: Users },
    { number: "25K+", label: "Tons Exported", icon: Factory },
    { number: "30+", label: "Countries Served", icon: Truck },
    { number: "15+", label: "Years Experience", icon: Award },
  ];

  const whyChooseUs = [
    {
      title: "Farm Fresh Quality",
      description: "Our products are sourced directly from premium farms ensuring maximum freshness and nutritional value for international markets.",
      icon: Shield
    },
    {
      title: "Proper Cold Chain",
      description: "Advanced cold storage and transportation systems maintain optimal freshness from farm to destination, preserving quality throughout.",
      icon: CheckCircle
    },
    {
      title: "Organic & Natural",
      description: "We offer organically grown fruits, vegetables, and spices that are free from harmful chemicals and pesticides.",
      icon: Zap
    },
    {
      title: "Global Export Standards",
      description: "All our products meet international food safety standards and export quality requirements for global markets.",
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
            About <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Auspira Overseas</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A trusted exporter of premium fresh fruits, vegetables, and spices, 
            connecting quality Indian agricultural products to global markets with excellence and reliability.
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
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-2"></div>
              </div>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              To become the leading global exporter of premium Indian agricultural products, 
              connecting the finest farms to international markets while promoting sustainable 
              farming practices and supporting local farming communities.
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
              To provide world-class fresh fruits, vegetables, and spices through 
              reliable supply chains, ensuring export excellence and complete satisfaction 
              for international clients while maintaining the highest quality and freshness standards.
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
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
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
            Why Choose <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Auspira Overseas</span>?
          </h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We are dedicated to providing the finest fresh produce and building 
            lasting partnerships with clients worldwide through quality and reliability.
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
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
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              International Quality Agricultural Products
            </h3>
            <p className="text-xl leading-relaxed mb-8 text-slate-200">
              Our premium agricultural products including fresh pomegranates, aromatic turmeric fingers, 
              quality onions, vibrant green chillies, and fragrant curry leaves are sourced from the finest 
              farms and processed with international quality standards, ensuring maximum freshness and 
              nutritional value for global markets.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              International food safety requirements are followed in all our export operations, 
              and we encourage inspection of our supply chain to ensure complete transparency 
              and quality assurance for our global partners.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 