import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Clock, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '10,000+', startValue: 0, endValue: 10000 },
    { icon: Globe, label: 'Destinations', value: '100+', startValue: 0, endValue: 100 },
    { icon: Clock, label: 'Years Experience', value: '15+', startValue: 0, endValue: 15 },
    { icon: Award, label: 'Travel Awards', value: '50+', startValue: 0, endValue: 50 },
  ];

  const features = [
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your travel needs',
      icon: Clock,
    },
    {
      title: 'Best Price Guarantee',
      description: 'We match any comparable price you find',
      icon: Award,
    },
    {
      title: 'Expert Guides',
      description: 'Professional local guides for authentic experiences',
      icon: Users,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">About GlobeGlint</h1>
            <p className="text-xl">Creating Unforgettable Travel Experiences Since 2009</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At WanderEase, we believe that travel has the power to transform lives. Our mission is to create extraordinary journeys that inspire, educate, and connect people across cultures and continents.
              </p>
              <p className="text-gray-600">
                With 15 years of experience in crafting bespoke travel experiences, we combine local expertise with world-class service to ensure every journey with us is unforgettable.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Travel Experience"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;