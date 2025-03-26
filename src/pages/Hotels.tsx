import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone, Mail } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const hotels = [
  {
    id: 1,
    name: 'Luxury Ocean Resort',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    location: 'Maldives',
    originalPrice: 599,
    discountPrice: 499,
    description: 'Experience luxury at its finest with our ocean-view rooms and world-class amenities.'
  },
  {
    id: 2,
    name: 'Mountain View Lodge',
    image: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    location: 'Swiss Alps',
    originalPrice: 399,
    discountPrice: 329,
    description: 'Cozy mountain retreat with breathtaking views and premium comfort.'
  },
  {
    id: 3,
    name: 'Urban Boutique Hotel',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    location: 'New York',
    originalPrice: 299,
    discountPrice: 249,
    description: 'Modern luxury in the heart of the city with exceptional service.'
  },
  // Add more hotels as needed
];

const Hotels = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Luxury Hotels</h1>
            <p className="text-xl">Experience comfort and elegance</p>
          </motion.div>
        </div>
      </section>

      {/* Hotels Carousel/Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Swiper
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
            >
              {hotels.map((hotel) => (
                <SwiperSlide key={hotel.id}>
                  <HotelCard hotel={hotel} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Find Us</h2>
              <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center mb-6">
                <p className="text-gray-600">Map Integration Coming Soon</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary" />
                  <span>123 Hotel Street, City, Country</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary" />
                  <span>hotels@wanderease.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const HotelCard = ({ hotel }: { hotel: typeof hotels[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-semibold">{hotel.rating}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-gray-600">{hotel.location}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
        <p className="text-gray-600 mb-4">{hotel.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500 line-through">${hotel.originalPrice}</span>
            <span className="text-2xl font-bold text-primary ml-2">${hotel.discountPrice}</span>
            <span className="text-sm text-gray-500">/night</span>
          </div>
          <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Hotels;