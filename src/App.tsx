import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { BackToTopButton, MobilePerformanceMonitor } from './components/common/MobileOptimization';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ChatbotsPage from './pages/ChatbotsPage';
import VoiceAgentsPage from './pages/VoiceAgentsPage';
import LeadGenerationPage from './pages/LeadGenerationPage';
import OutreachPage from './pages/OutreachPage';
import WebsitesPage from './pages/WebsitesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import ScrollToTop from './components/common/ScrollToTop';

// Import mobile optimizations CSS
import './styles/mobile-optimizations.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/chatbots" element={<ChatbotsPage />} />
            <Route path="/voice-agents" element={<VoiceAgentsPage />} />
            <Route path="/lead-generation" element={<LeadGenerationPage />} />
            <Route path="/outreach" element={<OutreachPage />} />
            <Route path="/websites" element={<WebsitesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Mobile Optimization Components */}
        <BackToTopButton />
        <MobilePerformanceMonitor />
      </div>
    </Router>
  );
}

export default App;