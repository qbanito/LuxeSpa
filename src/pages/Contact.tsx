import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team for any questions or inquiries."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl mb-6 text-primary-800">Get in Touch</h2>
              <p className="text-primary-600 mb-8">
                We'd love to hear from you. Please fill out the form below and we'll get
                back to you as soon as possible.
              </p>

              <div className="space-y-6 mb-8">
                <ContactInfo
                  icon={<MapPin />}
                  title="Visit Us"
                  content="123 Luxury Lane, New York, NY 10001"
                />
                <ContactInfo
                  icon={<Phone />}
                  title="Call Us"
                  content="+1 (555) 123-4567"
                />
                <ContactInfo
                  icon={<Mail />}
                  title="Email Us"
                  content="info@luxespa.com"
                />
                <ContactInfo
                  icon={<Clock />}
                  title="Opening Hours"
                  content="Mon-Sun: 9:00 AM - 9:00 PM"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500">
                    <option>General Inquiry</option>
                    <option>Booking Question</option>
                    <option>Service Information</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-500 text-white px-6 py-3 rounded-full hover:bg-accent-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <div className="flex items-start">
    <div className="text-accent-500 mr-4">{icon}</div>
    <div>
      <h3 className="font-medium text-primary-800">{title}</h3>
      <p className="text-primary-600">{content}</p>
    </div>
  </div>
);

export default Contact;