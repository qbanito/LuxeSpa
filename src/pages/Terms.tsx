import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const Terms = () => {
  return (
    <div>
      <PageHeader
        title="Terms of Service"
        description="Please read these terms carefully before using our services."
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
              1. Acceptance of Terms
            </h2>
            <p className="text-primary-600 mb-4">
              By accessing and using LuxeSpa's services, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do not use our
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              2. Service Description
            </h2>
            <p className="text-primary-600 mb-4">
              LuxeSpa provides spa and wellness services, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-primary-600">
              <li>Massage therapy</li>
              <li>Facial treatments</li>
              <li>Body treatments</li>
              <li>Hair styling</li>
              <li>Nail care</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              3. Booking and Cancellation
            </h2>
            <div className="space-y-4 text-primary-600">
              <p>
                Appointments can be booked through our website, mobile app, or by phone.
                A valid credit card is required to secure your booking.
              </p>
              <p>
                Cancellation Policy:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>24-hour notice required for cancellations</li>
                <li>50% charge for cancellations under 24 hours</li>
                <li>Full charge for no-shows</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              4. Payment Terms
            </h2>
            <div className="space-y-4 text-primary-600">
              <p>
                We accept major credit cards, cash, and gift cards. Prices are subject to
                change without notice. Special promotions cannot be combined with other
                offers.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              5. Health and Safety
            </h2>
            <div className="space-y-4 text-primary-600">
              <p>
                Clients must disclose relevant health conditions and medications. We reserve
                the right to refuse service based on health and safety concerns.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              6. Liability
            </h2>
            <div className="space-y-4 text-primary-600">
              <p>
                LuxeSpa is not liable for any personal injury or loss of personal property
                during your visit. We recommend securing valuables in provided lockers.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              7. Gift Cards
            </h2>
            <div className="space-y-4 text-primary-600">
              <p>
                Gift cards are non-refundable and must be presented at time of service.
                Lost or stolen gift cards cannot be replaced.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              8. Contact Information
            </h2>
            <p className="text-primary-600">
              For questions about these Terms of Service, please contact us at:
              <br />
              Email: legal@luxespa.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;