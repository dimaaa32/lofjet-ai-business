import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  Database, 
  Mail, 
  Globe, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Calendar,
  Settings,
  UserCheck,
  Trash2,
  Download,
  Ban,
  Cookie,
  Bot,
  ArrowRight
} from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
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
              <Shield className="h-12 w-12 text-primary-400 mr-4" />
              <span className="text-primary-400 font-bold text-lg uppercase tracking-wider">Privacy Policy</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-primary-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your Privacy Matters
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're committed to protecting your personal information and being transparent about how we use it.
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
                <span>Global Coverage</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
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
                    <h3 className="font-semibold text-white mb-1">What We Collect</h3>
                    <p className="text-primary-200 text-sm">Name, email, website, service preferences, and business challenges you share with us.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">How We Use It</h3>
                    <p className="text-primary-200 text-sm">To deliver AI services, respond to inquiries, and improve our offerings.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Your Rights</h3>
                    <p className="text-primary-200 text-sm">Access, correct, delete, or restrict how we use your data.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Security</h3>
                    <p className="text-primary-200 text-sm">Encryption, secure servers, and regular security audits protect your data.</p>
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
            <PolicySection
              icon={<Bot className="h-6 w-6 text-primary-400" />}
              title="1. Introduction"
              delay={0}
            >
              <p className="text-primary-200 leading-relaxed mb-4">
                At LOFJET, an AI automation agency based in Ukraine and serving clients worldwide, we value your privacy. 
                This Privacy Policy explains how we collect, use, and protect your personal information when you visit our 
                website (loftjet.com) or use our services, including AI Chatbots, AI Voice Callers, AI Lead Generation, 
                Personalized Outreach, and Website Creation.
              </p>
              <p className="text-primary-200 leading-relaxed">
                By interacting with us, you agree to this policy.
              </p>
            </PolicySection>

            {/* Section 2: Information We Collect */}
            <PolicySection
              icon={<Database className="h-6 w-6 text-primary-400" />}
              title="2. Information We Collect"
              delay={0.1}
            >
              <p className="text-primary-200 leading-relaxed mb-6">
                We collect the following personal information through our contact form and website:
              </p>
              
              <div className="space-y-4">
                <DataItem 
                  icon={<Users className="h-5 w-5 text-blue-400" />}
                  title="First Name"
                  description="To personalize our communications with you."
                />
                <DataItem 
                  icon={<Mail className="h-5 w-5 text-green-400" />}
                  title="Email Address"
                  description="To reply to your inquiries and send service updates."
                />
                <DataItem 
                  icon={<Globe className="h-5 w-5 text-purple-400" />}
                  title="Website URL"
                  description="To analyze your business and tailor our AI solutions."
                />
                <DataItem 
                  icon={<Settings className="h-5 w-5 text-orange-400" />}
                  title="Service Preferences"
                  description="Details about the services you're interested in (e.g., chatbots, lead generation)."
                />
                <DataItem 
                  icon={<FileText className="h-5 w-5 text-pink-400" />}
                  title="Business Challenges"
                  description="Information you share about your business to help us craft a custom AI strategy."
                />
              </div>
              
              <p className="text-primary-200 leading-relaxed mt-6">
                We may also collect data via cookies or tracking technologies (see Section 9).
              </p>
            </PolicySection>

            {/* Section 3: How We Use Your Information */}
            <PolicySection
              icon={<Settings className="h-6 w-6 text-primary-400" />}
              title="3. How We Use Your Information"
              delay={0.2}
            >
              <p className="text-primary-200 leading-relaxed mb-4">
                We use your personal information to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Deliver the AI services you request, such as building chatbots or generating leads.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Respond to your questions and provide support.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Improve our website and services.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Send marketing emails about new features or offers (only with your consent).</span>
                </li>
              </ul>
            </PolicySection>

            {/* Section 4: Data Sharing */}
            <PolicySection
              icon={<Users className="h-6 w-6 text-primary-400" />}
              title="4. Data Sharing"
              delay={0.3}
            >
              <p className="text-primary-200 leading-relaxed mb-4">
                We may share your information with trusted third parties who help us provide our services, such as:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">AI tool providers (e.g., for chatbot development or lead scraping).</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Hosting services (e.g., Netlify for our website).</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Marketing platforms (e.g., for email outreach).</span>
                </li>
              </ul>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-200 font-semibold">
                  These partners are required to protect your data and use it only as we direct. We do not sell your information to anyone.
                </p>
              </div>
            </PolicySection>

            {/* Section 5: Data Retention */}
            <PolicySection
              icon={<Calendar className="h-6 w-6 text-primary-400" />}
              title="5. Data Retention"
              delay={0.4}
            >
              <p className="text-primary-200 leading-relaxed mb-4">
                We keep your personal information only as long as needed for the purposes outlined above or as required by law. For example:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Contact form data is retained until your inquiry is resolved.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Service data is kept for the duration of our business relationship.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Marketing data is stored until you unsubscribe.</span>
                </li>
              </ul>
            </PolicySection>

            {/* Section 6: Your Rights */}
            <PolicySection
              icon={<UserCheck className="h-6 w-6 text-primary-400" />}
              title="6. Your Rights"
              delay={0.5}
            >
              <p className="text-primary-200 leading-relaxed mb-6">
                If you're in the EU or another region with similar laws, you have rights under GDPR, including:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RightItem 
                  icon={<Eye className="h-5 w-5 text-blue-400" />}
                  title="Access"
                  description="See what data we have about you."
                />
                <RightItem 
                  icon={<Settings className="h-5 w-5 text-green-400" />}
                  title="Rectification"
                  description="Fix incorrect data."
                />
                <RightItem 
                  icon={<Trash2 className="h-5 w-5 text-red-400" />}
                  title="Erasure"
                  description="Delete your data."
                />
                <RightItem 
                  icon={<Ban className="h-5 w-5 text-orange-400" />}
                  title="Restriction"
                  description="Limit how we use your data."
                />
                <RightItem 
                  icon={<Download className="h-5 w-5 text-purple-400" />}
                  title="Portability"
                  description="Get your data in a usable format."
                />
                <RightItem 
                  icon={<AlertTriangle className="h-5 w-5 text-yellow-400" />}
                  title="Objection"
                  description="Stop us from using your data for marketing."
                />
              </div>
              
              <div className="bg-primary-500/10 border border-primary-400/20 rounded-lg p-4 mt-6">
                <p className="text-primary-200">
                  To exercise these rights, email us at <span className="text-primary-400 font-semibold">info@loftjet.com</span>.
                </p>
              </div>
            </PolicySection>

            {/* Section 7: Security Measures */}
            <PolicySection
              icon={<Lock className="h-6 w-6 text-primary-400" />}
              title="7. Security Measures"
              delay={0.6}
            >
              <p className="text-primary-200 leading-relaxed mb-4">
                We protect your data with:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Encryption for sensitive information.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Secure servers for storage.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Regular security checks.</span>
                </li>
              </ul>
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-200">
                  While we strive to keep your data safe, no online system is 100% secure. Please be cautious when sharing information online.
                </p>
              </div>
            </PolicySection>

            {/* Section 8: AI-Specific Considerations */}
            <PolicySection
              icon={<Bot className="h-6 w-6 text-primary-400" />}
              title="8. AI-Specific Considerations"
              delay={0.7}
            >
              <p className="text-primary-200 leading-relaxed mb-4">
                Our AI services (e.g., lead generation, chatbots) may process data from third-party sources like LinkedIn or Google Maps. We ensure:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Compliance with privacy laws.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Use of only necessary data for your requested services.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200">Third-party AI tools meet privacy standards.</span>
                </li>
              </ul>
            </PolicySection>

            {/* Section 9: Cookies and Tracking */}
            <PolicySection
              icon={<Cookie className="h-6 w-6 text-primary-400" />}
              title="9. Cookies and Tracking Technologies"
              delay={0.8}
            >
              <p className="text-primary-200 leading-relaxed mb-4">
                If we use cookies or similar tools, they may include:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200"><strong>Essential Cookies:</strong> To make our website work.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200"><strong>Analytics Cookies:</strong> To track site usage (e.g., via Google Analytics—if applicable).</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-200"><strong>Marketing Cookies:</strong> To show relevant ads (if applicable).</span>
                </li>
              </ul>
              <p className="text-primary-200 leading-relaxed">
                You can control cookies through your browser settings, but disabling them may affect your experience.
              </p>
            </PolicySection>

            {/* Section 10: Contact Us */}
            <PolicySection
              icon={<Mail className="h-6 w-6 text-primary-400" />}
              title="10. Contact Us"
              delay={0.9}
            >
              <p className="text-primary-200 leading-relaxed mb-4">
                For questions or privacy concerns, reach out to:
              </p>
              <div className="bg-primary-500/10 border border-primary-400/20 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Mail className="h-5 w-5 text-primary-400 mr-3" />
                  <span className="text-primary-400 font-semibold text-lg">info@loftjet.com</span>
                </div>
                <p className="text-primary-200">
                  We'll respond within 30 days.
                </p>
              </div>
            </PolicySection>

            {/* Section 11: Changes to This Policy */}
            <PolicySection
              icon={<FileText className="h-6 w-6 text-primary-400" />}
              title="11. Changes to This Policy"
              delay={1.0}
            >
              <p className="text-primary-200 leading-relaxed">
                We may update this policy as our services or laws change. Check this page for the latest version. 
                Your continued use of our services means you accept any updates.
              </p>
            </PolicySection>

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
              Questions About Your Privacy?
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We're here to help. Reach out anytime with privacy questions or concerns.
            </motion.p>
            <motion.a 
              href="mailto:info@loftjet.com"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Mail className="h-6 w-6 mr-3" />
              Contact Our Privacy Team
              <ArrowRight className="h-6 w-6 ml-3" />
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

interface PolicySectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay: number;
}

const PolicySection: React.FC<PolicySectionProps> = ({ icon, title, children, delay }) => {
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

interface DataItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DataItem: React.FC<DataItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start bg-secondary-800/50 rounded-lg p-4">
      <div className="flex-shrink-0 mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-primary-200 text-sm">{description}</p>
      </div>
    </div>
  );
};

interface RightItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const RightItem: React.FC<RightItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start bg-secondary-800/50 rounded-lg p-4">
      <div className="flex-shrink-0 mr-3">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-primary-200 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;