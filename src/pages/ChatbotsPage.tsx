import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  ShoppingCart, 
  Target, 
  BarChart3, 
  Clock, 
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Bot,
  Heart,
  DollarSign,
  Award,
  Calendar
} from 'lucide-react';

const ChatbotsPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
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
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MessageSquare className="h-12 w-12 text-primary-400 mr-4" />
              <span className="text-primary-400 font-bold text-lg uppercase tracking-wider">AI Chatbots</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-primary-400 leading-tight"
              style={{ lineHeight: '1.1' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your Funnel's Smartest Upgrade
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
             Because waiting to reply is just leaving money on the table.
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
                <Bot className="h-7 w-7 mr-4 group-hover:animate-pulse" />
                Test the Bot Built to Win
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              
             
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Proof in Numbers Section */}
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
             Humans Forget, Bots Don't
            </h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Every message lands. Every lead touched. Every dollar Earned.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProofCard 
              number="5x"
              title="Higher Conversions"
              subtitle="Sideshow Case Study"
              delay={0}
            />
            
            <ProofCard 
              number="91%"
              title="Customer Satisfaction Rate"
              subtitle="Global Average"
              delay={0.1}
            />
            
            <ProofCard 
              number="7-25%"
              title="Annual Revenue Growth"
              subtitle="Industry Data"
              delay={0.2}
            />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
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
              What Our Chatbots Do
            </h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              SIx powerful ways AI chatbots transform your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Clock className="h-8 w-8 text-primary-400" />}
              title="24/7 Customer Support"
              description="Instant answers, no human delay. Your customers get help the moment they need it."
              delay={0}
            />
            
            <BenefitCard 
              icon={<Target className="h-8 w-8 text-primary-400" />}
              title="Smart Product Recommendations"
              description="Personalized quizzes that convert browsers into buyers with tailored suggestions."
              delay={0.1}
            />
            
            <BenefitCard 
              icon={<ShoppingCart className="h-8 w-8 text-primary-400" />}
              title="Cart Recovery"
              description="Bring back abandoned checkouts on autopilot with smart follow-up messages."
              delay={0.2}
            />
            
            <BenefitCard 
              icon={<Users className="h-8 w-8 text-primary-400" />}
              title="Lead Capture & Qualification"
              description="Engage & qualify on-site traffic, turning visitors into qualified prospects."
              delay={0.3}
            />
            
            <BenefitCard 
              icon={<BarChart3 className="h-8 w-8 text-primary-400" />}
              title="Insight Collection"
              description="Learn what buyers want in real-time with intelligent conversation analytics."
              delay={0.4}
            />
            
            <BenefitCard 
              icon={<DollarSign className="h-8 w-8 text-primary-400" />}
              title="Revenue Optimization"
              description="Upsell and cross-sell automatically based on customer behavior and preferences."
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
              <Bot className="h-7 w-7 mr-4 group-hover:animate-pulse" />
              Preview the AI in Action
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
              From Support Nightmare to Sales Machine
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
                  <span className="text-red-200">Manual live chat with delays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Cart abandonment at 70%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Missed leads after hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Generic product suggestions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">High support costs</span>
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
                <p className="text-green-300">With LOFJET AI</p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Instant responses 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Cart recovery up to 30%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Never miss a lead again</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Personalized recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Save $1K-$2K monthly</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Results Section with Aurora Effect */}
      <section className="py-24 relative overflow-hidden">
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
              What Kind of Results Can You Expect?
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Engineered for performance - AI chatbots built to convert, engage, and scale.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ResultItem 
                icon={<TrendingUp className="h-6 w-6 text-green-400" />}
                title="Revenue Growth"
                value="7–25% annually"
                delay={0}
              />
              
              <ResultItem 
                icon={<Zap className="h-6 w-6 text-yellow-400" />}
                title="Conversion Rate Lift"
                value="2–5x in case studies"
                delay={0.1}
              />
              
              <ResultItem 
                icon={<Heart className="h-6 w-6 text-red-400" />}
                title="Customer Satisfaction"
                value="87%–91% average"
                delay={0.2}
              />
              
              <ResultItem 
                icon={<Users className="h-6 w-6 text-blue-400" />}
                title="Customer Retention"
                value="10–15% improvement"
                delay={0.3}
              />
              
              <ResultItem 
                icon={<Target className="h-6 w-6 text-purple-400" />}
                title="Click-Through Rate"
                value="Up to 40% on suggestions"
                delay={0.4}
              />
              
              <ResultItem 
                icon={<DollarSign className="h-6 w-6 text-green-400" />}
                title="Cost Savings"
                value="$1K–$2K monthly"
                delay={0.5}
              />
            </div>
            
            <motion.p 
              className="text-sm text-purple-300 text-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Sources: Shopify, Sinch, iAdvize, Master of Code, Engati, and internal case studies
            </motion.p>
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
              Want a Chatbot That Actually Drives Sales?
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We'll show you exactly how to use AI assistant to capture more leads and convert more traffic.
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
                <Bot className="h-7 w-7 mr-4 group-hover:animate-pulse" />
                Claim Your Free Chatbot Strategy
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

interface ProofCardProps {
  number: string;
  title: string;
  subtitle: string;
  delay: number;
}

const ProofCard: React.FC<ProofCardProps> = ({ number, title, subtitle, delay }) => {
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

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, delay }) => {
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

interface ResultItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  delay: number;
}

const ResultItem: React.FC<ResultItemProps> = ({ icon, title, value, delay }) => {
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
        <h4 className="font-bold text-white mb-1">{title}</h4>
        <p className="text-purple-300 font-semibold">{value}</p>
      </div>
    </motion.div>
  );
};

export default ChatbotsPage;