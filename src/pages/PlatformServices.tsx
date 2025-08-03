import React, { useState, useEffect } from 'react';

export default function PlatformServices() {
  const [activeTab, setActiveTab] = useState(0);
  
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

  // Platform data
  const platforms = [
    {
      name: "Tīeke",
      icon: "🐦",
      color: "amber",
      description: "For small agencies moving from spreadsheets to a managed data solution.",
      scale: "small",
      features: [
        { title: 'User-friendly Interface', description: 'Intuitive data warehouse that integrates with your existing tools like Excel and Google Sheets.' },
        { title: 'Azure Security', description: 'Enterprise-grade security and compliance standards of the Microsoft Azure platform.' },
        { title: 'Quick Deployment', description: 'Get up and running in days, not weeks, with our pre-built templates and configurations.' },
        { title: 'Affordable', description: 'Cost-effective solution designed specifically for the needs of small agencies and teams.' }
      ],
      benefits: [
        "Easy transition from spreadsheets",
        "No technical expertise needed",
        "Fixed monthly cost",
        "Quick start with rapid value"
      ],
      pricing: "Starting at $1,500/month"
    },
    {
      name: "Tūī",
      icon: "🦜",
      color: "blue",
      description: "For organisations needing a structured warehouse with robust ETL capabilities.",
      scale: "medium",
      features: [
        { title: 'Robust ETL', description: 'Powerful data transformation pipelines to integrate all your business data sources.' },
        { title: 'Simple Database', description: 'Well-structured data warehouse with optimized schemas for business reporting.' },
        { title: 'Data Factory', description: 'Azure Data Factory workflows for automated data processing and integration.' },
        { title: 'Real-time Insights', description: 'Near real-time analytics capabilities for timely business intelligence.' },
        { title: 'Easily Scalable', description: 'Flexible architecture that grows alongside your organisation\'s needs.' },
        { title: 'Visualization Ready', description: 'Pre-configured connectors for popular BI tools like Power BI and Tableau.' }
      ],
      benefits: [
        "Unified data from multiple sources",
        "Automated data processing",
        "Department-level analytics",
        "Customizable dashboards"
      ],
      pricing: "Starting at $3,500/month"
    },
    {
      name: "Ruru",
      icon: "🦉",
      color: "purple",
      description: "For enterprises needing advanced analytics, built on Azure Synapse.",
      scale: "large",
      features: [
        { title: 'Azure Synapse', description: 'Built on Microsoft\'s enterprise-grade analytics service for unlimited scale.' },
        { title: 'Big Data Processing', description: 'Process and analyze petabytes of data with distributed computing capabilities.' },
        { title: 'Advanced AI/ML', description: 'Built-in artificial intelligence and machine learning tools for predictive analytics.' },
        { title: 'Seamless Scaling', description: 'Dynamically scale resources up or down based on enterprise workloads.' },
        { title: 'Data Lake Integration', description: 'Unified experience to work with both structured and unstructured data.' },
        { title: 'Real-time Analytics', description: 'Stream processing for real-time data analysis and event response.' },
        { title: 'Enterprise Security', description: 'Advanced security features for sensitive data protection and compliance.' },
        { title: 'Governance Controls', description: 'Comprehensive data governance with auditing and lineage tracking.' }
      ],
      benefits: [
        "Enterprise-wide analytics",
        "AI-powered insights",
        "Unlimited scalability",
        "Full data governance"
      ],
      pricing: "Starting at $8,500/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Animated Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Turn-Key Data Platform Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Pre-built, fixed-price Azure data warehouses that streamline your journey to insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#platforms" className="btn-primary">Explore Platforms</a>
              <a href="#comparison" className="btn-secondary">Compare Solutions</a>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="w-full h-auto" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path className="fill-gray-50" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Why Use Our Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
              Why Our Data Platforms?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our pre-built data warehouses accelerate your data journey with proven architectures and fixed monthly pricing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
            {[
              {
                title: "Faster Time to Value",
                icon: "⚡",
                description: "Go from zero to insights in days instead of months with our pre-built templates and automation."
              },
              {
                title: "Fixed Monthly Cost",
                icon: "💰",
                description: "Predictable pricing with no surprise bills or hidden costs, letting you budget with confidence."
              },
              {
                title: "Enterprise Security",
                icon: "🔒",
                description: "Built on Microsoft Azure with industry-leading security, compliance, and data protection."
              },
              {
                title: "Scalable Solutions",
                icon: "📈",
                description: "Choose the right platform for your current needs and easily upgrade as your requirements grow."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="premium-card bg-white p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Platform Tabs Section */}
      <section id="platforms" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
              Our Platform Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the right data platform that fits your organisation's size, budget, and analytical needs.
            </p>
          </div>
          
          {/* Platform Tabs */}
          <div className="mb-8 fade-in">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {platforms.map((platform, idx) => (
                <button
                  key={idx}
                  className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
                    activeTab === idx 
                      ? `bg-${platform.color}-500 text-white shadow-lg` 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab(idx)}
                >
                  <span className="mr-2">{platform.icon}</span> {platform.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Active Platform Content */}
          <div className="max-w-5xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg fade-in">
            <div className={`bg-gradient-to-r from-${platforms[activeTab].color}-500 to-${platforms[activeTab].color}-600 px-8 py-6 text-white`}>
              <div className="flex items-center">
                <span className="text-5xl mr-4">{platforms[activeTab].icon}</span>
                <div>
                  <h3 className="text-2xl font-bold">{platforms[activeTab].name} Platform</h3>
                  <p className="text-white/90">{platforms[activeTab].description}</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h4>
                  <div className="space-y-4">
                    {platforms[activeTab].features.map((feature, idx) => (
                      <div key={idx} className="flex">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-${platforms[activeTab].color}-100 flex items-center justify-center text-${platforms[activeTab].color}-500 mr-4`}>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">{feature.title}</h5>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">Business Benefits</h4>
                    <ul className="space-y-2">
                      {platforms[activeTab].benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className={`w-5 h-5 text-${platforms[activeTab].color}-500 mr-2`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`bg-${platforms[activeTab].color}-50 p-6 rounded-xl border border-${platforms[activeTab].color}-100`}>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xl font-semibold text-gray-800">Pricing</h4>
                      <span className={`px-3 py-1 rounded-full bg-${platforms[activeTab].color}-100 text-${platforms[activeTab].color}-800 text-sm font-medium`}>
                        Fixed Monthly
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className={`text-2xl font-bold text-${platforms[activeTab].color}-600`}>
                        {platforms[activeTab].pricing}
                      </div>
                      <p className="text-sm text-gray-600">All-inclusive with no hidden costs</p>
                    </div>
                    <a 
                      href="#contact" 
                      className={`block w-full py-3 px-4 bg-gradient-to-r from-${platforms[activeTab].color}-500 to-${platforms[activeTab].color}-600 text-white rounded-lg text-center font-medium hover:shadow-lg transition-all`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison Table Section */}
      <section id="comparison" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
              Platform Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare our data platform offerings to find the perfect fit for your organisation.
            </p>
          </div>
          
          <div className="overflow-x-auto fade-in">
            <table className="w-full premium-card bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left text-gray-700 font-semibold">Features</th>
                  {platforms.map((platform, idx) => (
                    <th key={idx} className={`p-4 text-center border-l border-gray-200`}>
                      <div className="flex flex-col items-center">
                        <span className="text-3xl">{platform.icon}</span>
                        <span className={`text-${platform.color}-600 font-bold`}>{platform.name}</span>
                        <span className="text-sm text-gray-500">({platform.scale})</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Data Sources",
                    values: ["Up to 5", "Up to 15", "Unlimited"]
                  },
                  {
                    feature: "Refresh Frequency",
                    values: ["Daily", "Hourly", "Real-time"]
                  },
                  {
                    feature: "Storage Capacity",
                    values: ["50GB", "500GB", "Unlimited"]
                  },
                  {
                    feature: "User Access",
                    values: ["Up to 10", "Up to 50", "Unlimited"]
                  },
                  {
                    feature: "BI Tool Connectivity",
                    values: ["Power BI", "Power BI, Tableau", "Any BI Tool"]
                  },
                  {
                    feature: "AI Capabilities",
                    values: ["Basic", "Intermediate", "Advanced"]
                  },
                  {
                    feature: "Support SLA",
                    values: ["Business Hours", "Business Hours", "24/7"]
                  },
                  {
                    feature: "Setup Time",
                    values: ["2-5 days", "1-2 weeks", "2-4 weeks"]
                  }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-gray-800 font-medium">{row.feature}</td>
                    {row.values.map((value, vIdx) => (
                      <td key={vIdx} className="p-4 text-center border-l border-gray-200 text-gray-700">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-gray-100">
                  <td className="p-4 text-gray-800 font-semibold">Monthly Cost</td>
                  {platforms.map((platform, idx) => (
                    <td key={idx} className="p-4 text-center border-l border-gray-200">
                      <span className={`font-bold text-${platform.color}-600`}>
                        {platform.pricing.split(" ")[1]}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-8 fade-in">
            <a href="#contact" className="btn-primary">
              Schedule a Platform Demo
            </a>
          </div>
        </div>
      </section>
      
      {/* Implementation Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
              Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined approach gets your data platform up and running quickly and efficiently.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto fade-in">
            {[
              {
                step: 1,
                title: "Initial Consultation",
                description: "We meet to understand your business goals, current data landscape, and specific requirements.",
                icon: "💬"
              },
              {
                step: 2,
                title: "Platform Selection",
                description: "Based on your needs, we recommend the most suitable platform from our range of solutions.",
                icon: "🔍"
              },
              {
                step: 3,
                title: "Design & Configuration",
                description: "We tailor the platform to your specific needs, setting up data sources and user access.",
                icon: "⚙️"
              },
              {
                step: 4,
                title: "Data Migration",
                description: "We securely transfer your existing data into the new platform and validate its integrity.",
                icon: "🔄"
              },
              {
                step: 5,
                title: "Testing & Training",
                description: "We thoroughly test the platform and train your team on how to use it effectively.",
                icon: "📚"
              },
              {
                step: 6,
                title: "Go-Live & Support",
                description: "We launch your platform and provide ongoing support to ensure continued success.",
                icon: "🚀"
              }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mr-6">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    {step.title}
                    <span className="ml-2 text-2xl">{step.icon}</span>
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                  {idx !== 5 && (
                    <div className="h-12 w-0.5 bg-gray-200 ml-6 mt-4"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today to discuss how our pre-built data platforms can accelerate your data journey.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Platform Interest</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                    <option value="">Select a platform</option>
                    {platforms.map((platform, idx) => (
                      <option key={idx} value={platform.name}>{platform.name} ({platform.scale})</option>
                    ))}
                    <option value="not-sure">Not sure / Need advice</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent h-32 resize-none"
                    placeholder="Tell us about your data platform needs"
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all">
                    Request Platform Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional CSS for animated background */}
      <style>{`
        .cube {
          position: absolute;
          top: 80vh;
          left: 45vw;
          width: 10px;
          height: 10px;
          border: solid 1px rgba(255, 255, 255, 0.2);
          transform-origin: top left;
          transform: scale(0) rotate(0deg) translate(-50%, -50%);
          animation: cube 12s ease-in forwards infinite;
        }
        
        .cube:nth-child(2) {
          animation-delay: 2s;
          left: 25vw;
          top: 40vh;
        }
        
        .cube:nth-child(3) {
          animation-delay: 4s;
          left: 75vw;
          top: 50vh;
        }
        
        .cube:nth-child(4) {
          animation-delay: 6s;
          left: 90vw;
          top: 10vh;
        }
        
        .cube:nth-child(5) {
          animation-delay: 8s;
          left: 10vw;
          top: 85vh;
        }
        
        @keyframes cube {
          from {
            transform: scale(0) rotate(0deg) translate(-50%, -50%);
            opacity: 1;
          }
          to {
            transform: scale(20) rotate(960deg) translate(-50%, -50%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
} 