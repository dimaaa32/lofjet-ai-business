import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot, ChevronDown, Phone, Mail, Rocket, Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced Jet Logo Component
const JetLogo = ({ className = "h-12 w-12", textClassName = "text-2xl" }) => {
  return (
    <div className="flex items-center">
    <Plane className="h-8 w-8 text-primary-400" />
      <motion.span 
        className={`font-display font-bold ${textClassName} text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-cyan-400`}
        
        whileHover={{ 
          backgroundImage: "linear-gradient(to right, #00D4FF, #7B5CFF, #00D4FF)",
        }}
        transition={{ duration: 0.3 }}
      >
       
        LOFJET
      </motion.span>
      
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const serviceItems = [
    {
      to: "/services",
      icon: "🤖",
      title: "All Services",
      description: "Complete AI solution overview"
    },
    {
      to: "/chatbots",
      icon: "💬",
      title: "AI Chatbots",
      description: "24/7 sales & support automation"
    },
    {
      to: "/voice-agents",
      icon: "📞",
      title: "AI Voice Callers",
      description: "Human-like phone conversations"
    },
    {
      to: "/lead-generation",
      icon: "🎯",
      title: "Lead Generation",
      description: "Find & qualify prospects"
    },
    {
      to: "/outreach",
      icon: "📧",
      title: "Outreach Engine",
      description: "Personalized messaging at scale"
    },
    {
      to: "/websites",
      icon: "🌐",
      title: "AI Websites",
      description: "Conversion-optimized sites"
    }
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-[9999] transition-all duration-300 ${
          isScrolled 
            ? 'bg-secondary-800/95 backdrop-blur-md border-b border-secondary-700 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Enhanced Logo */}
            <Link to="/" className="z-50 relative">
              <JetLogo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink to="/" isScrolled={isScrolled}>Home</NavLink>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className={`font-medium transition-colors duration-300 flex items-center ${
                    location.pathname.includes('/services') || 
                    location.pathname.includes('/chatbots') || 
                    location.pathname.includes('/voice-agents') || 
                    location.pathname.includes('/lead-generation') || 
                    location.pathname.includes('/outreach') || 
                    location.pathname.includes('/websites')
                      ? 'text-primary-400'
                      : 'text-gray-300 hover:text-primary-400'
                  }`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                
                {/* Desktop Dropdown Menu */}
                <div 
                  className={`absolute top-full left-0 mt-2 w-72 bg-secondary-800/95 backdrop-blur-sm border border-secondary-700 rounded-xl shadow-lg transition-all duration-300 z-[10000] ${
                    isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    {serviceItems.map((item, index) => (
                      <DropdownLink 
                        key={index}
                        to={item.to} 
                        icon={item.icon} 
                        title={item.title} 
                        description={item.description} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <NavLink to="/contact" isScrolled={isScrolled}>Contact</NavLink>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link 
                to="/contact" 
                className="px-6 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-all duration-300 shadow-glow hover:shadow-glow-lg"
              >
                Book 15-Min Call
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden focus:outline-none z-50 relative p-2" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <motion.span
                  className={`absolute block h-0.5 w-6 bg-primary-400 transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}
                />
                <motion.span
                  className={`absolute block h-0.5 w-6 bg-primary-400 transform transition-all duration-300 top-3 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <motion.span
                  className={`absolute block h-0.5 w-6 bg-primary-400 transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-secondary-800/95 via-secondary-800/90 to-secondary-900/95 backdrop-blur-md border-l border-secondary-700/50 z-[9999] lg:hidden overflow-y-auto shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              {/* Header */}
              <div className="p-6 pt-20 border-b border-secondary-700/30">
                <JetLogo className="h-8 w-8" textClassName="text-xl" />
                <p className="text-sm text-gray-400 mt-2">
                  Your 24/7 AI Sales Army
                </p>
              </div>

              <div className="p-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-2">
                  <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
                    Home
                  </MobileNavLink>
                  
                  {/* Mobile Services Section */}
                  <div>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      onBlur={() => handleBlur('services')}
                      className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-300 hover:text-primary-400 transition-colors py-3 px-4 rounded-lg hover:bg-secondary-700/30"
                    >
                      <span className="flex items-center">
                        Services
                      </span>
                      <ChevronDown 
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                          isMobileServicesOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-2 space-y-3">
                            {serviceItems.map((item, index) => (
                              <MobileServiceLink
                                key={index}
                                to={item.to}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                onClick={() => setIsOpen(false)}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                  </MobileNavLink>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 space-y-4">
                  <Link 
                    to="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white text-center font-bold transition-all duration-300 shadow-lg hover:shadow-primary-500/25 transform hover:scale-105"
                  >
                    <Phone className="inline h-5 w-5 mr-3" />
                    Schedule a Demo
                  </Link>
                  
                  <a 
                    href="mailto:info@loftjet.com"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-6 py-4 rounded-xl border-2 border-primary-400/50 bg-primary-400/10 text-primary-400 text-center font-bold hover:bg-primary-400/20 hover:border-primary-400 transition-all duration-300"
                  >
                    <Mail className="inline h-5 w-5 mr-3" />
                    Email Us
                  </a>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-secondary-700/30">
                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-3">Ready to transform your business?</p>
                    <div className="space-y-2">
                      <p className="text-primary-400 font-medium text-sm">info@loftjet.com</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Footer */}
                <div className="mt-8 pt-6 border-t border-secondary-700/30">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">
                      © 2025 LOFJET. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, isScrolled }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`font-medium transition-colors duration-300 ${
        isActive 
          ? 'text-primary-400'
          : 'text-gray-300 hover:text-primary-400'
      }`}
    >
      {children}
    </Link>
  );
};

interface DropdownLinkProps {
  to: string;
  icon: string;
  title: string;
  description: string;
}

const DropdownLink: React.FC<DropdownLinkProps> = ({ to, icon, title, description }) => {
  return (
    <Link 
      to={to}
      className="flex items-start px-4 py-3 hover:bg-secondary-700/50 transition-colors duration-200"
    >
      <span className="text-xl mr-3 mt-0.5">{icon}</span>
      <div>
        <div className="font-medium text-white">{title}</div>
        <div className="text-sm text-gray-400">{description}</div>
      </div>
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`block text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
        isActive 
          ? 'text-primary-400 bg-primary-400/10 border border-primary-400/20' 
          : 'text-gray-300 hover:text-primary-400 hover:bg-secondary-700/30'
      }`}
    >
      {children}
    </Link>
  );
};

interface MobileServiceLinkProps {
  to: string;
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}

const MobileServiceLink: React.FC<MobileServiceLinkProps> = ({ 
  to, icon, title, description, onClick 
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to}
      onClick={onClick}
      className={`block p-4 rounded-xl border transition-all duration-200 ${
        isActive 
          ? 'border-primary-400 bg-primary-400/10' 
          : 'border-secondary-600/50 hover:border-primary-400/50 hover:bg-secondary-700/30'
      }`}
    >
      <div className="flex items-start">
        <span className="text-lg mr-3 mt-0.5">{icon}</span>
        <div>
          <div className={`font-medium ${isActive ? 'text-primary-400' : 'text-white'}`}>
            {title}
          </div>
          <div className="text-sm text-gray-400 mt-1 leading-relaxed">{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default Navbar;