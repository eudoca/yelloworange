import { useState, memo, useCallback, useMemo } from 'react';
import { Brain, Cloud, Code, Settings, ArrowRight, CheckCircle, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = memo(() => {
  const [activeService, setActiveService] = useState(0);

  const services = useMemo(() => [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Modern Azure Lake-house",
      subtitle: "Migration Accelerated",
      description: "Transform your legacy data warehouse into a modern, cloud-native lakehouse architecture. Our proven migration methodology and pre-built frameworks accelerate your journey to Azure Fabric, Synapse Analytics, or Databricks—delivering enterprise-grade solutions in weeks rather than the traditional months-long approach. We handle the complexity of data migration, schema transformation, and performance optimisation while ensuring zero data loss and minimal business disruption.",
      features: ["Azure Fabric Migration", "Synapse Analytics", "Databricks Integration", "Legacy Modernisation"],
      highlight: "Weeks, not months",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Data Engineering & Integration",
      subtitle: "Framework Accelerated",
      description: "Streamline your data operations with our battle-tested ingestion and Master Data Management (MDM) frameworks. We eliminate the typical complexity of building data pipelines from scratch by leveraging our pre-built, configurable solutions that handle real-time and batch processing, automated data quality checks, and comprehensive lineage tracking. Our frameworks reduce development time by 60-80% while ensuring enterprise-grade reliability and scalability from day one.",
      features: ["Data Ingestion", "Data Modelling", "Data Lineage", "MDM Frameworks"],
      highlight: "Framework accelerated",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Copilot Enablement",
      subtitle: "NZ-Tuned Solutions",
      description: "Deploy enterprise-ready AI solutions that understand New Zealand's unique data landscape, regulations, and business context. Our secure, governed RAG (Retrieval-Augmented Generation) implementations on Azure AI Foundry and Snowflake Cortex are specifically tuned for NZ organisations, ensuring compliance with local privacy laws while delivering contextually relevant AI insights. We extend Microsoft Copilot with custom connectors and domain-specific knowledge bases that speak your business language.",
      features: ["Azure AI Foundry", "Snowflake Cortex", "Copilot Extensions", "NZ Data Tuning"],
      highlight: "NZ-tuned AI",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Managed Services",
      subtitle: "24×7 Reliability",
      description: "Ensure your data platforms operate at peak performance with our comprehensive managed services. Our 24×7 monitoring covers performance, security, and cost optimisation across your entire data estate. Through proactive FinOps practices, we continuously optimise your cloud spend while maintaining performance SLAs. Our team provides continuous platform enhancement, security patching, and capacity planning—allowing your team to focus on deriving business value rather than managing infrastructure.",
      features: ["24×7 Monitoring", "FinOps Optimisation", "Continuous Enhancement", "Cost Efficiency"],
      highlight: "Always optimised",
      color: "from-orange-500 to-orange-600"
    },
  ], []);

  const handleServiceClick = useCallback((index: number) => {
    setActiveService(index);
  }, []);

  const currentService = useMemo(() => services[activeService], [services, activeService]);

  return (
    <section id="services" className="section bg-neutral-900 relative">
      {/* Dark background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-500/30">
            <Zap className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What We Do
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive data solutions designed to transform your organisation and unlock the full potential of your data
          </p>
        </div>

        {/* Interactive Service Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Service Navigation */}
          <div className="lg:col-span-4 space-y-3">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => handleServiceClick(index)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-200 ${
                  activeService === index
                    ? 'border-primary-400 bg-primary-500/10 shadow-soft'
                    : 'border-neutral-600 bg-neutral-700 hover:border-neutral-500 hover:shadow-soft card-interactive'
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${
                      activeService === index ? 'text-primary-300' : 'text-white'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-400">{service.subtitle}</p>
                  </div>
                </div>
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                  activeService === index ? 'bg-primary-500/20 text-primary-300' : 'bg-neutral-700 text-neutral-300'
                }`}>
                  <CheckCircle className="w-3 h-3" />
                  {service.highlight}
                </div>
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="lg:col-span-8">
            <div className="bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-xl p-8 border border-neutral-600 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-lg bg-gradient-to-r ${currentService.color} text-white`}>
                  {currentService.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {currentService.title}
                  </h3>
                  <p className="text-neutral-400">{currentService.subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                {currentService.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-neutral-600 rounded-lg border border-neutral-500">
                    <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className="text-neutral-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/what-we-do"
                  className="btn btn-primary btn-md group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-secondary btn-md group"
                >
                  <Users className="mr-2 w-4 h-4" />
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-neutral-700">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">100+</div>
            <div className="text-neutral-300">Successful Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">50+</div>
            <div className="text-neutral-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">8+</div>
            <div className="text-neutral-300">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;