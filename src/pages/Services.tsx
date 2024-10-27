import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const services = [
  {
    id: 'massage',
    title: 'Massage Therapy',
    description: 'Experience deep relaxation and healing with our therapeutic massage treatments.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'from $89',
  },
  {
    id: 'facial',
    title: 'Facial Treatments',
    description: 'Revitalize your skin with our premium facial treatments and expert skincare.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'from $99',
  },
  {
    id: 'hair',
    title: 'Hair Styling',
    description: 'Transform your look with our professional hair styling and treatment services.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'from $69',
  },
  {
    id: 'nails',
    title: 'Nail Care',
    description: 'Pamper yourself with our luxurious manicure and pedicure services.',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b0c26670?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 'from $49',
  },
];

const Services = () => {
  return (
    <div>
      <PageHeader
        title="Our Services"
        description="Discover our range of luxury treatments and services designed to rejuvenate your body and mind."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ id, title, description, image, price }: {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl overflow-hidden shadow-lg"
  >
    <Link to={`/services/${id}`}>
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="font-display text-2xl mb-2 text-primary-800">{title}</h3>
        <p className="text-primary-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-accent-500 font-semibold">{price}</span>
          <span className="text-accent-500 hover:text-accent-600 font-medium">
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default Services;