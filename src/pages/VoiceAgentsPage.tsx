import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  ShoppingCart, 
  Target, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Star,
  Clock,
  Users,
  DollarSign,
  Mic,
  Volume2,
  Play,
  Headphones
} from 'lucide-react';

const VoiceAgentsPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayDemo = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, you would play an actual audio file
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--primary-500)_0%,_transparent_50%)] opacity-15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--primary-400)_0%,_transparent_50%)] opacity-20"></div>
        
        {/* Animated Waveform Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="flex items-center justify-center h-full space-x-1">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-primary-400 rounded-full"
                animate={{
                  height: [20, Math.random() * 100 + 20, 20],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
        
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
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Phone className="h-12 w-12 text-primary-400 mr-4" />
              <span className="text-primary-400 font-bold text-lg uppercase tracking-wider">AI Voice Callers</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-primary-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Fire Your Call Center, Hire This AI Closer Instead
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Answer questions, book calls, and follow up like a top closer - 24/7, no humans needed.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                to="/contact" 
                className="group px-10 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-lg transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:scale-105 flex items-center"
              >
                <Phone className="h-7 w-7 mr-4 group-hover:animate-pulse" />
              Try a Custom Voice Demo
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              
             
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Impact Stats Section */}
      <section className="py-20 bg-secondary-900">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Missed Calls? Dead Leads? Gone Forever
            </h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
             Always On. Always Closing.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImpactCard 
              number="10–15x"
              title="More Revenue Per Call"
              subtitle="vs. web leads"
              delay={0}
            />
            
            <ImpactCard 
              number="35%"
              title="Faster Conversions"
              subtitle="than human agents"
              delay={0.1}
            />
            
            <ImpactCard 
              number="91%"
              title="Satisfaction Rate"
              subtitle="from AI-assisted calls"
              delay={0.2}
            />
          </div>
        </div>
      </section>
      
      {/* What Voice Agents Do Section */}
      <section className="py-24 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary-500)_0%,_transparent_70%)] opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Money Talks, So Does This Bot
            </h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Six powerful ways AI voice agents transform your customer experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VoiceFeatureCard 
              icon={<Phone className="h-8 w-8 text-primary-400" />}
              title="Answer FAQs Instantly"
              description="Handle order tracking, returns, and product info like a pro"
              delay={0}
            />
            
            <VoiceFeatureCard 
              icon={<Calendar className="h-8 w-8 text-primary-400" />}
              title="Book Appointments Automatically"
              description="No missed calls. No wasted leads."
              delay={0.1}
            />
            
            <VoiceFeatureCard 
              icon={<ShoppingCart className="h-8 w-8 text-primary-400" />}
              title="Drive Voice Commerce"
              description="Let customers shop by voice—faster, easier, smarter."
              delay={0.2}
            />
            
            <VoiceFeatureCard 
              icon={<Target className="h-8 w-8 text-primary-400" />}
              title="Qualify and Nurture Leads"
              description="Outbound or inbound, always sharp, always working"
              delay={0.3}
            />
            
            <VoiceFeatureCard 
              icon={<Globe className="h-8 w-8 text-primary-400" />}
              title="Speak Their Language"
              description="Multilingual, customizable voices that match your brand"
              delay={0.4}
            />
            
            <VoiceFeatureCard 
              icon={<Mic className="h-8 w-8 text-primary-400" />}
              title="Natural Conversations"
              description="Human-like interactions that build trust and rapport"
              delay={0.5}
            />
          </div>
           {/* CTA Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="group px-10 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:scale-105 inline-flex items-center"
            >
              <Phone className="h-7 w-7 mr-4 group-hover:animate-pulse" />
              Get My Free Voice Agent Demo
              <ArrowRight className="h-7 w-7 ml-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Before vs After Section */}
      <section className="py-24 bg-secondary-900">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              From Dropped Calls to Nonstop Conversions
            </h2>
            <p className="text-xl text-primary-200 mb-4">
              See the transformation in under 2 weeks.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Before */}
            <motion.div 
              className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-500/20 mb-4">
                  <span className="text-2xl">😤</span>
                </div>
                <h3 className="text-2xl font-bold text-red-400 mb-2">BEFORE</h3>
                <p className="text-red-300">The Old Way</p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Missed calls during off-hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Angry customers on hold</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Long wait times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Inconsistent service quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">High staffing costs</span>
                </li>
              </ul>
            </motion.div>
            
            {/* After */}
            <motion.div 
              className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">AFTER</h3>
                <p className="text-green-300">With LOFJET Voice AI</p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Instant answers 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Zero wait times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Consistent premium service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Automatic appointment booking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Save 30% on staffing costs</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why Ecom Brands Love Voice AI */}
      <section className="py-20 relative overflow-hidden">
        {/* Stunning Aurora-like Background */}
        <div className="absolute inset-0 bg-secondary-900"></div>
        
        {/* Animated Aurora Effect */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-3xl"
            animate={{
              x: ['-100%', '100%'],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-l from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl"
            animate={{
              x: ['100%', '-100%'],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-pink-400/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-40 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-400/20 rounded-full blur-2xl"
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Sparkle Effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
               What Happens When You Never Miss Another Call Again
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Every call answered. Every lead closed. Every rep replaced.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitItem 
              icon={<DollarSign className="h-6 w-6 text-emerald-400" />}
              title="Save up to 30% on staffing costs"
              delay={0}
            />
            
            <BenefitItem 
              icon={<TrendingUp className="h-6 w-6 text-cyan-400" />}
              title="Increase retention by 10–15%"
              delay={0.1}
            />
            
            <BenefitItem 
              icon={<Phone className="h-6 w-6 text-pink-400" />}
              title="Retention: 28% lift from personalized calls"
              delay={0.2}
            />
            
            <BenefitItem 
              icon={<Star className="h-6 w-6 text-yellow-400" />}
              title="Automation: 80%+ of calls handled without humans"
              delay={0.3}
            />
            
            <BenefitItem 
              icon={<Users className="h-6 w-6 text-indigo-400" />}
              title="Scale without hiring"
              delay={0.4}
            />
            
            <BenefitItem 
              icon={<Clock className="h-6 w-6 text-orange-400" />}
              title="24/7 availability guaranteed"
              delay={0.5}
            />
          </div>
        </div>
      </section>
      
     
      
      
      {/* Final CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-900 via-secondary-800 to-secondary-900 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--primary-500)_0%,_transparent_50%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--primary-400)_0%,_transparent_50%)] opacity-20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-primary-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              This Isn’t a Gimmick, It’s a Sales Machine
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Book your strategy call and hear how AI voice caller can replace reps, recover lost revenue, and keep your calendar full.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link 
                to="/contact" 
                className="group px-12 py-5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:scale-105 flex items-center"
              >
                <Phone className="h-7 w-7 mr-4 group-hover:animate-pulse" />
                See How It Sounds
                <ArrowRight className="h-7 w-7 ml-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
         <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-secondary-800/30 backdrop-blur-sm rounded-xl p-6 border border-primary-400/20">
              <Shield className="h-10 w-10 text-primary-400 mx-auto mb-3" />
              <div className="text-lg font-bold text-primary-400 mb-1">30-Day</div>
              <div className="text-primary-200 text-sm">Money-Back Guarantee</div>
            </div>
            
            <div className="bg-secondary-800/30 backdrop-blur-sm rounded-xl p-6 border border-primary-400/20">
              <Clock className="h-10 w-10 text-primary-400 mx-auto mb-3" />
              <div className="text-lg font-bold text-primary-400 mb-1">1-2 Weeks</div>
              <div className="text-primary-200 text-sm">To Launch</div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

interface ImpactCardProps {
  number: string;
  title: string;
  subtitle: string;
  delay: number;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ number, title, subtitle, delay }) => {
  return (
    <motion.div 
      className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8 text-center hover:bg-secondary-800/70 hover:border-primary-400/30 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-primary-300">{subtitle}</p>
    </motion.div>
  );
};

interface VoiceFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const VoiceFeatureCard: React.FC<VoiceFeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8 hover:bg-secondary-800/70 hover:border-primary-400/30 transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-primary-500/10 border border-primary-400/20 mb-6 group-hover:bg-primary-500/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
        {title}
      </h3>
      <p className="text-primary-200 leading-relaxed">{description}</p>
    </motion.div>
  );
};

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, delay }) => {
  return (
    <motion.div 
      className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex-shrink-0 mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white">{title}</h4>
      </div>
    </motion.div>
  );
};

interface ExpectationItemProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

const ExpectationItem: React.FC<ExpectationItemProps> = ({ icon, title, delay }) => {
  return (
    <motion.div 
      className="flex items-center bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 rounded-xl p-6 hover:bg-secondary-800/70 hover:border-primary-400/30 transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex-shrink-0 mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white">{title}</h4>
      </div>
    </motion.div>
  );
};

export default VoiceAgentsPage;
