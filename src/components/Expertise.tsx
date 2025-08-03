function Expertise() {
  const expertises = [
    {
      title: "Microsoft Azure",
      description: "Cloud infrastructure and data platform solutions",
      icon: "AZ",
      color: "blue",
      features: ["Data Warehousing", "Analytics", "Security", "Scalability"]
    },
    {
      title: "Data Engineering",
      description: "ETL pipelines and data transformation",
      icon: "DE",
      color: "purple",
      features: ["Data Factory", "Data Integration", "Real-time Processing", "Data Quality"]
    },
    {
      title: "AI & Machine Learning",
      description: "Advanced analytics and AI capabilities",
      icon: "AI",
      color: "emerald",
      features: ["KeaAI Platform", "LLM Integration", "Predictive Analytics", "GenAI Security"]
    },
    {
      title: "Business Intelligence",
      description: "Insights and reporting solutions",
      icon: "BI",
      color: "cyan",
      features: ["Dashboards", "Reporting", "Data Visualization", "Self-service BI"]
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deep expertise in Azure data platforms and analytics solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertises.map((expertise, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-6 ${
                expertise.color === 'blue' ? 'bg-blue-600' :
                expertise.color === 'purple' ? 'bg-purple-600' :
                expertise.color === 'emerald' ? 'bg-emerald-600' :
                'bg-cyan-600'
              }`}>
                {expertise.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {expertise.title}
              </h3>
              
              <p className="text-slate-600 mb-4 text-sm">
                {expertise.description}
              </p>
              
              <div className="space-y-2">
                {expertise.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-slate-500">
                    <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              
              <a
                href="#"
                className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-blue-600 transition-all duration-300"
                aria-label={`Learn more about ${expertise.title}`}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Turnkey Solutions
              </h3>
              <p className="text-slate-600 mb-6">
                Three pre-built data warehousing and analytics solutions provides a rapid deployment in days not weeks. We work with you to prioritise and customise key components that are core to you meaning you can start using insights in days not weeks.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                We grow with you
              </h3>
              <p className="text-slate-600">
                We want to grow with you - whether that's providing on-call data engineering services or looking after the platform on your behalf with our managed service offering. We'll work through what's best, based on your business ambitions and in-house skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise; 