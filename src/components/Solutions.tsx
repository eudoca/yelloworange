import { useState } from 'react';
import { Database, Zap, BarChart, Brain } from 'lucide-react';

function Solutions() {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: 0,
      title: "Tīeke Platform",
      icon: <Database className="w-6 h-6" />,
      description: "For small agencies ready to move from spreadsheets",
      content: "Tīeke is designed for small agencies that are ready to move from spreadsheets to a more sophisticated, managed data solution. It's a user-friendly and intuitive data warehouse that integrates smoothly with popular spreadsheet tools and provides the security and compliance standards of Azure.",
      features: [
        "User-friendly interface",
        "Seamless spreadsheet integration",
        "Azure security standards",
        "Quick deployment"
      ]
    },
    {
      id: 1,
      title: "Tūī Platform",
      icon: <Zap className="w-6 h-6" />,
      description: "Structured data warehouse with robust ETL capabilities",
      content: "For organisations or agencies that require a more structured data warehouse with robust ETL capabilities, we offer our Tūī platform. This data warehouse comprising a simple database and data factory is easily scalable and enables efficient data transformation and real-time insights.",
      features: [
        "Robust ETL capabilities",
        "Simple database structure",
        "Data factory integration",
        "Real-time insights"
      ]
    },
    {
      id: 2,
      title: "Ruru Platform",
      icon: <BarChart className="w-6 h-6" />,
      description: "Advanced analytics for medium to large enterprises",
      content: "Finally, for medium to large enterprises that need advanced analytics capabilities, we present Ruru. Built on Azure Synapse Analytics, Ruru offers extensive data warehousing, big data analytics, AI functionality, and the ability to seamlessly scale according to your data needs.",
      features: [
        "Azure Synapse Analytics",
        "Big data capabilities",
        "AI functionality",
        "Seamless scalability"
      ]
    },
    {
      id: 3,
      title: "KeaAI",
      icon: <Brain className="w-6 h-6" />,
      description: "Enterprise-ready GenAI solution",
      content: "KeaAI by DataSing is a powerful AI solution designed for organisations that want to use generative AI on a large scale. It's built on the LLaMA Large Language Model (LLM) and offers all the usual GenAI features, but with added controls, specifically for GenAI security and governance.",
      features: [
        "Built on LLaMA LLM",
        "Enterprise security controls",
        "On-premise deployment option",
        "Compliance monitoring tools"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            DataSing's Turn-Key Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Fixed-price Azure pre-built data warehouse solutions designed to streamline data storage, organization, and analytics
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(solution.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === solution.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {solution.icon}
              <span>{solution.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                {solutions[activeTab].description}
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                {solutions[activeTab].content}
              </p>
              <ul className="space-y-3">
                {solutions[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                <div className="text-blue-600 scale-150">
                  {solutions[activeTab].icon}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Learn more about our platforms →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Solutions; 