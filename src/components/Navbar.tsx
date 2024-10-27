import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Sparkles, UserCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/appointments');
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <Sparkles className="h-8 w-8 text-primary-600" />
            <span className="font-display text-2xl text-primary-800">LuxeSpa</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/appointments">Appointments</NavLink>
            <NavLink to="/packages">Packages</NavLink>
            <NavLink to="/about">About</NavLink>
            <button 
              onClick={handleBookNow}
              className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition duration-300"
            >
              Book Now
            </button>
            <Link to="/profile" className="text-primary-600 hover:text-primary-800">
              <UserCircle className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/services" onClick={() => setIsOpen(false)}>
                Services
              </MobileNavLink>
              <MobileNavLink to="/appointments" onClick={() => setIsOpen(false)}>
                Appointments
              </MobileNavLink>
              <MobileNavLink to="/packages" onClick={() => setIsOpen(false)}>
                Packages
              </MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>
                About
              </MobileNavLink>
              <button 
                onClick={handleBookNow}
                className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition duration-300 w-full"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-primary-800 hover:text-primary-600 font-medium transition duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-primary-800 hover:text-primary-600 font-medium block px-4 py-2 hover:bg-primary-50 rounded-lg transition duration-300"
  >
    {children}
  </Link>
);

export default Navbar;