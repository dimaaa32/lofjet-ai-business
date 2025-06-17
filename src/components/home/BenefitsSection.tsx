import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Clock, Calendar } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-secondary-900 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 via-secondary-800 to-secondary-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--primary-500)_0%,_transparent_50%)] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--primary-400)_0%,_transparent_50%)] opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<MessageSquare className="h-12 w-12 text-primary-400" />}
            title="24/7 Customer Support"
            description="Provide instant answers to customer questions around the clock, without human intervention."
            stat="Save $1,000–$2,000/month on labor costs"
            delay={0}
          />
          
          <BenefitCard 
            icon={<Clock className="h-12 w-12 text-primary-400" />}
            title="Lead Capture"
            description="Engage website visitors with interactive conversations that convert into qualified leads and customers."
            stat="Boost conversions by 20–25%"
            delay={0.2}
          />
          
          <BenefitCard 
            icon={<Calendar className="h-12 w-12 text-primary-400" />}
            title="Appointment Setting"
            description="Let AI handle your calendar, booking meetings and following up with prospects."
            stat="Streamline scheduling effortlessly"
            delay={0.4}
          />
        </div>
        
        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <StatItem number="25%" text="Average Sales Increase" delay={0.1} />
          <StatItem number="40%" text="Higher Click-Through Rates" delay={0.3} />
          <StatItem number="80%" text="of Inquiries Automated" delay={0.5} />
        </div>
      </div>
    </section>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, stat, delay }) => {
  return (
    <motion.div 
      className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 rounded-xl p-8 shadow-lg hover:shadow-glow transition-all duration-300 text-center group hover:bg-secondary-800/70"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary-500/10 border border-primary-400/20 mb-6 group-hover:bg-primary-500/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      <div className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-4 rounded-lg inline-block font-semibold transition-all duration-300 shadow-glow hover:shadow-glow-lg">
        {stat}
      </div>
    </motion.div>
  );
};

interface StatItemProps {
  number: string;
  text: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ number, text, delay }) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 mb-2 group-hover:from-primary-300 group-hover:to-primary-500 transition-all duration-300">
        {number}
      </p>
      <p className="text-gray-300 text-lg">{text}</p>
    </motion.div>
  );
};

export default BenefitsSection;