import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const About = () => {
  return (
    <div>
      <PageHeader
        title="About LuxeSpa"
        description="Discover our story and commitment to excellence in wellness and beauty."
        image="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl mb-6 text-primary-800">Our Story</h2>
            <p className="text-primary-600 mb-6">
              Founded in 2010, LuxeSpa has been at the forefront of luxury wellness and beauty
              services. Our commitment to excellence and personalized care has made us a
              trusted destination for those seeking premium spa experiences.
            </p>
            <p className="text-primary-600">
              We believe in the transformative power of wellness and beauty treatments,
              combining traditional techniques with modern innovations to provide
              unforgettable experiences for our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Spa interior"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <StatsCard
            icon={<Users />}
            number="15+"
            label="Expert Therapists"
          />
          <StatsCard
            icon={<Award />}
            number="50+"
            label="Industry Awards"
          />
          <StatsCard
            icon={<Clock />}
            number="10k+"
            label="Happy Clients"
          />
          <StatsCard
            icon={<MapPin />}
            number="3"
            label="Luxury Locations"
          />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl mb-8 text-primary-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              title="Excellence"
              description="We strive for perfection in every treatment and service we provide."
            />
            <ValueCard
              title="Innovation"
              description="Combining traditional techniques with modern technology for optimal results."
            />
            <ValueCard
              title="Care"
              description="Personal attention and care for every client's unique needs and preferences."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({
  icon,
  number,
  label,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-lg text-center"
  >
    <div className="text-accent-500 mb-4">{icon}</div>
    <div className="text-3xl font-bold text-primary-800 mb-2">{number}</div>
    <div className="text-primary-600">{label}</div>
  </motion.div>
);

const ValueCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-primary-50 p-6 rounded-xl"
  >
    <h3 className="font-display text-xl mb-3 text-primary-800">{title}</h3>
    <p className="text-primary-600">{description}</p>
  </motion.div>
);

export default About;