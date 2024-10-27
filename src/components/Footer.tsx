import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Sparkles className="h-8 w-8" />
              <span className="font-display text-2xl">LuxeSpa</span>
            </div>
            <p className="text-primary-300">
              Elevate your beauty and wellness journey with our premium spa services.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/services/massage">Massage Therapy</FooterLink>
              <FooterLink to="/services/facial">Facial Treatments</FooterLink>
              <FooterLink to="/services/hair">Hair Styling</FooterLink>
              <FooterLink to="/services/nails">Nail Care</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/cookies">Cookie Policy</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-primary-400">
          <p>&copy; {new Date().getFullYear()} LuxeSpa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    className="text-primary-300 hover:text-white transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link
      to={to}
      className="text-primary-300 hover:text-white transition duration-300"
    >
      {children}
    </Link>
  </li>
);

export default Footer;