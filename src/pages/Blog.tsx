import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const blogPosts = [
  {
    title: 'The Benefits of Regular Massage Therapy',
    excerpt: 'Discover how regular massage sessions can improve your physical and mental well-being.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Wellness',
  },
  {
    title: 'Skincare Secrets: Professional Tips for Radiant Skin',
    excerpt: 'Learn expert skincare tips and tricks from our experienced estheticians.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: 'Emily Davis',
    date: '2024-03-10',
    readTime: '7 min read',
    category: 'Beauty',
  },
  {
    title: 'The Art of Relaxation: Creating Your Perfect Spa Day',
    excerpt: 'Tips for planning the ultimate spa day experience at home or at our luxury spa.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: 'Michael Chen',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Lifestyle',
  },
];

const Blog = () => {
  return (
    <div>
      <PageHeader
        title="LuxeSpa Blog"
        description="Insights, tips, and news from the world of wellness and beauty."
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          <div className="mt-16">
            <h2 className="font-display text-3xl mb-8 text-primary-800">Categories</h2>
            <div className="flex flex-wrap gap-4">
              <CategoryTag name="All" count={12} active />
              <CategoryTag name="Wellness" count={5} />
              <CategoryTag name="Beauty" count={4} />
              <CategoryTag name="Lifestyle" count={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  category,
}: {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}) => (
  <motion.article
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl overflow-hidden shadow-lg"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="text-accent-500 text-sm font-medium mb-2">{category}</div>
      <h3 className="font-display text-xl mb-2 text-primary-800">{title}</h3>
      <p className="text-primary-600 mb-4">{excerpt}</p>
      
      <div className="flex items-center text-sm text-primary-600">
        <div className="flex items-center mr-4">
          <User className="h-4 w-4 mr-1" />
          {author}
        </div>
        <div className="flex items-center mr-4">
          <Calendar className="h-4 w-4 mr-1" />
          {new Date(date).toLocaleDateString()}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          {readTime}
        </div>
      </div>
    </div>
  </motion.article>
);

const CategoryTag = ({ name, count, active = false }: { name: string; count: number; active?: boolean }) => (
  <button
    className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
      active
        ? 'bg-accent-500 text-white'
        : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
    }`}
  >
    {name} ({count})
  </button>
);

export default Blog;