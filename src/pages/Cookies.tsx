import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const Cookies = () => {
  return (
    <div>
      <PageHeader
        title="Cookie Policy"
        description="Learn about how we use cookies to enhance your experience."
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
              What Are Cookies?
            </h2>
            <p className="text-primary-600 mb-4">
              Cookies are small text files that are placed on your device when you visit
              our website. They help us provide you with a better experience by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-primary-600">
              <li>Remembering your preferences</li>
              <li>Keeping you signed in</li>
              <li>Understanding how you use our site</li>
              <li>Improving our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              Types of Cookies We Use
            </h2>
            <div className="space-y-6">
              <CookieType
                title="Essential Cookies"
                description="Required for the website to function properly. These cannot be disabled."
              />
              <CookieType
                title="Functional Cookies"
                description="Enable personalized features and remember your preferences."
              />
              <CookieType
                title="Analytics Cookies"
                description="Help us understand how visitors interact with our website."
              />
              <CookieType
                title="Marketing Cookies"
                description="Track your activity across websites to deliver targeted advertising."
              />
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              Managing Cookies
            </h2>
            <p className="text-primary-600 mb-4">
              You can control and/or delete cookies as you wish. You can delete all
              cookies that are already on your computer and you can set most browsers to
              prevent them from being placed.
            </p>
            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-primary-600">
                Please note that if you disable cookies, some features of our website may
                not function properly.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              Third-Party Cookies
            </h2>
            <p className="text-primary-600 mb-4">
              We may use third-party services that also set cookies on our website,
              including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-primary-600">
              <li>Google Analytics for website analytics</li>
              <li>Payment processors for secure transactions</li>
              <li>Social media platforms for sharing content</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-4 text-primary-800">
              Updates to This Policy
            </h2>
            <p className="text-primary-600">
              We may update this Cookie Policy from time to time. Please check back
              regularly to stay informed about our use of cookies.
              <br /><br />
              Last updated: March 2024
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

const CookieType = ({ title, description }: { title: string; description: string }) => (
  <div className="border-b border-primary-100 pb-4">
    <h3 className="font-display text-lg mb-2 text-primary-800">{title}</h3>
    <p className="text-primary-600">{description}</p>
  </div>
);

export default Cookies;