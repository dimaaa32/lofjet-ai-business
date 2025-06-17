import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Scale, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Globe, 
  Mail, 
  Calendar,
  ArrowRight,
  Bot,
  CreditCard,
  RefreshCw,
  Ban,
  Eye,
  Lock,
  Phone,
  MessageSquare,
  Target,
  Monitor,
  Send,
  DollarSign,
  Clock,
  Gavel,
  UserX,
  AlertCircle,
  Info
} from 'lucide-react';

const TermsPage: React.FC = () => {
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Scale className="h-12 w-12 text-primary-400 mr-4" />
              <span className="text-primary-400 font-bold text-lg uppercase tracking-wider">Terms of Service</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-primary-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Terms of Service
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Clear, fair terms for our AI automation services. Your rights and responsibilities explained.
            </motion.p>
            
            <motion.div 
              className="flex items-center justify-center space-x-6 text-primary-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Effective: January 1, 2025</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                <span>Global Terms</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Summary Section */}
      <section className="py-16 bg-secondary-900">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary-500/10 border border-primary-400/20 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Eye className="h-6 w-6 text-primary-400 mr-3" />
                Quick Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Our Services</h3>
                    <p className="text-primary-200 text-sm">AI Chatbots, Voice Callers, Lead Generation, Outreach, and Website Creation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">30-Day Guarantee</h3>
                    <p className="text-primary-200 text-sm">Full money-back guarantee within 30 days of purchase.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Your Responsibilities</h3>
                    <p className="text-primary-200 text-sm">Provide accurate information, use services legally, respect our IP.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Support</h3>
                    <p className="text-primary-200 text-sm">Dedicated support team, clear communication, timely responses.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-secondary-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            {/* Section 1: Introduction */}
            <TermsSection
              icon={<FileText className="h-6 w-6 text-primary-400" />}
              title="1. Introduction"
              delay={0}
            >
              <p className="text-primary-200 leading-relaxed mb-4">
                Welcome to LOFJET ("we," "our," "us"), an AI automation agency based in Ukraine, providing services globally. 
                These Terms of Service ("ToS") govern your use of our website (loftjet.com) and our AI services, including 
                AI Chatbots, AI Voice Callers, AI Lead Generation, Personalized Outreach, and Website Creation 
                (collectively, the "Services").
              </p>
              <p className="text-primary-200 leading-relaxed">
                By using our Services, you agree to these terms. If you do not agree, please do not use our Services.
              </p>
            </TermsSection>

            {/* Section 2: Services Provided */}
            <TermsSection
              icon={<Bot className="h-6 w-6 text-primary-400" />}
              title="2. Services Provided"
              delay={0.1}
            >
              <p className="text-primary-200 leading-relaxed mb-6">
                LOFJET offers the following AI-powered services:
              </p>
              
              <div className="space-y-4">
                <ServiceItem 
                  icon={<MessageSquare className="h-5 w-5 text-blue-400" />}
                  title="AI Chatbots"
                  description="Automated chat systems for customer support, sales, and engagement."
                />
                <ServiceItem 
                  icon={<Phone className="h-5 w-5 text-green-400" />}
                  title="AI Voice Callers"
                  description="Voice-based automation for booking, follow-ups, and customer interactions."
                />
                <ServiceItem 
                  icon={<Target className="h-5 w-5 text-purple-400" />}
                  title="AI Lead Generation"
                  description="Lead scraping and qualification using AI tools."
                />
                <ServiceItem 
                  icon={<Send className="h-5 w-5 text-orange-400" />}
                  title="Personalized Outreach"
                  description="AI-driven email and direct message campaigns."
                />
                <ServiceItem 
                  icon={<Monitor className="h-5 w-5 text-pink-400" />}
                  title="Website Creation"
                  description="AI-assisted website design and development for high conversion rates."
                />
              </div>
            </TermsSection>

            {/* Section 3: User Responsibilities */}
            <TermsSection
              icon={<Users className="h-6 w-6 text-primary-400" />}
              title="3. User Responsibilities"
              delay={0.2}
            >
              <p className="text-primary-200 leading-relaxed mb-4">
                As a client ("you," "your"), you agree to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Provide accurate and complete information when requesting or using our Services.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Use the Services in compliance with all applicable laws and regulations.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Not misuse our AI tools for unlawful, harmful, or unethical purposes (e.g., spamming, fraud).</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Maintain the confidentiality of your account credentials and notify us immediately of any unauthorized access.</span>
                </li>
              </ul>
            </TermsSection>

            {/* Section 4: Payment Terms */}
            <TermsSection
              icon={<CreditCard className="h-6 w-6 text-primary-400" />}
              title="4. Payment Terms"
              delay={0.3}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <DollarSign className="h-5 w-5 text-green-400 mr-2" />
                    Fees
                  </h4>
                  <p className="text-primary-200 leading-relaxed">
                    Fees for each Service are outlined in your service agreement or invoice. Payment is due upon receipt unless otherwise agreed.
                  </p>
                </div>
                
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    30-Day Money-Back Guarantee
                  </h4>
                  <p className="text-green-200 mb-4">
                    If you are not satisfied with our Services within 30 days of purchase, you may request a full refund. To qualify, you must:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-200 text-sm">Notify us in writing at info@loftjet.com within 30 days of the purchase date.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-200 text-sm">Provide a valid reason for the refund request.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-200 text-sm">Allow us to attempt to resolve the issue before processing the refund.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <RefreshCw className="h-5 w-5 text-blue-400 mr-2" />
                    Refunds
                  </h4>
                  <p className="text-primary-200 leading-relaxed">
                    Approved refunds will be processed within 14 business days. Services used beyond the 30-day period are non-refundable.
                  </p>
                </div>
              </div>
            </TermsSection>

            {/* Section 5: Intellectual Property */}
            <TermsSection
              icon={<Lock className="h-6 w-6 text-primary-400" />}
              title="5. Intellectual Property"
              delay={0.4}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Ownership</h4>
                  <p className="text-primary-200 leading-relaxed">
                    LOFJET retains ownership of all intellectual property related to our AI tools, models, and proprietary technology. 
                    Any custom work (e.g., websites, chatbots) created for you remains your property upon full payment.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">License</h4>
                  <p className="text-primary-200 leading-relaxed">
                    We grant you a non-exclusive, non-transferable license to use our Services for your business purposes. 
                    You may not resell, reverse-engineer, or modify our tools without written consent.
                  </p>
                </div>
              </div>
            </TermsSection>

            {/* Section 6: Limitations of Liability */}
            <TermsSection
              icon={<Shield className="h-6 w-6 text-primary-400" />}
              title="6. Limitations of Liability"
              delay={0.5}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
                    No Guarantees
                  </h4>
                  <p className="text-primary-200 leading-relaxed">
                    While we strive for excellence, we do not guarantee specific results (e.g., lead quality, conversion rates) 
                    as outcomes depend on various factors beyond our control.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <DollarSign className="h-5 w-5 text-orange-400 mr-2" />
                    Liability Cap
                  </h4>
                  <p className="text-primary-200 leading-relaxed">
                    Our total liability for any claims related to the Services is limited to the amount you paid for the Services in the last 12 months.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Ban className="h-5 w-5 text-red-400 mr-2" />
                    No Indirect Damages
                  </h4>
                  <p className="text-primary-200 leading-relaxed">
                    We are not liable for indirect, incidental, or consequential damages (e.g., lost profits, data loss) arising from the use of our Services.
                  </p>
                </div>
              </div>
            </TermsSection>

            {/* Section 7: Dispute Resolution */}
            <TermsSection
              icon={<Gavel className="h-6 w-6 text-primary-400" />}
              title="7. Dispute Resolution"
              delay={0.6}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Arbitration</h4>
                  <p className="text-primary-200 leading-relaxed">
                    Any disputes arising from these ToS or the Services will be resolved through binding arbitration in Ukraine, 
                    following the rules of the Ukrainian Chamber of Commerce and Industry.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Governing Law</h4>
                  <p className="text-primary-200 leading-relaxed">
                    These ToS are governed by the laws of Ukraine. You agree to submit to the jurisdiction of Ukrainian courts 
                    for any legal proceedings not covered by arbitration.
                  </p>
                </div>
              </div>
            </TermsSection>

            {/* Section 8: User Conduct */}
            <TermsSection
              icon={<UserX className="h-6 w-6 text-primary-400" />}
              title="8. User Conduct"
              delay={0.7}
            >
              <p className="text-primary-200 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Ban className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Use our Services for illegal activities.</span>
                </li>
                <li className="flex items-start">
                  <Ban className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Interfere with or disrupt the functionality of our website or Services.</span>
                </li>
                <li className="flex items-start">
                  <Ban className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Attempt to gain unauthorized access to our systems or data.</span>
                </li>
                <li className="flex items-start">
                  <Ban className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Misrepresent your identity or business when interacting with us.</span>
                </li>
              </ul>
            </TermsSection>

            {/* Section 9: Termination */}
            <TermsSection
              icon={<AlertCircle className="h-6 w-6 text-primary-400" />}
              title="9. Termination"
              delay={0.8}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">By You</h4>
                  <p className="text-primary-200 leading-relaxed">
                    You may terminate your use of our Services at any time by notifying us in writing. 
                    Termination will be effective upon completion of any ongoing projects, unless otherwise agreed.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">By Us</h4>
                  <p className="text-primary-200 leading-relaxed">
                    We may terminate or suspend your access to the Services immediately, without prior notice, 
                    if you violate these ToS, fail to make payments, or misuse our tools. We will provide notice where possible.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Effect of Termination</h4>
                  <p className="text-primary-200 leading-relaxed">
                    Upon termination, you must cease using our Services, and any outstanding fees become immediately due.
                  </p>
                </div>
              </div>
            </TermsSection>

            {/* Section 10: Changes to Terms */}
            <TermsSection
              icon={<RefreshCw className="h-6 w-6 text-primary-400" />}
              title="10. Changes to These Terms"
              delay={0.9}
            >
              <p className="text-primary-200 leading-relaxed mb-4">
                We may update these ToS from time to time. If we make significant changes, we will notify you via email or a website notice. 
                Your continued use of our Services after such changes constitutes acceptance of the updated terms.
              </p>
            </TermsSection>

            {/* Section 11: Contact Information */}
            <TermsSection
              icon={<Mail className="h-6 w-6 text-primary-400" />}
              title="11. Contact Us"
              delay={1.0}
            >
              <p className="text-primary-200 leading-relaxed mb-4">
                For questions or concerns about these ToS, please contact us at:
              </p>
              <div className="bg-primary-500/10 border border-primary-400/20 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Mail className="h-5 w-5 text-primary-400 mr-3" />
                  <span className="text-primary-400 font-semibold text-lg">info@loftjet.com</span>
                </div>
              </div>
            </TermsSection>

          </div>
        </div>
      </section>
      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Now that you understand our terms, let's build your AI automation solution.
            </motion.p>
            <motion.a 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Bot className="h-6 w-6 mr-3" />
              Start Your AI Project
              <ArrowRight className="h-6 w-6 ml-3" />
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

interface TermsSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay: number;
}

const TermsSection: React.FC<TermsSectionProps> = ({ icon, title, children, delay }) => {
  return (
    <motion.div 
      className="mb-12 bg-secondary-900/50 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8 hover:bg-secondary-900/70 hover:border-primary-400/30 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        {icon}
        <span className="ml-3">{title}</span>
      </h2>
      {children}
    </motion.div>
  );
};

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start bg-secondary-800/50 rounded-lg p-4">
      <div className="flex-shrink-0 mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white mb-2">{title}</h4>
        <p className="text-primary-200 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TermsPage;