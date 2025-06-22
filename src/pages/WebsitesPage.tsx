import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SparklesText } from '@/components/ui/sparkles-text';
import { 
  Monitor, 
  Zap, 
  ShoppingCart, 
  FileText, 
  Users, 
  Building, 
  Truck, 
  Calendar, 
  BookOpen, 
  Image, 
  GraduationCap, 
  Briefcase,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Star,
  TrendingUp,
  Smartphone,
  Code,
  Palette,
  Globe,
  CheckCircle,
  Play,
  Target,
  Rocket,
  Award,
  Layers,
  Database,
  Settings
} from 'lucide-react';

const WebsitesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#FAFAFA] via-white to-gray-50 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#7F5EFF_0%,_transparent_50%)] opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#00D4FF_0%,_transparent_50%)] opacity-5"></div>
        
        {/* Animated Building Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="flex items-center justify-center h-full">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-500 rounded-sm mx-1"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Monitor className="h-12 w-12 text-blue-600 mr-4" />
              <span className="text-blue-600 font-bold text-lg uppercase tracking-wider">AI Website Creation</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <SparklesText 
                text="Beautiful Websites, Built Fast - Engineered to Convert"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
                colors={{
                  first: "#7F5EFF",
                  second: "#00D4FF"
                }}
                sparklesCount={14}
              />
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
             AI-powered, UX-obsessed, and optimized to drive conversions from day one.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                to="/contact" 
                className="group px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 flex items-center"
              >
                <Sparkles className="h-6 w-6 mr-3 group-hover:animate-pulse" />
               Get Your Free Site Preview
                <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              
            
            </motion.div>
            
            {/* Enhanced Hero Visual - Building Animation */}
            <motion.div
              className="relative max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl border border-gray-200/50 p-8 backdrop-blur-sm relative overflow-hidden">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl"></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10">
                  {/* Enhanced Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="flex space-x-2">
                        <motion.div 
                          className="w-3 h-3 bg-red-400 rounded-full"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div 
                          className="w-3 h-3 bg-yellow-400 rounded-full"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                        />
                        <motion.div 
                          className="w-3 h-3 bg-green-400 rounded-full"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                        />
                      </div>
                     
                    </div>
                    <motion.div 
                      className="text-sm text-gray-500 flex items-center"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Settings className="h-4 w-4 mr-2 animate-spin" />
                      Building your site...
                    </motion.div>
                  </div>
                  
                  {/* Enhanced Progress Bars with Icons */}
                  <div className="space-y-6">
                    <motion.div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
                        <Code className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Frontend Framework</span>
                          <span className="text-xs text-gray-500">React + TypeScript</span>
                        </div>
                        <motion.div 
                          className="h-3 bg-gradient-to-r from-blue-200 to-blue-500 rounded-full shadow-inner"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, delay: 1 }}
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                        <Palette className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">UI Components</span>
                          <span className="text-xs text-gray-500">Tailwind CSS</span>
                        </div>
                        <motion.div 
                          className="h-3 bg-gradient-to-r from-purple-200 to-purple-500 rounded-full shadow-inner"
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 2, delay: 1.5 }}
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                        <Database className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Backend Integration</span>
                          <span className="text-xs text-gray-500">API Ready</span>
                        </div>
                        <motion.div 
                          className="h-3 bg-gradient-to-r from-green-200 to-green-500 rounded-full shadow-inner"
                          initial={{ width: 0 }}
                          animate={{ width: "95%" }}
                          transition={{ duration: 2, delay: 2 }}
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100">
                        <Rocket className="h-4 w-4 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Deployment</span>
                          <span className="text-xs text-gray-500">Production Ready</span>
                        </div>
                        <motion.div 
                          className="h-3 bg-gradient-to-r from-orange-200 to-orange-500 rounded-full shadow-inner"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, delay: 2.5 }}
                        />
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Enhanced Success Message */}
                  <motion.div 
                    className="mt-8 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3.5, duration: 0.5 }}
                  >
                    <motion.div
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full font-semibold shadow-lg border border-green-200"
                      animate={{ 
                        boxShadow: [
                          "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          "0 10px 15px -3px rgba(34, 197, 94, 0.2)",
                          "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        
                      >
                        <CheckCircle className="h-5 w-5 mr-3" />
                      </motion.div>
                      <span>Site Ready for Launch!</span>
                      <motion.div
                        className="ml-3"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        🚀
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Performance Metrics */}
                  <motion.div 
                    className="mt-6 grid grid-cols-3 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 4, duration: 0.5 }}
                  >
                    <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="text-lg font-bold text-blue-600">98</div>
                      <div className="text-xs text-blue-500">Performance</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
                      <div className="text-lg font-bold text-green-600">100</div>
                      <div className="text-xs text-green-500">SEO</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-100">
                      <div className="text-lg font-bold text-purple-600">95</div>
                      <div className="text-xs text-purple-500">Accessibility</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why It Works Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              This Ain’t Web Design, It’s Sales Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No bloated code. Just clean, high-performance websites that look 🔥 and turn traffic into cash.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WhyItWorksCard 
              icon={<Zap className="h-10 w-10 text-blue-600" />}
              title="AI-Powered Speed"
              description="Fully deployable sites - responsive, blazing fast, and tuned for sales."
              delay={0}
            />
            
            <WhyItWorksCard 
              icon={<Palette className="h-10 w-10 text-purple-600" />}
              title="Pixel-Perfect UI"
              description="Clean code. Modern feel. Interfaces that actually impress."
              delay={0.1}
            />
            
            <WhyItWorksCard 
              icon={<Rocket className="h-10 w-10 text-green-600" />}
              title="Launch in Days, Not Weeks"
              description="Not just launched fast - launched right."
              delay={0.2}
            />
          </div>
        </div>
      </section>
      
      {/* What We Build Section */}
      <section id="examples" className="py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Build
            </h2>
            <p className="text-2xl font-bold text-blue-600 mb-4">
              If it needs to load fast, convert visitors, and scale - you're in the right place.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            <SiteTypeCard icon="🛒" title="E-commerce Stores" delay={0} />
            <SiteTypeCard icon="📄" title="Landing Pages" delay={0.1} />
            <SiteTypeCard icon="🧾" title="Product Detail Pages" delay={0.2} />
            <SiteTypeCard icon="🔁" title="Subscription Services" delay={0.3} />
            <SiteTypeCard icon="🧩" title="Marketplaces" delay={0.4} />
            <SiteTypeCard icon="🏢" title="B2B Portals" delay={0.5} />
            <SiteTypeCard icon="🚚" title="Dropshipping Sites" delay={0.6} />
            <SiteTypeCard icon="⚡" title="Flash Sale Pages" delay={0.7} />
            <SiteTypeCard icon="🎟️" title="Event Registration" delay={0.8} />
            <SiteTypeCard icon="✍️" title="Blogs + Content Sites" delay={0.9} />
            <SiteTypeCard icon="📚" title="Course Portals" delay={1.0} />
            <SiteTypeCard icon="🖼️" title="Portfolio Sites" delay={1.1} />
          </div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="group px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 inline-flex items-center"
            >
              <Rocket className="h-7 w-7 mr-4 group-hover:animate-pulse" />
              Let's Build Your Site
              <ArrowRight className="h-7 w-7 ml-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Proof & Performance Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Performance You Can Bank On
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't brochure sites. These are conversion engines.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              number="5–7 Days"
              title="Avg Site Launch Time"
              delay={0}
            />
            
            <StatCard 
              number="100%"
              title="Mobile Optimization"
              delay={0.1}
            />
            
            <StatCard 
              number="30%+"
              title="Avg Conversion Boost"
              delay={0.2}
            />
            
            <StatCard 
              number="40%"
              title="Faster Than Traditional Dev"
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep 
              number="1"
              title="Tell Us What You Sell"
              description="Product, service, or brand - we turn it into a sales machine."
              delay={0}
            />

              <ProcessStep 
              number="2"
              title="We Build You a Free AI Demo Site"
              description="See it before you say yes. Real pages, real design, no guesswork."
              delay={0.1}
            />
            
            <ProcessStep 
              number="3"
              title="We Design + Build It Fast"
              description="Every page is crafted to pull eyes down and wallets out."
              delay={0.1}
            />
            
            <ProcessStep 
              number="4"
              title="We Customize, Test, and Refine"
              description="Perfect every detail for conversion."
              delay={0.2}
            />
            
            <ProcessStep 
              number="5"
              title="Site’s Live, Time to Scale"
              description="Launch once - let it convert forever."
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
             Want to See Your Site—Before You Say Yes?
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We’ll build you a free demo website. No pressure. No tech headaches. Just see what’s possible.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link 
                to="/contact" 
                className="group px-12 py-5 rounded-xl bg-white text-blue-600 hover:bg-gray-100 font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center"
              >
                <Rocket className="h-7 w-7 mr-4 group-hover:animate-pulse" />
                Start My Free Build
                <ArrowRight className="h-7 w-7 ml-4 group-hover:translate-x-1 transition-transform" />
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
                <div className="text-lg font-bold mb-1">5-7 Days</div>
                <div className="text-sm opacity-80">To Launch</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

interface WhyItWorksCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const WhyItWorksCard: React.FC<WhyItWorksCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gray-50 mb-6 group-hover:bg-gray-100 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

interface SiteTypeCardProps {
  icon: string;
  title: string;
  delay: number;
}

const SiteTypeCard: React.FC<SiteTypeCardProps> = ({ icon, title, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h4>
    </motion.div>
  );
};

interface StatCardProps {
  number: string;
  title: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ number, title, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
        {number}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
    </motion.div>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay }) => {
  return (
    <motion.div 
      className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Step Number */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
        {number}
      </div>
      
      <div className="mt-4">
        <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default WebsitesPage;
