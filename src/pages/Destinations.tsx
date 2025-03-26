import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Clock, DollarSign, Filter } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'luxury',
    location: 'Europe',
    rating: 4.8,
    price: 2500,
    duration: '7 days',
    description: 'Experience the stunning white-washed buildings and breathtaking sunsets of Santorini.',
    highlights: ['Sunset in Oia', 'Black Sand Beaches', 'Wine Tasting', 'Volcanic Islands'],
    isPopular: true,
    hasOffer: true
  },
  {
    id: 2,
    name: 'Machu Picchu, Peru',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'adventure',
    location: 'South America',
    rating: 4.9,
    price: 1800,
    duration: '5 days',
    description: 'Explore the ancient Incan citadel and trek through stunning mountain landscapes.',
    highlights: ['Inca Trail', 'Ancient Ruins', 'Mountain Views', 'Local Culture'],
    isPopular: true,
    hasOffer: false
  },
  {
    id: 3,
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    type: 'beach',
    location: 'Asia',
    rating: 4.7,
    price: 3000,
    duration: '6 days',
    description: 'Relax in overwater bungalows surrounded by crystal clear waters.',
    highlights: ['Overwater Villas', 'Snorkeling', 'Spa Treatments', 'Water Sports'],
    isPopular: true,
    hasOffer: true
  }
];

const types = ['all', 'adventure', 'luxury', 'beach', 'cultural'];
const locations = ['all', 'Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania'];
const priceRanges = [
  { label: 'All', value: 'all' },
  { label: 'Under $1000', max: 1000 },
  { label: '$1000 - $2000', min: 1000, max: 2000 },
  { label: '$2000 - $3000', min: 2000, max: 3000 },
  { label: 'Above $3000', min: 3000 }
];

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredDestinations = useMemo(() => {
    return destinations.filter(dest => {
      const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'all' || dest.type === selectedType;
      const matchesLocation = selectedLocation === 'all' || dest.location === selectedLocation;
      const matchesPrice = selectedPriceRange === 'all' || 
        (priceRanges.find(range => range.value === selectedPriceRange)?.min ?? 0) <= dest.price &&
        (priceRanges.find(range => range.value === selectedPriceRange)?.max ?? Infinity) >= dest.price;

      return matchesSearch && matchesType && matchesLocation && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'popularity') return b.rating - a.rating;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [searchQuery, selectedType, selectedLocation, selectedPriceRange, sortBy]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Dream Destinations</h1>
            <p className="text-xl mb-8">Discover the world's most amazing places</p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto relative">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {priceRanges.map(range => (
                  <option key={range.label} value={range.value || range.label.toLowerCase()}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-4 items-center">
              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="popularity">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>

              {/* View Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-200'}`}
                >
                  <Filter className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-200'}`}
                >
                  <Filter className="w-5 h-5 rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No destinations found matching your criteria.</p>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

interface DestinationCardProps {
  destination: typeof destinations[0];
  viewMode: 'grid' | 'list';
}

const DestinationCard = ({ destination, viewMode }: DestinationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden group ${
        viewMode === 'list' ? 'flex' : ''
      }`}
    >
      <div className={`relative ${viewMode === 'list' ? 'w-1/3' : 'w-full'}`}>
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
        {destination.hasOffer && (
          <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
            Special Offer
          </div>
        )}
      </div>
      <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : 'w-full'}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-gray-600">{destination.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold">{destination.rating}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
        <p className="text-gray-600 mb-4">{destination.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.highlights.map((highlight, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
            >
              {highlight}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">{destination.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-primary" />
              <span className="text-2xl font-bold text-primary">${destination.price}</span>
            </div>
          </div>
          <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Destinations;