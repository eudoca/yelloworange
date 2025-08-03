import React, { useEffect } from 'react';

export default function ManagedServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 100);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Platform Monitoring",
      description: "24/7 monitoring and proactive maintenance of your data infrastructure",
      icon: "📊",
      features: ["Performance monitoring", "Automated alerts", "Proactive optimization", "Resource scaling"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Operations",
      description: "End-to-end management of your data pipelines and workflows",
      icon: "⚙️",
      features: ["Pipeline management", "Data quality monitoring", "Error resolution", "Process optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Support & Maintenance",
      description: "Expert support to keep your data systems running smoothly",
      icon: "🛠️",
      features: ["Technical support", "Bug fixes", "Security updates", "Performance tuning"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Strategic Guidance",
      description: "Ongoing consultation to evolve your data strategy and capabilities",
      icon: "🎯",
      features: ["Strategic reviews", "Technology roadmap", "Best practices", "Training programs"],
      color: "from-orange-500 to-amber-500"
    }
  ];

  const benefits = [
    {
      title: "Reduced Costs",
      description: "Lower total cost of ownership compared to in-house teams",
      metric: "40% cost savings",
      icon: "💰"
    },
    {
      title: "Expert Team",
      description: "Access to specialized data platform expertise",
      metric: "10+ years experience",
      icon: "👥"
    },
    {
      title: "Improved Uptime",
      description: "Proactive monitoring and rapid issue resolution",
      metric: "99.9% uptime SLA",
      icon: "⚡"
    },
    {
      title: "Focus on Core Business",
      description: "Free up your team to focus on strategic initiatives",
      metric: "100% focus",
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              🛠️ Ongoing Platform Management
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Managed Services
            <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              That Deliver
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Keep your data platforms running at peak performance with our comprehensive 
            managed services. Focus on your business while we handle the technical complexity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#services" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all shadow-xl">
              Our Services
            </a>
            <a href="#contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
              Get Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
              What We Manage
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Data Platform Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From monitoring to optimization, we handle every aspect of your data platform operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 fade-in">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-2xl text-white mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all`}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Managed Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with experts who understand the complexities of modern data platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Data Platform?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Let us handle the complexity while you focus on driving business value from your data.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What's Included:</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Free platform assessment
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Custom service plan
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Smooth onboarding process
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Transparent pricing
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Get Started:</h3>
                  <div className="space-y-3 text-white/90">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      hello@datasing.co.nz
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Quick response time
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#contact" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all inline-block">
                  Request Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}