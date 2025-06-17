import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  TrendingUp, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Star,
  Clock,
  DollarSign,
  Search,
  Mail,
  BarChart3,
  Globe,
  Linkedin,
  MapPin,
  Bot,
  Eye,
  MousePointer,
  Calendar,
  Award,
  Database,
  Filter,
  Send,
  Inbox,
  ShoppingCart
} from 'lucide-react';

const LeadGenerationPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--primary-500)_0%,_transparent_50%)] opacity-15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--primary-400)_0%,_transparent_50%)] opacity-20"></div>
        
        {/* Animated Data Flow Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="flex items-center justify-center h-full">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary-400 rounded-full mx-2"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center mb-6">
                <Target className="h-12 w-12 text-primary-400 mr-4" />
                <span className="text-primary-400 font-bold text-lg uppercase tracking-wider">AI Lead Generation</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Still Wasting Hours Chasing Leads?
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Let AI do the cold calls, emails, DMs, and follow-ups for you. We build the machine. You just close. 
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link 
                  to="/contact" 
                  className="group px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-lg transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:scale-105 flex items-center justify-center"
                >
               <Sparkles className="h-8 w-8 mr-4 group-hover:animate-pulse" />
                  Unlock AI-Powered Lead Gen
                  <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                
              </motion.div>
            </motion.div>
            
            {/* Dashboard Mockup */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-secondary-800/50 backdrop-blur-sm border border-primary-400/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-bold text-lg">Lead Generation Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-primary-500/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-400">1,247</div>
                    <div className="text-primary-200 text-sm">Leads Found</div>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">89%</div>
                    <div className="text-green-200 text-sm">Quality Score</div>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">23%</div>
                    <div className="text-blue-200 text-sm">Response Rate</div>
                  </div>
                </div>
                
                {/* Lead List */}
                <div className="space-y-3">
                  {[
                    { name: "Sarah Chen", company: "TechCorp", score: 95, status: "Hot" },
                    { name: "Mike Rodriguez", company: "GrowthLab", score: 87, status: "Warm" },
                    { name: "Emma Wilson", company: "ScaleUp", score: 92, status: "Hot" }
                  ].map((lead, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center justify-between bg-secondary-700/30 rounded-lg p-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center mr-3">
                          <span className="text-primary-400 font-bold text-sm">{lead.name[0]}</span>
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">{lead.name}</div>
                          <div className="text-primary-300 text-xs">{lead.company}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-primary-400 font-bold text-sm">{lead.score}</div>
                        <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                          lead.status === 'Hot' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {lead.status}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Floating notification */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-bold"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  +47 new leads today!
                </motion.div>
              </div>
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
              Cold Data, Hot Leads
            </h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Here’s what happens when you unleash AI on lead gen.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProofCard 
              number="25–40%"
              title="Higher Conversion Rates"
              subtitle="vs traditional methods"
              delay={0}
            />
            
            <ProofCard 
              number="60%"
              title="More Leads"
              subtitle="without lifting a finger"
              delay={0.1}
            />
            
            <ProofCard 
              number="35%"
              title="More Engagement"
              subtitle="with AI personalization"
              delay={0.2}
            />
            
            <ProofCard 
              number="5–50%"
              title="Revenue Growth"
              subtitle="within first 90 days"
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 relative overflow-hidden">
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
              How Our AI Lead Engine Works
            </h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              From discovery to conversion in four automated steps.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <ProcessStep 
              number="1"
              icon={<Search className="h-8 w-8 text-primary-400" />}
              title="Laser-Targeted Lead Extraction"
              description="We scrape fresh, verified leads from the web with sniper-level precision.
Forget spam lists. We build your dream client list on command."
              delay={0}
            />
            
            <ProcessStep 
              number="2"
              icon={<BarChart3 className="h-8 w-8 text-primary-400" />}
              title="AI-Powered Lead Scoring"
              description="Not all leads are equal. Our AI ranks them by intent, industry, and buyer behavior.
Only the most likely to convert move forward. No tire-kickers."
              delay={0.1}
            />
            
            <ProcessStep 
              number="3"
              icon={<Send className="h-8 w-8 text-primary-400" />}
              title="Automated, Personalized Outreach"
              description="Each message is tailored, timed, and triggered - at scale. Emails, DMs, even voice calls, done for you.
Your prospects feel like you wrote it yourself."
              delay={0.2}
            />
            
            <ProcessStep 
              number="4"
              icon={<Inbox className="h-8 w-8 text-primary-400" />}
              title="Booked & Qualified Leads in Your Inbox"
              description="The hottest leads either reply, hit your inbox, or book straight into your calendar.
You just show up and close. We handle the hunt."
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
            <Link 
              to="/contact" 
              className="group px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-bold text-lg transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:scale-105 inline-flex items-center"
            >
              <Sparkles className="h-7 w-7 mr-4 group-hover:animate-pulse" />
              Activate My AI Sales Bot
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Who This Is For Section */}
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
              Who This Is Built For
            </h2>
            <p className="text-2xl font-bold text-primary-400 mb-4">
             If you sell high-ticket, consultative, or B2B - this is your unfair advantage.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TargetAudienceCard 
              icon={<ShoppingCart className="h-8 w-8 text-primary-400" />}
              title="Ecom Brands Going B2B"
              description="You’ve nailed DTC. Now you want bigger buyers. Think wholesale contracts, enterprise deals, and bulk purchase orders—without chasing."
              delay={0}
            />
            
            <TargetAudienceCard 
              icon={<TrendingUp className="h-8 w-8 text-primary-400" />}
              title="Agencies Selling High-Value Services"
              description="No more pitching to cold traffic. We put you in inboxes and calendars of decision-makers ready to pay."
              delay={0.1}
            />
            
            <TargetAudienceCard 
              icon={<DollarSign className="h-8 w-8 text-primary-400" />}
              title="B2B Offers with Long Sales Cycles"
              description="You don’t need a flood of junk leads - you need consistency. We build you a pipeline that warms, nurtures, and closes over time."
              delay={0.2}
            />
            
            <TargetAudienceCard 
              icon={<Users className="h-8 w-8 text-primary-400" />}
              title="Founders Who’ve Had Enough of Manual Prospecting"
              description="You’ve tried the cold emails, the DMs, the wasted hours. Let AI do the grind. You just show up and close deals."
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* Why It Works Better Section */}
      <section className="py-24 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why It Works Better
            </h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Old-school lead gen is broken. LOFJET’s AI Engine doesn’t miss.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Traditional */}
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
                <h3 className="text-2xl font-bold text-red-400 mb-2">Traditional Lead Gen</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Manual scraping that takes forever</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Spray-and-pray email blasts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Unqualified junk leads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Inconsistent and human-dependent.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Generic emails that get ghosted.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Teams, tools, and overhead.</span>
                </li>
              </ul>
            </motion.div>
            
            {/* LOFTJET AI */}
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
                <h3 className="text-2xl font-bold text-green-400 mb-2">LOFJET AI Lead Engine</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">24/7 prospecting. Booked calls daily.
</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Hyper-personalized AI outreach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Scored & ranked quality leads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Automated, multi-channel, relentless.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Personalized, AI-crafted messages at scale.</span>
                </li>
                 <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">One AI system. Predictable cost.</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
           
          </motion.div>
        </div>
      </section>
      
      
      
      {/* Final CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary-900 to-primary-600 text-white overflow-hidden">
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
             Your CRM’s About to Get Real Busy
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We’ll build you a lead machine that works harder than your sales team.
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
                className="group px-12 py-5 rounded-xl bg-white text-primary-600 hover:bg-gray-100 font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center"
              >
                <Calendar className="h-7 w-7 mr-4 group-hover:animate-pulse" />
                Fill My Calendar With Leads
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
      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-primary-300">{subtitle}</p>
    </motion.div>
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
      className="relative bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8 hover:bg-secondary-800/70 hover:border-primary-400/30 transition-all duration-300 group text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Step Number */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
        {number}
      </div>
      
      {/* Icon */}
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-primary-500/10 border border-primary-400/20 mb-6 mt-4 group-hover:bg-primary-500/20 transition-all duration-300">
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

interface TargetAudienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const TargetAudienceCard: React.FC<TargetAudienceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="flex items-start bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8 hover:bg-secondary-800/70 hover:border-primary-400/30 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex-shrink-0 mr-6">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-primary-500/10 border border-primary-400/20">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-primary-200 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

interface ToolCardProps {
  name: string;
  icon: React.ReactNode;
  delay: number;
}

const ToolCard: React.FC<ToolCardProps> = ({ name, icon, delay }) => {
  return (
    <motion.div 
      className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 rounded-xl p-6 text-center hover:bg-secondary-800/70 hover:border-primary-400/30 transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary-500/10 border border-primary-400/20 mb-4 group-hover:bg-primary-500/20 transition-all duration-300 text-primary-400">
        {icon}
      </div>
      <h4 className="font-bold text-white text-sm group-hover:text-primary-300 transition-colors">
        {name}
      </h4>
    </motion.div>
  );
};

export default LeadGenerationPage;