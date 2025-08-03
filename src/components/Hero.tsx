import { useState, useEffect, memo, useCallback } from 'react';
import { ArrowRight, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ShapeDivider from './ShapeDivider';

const Hero = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    console.warn('Hero image failed to load');
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 pt-20 pb-8">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-30 animate-pulse-gentle"></div>
        <div className="absolute top-1/2 -left-40 w-64 h-64 bg-accent-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-primary-200 rounded-full opacity-25"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-16">
          
          {/* Left side - Content */}
          <div className="space-y-6">
            {/* Partner Logos */}
            <div className={`transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Our Partner Network
                </div>
                <div className="flex items-center gap-6">
                  <img 
                    src="/microsoft-partner-logo.png" 
                    alt="Microsoft Partner" 
                    className="h-8 w-auto opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                  />
                  <img 
                    src="/snowflake-partner-logo.png" 
                    alt="Snowflake Partner" 
                    className="h-8 w-auto opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                  />
                  <img 
                    src="/databricks-partner.png" 
                    alt="Databricks Partner" 
                    className="h-8 w-auto opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div className={`transform transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-neutral-900">
                It's your{' '}
                <span className="text-accent-500">data.</span>
                <span className="block text-primary-600 text-4xl md:text-5xl lg:text-6xl font-semibold mt-2">
                  We'll help you unlock its value.
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className={`transform transition-all duration-700 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <p className="text-xl md:text-2xl leading-relaxed text-neutral-600 max-w-2xl">
                Transform your organisation with enterprise-grade data analytics and AI solutions. 
                Simple, secure, and scalable.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Link
                to="/contact"
                className="btn btn-primary btn-lg group"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/what-we-do"
                className="btn btn-outline btn-lg"
              >
                Explore Solutions
              </Link>
            </div>

          </div>

          {/* Right side - Visual */}
          <div className="relative lg:block hidden">
            {/* Hero Image */}
            <div className="relative">
              <img 
                src="/datasing_hero.jpg" 
                alt="DataSing - Data Analytics and AI Solutions"
                className={`w-full h-auto object-cover rounded-2xl shadow-soft border border-neutral-200 transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="eager"
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              {!imageLoaded && (
                <div className="w-full h-80 bg-neutral-200 animate-pulse rounded-2xl flex items-center justify-center">
                  <div className="text-neutral-500 text-lg">Loading...</div>
                </div>
              )}
              
              {/* Floating stats cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-medium p-4 border border-neutral-200 animate-float">
                <div className="text-primary-600 font-bold text-2xl">100+</div>
                <div className="text-neutral-600 text-sm">Projects</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-medium p-4 border border-neutral-200 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="text-accent-600 font-bold text-2xl">50+</div>
                <div className="text-neutral-600 text-sm">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Shape Divider */}
      <ShapeDivider type="gradient-wave" animated={true} flip={true} />
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero; 