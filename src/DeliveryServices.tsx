import React from 'react';

export default function DeliveryServices() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-manrope">
      {/* Hero Section */}
      <div className="relative bg-dark-green py-16 md:py-24">
        {/* White wavy lines */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          {/* First wave layer */}
          <div className="absolute w-[200%] opacity-20 top-[10%] animate-wave-slow">
            <svg viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path fill="white" d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 L1000,0 L0,0 Z"></path>
            </svg>
          </div>
          
          {/* Second wave layer */}
          <div className="absolute w-[200%] opacity-15 top-[30%] animate-wave-medium">
            <svg viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path fill="white" d="M0,40 C200,80 280,20 500,40 C700,60 800,20 1000,40 L1000,0 L0,0 Z"></path>
            </svg>
          </div>
        </div>
        
        <div className="container max-w-screen-xl mx-auto px-6 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-manrope">
              Our Delivery Services
            </h1>
            <p className="max-w-2xl mx-auto text-white/90">
              From strategy to implementation, we offer comprehensive data services tailored to your business needs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container max-w-screen-xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Service 1 */}
              <div className="premium-card p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-dark-green/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-manrope">Data Strategy</h3>
                <p className="text-gray-600 mb-4">We help you develop a comprehensive data strategy aligned with your business goals, ensuring you get maximum value from your data assets.</p>
                <a href="#" className="text-dark-green hover:text-dark-green/80 font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              {/* Service 2 */}
              <div className="premium-card p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-dark-green/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-manrope">Data Architecture</h3>
                <p className="text-gray-600 mb-4">We design robust data architectures that scale with your business, ensuring data flows efficiently throughout your organisation.</p>
                <a href="#" className="text-dark-green hover:text-dark-green/80 font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              {/* Service 3 */}
              <div className="premium-card p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-dark-green/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-manrope">Data Analytics</h3>
                <p className="text-gray-600 mb-4">Turn your data into actionable insights with our advanced analytics solutions, helping you make data-driven decisions with confidence.</p>
                <a href="#" className="text-dark-green hover:text-dark-green/80 font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              {/* Service 4 */}
              <div className="premium-card p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-dark-green/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-manrope">Data Integration</h3>
                <p className="text-gray-600 mb-4">Seamlessly connect your data sources and systems with our integration expertise, creating a unified view of your business data.</p>
                <a href="#" className="text-dark-green hover:text-dark-green/80 font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              {/* Service 5 */}
              <div className="premium-card p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-dark-green/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-manrope">Data Governance</h3>
                <p className="text-gray-600 mb-4">Implement robust data governance frameworks that ensure data quality, security, and compliance across your organisation.</p>
                <a href="#" className="text-dark-green hover:text-dark-green/80 font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              {/* Service 6 */}
              <div className="premium-card p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-dark-green/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 font-manrope">Data Operations</h3>
                <p className="text-gray-600 mb-4">We help you establish efficient DataOps practices, accelerating the delivery of high-quality data products and services.</p>
                <a href="#" className="text-dark-green hover:text-dark-green/80 font-medium inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Data Flow Diagram */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-center font-manrope">Our Data Flow Process</h3>
              <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Step 1 */}
                <div className="flex flex-col items-center mb-8 md:mb-0">
                  <div className="w-16 h-16 bg-dark-green/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-light-green">1</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2 font-manrope">Data Collection</h4>
                  <p className="text-sm text-gray-600 text-center max-w-xs">We gather data from various sources using secure and efficient methods</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:block text-dark-green">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center mb-8 md:mb-0">
                  <div className="w-16 h-16 bg-dark-green/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-light-green">2</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2 font-manrope">Data Processing</h4>
                  <p className="text-sm text-gray-600 text-center max-w-xs">We clean, transform, and prepare your data for analysis</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:block text-dark-green">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center mb-8 md:mb-0">
                  <div className="w-16 h-16 bg-dark-green/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-light-green">3</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2 font-manrope">Data Analysis</h4>
                  <p className="text-sm text-gray-600 text-center max-w-xs">We analyze your data to uncover valuable insights and patterns</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:block text-dark-green">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-dark-green/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-light-green">4</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2 font-manrope">Actionable Insights</h4>
                  <p className="text-sm text-gray-600 text-center max-w-xs">We deliver actionable recommendations to drive business value</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="#contact" className="inline-block bg-gradient-to-r from-dark-green to-light-green text-white font-semibold px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 