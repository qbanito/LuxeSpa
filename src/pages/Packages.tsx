import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Clock, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const packages = [
  {
    title: 'Essential Relaxation',
    price: '199',
    duration: '2.5 hours',
    rating: '4.8',
    description: 'Perfect introduction to our luxury spa experience',
    features: [
      'Swedish Massage (60 min)',
      'Express Facial',
      'Classic Manicure',
      'Complimentary Beverage',
      'Access to Relaxation Lounge',
    ],
  },
  {
    title: 'Luxury Wellness',
    price: '349',
    duration: '4 hours',
    rating: '4.9',
    featured: true,
    description: 'Our most popular complete spa package',
    features: [
      'Deep Tissue Massage (90 min)',
      'Premium Facial Treatment',
      'Spa Pedicure',
      'Scalp Treatment',
      'Lunch & Refreshments',
      'Full Day Spa Access',
      'Luxury Gift Set',
    ],
  },
  {
    title: 'Bridal Bliss',
    price: '499',
    duration: '6 hours',
    rating: '5.0',
    description: 'Special package for your big day',
    features: [
      'Bridal Makeup & Hair',
      'Deluxe Facial',
      'Full Body Massage',
      'Manicure & Pedicure',
      'Glass of Champagne',
      'Private Suite Access',
      'Bridal Party Welcome',
      'Premium Gift Bag',
    ],
  },
];

const Packages = () => {
  return (
    <div>
      <PageHeader
        title="Spa Packages"
        description="Indulge in our carefully curated spa packages designed for ultimate relaxation and rejuvenation."
        image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>

        <div className="mt-16">
          <h2 className="font-display text-3xl text-center mb-8 text-primary-800">
            Package Add-ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AddOnCard
              title="Aromatherapy"
              price="29"
              description="Enhance your massage with essential oils"
            />
            <AddOnCard
              title="Hot Stone Treatment"
              price="39"
              description="Add hot stone therapy to any massage"
            />
            <AddOnCard
              title="LED Light Therapy"
              price="49"
              description="Boost your facial with LED treatment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const PackageCard = ({
  title,
  price,
  duration,
  rating,
  description,
  features,
  featured = false,
}: {
  title: string;
  price: string;
  duration: string;
  rating: string;
  description: string;
  features: string[];
  featured?: boolean;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`relative bg-white rounded-xl p-8 shadow-lg ${
      featured ? 'border-2 border-accent-500' : ''
    }`}
  >
    {featured && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </span>
      </div>
    )}

    <h3 className="font-display text-2xl mb-2 text-primary-800">{title}</h3>
    <div className="flex items-baseline mb-4">
      <span className="text-4xl font-bold text-accent-500">${price}</span>
      <span className="text-primary-600 ml-2">per person</span>
    </div>

    <div className="flex items-center space-x-4 mb-4 text-sm text-primary-600">
      <div className="flex items-center">
        <Clock className="h-4 w-4 mr-1" />
        {duration}
      </div>
      <div className="flex items-center">
        <Star className="h-4 w-4 mr-1 text-yellow-400" />
        {rating}
      </div>
    </div>

    <p className="text-primary-600 mb-6">{description}</p>

    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0" />
          <span className="text-primary-700">{feature}</span>
        </li>
      ))}
    </ul>

    <button className="w-full bg-accent-500 text-white px-6 py-3 rounded-full hover:bg-accent-600 transition duration-300">
      Book Package
    </button>
  </motion.div>
);

const AddOnCard = ({
  title,
  price,
  description,
}: {
  title: string;
  price: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="bg-primary-50 rounded-lg p-6"
  >
    <h4 className="font-display text-xl mb-2 text-primary-800">{title}</h4>
    <div className="flex items-baseline mb-2">
      <span className="text-2xl font-bold text-accent-500">${price}</span>
      <span className="text-primary-600 ml-2">per session</span>
    </div>
    <p className="text-primary-600">{description}</p>
  </motion.div>
);

export default Packages;