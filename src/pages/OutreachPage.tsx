import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Target, 
  TrendingUp, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Star,
  Clock,
  Users,
  DollarSign,
  MessageSquare,
  Eye,
  MousePointer,
  Calendar,
  Award,
  Database,
  Filter,
  Inbox,
  Bot,
  Globe,
  BarChart3,
  Linkedin,
  Play,
  RefreshCw
} from 'lucide-react';

const OutreachPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayDemo = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, you would play an actual demo video
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A0A1F] via-gray-900 to-[#0A0A1F] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#00D4FF_0%,_transparent_50%)] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#4FFF9F_0%,_transparent_50%)] opacity-10"></div>
        
        {/* Animated Email Flow Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="flex items-center justify-center h-full">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-blue-400 rounded-full mx-3"
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
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
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
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
          className="absolute bottom-20 right-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"
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
                <Send className="h-12 w-12 text-blue-400 mr-4" />
                <span className="text-blue-400 font-bold text-lg uppercase tracking-wider">AI Outreach Engine</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                AI Outreach That Feels Human, Closes Like a Machine
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                1-on-1 messages sent at scale - so personal, they swear you typed it.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link 
                  to="/contact" 
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 flex items-center justify-center"
                >
                  <Sparkles className="h-8 w-8 mr-3 group-hover:animate-pulse" />
                  Unlock AI-Powered Outreach Now
                  <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                
               

              </motion.div>
            </motion.div>
            
            {/* Split-screen Mockup */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email Inbox */}
                <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-bold text-sm">Email Replies</h3>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { name: "Sarah Chen", subject: "Re: Quick question", time: "2m ago", status: "replied" },
                      { name: "Mike Rodriguez", subject: "Re: Saw your brand", time: "5m ago", status: "opened" },
                      { name: "Emma Wilson", subject: "Re: Worth a chat?", time: "8m ago", status: "clicked" }
                    ].map((email, index) => (
                      <motion.div 
                        key={index}
                        className="bg-gray-800/50 rounded-lg p-3 border-l-2 border-green-400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium text-xs">{email.name}</div>
                            <div className="text-gray-400 text-xs">{email.subject}</div>
                          </div>
                          <div className="text-green-400 text-xs">{email.time}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="mt-3 text-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-green-400 font-bold text-sm">+12 new replies today!</span>
                  </motion.div>
                </div>
                
                {/* LinkedIn DMs */}
                <div className="bg-gray-900/50 backdrop-blur-sm border border-green-400/20 rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-bold text-sm">LinkedIn DMs</h3>
                    <Linkedin className="h-4 w-4 text-blue-400" />
                  </div>
                  
                  <div className="space-y-2">
                    {[
                      { name: "Alex Johnson", message: "Interested in learning more...", time: "1m ago" },
                      { name: "Lisa Park", message: "Can we schedule a call?", time: "3m ago" },
                      { name: "David Kim", message: "This looks exactly what we need", time: "7m ago" }
                    ].map((dm, index) => (
                      <motion.div 
                        key={index}
                        className="bg-gray-800/50 rounded-lg p-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      >
                        <div className="flex items-start">
                          <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-2">
                            <span className="text-blue-400 font-bold text-xs">{dm.name[0]}</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-medium text-xs">{dm.name}</div>
                            <div className="text-gray-400 text-xs">{dm.message}</div>
                            <div className="text-green-400 text-xs mt-1">{dm.time}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Proof in Numbers Section */}
      <section className="py-20 bg-[#0A0A1F]">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              This AI Doesn’t Send Emails, It Hunts Deals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
               Precision targeting. Lethal copy. Human-like messaging at machine scale.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProofCard 
              number="25–40%"
              title="Higher Conversion Rates"
              icon={<TrendingUp className="h-8 w-8 text-blue-400" />}
              delay={0}
            />
            
            <ProofCard 
              number="45%"
              title="More Leads with AI outreach"
              icon={<Target className="h-8 w-8 text-green-400" />}
              delay={0.1}
            />
            
            <ProofCard 
              number="35%"
              title="Boost in Engagement"
              icon={<Zap className="h-8 w-8 text-yellow-400" />}
              delay={0.2}
            />
            
            <ProofCard 
              number="5–50%"
              title="Revenue Growth"
              icon={<DollarSign className="h-8 w-8 text-purple-400" />}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-[#0A0A1F] to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00D4FF_0%,_transparent_70%)] opacity-5"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From leads to conversations in four automated steps.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <ProcessStep 
              number="1"
              icon={<Database className="h-8 w-8 text-blue-400" />}
              title="Upload your leads"
              description="Or let us scrape them for you from LinkedIn, Google Maps, and more"
              delay={0}
            />
            
            <ProcessStep 
              number="2"
              icon={<Bot className="h-8 w-8 text-green-400" />}
              title="AI Writes 1:1 Messages"
              description="Emails & DMs that feel custom-written for each prospect"
              delay={0.1}
            />
            
            <ProcessStep 
              number="3"
              icon={<Send className="h-8 w-8 text-purple-400" />}
              title="Auto-Send Campaigns"
              description="Optimal days/times, smart follow-ups, perfect timing"
              delay={0.2}
            />
            
            <ProcessStep 
              number="4"
              icon={<Calendar className="h-8 w-8 text-orange-400" />}
              title="Hot Leads Reply"
              description="Qualified prospects book calls or land in your inbox"
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
            <button 
              onClick={handlePlayDemo}
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 inline-flex items-center"
            >
              <Sparkles className="h-7 w-7 mr-4 group-hover:animate-pulse" />
              Lock In My Launch Spot
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Who This Is For Section */}
      <section className="py-20 bg-[#0A0A1F]">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Who This Is Really For
            </h2>
            <p className="text-2xl text-blue-400 font-bold mb-4">
              If you're doing outreach… this thing’s your unfair advantage.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TargetAudienceCard 
              icon={<Users className="h-8 w-8 text-blue-400" />}
              title="B2B Founders & Agencies"
              description="Doing cold outreach and need better results"
              delay={0}
            />
            
            <TargetAudienceCard 
              icon={<MessageSquare className="h-8 w-8 text-green-400" />}
              title="Coaches & Consultants"
              description="Who need warm conversations that convert"
              delay={0.1}
            />
            
            <TargetAudienceCard 
              icon={<Globe className="h-8 w-8 text-purple-400" />}
              title="SaaS Brands"
              description="That want demos booked on autopilot"
              delay={0.2}
            />
            
            <TargetAudienceCard 
              icon={<Target className="h-8 w-8 text-orange-400" />}
              title="Anyone Sick of Getting Ghosted"
              description="Sending 100s of messages with no replies"
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* Why It Outperforms Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-[#0A0A1F] to-gray-900">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why It Outperforms Everything Else
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Traditional outreach vs. LOFJET AI Outreach Engine.
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
                <h3 className="text-2xl font-bold text-red-400 mb-2">Traditional Outreach</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Generic templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Manual follow-ups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Low reply rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">❌</span>
                  <span className="text-red-200">Time-consuming grind</span>
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
                <h3 className="text-2xl font-bold text-green-400 mb-2">LOFJET AI Outreach</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Hyper-personalized messages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Auto-sequenced by AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Up to 35% more engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✅</span>
                  <span className="text-green-200">Fully automated engine</span>
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
      <section className="relative py-24 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 text-white overflow-hidden">
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
              Ready to Fill Your Calendar With Real Conversations?
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
         Let AI do the heavy lifting while you close like a boss.
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
                <Sparkles className="h-7 w-7 mr-4 group-hover:animate-pulse" />
                Build My Outreach Engine
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
  icon: React.ReactNode;
  delay: number;
}

const ProofCard: React.FC<ProofCardProps> = ({ number, title, icon, delay }) => {
  return (
    <motion.div 
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 text-center hover:bg-gray-900/70 hover:border-blue-500/30 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-gray-800/50 mb-4">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4">
        {number}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
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
      className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:bg-gray-900/70 hover:border-blue-500/30 transition-all duration-300 group text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Step Number */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
        {number}
      </div>
      
      {/* Icon */}
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-gray-800/50 mb-6 mt-4 group-hover:bg-gray-800/70 transition-all duration-300">
        {icon}
      </div>
      
      {/* Content */}
      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
        {title}
      </h4>
      <p className="text-gray-300 leading-relaxed">
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
      className="flex items-start bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:bg-gray-900/70 hover:border-blue-500/30 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex-shrink-0 mr-6">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-gray-800/50">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default OutreachPage;
