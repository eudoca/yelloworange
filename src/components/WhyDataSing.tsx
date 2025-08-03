import { memo, useState, useEffect } from 'react';
import { Shield, Zap, Award, MapPin, Users, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const WhyDataSing = memo(() => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Azure Specialists",
      subtitle: "Deeply Certified",
      description: "Azure-first focus with deep partnerships with Azure, Snowflake and Databricks (on Azure). Our team holds advanced certifications and maintains close relationships with platform vendors.",
      gradient: "from-blue-500 via-blue-600 to-purple-600",
      bgGradient: "from-blue-50 via-blue-100 to-purple-50",
      highlight: "🏆 Enterprise Certified"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Proven Hybrid Patterns",
      subtitle: "Days, Not Weeks",
      description: "Azure + Snowflake and Azure + Databricks architectures matched to workload and budget. Our Infrastructure-as-Code and accelerator frameworks get you up in days, not weeks.",
      gradient: "from-green-500 via-emerald-600 to-teal-600",
      bgGradient: "from-green-50 via-emerald-50 to-teal-50",
      highlight: "⚡ 10x Faster"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Accelerators That Cut Risk",
      subtitle: "AI-Ready Frameworks",
      description: "Our MDM accelerators help you start managing your data for AI - including Natural Language Querying and Large Language Models. Proven frameworks reduce implementation risk.",
      gradient: "from-purple-500 via-violet-600 to-indigo-600",
      bgGradient: "from-purple-50 via-violet-50 to-indigo-50",
      highlight: "🤖 AI-Ready"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pre-qualified for Government",
      subtitle: "Trusted by Public Sector",
      description: "On 7 DIA Marketplace panels for Data and Managed Services, and Australia Digital Transformation Agency for Cloud Services and Cloud Consulting.",
      gradient: "from-orange-500 via-red-500 to-pink-600",
      bgGradient: "from-orange-50 via-red-50 to-pink-50",
      highlight: "🏛️ Government Trusted"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Independently Audited",
      subtitle: "Security & Quality Assured",
      description: "Regular security and quality audits from Bastion Security; reports available under NDA. Independently verified processes and security standards.",
      gradient: "from-red-500 via-rose-600 to-pink-600",
      bgGradient: "from-red-50 via-rose-50 to-pink-50",
      highlight: "🔒 Audit Verified"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "On-shore Delivery",
      subtitle: "NZISM-Aligned",
      description: "Data stays in Aotearoa. NZISM-aligned practices ensure your sensitive data remains within New Zealand's jurisdiction with local expertise and support.",
      gradient: "from-teal-500 via-cyan-600 to-blue-600",
      bgGradient: "from-teal-50 via-cyan-50 to-blue-50",
      highlight: "🇳🇿 Kiwi Owned"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-neutral-900 to-slate-800">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-gentle" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container relative py-24">
        {/* Animated Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-300 px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Why DataSing
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-primary-300 to-accent-300 bg-clip-text text-transparent">
            Why Choose DataSing
          </h2>
          <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Trusted expertise, proven methodologies, and local delivery that <span className="text-primary-400 font-semibold">accelerates your data transformation journey</span>
          </p>
        </div>

        {/* Interactive Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 transform ${
                hoveredCard === index
                  ? 'scale-105 shadow-2xl border-primary-400/50'
                  : 'scale-100 shadow-lg border-neutral-700 hover:border-neutral-600'
              } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                background: hoveredCard === index 
                  ? `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`
                  : 'rgba(255,255,255,0.05)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Animated border gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500`}></div>
              
              <div className="relative p-8 backdrop-blur-sm">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
                  <div className={`relative p-4 rounded-2xl bg-gradient-to-r ${reason.gradient} text-white transform group-hover:scale-110 transition-all duration-300`}>
                    {reason.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-xl text-white group-hover:text-primary-300 transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-neutral-400 group-hover:text-primary-400 transition-colors duration-300 font-medium">
                      {reason.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-neutral-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {reason.description}
                  </p>

                  {/* Highlight badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${reason.gradient} text-white transform group-hover:scale-105 transition-all duration-300`}>
                    {reason.highlight}
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2">
                  <ArrowRight className="w-5 h-5 text-primary-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Stats Section */}
        <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-neutral-800/50 to-neutral-700/50 backdrop-blur-xl rounded-3xl p-8 border border-neutral-600">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "7", label: "DIA Marketplace Panels", color: "text-blue-400" },
                { number: "3", label: "Major Platform Partners", color: "text-green-400" },
                { number: "100%", label: "NZ Data Sovereignty", color: "text-purple-400" },
                { number: "NZISM", label: "Security Aligned", color: "text-orange-400" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-neutral-300 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

WhyDataSing.displayName = 'WhyDataSing';

export default WhyDataSing;