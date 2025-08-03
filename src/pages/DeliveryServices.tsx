import React, { useEffect } from 'react';

export default function DeliveryServices() {
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
      title: "Data Strategy",
      description: "Develop a comprehensive data strategy aligned with your business objectives",
      icon: "🎯",
      features: ["Data maturity assessment", "Strategic roadmap", "Business case development", "Governance framework"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Data Architecture",
      description: "Design robust, scalable data architectures that grow with your business",
      icon: "🏗️",
      features: ["Architecture design", "Technology selection", "Security planning", "Scalability assessment"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Analytics Implementation",
      description: "Build and deploy analytics solutions that deliver actionable insights",
      icon: "📊",
      features: ["Dashboard development", "Report automation", "Self-service analytics", "Performance optimization"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Data Engineering",
      description: "Create robust data pipelines and infrastructure for reliable data flow",
      icon: "⚙️",
      features: ["Data pipeline development", "ETL/ELT processes", "Real-time streaming", "Data quality monitoring"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const process = [
    {
      phase: "Discovery",
      description: "Understand your business goals, current state, and requirements",
      icon: "🔍",
      activities: ["Stakeholder interviews", "Current state assessment", "Requirements gathering", "Gap analysis"]
    },
    {
      phase: "Strategy",
      description: "Develop a tailored strategy and roadmap for your data journey",
      icon: "📋",
      activities: ["Strategic planning", "Technology selection", "Roadmap creation", "Business case development"]
    },
    {
      phase: "Design",
      description: "Create detailed designs and specifications for your solution",
      icon: "📐",
      activities: ["Architecture design", "Data modeling", "Security design", "Integration planning"]
    },
    {
      phase: "Implementation",
      description: "Build and deploy your data solutions with expert guidance",
      icon: "🔨",
      activities: ["Development", "Testing", "Deployment", "Performance tuning"]
    },
    {
      phase: "Support",
      description: "Ensure ongoing success with training and support",
      icon: "🤝",
      activities: ["User training", "Documentation", "Knowledge transfer", "Ongoing support"]
    }
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      description: "Leverage our years of experience across industries and technologies",
      metric: "100+ projects delivered",
      icon: "👨‍💼"
    },
    {
      title: "Faster Results",
      description: "Accelerate your data journey with proven methodologies",
      metric: "50% faster delivery",
      icon: "⚡"
    },
    {
      title: "Risk Mitigation",
      description: "Avoid common pitfalls with our battle-tested approaches",
      metric: "95% success rate",
      icon: "🛡️"
    },
    {
      title: "Knowledge Transfer",
      description: "Build internal capabilities for long-term success",
      metric: "Full team enablement",
      icon: "🎓"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-pink-600">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              🚀 End-to-End Data Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Delivery Services
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              That Drive Results
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            From strategy to implementation, we partner with you to build data solutions 
            that transform your business and drive measurable outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#services" className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-pink-700 transform hover:scale-105 transition-all shadow-xl">
              Our Services
            </a>
            <a href="#contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Data Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end data consulting services to help you build the right solutions for your business needs.
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

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful delivery and maximum value from your data investments.
            </p>
          </div>

          <div className="space-y-8 fade-in">
            {process.map((phase, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl text-white mr-8">
                  {phase.icon}
                </div>
                
                <div className="flex-grow">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                        Phase {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-lg">{phase.description}</p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-3 text-center">
                          <div className="text-sm font-medium text-gray-900">{activity}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Delivery Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with experts who have delivered successful data projects across various industries and scales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-lg font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped organizations transform their data capabilities and achieve measurable business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 fade-in">
            {[
              {
                metric: "300%",
                description: "Increase in report generation speed",
                industry: "Manufacturing"
              },
              {
                metric: "85%",
                description: "Reduction in manual data processing",
                industry: "Healthcare"
              },
              {
                metric: "$2.5M",
                description: "Annual cost savings achieved",
                industry: "Retail"
              }
            ].map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center border border-gray-100">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  {story.metric}
                </div>
                <p className="text-lg text-gray-900 font-semibold mb-2">{story.description}</p>
                <div className="text-sm text-gray-600">{story.industry} Industry</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Let's discuss your data challenges and how we can help you build solutions that drive real business value.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">What You Get:</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Free initial consultation
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Custom solution proposal
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Implementation roadmap
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      Investment estimates
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Get Started Today:</h3>
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
                      Response within 24 hours
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="#contact" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all inline-block">
                  Start Your Data Journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}