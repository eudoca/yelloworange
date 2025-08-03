import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WhatWeDo from './pages/WhatWeDo';
import Industries from './pages/Industries';
import WhoWeAre from './pages/WhoWeAre';
import JoinDataSing from './pages/JoinDataSing';
import Insights from './pages/Insights';
import Training from './pages/Training';
import Contact from './components/Contact';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-black border-t-transparent animate-spin"></div>
          <div className="text-2xl font-semibold text-black">DataSing</div>
          <div className="text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>DataSing - Your Azure data, analytics & AI specialists</title>
        <meta name="description" content="DataSing helps you build your data and analytical capabilities in a simple, secure and affordable way." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header isScrolled={isScrolled} />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/join-datasing" element={<JoinDataSing />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/training" element={<Training />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default App;