import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { AuroraBackground } from '../ui/aurora-background';
import { MessageSquare, Phone, Target, Mail, Monitor, Sparkles, ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const controls = useAnimation();

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => setIsButtonClicked(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-secondary-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/50 to-secondary-900"></div>
      
      {/* Enhanced Background with Jet-Speed Elements */}
      <AuroraBackground className="min-h-screen">
        {/* Floating Data Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Speed Lines - Jet-like Movement */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-400/20 to-transparent"
            animate={{
              x: ['-100%', '200%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 7,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-300/15 to-transparent"
            animate={{
              x: ['-100%', '200%'],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 8,
              delay: 1,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container-custom relative z-10 h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pt-20 lg:pt-0"
            >
              {/* Enhanced Animated Headline */}
              <div className="mb-6">
                {/* "Your" with subtle entrance */}
                <motion.span
                  className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Your
                </motion.span>

                {/* "24/7" with glowing pulse */}
                <motion.span
                  className="block text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.span
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(123, 92, 255, 0.3)",
                        "0 0 20px rgba(123, 92, 255, 0.6)",
                        "0 0 10px rgba(123, 92, 255, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    24/7
                  </motion.span>
                </motion.span>

                {/* "Sales Engine" with speed trail effect */}
                <div className="relative overflow-hidden">
                  <motion.span
                    className="block text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-cyan-400"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.8,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    Sales Engine
                  </motion.span>
                  
                  {/* Speed trail effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400/20 to-transparent"
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: '100%', opacity: [0, 1, 0] }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.8,
                      ease: "easeOut"
                    }}
                  />
                </div>

                {/* Animated underline - flight path */}
                <motion.div
                  className="relative mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <motion.div
                    className="h-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 1.5,
                      ease: "easeOut"
                    }}
                  />
                  {/* Glowing dot at the end */}
                  <motion.div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0.7], 
                      scale: [0, 1.5, 1],
                      boxShadow: [
                        "0 0 0px rgba(34, 211, 238, 0)",
                        "0 0 10px rgba(34, 211, 238, 0.8)",
                        "0 0 5px rgba(34, 211, 238, 0.6)"
                      ]
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 2.5
                    }}
                  />
                </motion.div>
              </div>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Plug-and-profit machines that sell, support, and follow up at a level no team can match
              </motion.p>
              
              {/* Enhanced CTA Button with Dopamine Feedback */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/contact" 
                    onClick={handleButtonClick}
                    className="group relative px-8 py-3 rounded-lg bg-primary-500 text-white font-semibold transition-all duration-300 text-center shadow-glow hover:shadow-glow-lg flex items-center justify-center overflow-hidden"
                  >
                    {/* Animated background gradient on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 via-blue-500 to-primary-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    
                    {/* Button content */}
                    <div className="relative z-10 flex items-center">
                      <motion.div
                        animate={isButtonClicked ? {
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        } : {}}
                        transition={{ duration: 0.6 }}
                      >
                        <Sparkles className="h-6 w-6 mr-3" />
                      </motion.div>
                      
                      <span>
                        {isButtonClicked ? "System Initializing..." : "Get My Free Plan + Demo"}
                      </span>
                      
                      <motion.div
                        className="ml-3"
                        animate={{
                          x: [0, 3, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowRight className="h-6 w-6" />
                      </motion.div>
                    </div>

                    {/* Loading pulse effect when clicked */}
                    {isButtonClicked && (
                      <motion.div
                        className="absolute inset-0 bg-primary-400/30"
                        animate={{
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: 2,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </Link>
                </motion.div>

                <Link 
                  to="/services" 
                  className="px-8 py-3 rounded-lg border-2 border-primary-400 text-primary-400 hover:bg-primary-400/10 transition-all duration-300 text-center"
                >
                  See How It Works
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Enhanced Right Side - Custom Image */}
            <motion.div
              className="relative px-4 lg:px-0 mt-8 lg:mt-0 hidden lg:block"
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Main Container */}
              <div className="relative w-full max-w-lg mx-auto">
                {/* Enhanced Image Container with Stunning Effects */}
                <motion.div
                  className="relative w-full h-96 mx-auto overflow-hidden rounded-3xl"
                  animate={{
                    rotateY: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: 'linear-gradient(45deg, #845AFF, #00D4FF, #845AFF, #7C3AED)',
                      backgroundSize: '400% 400%',
                      padding: '3px',
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
                    <div className="w-full h-full rounded-3xl bg-secondary-900 overflow-hidden">
                      {/* Main Image with Effects */}
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src="/assets/ChatGPT Image 16 июн. 2025 г., 12_58_24.png"
                          alt="AI Revenue Engine Visualization"
                          className="w-full h-full object-cover object-center"
                          style={{ 
                            objectPosition: 'center center',
                            objectFit: 'cover'
                          }}
                        />
                        
                        {/* Overlay Effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 via-transparent to-transparent"></div>

                        {/* Scanning Line Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-8"
                          animate={{
                            y: ['-2rem', 'calc(100% + 2rem)'],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 2
                          }}
                        />

                        {/* Holographic Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
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

                {/* Enhanced Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-3xl scale-150 -z-10"></div>
                
                {/* Pulsing Ring Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3],
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
      </AuroraBackground>
    </div>
  );
};

export default Hero;