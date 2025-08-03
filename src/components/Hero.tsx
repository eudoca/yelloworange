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
    <section className="relative min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 pt-20">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-30 animate-pulse-gentle"></div>
        <div className="absolute top-1/2 -left-40 w-64 h-64 bg-accent-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-primary-200 rounded-full opacity-25"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Partner Logos */}
            <div className={`transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-neutral-600">Trusted by industry leaders</span>
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
                See a Demo
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
            {/* Modern data visualization placeholder */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-soft border border-neutral-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-neutral-900">Analytics Dashboard</h3>
                    <BarChart3 className="w-6 h-6 text-primary-500" />
                  </div>
                  
                  {/* Fake chart bars */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="text-sm text-neutral-600 w-16">Jan</div>
                      <div className="flex-1 bg-neutral-100 rounded-full h-2">
                        <div className="bg-primary-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm text-neutral-600 w-16">Feb</div>
                      <div className="flex-1 bg-neutral-100 rounded-full h-2">
                        <div className="bg-primary-500 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm text-neutral-600 w-16">Mar</div>
                      <div className="flex-1 bg-neutral-100 rounded-full h-2">
                        <div className="bg-accent-500 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
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
      <ShapeDivider type="curve" color="white" />
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero; 