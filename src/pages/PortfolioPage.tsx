import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Perfume Marketplace Success",
    description: "Boosted sales by 25% and reduced support costs by 30% with a multilingual chatbot.",
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "E-commerce",
    results: [
      "25% increase in sales",
      "30% reduction in support costs",
      "4.8/5 customer satisfaction"
    ]
  },
  {
    id: 2,
    title: "E-commerce Growth",
    description: "Drove $12,000 in monthly revenue with upselling and AR features.",
    image: "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Retail",
    results: [
      "$12,000 monthly revenue increase",
      "22% higher average order value",
      "15-minute reduction in service time"
    ]
  },
  {
    id: 3,
    title: "Beauty Brand Engagement",
    description: "Created an interactive scent quiz that increased time on site by 230%.",
    image: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Beauty",
    results: [
      "230% increase in time on site",
      "35% higher engagement rate",
      "25,000 quiz completions in 3 months"
    ]
  },
  {
    id: 4,
    title: "Niche Fragrance Retailer",
    description: "Implemented a 24/7 support chatbot with product recommendations.",
    image: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Retail",
    results: [
      "Saved $3,200/month in support costs",
      "5-minute average response time",
      "18% increase in cross-sells"
    ]
  },
  {
    id: 5,
    title: "Luxury Brand Assistant",
    description: "Created a personalized shopping assistant for a high-end fragrance brand.",
    image: "https://images.pexels.com/photos/6044457/pexels-photo-6044457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Luxury",
    results: [
      "40% conversion rate for qualified leads",
      "120% ROI within first month",
      "95% positive feedback rate"
    ]
  },
  {
    id: 6,
    title: "Wellness Marketplace",
    description: "Developed a multilingual chatbot for a global wellness products marketplace.",
    image: "https://images.pexels.com/photos/3865545/pexels-photo-3865545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Wellness",
    results: [
      "Expanded to 5 new markets",
      "200+ daily chatbot interactions",
      "20% reduction in cart abandonment"
    ]
  }
];

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = React.useState('All');
  const categories = ['All', 'E-commerce', 'Retail', 'Beauty', 'Luxury', 'Wellness'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-secondary-900">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/50 to-secondary-900"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Proven Results from Real Projects
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore our case studies to see how we've helped businesses across industries 
              transform their operations and drive growth with AI solutions.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === category
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title">Trusted by Industry Leaders</h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Luxury Scents', 'FragranceWorld', 'EssenceHub', 'Aroma Plus', 'ScentSavvy', 'PerfumePro'].map((name, index) => (
              <div key={index} className="text-gray-500 font-bold text-xl md:text-2xl">
                {name}
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <div className="bg-white rounded-lg shadow-sm p-6 max-w-xl text-center">
              <p className="text-2xl font-bold text-blue-800 mb-3">200+ Happy Customers</p>
              <p className="text-gray-600">
                From small boutiques to enterprise marketplaces, we've helped businesses of all sizes achieve their goals with AI.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to become our next success story?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let's discuss how our AI solutions can help your business achieve similar results.
            </p>
            <a href="/contact" className="btn-primary bg-white text-blue-800 hover:bg-blue-100">
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    results: string[];
  };
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-blue-800 text-white text-sm px-3 py-1 rounded-full">
          {project.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-6">{project.description}</p>
        
        <div className={`space-y-3 ${isExpanded ? 'block' : 'hidden'}`}>
          <h4 className="font-semibold text-gray-800">Key Results:</h4>
          <ul className="space-y-2">
            {project.results.map((result, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{result}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-blue-500 font-semibold hover:text-blue-700 transition flex items-center"
        >
          {isExpanded ? 'Show Less' : 'See Results'}
          <svg 
            className={`w-4 h-4 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;