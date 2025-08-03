import { memo } from 'react';
import { Shield, Zap, Award, MapPin, Users, CheckCircle } from 'lucide-react';

const WhyDataSing = memo(() => {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Azure Specialists",
      subtitle: "Deeply Certified",
      description: "Azure-first focus with deep partnerships with Azure, Snowflake and Databricks (on Azure). Our team holds advanced certifications and maintains close relationships with platform vendors.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Proven Hybrid Patterns",
      subtitle: "Days, Not Weeks",
      description: "Azure + Snowflake and Azure + Databricks architectures matched to workload and budget. Our Infrastructure-as-Code and accelerator frameworks get you up in days, not weeks.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Accelerators That Cut Risk",
      subtitle: "AI-Ready Frameworks",
      description: "Our MDM accelerators help you start managing your data for AI - including Natural Language Querying and Large Language Models. Proven frameworks reduce implementation risk.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pre-qualified for Government",
      subtitle: "Trusted by Public Sector",
      description: "On 7 DIA Marketplace panels for Data and Managed Services, and Australia Digital Transformation Agency for Cloud Services and Cloud Consulting.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Independently Audited",
      subtitle: "Security & Quality Assured",
      description: "Regular security and quality audits from Bastion Security; reports available under NDA. Independently verified processes and security standards.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "On-shore Delivery",
      subtitle: "NZISM-Aligned",
      description: "Data stays in Aotearoa. NZISM-aligned practices ensure your sensitive data remains within New Zealand's jurisdiction with local expertise and support.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="section bg-slate-50 relative">
      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-200">
            <Shield className="w-4 h-4" />
            Why DataSing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
            Why Choose DataSing
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Trusted expertise, proven methodologies, and local delivery that accelerates your data transformation journey
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${reason.color} text-white`}>
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-neutral-500">{reason.subtitle}</p>
                </div>
              </div>
              
              <p className="text-neutral-700 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats/Credentials */}
        <div className="mt-16 pt-16 border-t border-neutral-200">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">7</div>
              <div className="text-neutral-600">DIA Marketplace Panels</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-neutral-600">Major Platform Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-neutral-600">NZ Data Sovereignty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">NZISM</div>
              <div className="text-neutral-600">Security Aligned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

WhyDataSing.displayName = 'WhyDataSing';

export default WhyDataSing;