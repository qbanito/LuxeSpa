import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const Privacy = () => {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        description="Learn how we collect, use, and protect your personal information."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      />

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg"
        >
          <section className="mb-8">
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              Information We Collect
            </h2>
            <p className="text-primary-600 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-primary-600">
              <li>Name and contact information</li>
              <li>Appointment and booking details</li>
              <li>Payment information</li>
              <li>Health and wellness preferences</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              How We Use Your Information
            </h2>
            <p className="text-primary-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-primary-600">
              <li>Process your appointments and payments</li>
              <li>Communicate with you about our services</li>
              <li>Personalize your spa experience</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our services and customer experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              Information Sharing
            </h2>
            <p className="text-primary-600 mb-4">
              We do not sell or rent your personal information to third parties. We may share
              your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-primary-600">
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors and consultants</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              Your Rights
            </h2>
            <p className="text-primary-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-primary-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with supervisory authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              Contact Us
            </h2>
            <p className="text-primary-600">
              If you have any questions about our Privacy Policy, please contact us at:
              <br />
              Email: privacy@luxespa.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;