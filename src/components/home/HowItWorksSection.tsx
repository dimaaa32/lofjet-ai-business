import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Phone, 
  Target, 
  Mail, 
  Monitor, 
  ArrowRight, 
  Zap, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  Sparkles
} from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--primary-500)_0%,_transparent_50%)] opacity-15"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--primary-400)_0%,_transparent_50%)] opacity-20"></div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl"
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
        className="absolute bottom-20 right-10 w-40 h-40 bg-primary-400/10 rounded-full blur-3xl"
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
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="h-8 w-8 text-primary-400 mr-3" />
            <span className="text-primary-400 font-bold text-lg uppercase tracking-wider">How LOFJET Works</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-primary-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Without Hiring Anyone New
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We plug in the AI systems your business actually needs: no bloated software, 
            no tech headaches, no useless dashboards.
          </motion.p>
        </div>
        
        {/* How It Works Steps */}
        <div className="mb-20">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Here's how the full stack works together to drive growth:
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <ProcessStep 
              number="1"
              icon={<MessageSquare className="h-8 w-8 text-primary-400" />}
              title="AI Chatbots"
              description="Answer customer questions, suggest products, and guide sales 24/7."
              delay={0}
            />
            
            <ProcessStep 
              number="2"
              icon={<Phone className="h-8 w-8 text-primary-400" />}
              title="Voice Callers"
              description="Follow up, book calls, and close leads while your team sleeps."
              delay={0.1}
            />
            
            <ProcessStep 
              number="3"
              icon={<Target className="h-8 w-8 text-primary-400" />}
              title="Lead Gen Bots"
              description="Find your ideal customers across Google Maps, LinkedIn, and the web."
              delay={0.2}
            />
            
            <ProcessStep 
              number="4"
              icon={<Mail className="h-8 w-8 text-primary-400" />}
              title="Outreach Engines"
              description="Hit inboxes and DMs with personalized messages that get replies."
              delay={0.3}
            />
            
            <ProcessStep 
              number="5"
              icon={<Monitor className="h-8 w-8 text-primary-400" />}
              title="Your Website"
              description="We rebuild it to convert, not just 'look pretty.'"
              delay={0.4}
            />
            
            <motion.div 
              className="bg-gradient-to-br from-primary-500/20 to-primary-600/20 backdrop-blur-sm border border-primary-400/30 rounded-2xl p-8 text-center flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Sparkles className="h-12 w-12 text-primary-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">No More Scattered Tools</h4>
              <p className="text-primary-200 leading-relaxed">
                Just one plug-and-profit system that scales with you.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Real Results Section */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🧾 Real Results, Zero Risk
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <TestimonialCard 
              quote="We booked 80+ calls last month and cut 2 support agents. I wish we found LOFTJET sooner."
              author="Daria"
              role="Perfume Brand Owner"
              delay={0}
            />
            
            <TestimonialCard 
              quote="Our website launch + chatbot combo boosted conversions by 32% in 21 days."
              author="Julius"
              role="Skincare Ecom Store"
              delay={0.1}
            />
            
            <TestimonialCard 
              quote="Voice agents followed up faster than any rep I've ever hired."
              author="Tony"
              role="CEO, Boutique Agency"
              delay={0.2}
            />
          </div>
        </div>
        
        {/* Why Founders Use LOFTJET */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ✅ Why Founders Like You Use LOFTJET:
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard 
              icon={<DollarSign className="h-8 w-8 text-green-400" />}
              title="Save $1,000–$2,000/month"
              subtitle="on payroll"
              delay={0}
            />
            
            <BenefitCard 
              icon={<TrendingUp className="h-8 w-8 text-blue-400" />}
              title="Close 10x more leads"
              subtitle="with automated follow-ups"
              delay={0.1}
            />
            
            <BenefitCard 
              icon={<Zap className="h-8 w-8 text-yellow-400" />}
              title="Launch new sites 5x faster"
              subtitle="with built-in CRO"
              delay={0.2}
            />
            
            <BenefitCard 
              icon={<Shield className="h-8 w-8 text-primary-400" />}
              title="Get results in 30 days"
              subtitle="or your money back"
              delay={0.3}
            />
          </div>
        </div>
        
        {/* Who We Help */}
        <motion.div 
          className="bg-gradient-to-r from-secondary-800/50 to-primary-800/50 backdrop-blur-sm border border-primary-400/20 rounded-3xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <Users className="h-12 w-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">💼 Who We Help:</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">Ecom Stores</h4>
                <p className="text-primary-200">selling perfumes, skincare, wellness, or fashion</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">Marketplace Businesses</h4>
                <p className="text-primary-200">drowning in support tickets</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">Agency Owners</h4>
                <p className="text-primary-200">scaling high-ticket offers</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">Founders</h4>
                <p className="text-primary-200">who want fewer tools & more sales</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Final CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ⚡ Ready to Scale Without the Chaos?
          </h3>
          <p className="text-xl text-primary-200 mb-10 max-w-3xl mx-auto">
            We'll show you exactly what to automate first - FREE.<br />
            <span className="text-primary-300">(No pressure. No fluff. Just a real plan you can use.)</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="group px-10 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-lg transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:scale-105 flex items-center"
            >
              <Sparkles className="h-6 w-6 mr-3 group-hover:animate-pulse" />
              Claim Your Free AI Strategy
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <span className="text-primary-300 font-medium">or</span>
            
            <Link 
              to="/contact" 
              className="group px-10 py-4 rounded-xl border-2 border-primary-400 text-primary-400 hover:bg-primary-400/10 transition-all duration-300 font-bold text-lg flex items-center"
            >
              <Clock className="h-6 w-6 mr-3" />
              Schedule Your Demo Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ProcessStepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, icon, title, description, delay }) => {
  return (
    <motion.div 
      className="relative bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8 hover:bg-secondary-800/70 hover:border-primary-400/30 transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Step Number */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
        {number}
      </div>
      
      {/* Icon */}
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-primary-500/10 border border-primary-400/20 mb-6 group-hover:bg-primary-500/20 transition-all duration-300">
        {icon}
      </div>
      
      {/* Content */}
      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
        {title}
      </h4>
      <p className="text-primary-200 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, delay }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-secondary-800/60 to-primary-800/40 backdrop-blur-sm border border-primary-400/20 rounded-2xl p-8 hover:border-primary-400/40 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-center mb-4">
        <div className="text-2xl mr-2">💥</div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
      
      <blockquote className="text-white font-medium mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-3">
          <span className="text-primary-400 font-bold text-lg">{author[0]}</span>
        </div>
        <div>
          <div className="font-bold text-white">— {author}</div>
          <div className="text-primary-300 text-sm">{role}</div>
        </div>
      </div>
    </motion.div>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, subtitle, delay }) => {
  return (
    <motion.div 
      className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-6 text-center hover:bg-secondary-800/70 hover:border-primary-400/30 transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-secondary-700/50 mb-4 group-hover:bg-secondary-700/70 transition-all duration-300">
        {icon}
      </div>
      <h4 className="font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
        {title}
      </h4>
      <p className="text-primary-200 text-sm">{subtitle}</p>
    </motion.div>
  );
};

export default HowItWorksSection;