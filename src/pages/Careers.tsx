import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, MapPin, DollarSign } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const positions = [
  {
    title: 'Senior Massage Therapist',
    type: 'Full-time',
    location: 'New York',
    salary: '$60,000 - $80,000',
    description: "We're seeking an experienced massage therapist to join our luxury spa team.",
    requirements: [
      'Licensed massage therapist with 5+ years experience',
      'Expertise in various massage techniques',
      'Strong customer service skills',
      'Flexible schedule availability',
    ],
  },
  {
    title: 'Esthetician',
    type: 'Full-time',
    location: 'Los Angeles',
    salary: '$50,000 - $70,000',
    description: 'Join our team as a skilled esthetician providing premium facial treatments.',
    requirements: [
      'Licensed esthetician with 3+ years experience',
      'Knowledge of skincare products and treatments',
      'Experience with high-end clientele',
      'Available weekends',
    ],
  },
  {
    title: 'Spa Manager',
    type: 'Full-time',
    location: 'Miami',
    salary: '$70,000 - $90,000',
    description: 'Lead our spa operations and ensure exceptional service delivery.',
    requirements: [
      '5+ years spa management experience',
      'Strong leadership and organizational skills',
      'Experience with spa management software',
      "Bachelor's degree in related field",
    ],
  },
];

const Careers = () => {
  return (
    <div>
      <PageHeader
        title="Join Our Team"
        description="Build your career with the leading luxury spa and wellness brand."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl mb-4 text-primary-800">Why Join LuxeSpa?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <BenefitCard
                title="Growth Opportunities"
                description="Continuous learning and career advancement paths"
              />
              <BenefitCard
                title="Competitive Benefits"
                description="Health insurance, 401(k), paid time off, and more"
              />
              <BenefitCard
                title="Work-Life Balance"
                description="Flexible scheduling and wellness programs"
              />
            </div>
          </div>

          <h2 className="font-display text-3xl mb-8 text-primary-800">Open Positions</h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <JobCard key={index} {...position} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitCard = ({ title, description }: { title: string; description: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-lg text-center"
  >
    <h3 className="font-display text-xl mb-2 text-primary-800">{title}</h3>
    <p className="text-primary-600">{description}</p>
  </motion.div>
);

const JobCard = ({
  title,
  type,
  location,
  salary,
  description,
  requirements,
}: {
  title: string;
  type: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
}) => (
  <motion.div
    whileHover={{ y: -3 }}
    className="bg-white rounded-xl p-6 shadow-lg"
  >
    <div className="flex flex-wrap justify-between items-start mb-4">
      <div>
        <h3 className="font-display text-xl text-primary-800">{title}</h3>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-primary-600">
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-1" />
            {type}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            {salary}
          </div>
        </div>
      </div>
      <button className="bg-accent-500 text-white px-6 py-2 rounded-full hover:bg-accent-600 transition duration-300">
        Apply Now
      </button>
    </div>

    <p className="text-primary-600 mb-4">{description}</p>

    <h4 className="font-semibold text-primary-800 mb-2">Requirements:</h4>
    <ul className="list-disc list-inside space-y-1 text-primary-600">
      {requirements.map((req, index) => (
        <li key={index}>{req}</li>
      ))}
    </ul>
  </motion.div>
);

export default Careers;