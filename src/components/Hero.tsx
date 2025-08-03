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
    <section className="relative min-h-screen pt-24" style={{ backgroundColor: '#ADBBD4' }}>
      {/* Reduced Size Hero Image */}
      <div className="absolute inset-0 pt-24 flex justify-center items-center">
        <img 
          src="/datasing_hero.jpg" 
          alt="DataSing - Data Analytics and AI Solutions"
          className={`w-3/5 h-3/5 object-cover rounded-lg transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="eager"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {!imageLoaded && (
          <div className="w-3/5 h-3/5 bg-gray-300 animate-pulse rounded-lg flex items-center justify-center">
            <div className="text-gray-500 text-lg">Loading...</div>
          </div>
        )}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-screen py-20">
          
          {/* Left side - Content with white transparent box */}
          <div className="max-w-2xl space-y-8 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
            {/* Partner Logos */}
            <div className={`transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 border border-gray-100">
                <div className="flex items-center gap-6">
                  <span className="text-sm font-medium text-gray-600">Certified Partners</span>
                  <img 
                    src="/microsoft-partner-logo.png" 
                    alt="Microsoft Partner" 
                    className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <img 
                    src="/snowflake-partner-logo.png" 
                    alt="Snowflake Partner" 
                    className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div className={`transform transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: '#0BA6E8' }}>
                It's your
                <span className="block text-yellow-500">data.</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-normal mt-2" style={{ color: '#0BA6E8' }}>
                  We'll help you get value from it.
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className={`transform transition-all duration-700 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <p className="text-xl md:text-2xl leading-relaxed max-w-lg mb-8" style={{ color: '#0BA6E8' }}>
                DataSing helps you build your data and analytical capabilities in a simple, secure and affordable way.
              </p>
              
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Link
                to="/contact"
                className="group bg-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                style={{ color: '#0BA6E8' }}
              >
                See a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/what-we-do"
                className="group border-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20 backdrop-blur-md transform hover:-translate-y-0.5 flex items-center justify-center"
                style={{ borderColor: '#0BA6E8', color: '#0BA6E8' }}
              >
                Explore Solutions
              </Link>
            </div>

          </div>

          {/* Floating stats cards positioned over the image */}
          <div className="absolute right-8 top-1/4 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 animate-float border border-gray-200">
            <div className="text-blue-600 font-bold text-3xl mb-1">100+</div>
            <div className="text-gray-700 text-sm font-medium">Projects Delivered</div>
            <div className="w-full h-1 mt-2 rounded-full bg-blue-600/30"></div>
          </div>
          
          <div className="absolute right-16 bottom-1/4 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 animate-float border border-gray-200" style={{ animationDelay: '1.5s' }}>
            <div className="text-blue-600 font-bold text-3xl mb-1">50+</div>
            <div className="text-gray-700 text-sm font-medium">Happy Clients</div>
            <div className="w-full h-1 mt-2 rounded-full bg-blue-600/30"></div>
          </div>

          {/* Floating icon elements */}
          <div className="absolute right-4 top-1/2 bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-3 border border-gray-200">
            <BarChart3 className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>
      
      {/* Shape Divider */}
      <ShapeDivider type="tilt" color="white" flip={true} />
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero; 