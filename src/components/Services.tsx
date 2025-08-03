import { useState, memo, useCallback, useMemo } from 'react';
import { Brain, Cloud, Code, Settings, ArrowRight, CheckCircle, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = memo(() => {
  const [activeService, setActiveService] = useState(0);

  const services = useMemo(() => [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Advisory & Delivery Services",
      subtitle: "Strategic Guidance",
      description: "End-to-end data consulting from strategy to implementation with expert guidance.",
      features: ["Data Strategy Development", "Implementation Roadmaps", "Best Practice Guidance", "Change Management"],
      highlight: "From strategy to execution",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & LLM Services",
      subtitle: "Intelligent Solutions",
      description: "Enterprise-ready AI solutions including KeaAI - our powerful GenAI solution built on LLaMA.",
      features: ["Custom AI Models", "KeaAI Platform", "ML Operations", "AI Strategy Consulting"],
      highlight: "Powered by KeaAI",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Platform Services",
      subtitle: "Scalable Infrastructure",
      description: "Pre-built Azure data warehouse solutions - Tīeke, Tūī, and Ruru platforms for every scale.",
      features: ["Tīeke Platform", "Tūī Solutions", "Ruru Framework", "Azure Integration"],
      highlight: "3 proven platforms",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Managed Services",
      subtitle: "Ongoing Support",
      description: "Ongoing support and management for optimal platform performance and growth.",
      features: ["24/7 Monitoring", "Performance Optimization", "Regular Updates", "Dedicated Support"],
      highlight: "Always optimized",
      color: "from-orange-500 to-orange-600"
    },
  ], []);

  const handleServiceClick = useCallback((index: number) => {
    setActiveService(index);
  }, []);

  const currentService = useMemo(() => services[activeService], [services, activeService]);

  return (
    <section id="services" className="section bg-white relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
            What We Do
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive data solutions designed to transform your organization and unlock the full potential of your data
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
                    ? 'border-primary-300 bg-primary-50 shadow-soft'
                    : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-soft card-interactive'
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${
                      activeService === index ? 'text-primary-600' : 'text-neutral-900'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-500">{service.subtitle}</p>
                  </div>
                </div>
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                  activeService === index ? 'bg-primary-100 text-primary-700' : 'bg-neutral-100 text-neutral-600'
                }`}>
                  <CheckCircle className="w-3 h-3" />
                  {service.highlight}
                </div>
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="lg:col-span-8">
            <div className="bg-gradient-to-br from-neutral-50 to-white rounded-xl p-8 border border-neutral-200 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-lg bg-gradient-to-r ${currentService.color} text-white`}>
                  {currentService.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {currentService.title}
                  </h3>
                  <p className="text-neutral-500">{currentService.subtitle}</p>
                </div>
              </div>

              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                {currentService.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-neutral-100">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-neutral-700 font-medium">{feature}</span>
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
        <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-neutral-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
            <div className="text-neutral-600">Successful Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-neutral-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">8+</div>
            <div className="text-neutral-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;