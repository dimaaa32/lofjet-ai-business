import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

// Enhanced Jet Logo Component for Footer
const JetLogoFooter = () => {
  return (
    <div className="flex items-center mb-4">

      
      <motion.span 
        className="font-display font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-cyan-400"
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

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-secondary-200 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <JetLogoFooter />
            <p className="text-secondary-300 mb-4">
              Automate the grind. Multiply the money. Unleash your 24/7 sales army.
            </p>
        
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <FooterLink to="/chatbots">Chatbots</FooterLink>
              <FooterLink to="/voice-agents">Voice Callers</FooterLink>
              <FooterLink to="/lead-generation">Lead Generation</FooterLink>
              <FooterLink to="/outreach">Outreach Engine</FooterLink>
              <FooterLink to="/websites">Websites</FooterLink>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <address className="not-italic text-secondary-300 space-y-2">
              <p>Email: info@loftjet.com</p>
              <p>Based in Ukraine, serving globally</p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-secondary-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} LOFJET. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-secondary-400 text-sm hover:text-primary-400 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-secondary-400 text-sm hover:text-primary-400 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-secondary-400 hover:text-primary-400 transition p-2 bg-secondary-800 rounded-full hover:bg-secondary-700"
      aria-label="Social media link"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-secondary-300 hover:text-primary-400 transition duration-300"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;