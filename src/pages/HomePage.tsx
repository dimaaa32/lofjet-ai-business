import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Shield, 
  TrendingUp, 
  CheckCircle,
  MessageSquare,
  Phone,
  Target,
  Mail,
  Monitor,
  Bot,
  Users,
  DollarSign,
  Clock,
  Award,
  Play,
  Eye,
  Calendar,
  Globe,
  BarChart3,
  Rocket,
  Building,
  ShoppingCart,
  GraduationCap,
  Briefcase,
  Heart,
  MousePointer,
  Headphones,
  Send,
  Database,
  Mic,
} from 'lucide-react';

const HomePage = () => {
  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#0A0A1F] via-[#1A1A2E] to-[#16213E] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#845AFF]/30 via-transparent to-[#00D4FF]/20"></div>
          <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_#845AFF_0%,_transparent_50%)] opacity-20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_#00D4FF_0%,_transparent_50%)] opacity-15"></div>
          
          {/* Animated floating orbs */}
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2], x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          
          {/* Particle system */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], y: [0, -100, 0] }}
                transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 5, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>

        <div className="container-custom relative z-10 h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left pt-20 lg:pt-0"
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] mb-6 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-300">
                  Your 24/7
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 relative">
                  Sales Engine
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, delay: 1 }}
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 leading-relaxed px-4 lg:px-0 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100">
                  Fast growth. Smooth scaling. Zero turbulence.
                </span>
              </motion.p>
      
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 lg:gap-6 px-4 lg:px-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Link 
                  to="/contact"
                  className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#845AFF] via-purple-600 to-blue-600 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-500 text-white font-bold text-lg sm:text-xl transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center">
                    <motion.div className="mr-3"><Sparkles className="h-6 w-6 sm:h-7 sm:w-7" /></motion.div>
                    <span className="whitespace-nowrap">Get My Free Strategy & Demo</span>
                    <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Beautiful AI Visualization */}
            {/* Desktop Version - Keep unchanged */}
            <motion.div
              className="relative px-4 lg:px-0 mt-0 lg:mt-0 hidden lg:block"
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ position: 'relative', minHeight: '2000px', height: '2250px', overflow: 'visible' }}
            >
              <div className="relative w-full h-full">
                <motion.div
                  className="relative w-full mr-8"
                  animate={{ rotateY: [0, 5, -5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ height: '2300px' }}
                >
                  <img 
                    src="/images/1.png"
                    alt="AI Revenue Engine Visualization"
                    style={{ width: '100%', height: '2400px', objectFit: 'contain', objectPosition: 'center' }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Mobile Version - New optimized layout */}
            <motion.div
              
              className="relative px-4 mt-8 block lg:hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative w-full max-w-sm mx-auto">
                {/* Enhanced Mobile Image Container */}
                <motion.div
                  className="relative w-full h-80 mx-auto overflow-hidden rounded-3xl"
                  animate={{
                    rotateY: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl "
                    style={{
                      background: 'linear-gradient(45deg, #845AFF, #00D4FF, #845AFF, #7C3AED)',
                      backgroundSize: '400% 400%',
                      padding: '2px',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-full h-full rounded-3xl bg-gradient-to-r from-[#845AFF] via-purple-900 to-blue-800 overflow-hidden">
                      {/* Main Image with Effects */}
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src="/images/2.png"
                          alt="AI Revenue Engine Visualization"
                          className="w-full h-full object-cover object-center"
                          style={{ 
                            objectPosition: 'center center',
                            objectFit: 'cover'
                          }}
                        />
                        
                        {/* Overlay Effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 via-transparent to-transparent"></div>

                        {/* Scanning Line Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent h-6"
                          animate={{
                            y: ['-1.5rem', 'calc(100% + 1.5rem)'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 2
                          }}
                        />

                        {/* Holographic Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 3
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Enhanced Background Glow Effect for Mobile */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-blue-500/15 to-cyan-500/15 rounded-full blur-2xl scale-125 -z-10"></div>
                
                {/* Pulsing Ring Effect for Mobile */}
                <motion.div
                  className="absolute inset-0 border border-purple-400/20 rounded-full"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results That Sell Section */}
      <section id="results" className="py-20 bg-gradient-to-r from-gray-900 to-[#0A0A1F]">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
              Replace Your Team With a Stack That Sells
            </h2>
            <p className="text-2xl font-bold text-[#845AFF] mb-4 leading-[1.2]">
              You win or we work for free. Simple math.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <ResultCard number="+25%" title="Average Sales Increase" delay={0} />
            <ResultCard number="+38%" title="Click-Through Rates" delay={0.1} />
            <ResultCard number="+32%" title="More Leads with Our Stack" delay={0.2} />
            <ResultCard number="89%" title="of Inquiries Automated" delay={0.3} />
            <ResultCard number="30 Days" title="or Your Money Back" delay={0.4} />
          </div>
        </div>
      </section>

      {/* Pick Your AI Machine Section */}
      <section className="py-24 bg-[#0A0A1F] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-800/10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-[1.1]">
              Pick Your Profit Machine
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <AIServiceCard 
              icon={<MessageSquare className="h-12 w-12 text-[#845AFF]" />}
              title="AI Chatbots"
              description="Always-on bots that sell, support, and close - without sounding like robots."
              cta="Launch Smart Chatbot"
              link="/chatbots"
              delay={0}
            />
            <AIServiceCard 
              icon={<Phone className="h-12 w-12 text-green-400" />}
              title="AI Voice Callers"
              description="Voice bots that sell while you sleep. Qualify. Follow up. Book. Repeat."
              cta="Activate Voice Agent"
              link="/voice-agents"
              delay={0.1}
            />
            <AIServiceCard 
              icon={<Target className="h-12 w-12 text-blue-400" />}
              title="AI Lead Generation"
              description="AI scrapes. We clean. You close. Only real leads, no time-wasters."
              cta="Get My Leads"
              link="/lead-generation"
              delay={0.2}
            />
            <AIServiceCard 
              icon={<Mail className="h-12 w-12 text-purple-400" />}
              title="Personalized Outreach"
              description="Personalized at scale. Thousands of emails that break through noise and close businesses."
              cta="Start Outreach"
              link="/outreach"
              delay={0.3}
            />
            <AIServiceCard 
              icon={<Monitor className="h-12 w-12 text-orange-400" />}
              title="Website Creation"
              description="Built to close, not just look pretty. Sales-driven sites launched 5x faster."
              cta="Build My Site"
              link="/websites"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Why Founders Choose LOFTJET Section */}
      <section className="py-20 bg-[#0A0A1F]">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
              Why Our Clients Don't Wake Up Stressed Anymore
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <BenefitCard icon={<DollarSign className="h-8 w-8 text-green-400" />} title="Save $1K–$2K/month on payroll" delay={0} />
            <BenefitCard icon={<TrendingUp className="h-8 w-8 text-blue-400" />} title="Close 2x more leads without hiring" delay={0.1} />
            <BenefitCard icon={<Zap className="h-8 w-8 text-yellow-400" />} title="Launch in days, not months" delay={0.2} />
            <BenefitCard icon={<Shield className="h-8 w-8 text-purple-400" />} title="Plug-and-play tools - no devs headaches" delay={0.3} />
            <BenefitCard icon={<Award className="h-8 w-8 text-orange-400" />} title="Results in 30 days - or full refund" delay={0.4} />
            <BenefitCard icon={<Heart className="h-8 w-8 text-pink-400" />} title="Personalized onboarding and strategy" delay={0.5} />
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-[#0A0A1F] to-gray-900">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
              Who This Is For
            </h2>
            <p className="text-2xl font-bold text-[#845AFF] mb-4 leading-[1.2]">
              Online sellers tired of juggling tools, leads, and follow-ups - this is your unfair advantage.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WhoCard icon="👕" title="Ecom Brands" description="perfume, skincare, wellness, fashion" delay={0} />
            <WhoCard icon="📦" title="Marketplace Operators" description="drowning in support tickets" delay={0.1} />
            <WhoCard icon="🏢" title="Agencies" description="chasing qualified B2B leads" delay={0.2} />
            <WhoCard icon="🧠" title="Founders" description="who want fewer tools, more revenue" delay={0.3} />
            <WhoCard icon="🎤" title="Coaches + Creators" description="scaling high-ticket offers" delay={0.4} />
            <WhoCard icon="💼" title="B2B Companies" description="with long sales cycles" delay={0.5} />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-[#845AFF] to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Your Funnel's New Superpower
            </motion.h2>
            
            <motion.p 
              className="text-2xl md:text-3xl mb-16 max-w-4xl mx-auto leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Deploy once. Win forever.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-8 justify-center items-center"
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
                Show Me the Money Map
                <ArrowRight className="h-8 w-8 ml-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

interface AIServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  link: string;
  delay: number;
}

const AIServiceCard = ({ icon, title, description, cta, link, delay }) => {
  return (
    <motion.div 
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:bg-gray-900/70 hover:border-[#845AFF]/30 transition-all duration-500 flex flex-col h-full overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gray-800/50 border border-gray-700/50 mb-6 group-hover:bg-gray-800/70 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#845AFF] transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-8 leading-relaxed flex-grow">{description}</p>
        <Link 
          to={link}
          className="group/btn relative w-full px-6 py-4 rounded-xl bg-[#845AFF] hover:bg-purple-600 text-white font-bold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 flex items-center justify-center overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            <Sparkles className="h-5 w-5 mr-3" />
            <span>{cta}</span>
            <ArrowRight className="h-5 w-5 ml-3 group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

interface ResultCardProps {
  number: string;
  title: string;
  delay: number;
}

const ResultCard = ({ number, title, delay }) => {
  return (
    <motion.div 
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-gray-800/70 hover:border-[#845AFF]/30 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#845AFF] to-purple-400 mb-4 leading-[1.1]">
        {number}
      </div>
      <h3 className="text-lg font-bold text-white leading-[1.2]">{title}</h3>
    </motion.div>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

const BenefitCard = ({ icon, title, delay }) => {
  return (
    <motion.div 
      className="flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 hover:border-[#845AFF]/30 transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex-shrink-0 mr-4">{icon}</div>
      <div><h4 className="font-bold text-white leading-[1.2]">{title}</h4></div>
    </motion.div>
  );
};

interface WhoCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const WhoCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:bg-gray-900/70 hover:border-[#845AFF]/30 transition-all duration-300 group text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#845AFF] transition-colors leading-[1.2]">
        {title}
      </h3>
      <p className="text-purple-200 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default HomePage;
