import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Star, DollarSign } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const serviceDetails = {
  massage: {
    title: 'Massage Therapy',
    description: 'Relax and rejuvenate with our therapeutic massage treatments.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '60-90 min',
    price: 'from $89',
    rating: '4.9',
    capacity: 'Individual',
    features: [
      'Swedish Massage',
      'Deep Tissue Massage',
      'Hot Stone Therapy',
      'Aromatherapy',
      'Sports Massage',
      'Prenatal Massage',
    ],
  },
  facial: {
    title: 'Facial Treatments',
    description: 'Revitalize your skin with our premium facial treatments.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '45-60 min',
    price: 'from $99',
    rating: '4.8',
    capacity: 'Individual',
    features: [
      'Deep Cleansing',
      'Anti-Aging Treatment',
      'Hydrating Facial',
      'Acne Treatment',
      'Chemical Peels',
      'LED Light Therapy',
    ],
  },
  hair: {
    title: 'Hair Styling',
    description: 'Transform your look with our professional hair styling services.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '30-120 min',
    price: 'from $69',
    rating: '4.7',
    capacity: 'Individual',
    features: [
      'Haircut & Styling',
      'Color & Highlights',
      'Keratin Treatment',
      'Hair Extensions',
      'Bridal Styling',
      'Hair Treatments',
    ],
  },
  nails: {
    title: 'Nail Care',
    description: 'Pamper yourself with our luxurious nail care services.',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b0c26670?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    duration: '30-60 min',
    price: 'from $49',
    rating: '4.8',
    capacity: 'Individual',
    features: [
      'Manicure',
      'Pedicure',
      'Gel Polish',
      'Nail Art',
      'Paraffin Treatment',
      'Hand & Foot Massage',
    ],
  },
};

const ServiceDetail = () => {
  const { service } = useParams<{ service: keyof typeof serviceDetails }>();
  const details = service ? serviceDetails[service] : null;

  if (!details) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <PageHeader
        title={details.title}
        description={details.description}
        image={details.image}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="font-display text-3xl mb-6 text-primary-800">Service Details</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <InfoCard icon={<Clock />} label="Duration" value={details.duration} />
                <InfoCard icon={<DollarSign />} label="Starting at" value={details.price} />
                <InfoCard icon={<Star />} label="Rating" value={details.rating} />
                <InfoCard icon={<Users />} label="Capacity" value={details.capacity} />
              </div>

              <h3 className="font-display text-2xl mb-4 text-primary-800">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="font-display text-2xl mb-6 text-primary-800">Book Now</h2>
              <button className="w-full bg-accent-500 text-white px-6 py-3 rounded-full hover:bg-accent-600 transition duration-300">
                Schedule Appointment
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, label, value }: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex flex-col items-center text-center p-4 bg-primary-50 rounded-lg">
    <div className="text-accent-500 mb-2">{icon}</div>
    <div className="text-sm text-primary-600">{label}</div>
    <div className="font-semibold text-primary-800">{value}</div>
  </div>
);

export default ServiceDetail;