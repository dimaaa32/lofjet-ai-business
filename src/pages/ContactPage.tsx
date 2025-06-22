import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, MessageSquare, User, Mail, Globe, CheckCircle, Bot, Sparkles, ArrowRight, Clock, Shield, Phone, Target, Monitor, HelpCircle, ChevronDown } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    website: '',
    services: [] as string[],
    challenge: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [touched, setTouched] = useState({
    firstName: false,
    email: false,
    website: false,
    services: false,
    challenge: false
  });

  // Validate form fields
  const isFormValid = () => {
    return (
      formData.firstName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.website.trim() !== '' &&
      formData.services.length > 0 &&
      formData.challenge.trim() !== ''
    );
  };

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (fieldName: string) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
    setTouched(prev => ({
      ...prev,
      services: true
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched to show red outlines for empty fields
    setTouched({
      firstName: true,
      email: true,
      website: true,
      services: true,
      challenge: true
    });

    // Prevent submission if form is invalid
    if (!isFormValid()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const webhookPayload = {
        firstName: formData.firstName,
        email: formData.email,
        website: formData.website,
        services: formData.services,
        challenge: formData.challenge,
        timestamp: new Date().toISOString(),
        source: 'LOFJET Contact Form'
      };

      const webhookResponse = await fetch('https://hook.eu2.make.com/98ikerae9uigwa3fujwn6q66qolwyxki', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload),
      });

      if (!webhookResponse.ok) {
        console.warn('Webhook failed, but continuing with form submission');
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData({ firstName: '', email: '', website: '', services: [], challenge: '' });
      setTouched({ firstName: false, email: false, website: false, services: false, challenge: false });
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitted(true);
      setFormData({ firstName: '', email: '', website: '', services: [], challenge: '' });
      setTouched({ firstName: false, email: false, website: false, services: false, challenge: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    {
      id: 'chatbot',
      icon: <MessageSquare className="h-4 w-4" />,
      title: 'AI Chatbot',
      description: 'Automated 24/7 chat to capture leads, answer questions, and close sales.'
    },
    {
      id: 'voice-caller',
      icon: <Phone className="h-4 w-4" />,
      title: 'AI Voice Caller',
      description: 'AI that sounds human — books calls, qualifies leads, follows up automatically.'
    },
    {
      id: 'lead-generation',
      icon: <Target className="h-4 w-4" />,
      title: 'Lead Generation System',
      description: 'Done-for-you lead flow: targeting, outreach, and conversion — handled.'
    },
    {
      id: 'outreach',
      icon: <Mail className="h-4 w-4" />,
      title: 'AI Outreach Engine',
      description: 'Cold emails & DMs that sound human, follow up smart, and book real calls.'
    },
    {
      id: 'website',
      icon: <Monitor className="h-4 w-4" />,
      title: 'AI Website Creation',
      description: 'Fast, conversion-first sites built with modern UI — launch in days.'
    },
    {
      id: 'not-sure',
      icon: <HelpCircle className="h-4 w-4" />,
      title: 'Not sure — just want the best strategy for my business',
      description: 'We\'ll analyze your business and recommend the perfect AI stack.',
      isBonus: true
    }
  ];

  const getSelectedServicesText = () => {
    if (formData.services.length === 0) return 'Select services you need help with...';
    if (formData.services.length === 1) {
      const service = serviceOptions.find(s => s.id === formData.services[0]);
      return service?.title || '';
    }
    return `${formData.services.length} services selected`;
  };

  const getInputBorderClass = (field: string, value: string | string[]) => {
    if (!touched[field]) return '';
    if (Array.isArray(value)) {
      return value.length > 0 ? 'ring-1 ring-green-500' : 'ring-1 ring-red-500';
    }
    return value.trim() ? 'ring-1 ring-green-500' : 'ring-1 ring-red-500';
  };

  return (
    <div className="min-h-screen bg-[#0A0A1F] text-white">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#845AFF]/10 via-transparent to-purple-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#845AFF_0%,_transparent_50%)] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#845AFF_0%,_transparent_50%)] opacity-10"></div>
        
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-[#845AFF]/10 rounded-full blur-2xl"
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
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl"
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
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#845AFF] to-purple-400 leading-[1.1]">
             Ready for Takeoff?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Get your AI revenue system built in days, not months.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 md:p-12 hover:bg-gray-900/70 hover:border-[#845AFF]/30 transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-[#845AFF]/20 border border-[#845AFF]/30 mb-6">
                  <span className="text-2xl">💬</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                 Turn On Your AI Profit Engine
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Free strategy & demo - see exactly how we automate your sales machine
                </p>
              </div>

              {isSubmitted ? (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="relative mb-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  >
                    <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-6 relative">
                      <CheckCircle className="h-12 w-12 text-white" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-green-400/30"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-green-400/20"
                        animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Boom - Your Free AI Revenue Plan Is in Motion
                    </h3>
                    <p className="text-xl text-[#845AFF] font-semibold mb-6">
                      Let's take this from idea… to income.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-gray-800/50 rounded-2xl p-6 mb-8 border border-gray-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-center">
                        <Clock className="h-6 w-6 text-[#845AFF] mr-3" />
                        <span className="text-gray-300">
                          You'll get a personalized strategy within <span className="text-white font-semibold">24–48 hours</span>.
                        </span>
                      </div>
                      
                      <div className="flex items-start justify-center">
                        <Calendar className="h-6 w-6 text-[#845AFF] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-center">
                          If we see a <span className="text-white font-semibold">strong fit</span>, you'll get a call invite to <span className="text-white font-semibold">move things forward</span>.
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <Shield className="h-6 w-6 text-[#845AFF] mr-3" />
                        <span className="text-gray-300"> You'll get 
                          <span className="text-white font-semibold"> clarity</span>, not a sales pitch.
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-[#845AFF] hover:text-purple-400 font-semibold transition-colors underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    Submit Another Request
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-300 mb-2">
                      1. First name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('firstName')}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-800/50 border-none rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#845AFF] transition-all duration-300 ${getInputBorderClass('firstName', formData.firstName)}`}
                        placeholder="Who’s leading this?"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      2. Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('email')}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-800/50 border-none rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#845AFF] transition-all duration-300 ${getInputBorderClass('email', formData.email)}`}
                        placeholder="Where do we send your plan?"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-gray-300 mb-2">
                      3. Your business’s website/social media
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('website')}
                        pattern="^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$"
                        className={`w-full pl-12 pr-4 py-4 bg-gray-800/50 border-none rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#845AFF] transition-all duration-300 ${getInputBorderClass('website', formData.website)}`}
                        placeholder="Where can we analyze your setup?"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      4. What machines do you need running?
                    </label>
                    <p className="text-sm text-gray-400 mb-3">
                      Choose your systems - we’ll engineer your full revenue build.
                    </p>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        onBlur={() => handleBlur('services')}
                        className={`w-full px-4 py-4 bg-gray-800/50 border-none rounded-xl text-left text-white focus:outline-none focus:ring-2 focus:ring-[#845AFF] transition-all duration-300 ${getInputBorderClass('services', formData.services)} flex items-center justify-between`}
                      >
                        <span className={formData.services.length === 0 ? 'text-gray-400' : 'text-white'}>
                          {getSelectedServicesText()}
                        </span>
                        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto"
                        >
                          {serviceOptions.map((service) => (
                            <div
                              key={service.id}
                              onClick={() => handleServiceToggle(service.id)}
                              className={`p-4 cursor-pointer transition-all duration-200 hover:bg-gray-700/50 flex items-start space-x-3 ${
                                service.isBonus ? 'border-t border-gray-700/50' : ''
                              } ${formData.services.includes(service.id) ? 'bg-[#845AFF]/10' : ''}`}
                            >
                              <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 transition-all duration-200 ${
                                formData.services.includes(service.id)
                                  ? 'border-[#845AFF] bg-[#845AFF]'
                                  : 'border-gray-500'
                              }`}>
                                {formData.services.includes(service.id) && (
                                  <CheckCircle className="h-3 w-3 text-white" />
                                )}
                              </div>
                              <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                                formData.services.includes(service.id)
                                  ? 'bg-[#845AFF]/20 text-[#845AFF]'
                                  : 'bg-gray-700/50 text-gray-400'
                              }`}>
                                {service.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h4 className={`font-semibold text-sm transition-colors duration-200 ${
                                    formData.services.includes(service.id) ? 'text-[#845AFF]' : 'text-white'
                                  }`}>
                                    {service.title}
                                  </h4>
                                  {service.isBonus && (
                                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full font-medium">
                                      Bonus
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                    {formData.services.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {formData.services.map((serviceId) => {
                          const service = serviceOptions.find(s => s.id === serviceId);
                          return service ? (
                            <span
                              key={serviceId}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#845AFF]/20 text-[#845AFF] border border-[#845AFF]/30"
                            >
                              {service.icon}
                              <span className="ml-2">{service.title}</span>
                              <button
                                type="button"
                                onClick={() => handleServiceToggle(serviceId)}
                                className="ml-2 hover:text-white transition-colors"
                              >
                                ×
                              </button>
                            </span>
                          ) : null;
                        })}
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="challenge" className="block text-sm font-semibold text-gray-300 mb-2">
                      5. What’s blocking your revenue right now?
                    </label>
                    <p className="text-sm text-gray-400 mb-3">
                     Tell us where it’s stuck — we’ll build the fix that prints sales.
                    </p>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                      <textarea
                        id="challenge"
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('challenge')}
                        rows={6}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#845AFF] transition-all duration-300 resize-none ${getInputBorderClass('challenge', formData.challenge)}`}
                        placeholder="Be specific. The more context you give, the better the strategy you'll get."
                      />
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    className="group w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#845AFF] to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="text-xl mr-3">🔥</span>
                        Get My Free AI Revenue Plan
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
            <motion.div
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 md:p-12 hover:bg-gray-900/70 hover:border-[#845AFF]/30 transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-green-500/20 border border-green-400/30 mb-6">
                  <Calendar className="h-8 w-8 text-green-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Prefer to Talk First?
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Schedule a 15-min intro call with our founder.
                </p>
              </div>
              <div className="bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50">
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/dimitriirozhkov/15-minute-call" 
                  style={{ minWidth: '290px', height: '830px' }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
