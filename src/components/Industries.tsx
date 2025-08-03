import { Building2, Users, Briefcase } from 'lucide-react';

function Industries() {
  const industries = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Small Agencies",
      description: "Move from spreadsheets to sophisticated data solutions with our Tīeke platform.",
      image: "/api/placeholder/600/400",
      color: "blue",
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Medium Organizations",
      description: "Scale your data capabilities with robust ETL and real-time insights using Tūī.",
      image: "/api/placeholder/600/400",
      color: "purple",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Large Enterprises",
      description: "Advanced analytics and AI capabilities with our Ruru platform built on Azure Synapse.",
      image: "/api/placeholder/600/400",
      color: "emerald",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Solutions for Every Scale
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From small agencies to large enterprises, we have the right solution for your data needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-50"></div>
              
              <div className="relative p-8">
                <div className={`inline-flex p-4 rounded-xl mb-6 ${
                  industry.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  industry.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-emerald-100 text-emerald-600'
                }`}>
                  {industry.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {industry.title}
                </h3>
                
                <p className="text-slate-600 mb-6">
                  {industry.description}
                </p>
                
                <a
                  href="#solutions"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  View our solutions
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              
              {/* Decorative element */}
              <div className={`absolute bottom-0 right-0 w-32 h-32 transform translate-x-16 translate-y-16 rounded-full opacity-10 ${
                industry.color === 'blue' ? 'bg-blue-500' :
                industry.color === 'purple' ? 'bg-purple-500' :
                'bg-emerald-500'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries; 