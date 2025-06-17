import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Target, Mail, Monitor, TrendingUp, Zap, ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A1F] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-800/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#8C5EFF_0%,_transparent_50%)] opacity-5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#8C5EFF_0%,_transparent_50%)] opacity-5"></div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            AI Revenue Machines
          </motion.h2>
          <motion.p 
            className="text-xl text-purple-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose your profit-boosting AI solution. Each comes with our 30-day revenue guarantee.
          </motion.p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          {/* AI Chatbots */}
          <ServiceCard 
            icon={<MessageSquare className="h-8 w-8 text-purple-400" />}
            title="AI Chatbots"
            description="Handle 24/7 customer service, recommend products, and personalize shopping with real-time quizzes."
            cta="Launch Smart Support"
            stat="Save $1K–$2K/month in labor costs"
            link="/chatbots"
            delay={0}
          />
          
          {/* AI Voice Callers */}
          <ServiceCard 
            icon={<Phone className="h-8 w-8 text-purple-400" />}
            title="AI Voice Callers"
            description="Book calls, answer questions, and follow up via real phone conversations—fully automated."
            cta="Activate Voice Agent"
            stat="80% of inquiries handled without human staff"
            link="/voice-agents"
            delay={0.1}
          />
          
          {/* AI Lead Generation */}
          <ServiceCard 
            icon={<Target className="h-8 w-8 text-purple-400" />}
            title="AI Lead Generation"
            description="Find thousands of new leads via LinkedIn, Google Maps, & more—targeted, clean, and qualified."
            cta="Get My Leads Now"
            stat="Scale outreach 10x with precision data"
            link="/lead-generation"
            delay={0.2}
          />
          
          {/* Personalized Outreach */}
          <ServiceCard 
            icon={<Mail className="h-8 w-8 text-purple-400" />}
            title="Personalized Outreach"
            description="Blast out 1,000s of personalized emails & DMs that feel 1:1 and get replies."
            cta="Run Outreach Engine"
            stat="Boost response rates by 40%+"
            link="/outreach"
            delay={0.3}
          />
          
          {/* AI-Optimized Websites */}
          <ServiceCard 
            icon={<Monitor className="h-8 w-8 text-purple-400" />}
            title="AI-Optimized Websites"
            description="Fast, clean, mobile-ready websites built to convert—launched in days, not weeks."
            cta="Build My Site Fast"
            stat="Go live 5x faster with AI tech"
            link="/websites"
            delay={0.4}
          />
        </div>
        
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <StatItem number="25%" text="Average Sales Increase" />
          <StatItem number="40%" text="Higher Click-Through Rates" />
          <StatItem number="80%" text="Of Inquiries Fully Automated" />
        </motion.div>
        
        {/* Final CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#8C5EFF] to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let's Build Your AI System
            </h3>
            <p className="text-purple-100 mb-6 text-lg">
              Ready to transform your business? Get a free consultation and custom AI strategy.
            </p>
            <Link 
              to="/contact" 
              className="group inline-flex items-center px-8 py-4 bg-white text-[#8C5EFF] font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Zap className="h-6 w-6 mr-3 group-hover:animate-pulse" />
              Schedule Free Demo
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  stat: string;
  link: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, cta, stat, link, delay }) => {
  return (
    <motion.div 
      className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:bg-gray-900/70 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-2 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-purple-500/10 border border-purple-400/20 mb-6 group-hover:bg-purple-500/20 transition-all duration-300">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>
      
      {/* CTA Button */}
      <Link 
        to={link} 
        className="block w-full px-4 py-3 bg-[#8C5EFF] hover:bg-purple-600 text-white font-semibold text-center rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 mb-4"
      >
        {cta}
      </Link>
      
      {/* Stat */}
      <div className="text-center">
        <p className="text-purple-400 font-semibold text-sm">
          {stat}
        </p>
      </div>
    </motion.div>
  );
};

interface StatItemProps {
  number: string;
  text: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, text }) => {
  return (
    <div className="group">
      <p className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
        {number}
      </p>
      <p className="text-purple-200 text-lg font-medium">{text}</p>
    </div>
  );
};

export default ServicesSection;