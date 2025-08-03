import React, { useEffect } from 'react';

export default function AIServices() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Animation for elements when they enter viewport
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Floating Elements */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-900"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Solutions That Work For You</h1>
            <p className="text-xl text-white/90 mb-8">
              Enterprise-ready AI solutions with governance, security, and controls built in from the start.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#kea-ai" className="btn-primary">Explore KeaAI</a>
              <a href="#contact" className="btn-secondary">Talk to an Expert</a>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-auto" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path className="fill-gray-50" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>
      
      {/* KeaAI Section */}
      <section id="kea-ai" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-600 text-sm font-semibold mb-3">Introducing</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              KeaAI: Enterprise AI at Scale
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our flagship AI solution designed for organizations that want to use generative AI on a large scale with security and governance built in.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
            {/* AI Visualization */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 blur-xl transform -rotate-3"></div>
              <div className="relative p-1 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-500">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden aspect-w-16 aspect-h-9">
                  {/* AI Visualization Placeholder */}
                  <div className="flex items-center justify-center h-full">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-36 h-36 rounded-full bg-purple-500/20 animate-pulse"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-indigo-500/30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-purple-500/50 animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl">🦜</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text content */}
            <div>
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  KeaAI is built on the LLaMA Large Language Model (LLM) and offers all the usual GenAI features, but with added controls, specifically for GenAI security and governance.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  While many organizations are still in Proof of Concept mode, DataSing focuses on the 'last mile' - making AI ready for real-world use with automated controls and governance.
                </p>
                
                <div className="space-y-4 mt-6">
                  {[
                    "Designed for production GenAI deployment",
                    "Can be installed on-site for enhanced data protection",
                    "Includes monitoring tools to track GenAI usage across the company",
                    "Integrates with existing identity management systems"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start bg-white p-4 rounded-lg shadow-sm group hover:shadow-md transition-all">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-indigo-400 flex items-center justify-center text-white mr-4 transform transition-all duration-300 group-hover:rotate-6">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-gray-700 font-medium">{feature}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Applications Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              AI Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Practical AI solutions to solve real-world business challenges across your organization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
            {[
              {
                title: "Customer Service AI",
                icon: "🗣️",
                description: "AI-powered chatbots and virtual assistants that provide 24/7 customer support, reducing response times and improving satisfaction.",
                use_cases: ["Automated customer inquiries", "Support ticket classification", "Knowledge base search"]
              },
              {
                title: "Document Intelligence",
                icon: "📄",
                description: "Extract information from documents, forms, and unstructured text to automate workflows and improve data accuracy.",
                use_cases: ["Contract analysis", "Invoice processing", "Compliance checks"]
              },
              {
                title: "Predictive Analytics",
                icon: "📊",
                description: "Use AI to forecast trends, anticipate customer behavior, and make data-driven decisions with greater confidence.",
                use_cases: ["Sales forecasting", "Inventory optimization", "Risk assessment"]
              },
              {
                title: "Content Generation",
                icon: "✍️",
                description: "Create high-quality content at scale for marketing, documentation, and internal communications.",
                use_cases: ["Marketing copy", "Product descriptions", "Code generation"]
              },
              {
                title: "Personalization Engine",
                icon: "🎯",
                description: "Deliver tailored experiences to customers based on their preferences, behavior, and history.",
                use_cases: ["Product recommendations", "Content curation", "User journey optimization"]
              },
              {
                title: "Data Analysis Assistant",
                icon: "🔍",
                description: "Empower your team to explore and analyze data with natural language queries instead of complex SQL.",
                use_cases: ["Business intelligence", "Ad-hoc analysis", "Data exploration"]
              }
            ].map((app, idx) => (
              <div key={idx} className="premium-card bg-white rounded-xl overflow-hidden shadow-sm transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center text-3xl mb-4">
                    {app.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{app.title}</h3>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.use_cases.map((useCase, ucIdx) => (
                        <span 
                          key={ucIdx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-100 p-4">
                  <a href="#contact" className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* AI Governance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Enterprise AI Governance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We build guardrails into our AI systems to ensure they operate safely, ethically, and in compliance with regulations.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 fade-in">
            {[
              {
                title: "Content Filtering",
                description: "Automatic detection and filtering of harmful or inappropriate AI outputs",
                icon: "🛡️"
              },
              {
                title: "Usage Monitoring",
                description: "Track and analyze AI usage across your organization with detailed reporting",
                icon: "📊"
              },
              {
                title: "Audit Trails",
                description: "Comprehensive logs of all AI interactions for compliance and accountability",
                icon: "📝"
              },
              {
                title: "Data Privacy",
                description: "On-premises deployment options with control over your data and models",
                icon: "🔒"
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today to discuss how our AI solutions can help you innovate and optimize your operations.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent h-32 resize-none"
                    placeholder="Tell us about your AI project and requirements"
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all">
                    Request AI Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* CSS for floating elements */}
      <style>{`
        .floating-element {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(139, 92, 246, 0.3), rgba(79, 70, 229, 0.1));
          filter: blur(10px);
          animation: float 10s infinite ease-in-out;
        }
        
        .floating-element:nth-child(1) {
          top: 20%;
          left: 10%;
          width: 150px;
          height: 150px;
        }
        
        .floating-element:nth-child(2) {
          top: 50%;
          right: 15%;
          width: 180px;
          height: 180px;
          animation-delay: 2s;
          animation-duration: 12s;
        }
        
        .floating-element:nth-child(3) {
          bottom: 15%;
          left: 30%;
          width: 100px;
          height: 100px;
          animation-delay: 4s;
          animation-duration: 8s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(10px) translateX(-15px);
          }
          75% {
            transform: translateY(15px) translateX(5px);
          }
        }
      `}</style>
    </div>
  );
} 