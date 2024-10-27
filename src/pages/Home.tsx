import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkle, Clock, Award, Star, ArrowRight, Quote, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Luxury spa interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/80" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="font-display text-6xl md:text-7xl mb-6 leading-tight">
              Elevate Your <br />Wellness Journey
            </h1>
            <p className="text-xl mb-8 text-primary-100">
              Experience the pinnacle of luxury spa treatments and personalized care
              in our award-winning sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent-500 text-white px-8 py-4 rounded-full hover:bg-accent-600 transition duration-300 flex items-center justify-center">
                Book Your Experience <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition duration-300">
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="15+" label="Years of Excellence" />
          <StatCard number="50k+" label="Happy Clients" />
          <StatCard number="100+" label="Expert Therapists" />
          <StatCard number="30+" label="Luxury Awards" />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <SectionHeader
          title="Why Choose LuxeSpa"
          subtitle="Experience the difference of premium wellness care"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <FeatureCard
            icon={<Calendar className="h-8 w-8" />}
            title="Easy Booking"
            description="Schedule your appointments online with our intuitive booking system"
          />
          <FeatureCard
            icon={<Sparkle className="h-8 w-8" />}
            title="Premium Service"
            description="Experience luxury treatments from certified professionals"
          />
          <FeatureCard
            icon={<Clock className="h-8 w-8" />}
            title="Flexible Hours"
            description="Open 7 days a week with extended evening hours"
          />
          <FeatureCard
            icon={<Award className="h-8 w-8" />}
            title="Best in Class"
            description="Award-winning spa treatments and beauty services"
          />
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-primary-50 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Signature Treatments"
            subtitle="Indulge in our most sought-after services"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              image="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Royal Massage"
              description="A transformative journey combining Swedish and deep tissue techniques"
              price="from $189"
              duration="90 min"
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Diamond Facial"
              description="Advanced anti-aging treatment with diamond-infused products"
              price="from $249"
              duration="75 min"
            />
            <ServiceCard
              image="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Gold Body Ritual"
              description="Luxurious full-body treatment with 24k gold-infused products"
              price="from $299"
              duration="120 min"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <SectionHeader
          title="Client Experiences"
          subtitle="What our distinguished guests say about us"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <TestimonialCard
            quote="The most luxurious spa experience I've ever had. The attention to detail is unmatched."
            author="Emma Thompson"
            role="Fashion Designer"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          />
          <TestimonialCard
            quote="A sanctuary of peace and luxury. Every visit feels like a transformative journey."
            author="Michael Chen"
            role="Executive Director"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          />
          <TestimonialCard
            quote="The therapists are incredibly skilled. I've never felt more rejuvenated."
            author="Sophie Martinez"
            role="Wellness Coach"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          />
        </div>
      </section>

      {/* Press Section */}
      <section className="bg-primary-50 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Featured In"
            subtitle="Recognition from leading publications"
          />
          <div className="flex flex-wrap justify-center items-center gap-12 mt-12">
            <PressLogo name="Vogue" />
            <PressLogo name="Forbes" />
            <PressLogo name="Elle" />
            <PressLogo name="Tatler" />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 mb-24">
        <div className="bg-primary-900 rounded-2xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl text-white mb-4">
              Join Our Exclusive Circle
            </h2>
            <p className="text-primary-100 mb-8">
              Subscribe to receive luxury wellness tips, exclusive offers, and early access to special events.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full focus:ring-2 focus:ring-accent-500"
              />
              <button className="bg-accent-500 text-white px-8 py-3 rounded-full hover:bg-accent-600 transition duration-300 flex items-center">
                Subscribe <Mail className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center max-w-2xl mx-auto">
    <h2 className="font-display text-4xl mb-4 text-primary-800">{title}</h2>
    <p className="text-primary-600">{subtitle}</p>
  </div>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="text-center"
  >
    <div className="font-display text-4xl text-primary-800 mb-2">{number}</div>
    <div className="text-primary-600">{label}</div>
  </motion.div>
);

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-xl shadow-lg"
  >
    <div className="text-accent-500 mb-4">{icon}</div>
    <h3 className="font-display text-xl mb-2 text-primary-800">{title}</h3>
    <p className="text-primary-600">{description}</p>
  </motion.div>
);

const ServiceCard = ({
  image,
  title,
  description,
  price,
  duration,
}: {
  image: string;
  title: string;
  description: string;
  price: string;
  duration: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl overflow-hidden shadow-lg group"
  >
    <div className="relative">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition duration-300" />
    </div>
    <div className="p-8">
      <h3 className="font-display text-2xl mb-2 text-primary-800">{title}</h3>
      <p className="text-primary-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-accent-500 font-semibold block">{price}</span>
          <span className="text-sm text-primary-600">{duration}</span>
        </div>
        <button className="text-accent-500 hover:text-accent-600 font-medium flex items-center">
          Book Now <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  </motion.div>
);

const TestimonialCard = ({
  quote,
  author,
  role,
  image,
}: {
  quote: string;
  author: string;
  role: string;
  image: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-xl shadow-lg relative"
  >
    <Quote className="absolute top-4 right-4 h-8 w-8 text-accent-500/20" />
    <div className="flex items-center gap-4 mb-6">
      <img src={image} alt={author} className="w-16 h-16 rounded-full object-cover" />
      <div>
        <div className="font-display text-lg text-primary-800">{author}</div>
        <div className="text-primary-600">{role}</div>
      </div>
    </div>
    <p className="text-primary-600 italic">{quote}</p>
    <div className="flex gap-1 mt-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className="h-4 w-4 fill-current text-yellow-400" />
      ))}
    </div>
  </motion.div>
);

const PressLogo = ({ name }: { name: string }) => (
  <div className="text-primary-400 font-display text-2xl">{name}</div>
);

export default Home;