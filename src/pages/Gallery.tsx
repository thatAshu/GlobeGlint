import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gallery as PhotoswipeGallery } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const categories = ['All', 'Beaches', 'Mountains', 'Cities', 'Historical'];

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1520483601560-389dff434fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    category: 'Beaches',
    title: 'Tropical Paradise'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    category: 'Mountains',
    title: 'Mountain Peak'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    category: 'Cities',
    title: 'City Skyline'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    category: 'Historical',
    title: 'Ancient Temple'
  },
  // Add more images as needed
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-cover bg-center" style={{
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Gallery</h1>
            <p className="text-xl">Explore our collection of stunning destinations</p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <PhotoswipeGallery>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative group overflow-hidden rounded-lg shadow-lg"
                >
                  <a
                    href={image.src}
                    data-pswp-width={image.width}
                    data-pswp-height={image.height}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-72 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-semibold">{image.title}</h3>
                        <p className="text-sm">{image.category}</p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </PhotoswipeGallery>
        </div>
      </section>
    </div>
  );
};

export default Gallery;