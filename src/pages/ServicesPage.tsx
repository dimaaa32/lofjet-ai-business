import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Phone, 
  Target, 
  Mail, 
  Monitor, 
  Bot, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Shield, 
  Clock,
  Users,
  DollarSign,
  CheckCircle,
  Play,
  Eye,
  Calendar,
  Globe,
  BarChart3,
  Rocket,
  Award,
  MousePointer,
  Headphones,
  Building,
  GraduationCap,
  Briefcase,
  ShoppingCart
} from 'lucide-react';

// Enhanced Jet Logo Component for Services Page
const JetLogoServices = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <Award className="h-12 w-12 text-primary-400 mr-4" />
      <motion.span
        className="font-display font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#845AFF] to-purple-400"
        whileHover={{ 
          backgroundImage: "linear-gradient(to right, #00D4FF, #7B5CFF, #00D4FF)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        SERVICES
      </motion.span>
    </div>
  );
};
const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0B0B1D] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-purple-800/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#845AFF_0%,_transparent_50%)] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#845AFF_0%,_transparent_50%)] opacity-10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="flex items-center justify-center h-full">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-purple-400 rounded-full mx-2"
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <JetLogoServices />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Sales on Autopilot, While You're Out Scaling
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-purple-100 mb-12 max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
             From outreach to closed deals, we build your full stack.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                to="/contact" 
                className="group px-10 py-5 rounded-xl bg-[#845AFF] hover:bg-purple-600 text-white font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 flex items-center"
              >
                <Sparkles className="h-7 w-7 mr-3 group-hover:animate-pulse" />
                Build My Automated Funnel 
                <ArrowRight className="h-7 w-7 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              
           
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Services Section */}
      <section className="py-24 bg-[#0B0B1D] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-800/10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              The 5 Core AI Services
            </h2>
            <p className="text-2xl text-purple-100 max-w-4xl mx-auto">
              Choose your profit machine. Each comes with our revenue guarantee.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* AI Chatbots */}
            <CoreServiceCard 
              icon={<MessageSquare className="h-12 w-12 text-[#845AFF]" />}
              title="AI Chatbots"
              subtitle="24/7 Smart Assistants That Close Sales"
              description="Instant replies, order help, and upsells - all handled by bots that sound human."
              features={[
                "Handle customer service automatically",
                "Recommend products with AI",
                "Reduce cart abandonment by 70%",
                "Save $1K–$2K/month in labor costs"
              ]}
              cta="See AI Chatbots in Action"
              ctaIcon={<Eye className="h-5 w-5" />}
              link="/chatbots"
              highlight="Most Popular"
              delay={0}
            />
            
            {/* AI Voice Callers */}
            <CoreServiceCard 
              icon={<Phone className="h-12 w-12 text-green-400" />}
              title="AI Voice Callers"
              subtitle="Automated Voice Agents That Book Calls"
              description="Imagine 10 sales reps calling leads, qualifying them, and answering FAQs - nonstop."
              features={[
                "Book appointments automatically",
                "Handle 80% of inquiries without staff",
                "Natural conversation flow",
                "Follow up with warm leads"
              ]}
              cta="Explore AI Voice Callers"
              ctaIcon={<Headphones className="h-5 w-5" />}
              link="/voice-agents"
              delay={0.1}
            />
            
            {/* AI Lead Generation */}
            <CoreServiceCard 
              icon={<Target className="h-12 w-12 text-blue-400" />}
              title="AI Lead Generation"
              subtitle="Thousands of Qualified Leads Delivered"
              description="No more cold lists. We bring warm leads to your inbox - ready to convert."
              features={[
                "LinkedIn + Google Maps scraping",
                "Qualified lead verification",
                "Scale outreach 10x with precision",
                "Custom targeting criteria"
              ]}
              cta="Get Lead Generation"
              ctaIcon={<Target className="h-5 w-5" />}
              link="/lead-generation"
              delay={0.2}
            />
            
            {/* Personalized Outreach */}
            <CoreServiceCard 
              icon={<Mail className="h-12 w-12 text-purple-400" />}
              title="Personalized Outreach"
              subtitle="Emails & DMs That Feel Handwritten"
              description="We use AI to craft the perfect message for every lead, so replies skyrocket."
              features={[
                "1,000s of personalized messages",
                "Boost response rates by 40%+",
                "Multi-channel outreach",
                "Smart follow-up sequences"
              ]}
              cta="Explore AI Outreach Engine"
              ctaIcon={<Mail className="h-5 w-5" />}
              link="/outreach"
              delay={0.3}
            />
            
            {/* Website Creation */}
            <CoreServiceCard 
              icon={<Monitor className="h-12 w-12 text-orange-400" />}
              title="Website Creation"
              subtitle="High-Converting Sites Built in Days"
              description="Every pixel. Every CTA. Every scroll.
Built with buyer psychology and revenue in mind."
              features={[
                "Go live 5x faster with AI tech",
                "Mobile-first responsive design",
                "Conversion-optimized layouts",
                "SEO-ready from day one"
              ]}
              cta="Explore Website Creation "
              ctaIcon={<Globe className="h-5 w-5" />}
              link="/websites"
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
      {/* Numbers That Matter Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-[#0B0B1D]">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Forget Alarms, Wake Up to Deposits
            </h2>
            
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <NumberCard 
              number="72"
              unit="Hours"
              description="to launch a full, revenue-ready website"
              delay={0}
            />
            
            <NumberCard 
              number="60%"
              unit="More"
              description="leads via AI-powered lead scraping"
              delay={0.1}
            />
            
            <NumberCard 
              number="25-40%"
              unit="Higher"
              description="conversion from personalized outreach"
              delay={0.2}
            />
            
            <NumberCard 
              number="35%"
              unit="Higher"
              description="engagement with chatbots + voice calls"
              delay={0.3}
            />
            
            <NumberCard 
              number="5-50%"
              unit="Revenue"
              description="growth per campaign"
              delay={0.4}
            />
          </div>
        </div>
      </section>
      
      {/* How It All Connects Section */}
      <section className="py-24 bg-[#0B0B1D]">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It All Connects
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              We do the work. Bots do the selling. You collect the cash.
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <FlowStep 
                number="1"
                title="We Hop on the Call"
                description="We'll find the revenue leaks, flip the right switches, and hand you a custom AI-powered attack plan."
                icon={<Monitor className="h-8 w-8 text-orange-400" />}
                delay={0}
              />
              
              <FlowStep 
                number="2"
                title="We Map the Plan"
                description="You get a crystal-clear attack strategy and step-by-step execution plan tailored to your business."
                icon={<Bot className="h-8 w-8 text-[#845AFF]" />}
                delay={0.1}
              />
              
              <FlowStep 
                number="3"
                title="We Execute Ruthlessly"
                description="Strategy's great. Results are better. We build, automate, launch - and let the results punch first."
                icon={<Target className="h-8 w-8 text-blue-400" />}
                delay={0.2}
              />
              
              <FlowStep 
                number="4"
                title="You Wake Up to Calls, Clients, and Sales"
                description="New payments. New leads. New problems (good ones).
You don't chase clients. They show up."
                icon={<DollarSign className="h-8 w-8 text-yellow-400" />}
                delay={0.3}
              />
            </div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
               
                
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
    
      
      {/* Final CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-[#845AFF] to-purple-600 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              You Get the Wins
            </motion.h2>
            
            <motion.p 
              className="text-2xl md:text-3xl mb-16 max-w-4xl mx-auto leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We handle the chaos.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link 
                to="/contact" 
                className="group px-16 py-6 rounded-xl bg-white text-[#845AFF] hover:bg-gray-100 font-bold text-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center"
              >
                <Sparkles className="h-8 w-8 mr-4 group-hover:animate-pulse" />
                Get Free AI Strategy
                <ArrowRight className="h-8 w-8 ml-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
           <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Shield className="h-10 w-10 mx-auto mb-3" />
                <div className="text-lg font-bold mb-1">30-Day</div>
                <div className="text-sm opacity-80">Money-Back Guarantee</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Clock className="h-10 w-10 mx-auto mb-3" />
                <div className="text-lg font-bold mb-1">1-2 Weeks</div>
                <div className="text-sm opacity-80">To Launch</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

interface ServiceIconProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: number;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ icon, title, subtitle, delay }) => {
  return (
    <motion.div 
      className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 text-center hover:bg-gray-800/50 hover:border-[#845AFF]/30 transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-gray-700/30 mb-4 group-hover:bg-gray-700/50 transition-all duration-300">
        {icon}
      </div>
      <h4 className="font-bold text-white mb-1 group-hover:text-[#845AFF] transition-colors">{title}</h4>
      <p className="text-purple-300 text-sm">{subtitle}</p>
    </motion.div>
  );
};

interface CoreServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  ctaIcon: React.ReactNode;
  link: string;
  highlight?: string;
  delay: number;
}

const CoreServiceCard: React.FC<CoreServiceCardProps> = ({ 
  icon, title, subtitle, description, features, cta, ctaIcon, link, highlight, delay 
}) => {
  return (
    <motion.div 
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:bg-gray-900/70 hover:border-[#845AFF]/30 transition-all duration-500 flex flex-col h-full overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      {/* Highlight Badge */}
      {highlight && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-[#845AFF] to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
          {highlight}
        </div>
      )}
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gray-800/50 border border-gray-700/50 mb-6 group-hover:bg-gray-800/70 transition-all duration-300">
          {icon}
        </div>
        
        {/* Title & Subtitle */}
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#845AFF] transition-colors">
          {title}
        </h3>
        <p className="text-purple-400 font-semibold mb-4">{subtitle}</p>
        
        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
        
        {/* Features */}
        <div className="mb-8 flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#845AFF] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* CTA Button */}
        <Link 
          to={link} 
          className="group/btn relative w-full px-6 py-4 rounded-xl bg-[#845AFF] hover:bg-purple-600 text-white font-bold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 flex items-center justify-center overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            {ctaIcon}
            <span className="mx-3">{cta}</span>
            <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

interface NumberCardProps {
  number: string;
  unit: string;
  description: string;
  delay: number;
}

const NumberCard: React.FC<NumberCardProps> = ({ number, unit, description, delay }) => {
  return (
    <motion.div 
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-gray-800/70 hover:border-[#845AFF]/30 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#845AFF] to-purple-400 mb-2">
        {number}
      </div>
      <div className="text-xl font-bold text-white mb-2">{unit}</div>
      <p className="text-purple-200 text-sm">{description}</p>
    </motion.div>
  );
};

interface FlowStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FlowStep: React.FC<FlowStepProps> = ({ number, title, description, icon, delay }) => {
  return (
    <motion.div 
      className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:bg-gray-900/70 hover:border-[#845AFF]/30 transition-all duration-300 group text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Step Number */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-[#845AFF] to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
        {number}
      </div>
      
      {/* Icon */}
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-gray-800/50 mb-6 mt-4 group-hover:bg-gray-800/70 transition-all duration-300">
        {icon}
      </div>
      
      {/* Content */}
      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#845AFF] transition-colors">
        {title}
      </h4>
      <p className="text-purple-200 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

interface WhoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const WhoCard: React.FC<WhoCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:bg-gray-900/70 hover:border-[#845AFF]/30 transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-gray-800/50 mb-6 group-hover:bg-gray-800/70 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#845AFF] transition-colors">
        {title}
      </h3>
      <p className="text-purple-200 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServicesPage;
