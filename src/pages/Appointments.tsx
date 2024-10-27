import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Appointments = () => {
  return (
    <div>
      <PageHeader
        title="Book an Appointment"
        description="Schedule your next treatment with our expert professionals."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="font-display text-3xl mb-8 text-primary-800 text-center">
              Schedule Your Visit
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  icon={<User className="text-primary-400" />}
                  label="First Name"
                  type="text"
                  placeholder="Enter your first name"
                />
                <FormField
                  icon={<User className="text-primary-400" />}
                  label="Last Name"
                  type="text"
                  placeholder="Enter your last name"
                />
                <FormField
                  icon={<Phone className="text-primary-400" />}
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone number"
                />
                <FormField
                  icon={<Clock className="text-primary-400" />}
                  label="Preferred Time"
                  type="time"
                  placeholder="Select preferred time"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-primary-700">
                  Select Service
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Massage Therapy', 'Facial Treatment', 'Hair Styling', 'Nail Care'].map((service) => (
                    <label
                      key={service}
                      className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-primary-50 transition duration-300"
                    >
                      <input type="radio" name="service" className="text-accent-500" />
                      <span className="ml-2">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  rows={4}
                  placeholder="Any special requests or notes?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent-500 text-white px-6 py-3 rounded-full hover:bg-accent-600 transition duration-300"
              >
                Confirm Booking
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FormField = ({
  icon,
  label,
  type,
  placeholder,
}: {
  icon: React.ReactNode;
  label: string;
  type: string;
  placeholder: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-primary-700 mb-2">
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default Appointments;