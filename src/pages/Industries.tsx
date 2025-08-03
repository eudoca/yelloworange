import { Helmet } from 'react-helmet';
import { 
  Building2, 
  Truck, 
  Home, 
  GraduationCap, 
  Heart, 
  Shield, 
  Banknote,
  ArrowRight 
} from 'lucide-react';

function Industries() {
  const industries = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Utilities",
      description: "Transform energy and utilities operations with smart data analytics, predictive maintenance, and customer insights.",
      challenges: [
        "Asset performance optimization",
        "Predictive maintenance scheduling",
        "Customer usage analytics",
        "Regulatory compliance reporting"
      ],
      solutions: [
        "IoT sensor data integration",
        "Real-time monitoring dashboards",
        "Predictive analytics models",
        "Automated compliance reporting"
      ]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Transport & Logistics",
      description: "Optimize supply chains, reduce costs, and improve delivery performance through data-driven logistics solutions.",
      challenges: [
        "Route optimization",
        "Inventory management",
        "Fleet performance tracking",
        "Customer delivery expectations"
      ],
      solutions: [
        "AI-powered route planning",
        "Real-time inventory tracking",
        "Fleet analytics dashboards",
        "Delivery performance metrics"
      ]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Property",
      description: "Leverage property data for investment decisions, market analysis, and operational efficiency improvements.",
      challenges: [
        "Market trend analysis",
        "Property valuation accuracy",
        "Tenant satisfaction tracking",
        "Operational cost optimization"
      ],
      solutions: [
        "Market intelligence platforms",
        "Automated valuation models",
        "Tenant experience analytics",
        "Cost optimization dashboards"
      ]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Higher Education",
      description: "Enhance student outcomes, optimize operations, and drive research excellence through advanced data analytics.",
      challenges: [
        "Student success prediction",
        "Resource allocation optimization",
        "Research data management",
        "Administrative efficiency"
      ],
      solutions: [
        "Student analytics platforms",
        "Resource planning tools",
        "Research data lakes",
        "Operational dashboards"
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health",
      description: "Improve patient outcomes, reduce costs, and enhance operational efficiency in healthcare organizations.",
      challenges: [
        "Patient outcome prediction",
        "Resource capacity planning",
        "Clinical data integration",
        "Regulatory compliance"
      ],
      solutions: [
        "Clinical analytics platforms",
        "Capacity planning tools",
        "Integrated health records",
        "Compliance monitoring systems"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Government",
      description: "Enable data-driven governance, improve citizen services, and enhance operational transparency.",
      challenges: [
        "Citizen service optimization",
        "Policy impact measurement",
        "Resource allocation",
        "Transparency reporting"
      ],
      solutions: [
        "Citizen service analytics",
        "Policy impact dashboards",
        "Budget optimization tools",
        "Public transparency portals"
      ]
    },
    {
      icon: <Banknote className="w-8 h-8" />,
      title: "Financial Services",
      description: "Drive innovation in banking and finance through advanced analytics, risk management, and customer insights.",
      challenges: [
        "Risk assessment accuracy",
        "Customer experience optimization",
        "Regulatory compliance",
        "Fraud detection improvement"
      ],
      solutions: [
        "AI-powered risk models",
        "Customer journey analytics",
        "Automated compliance reporting",
        "Real-time fraud detection"
      ]
    }
  ];

  const caseStudies = [
    {
      industry: "Utilities",
      title: "Smart Grid Analytics Implementation",
      challenge: "A major utility company needed to optimize their grid performance and reduce outages through predictive maintenance.",
      solution: "Implemented IoT sensor data integration with real-time analytics and predictive maintenance models.",
      results: ["40% reduction in unplanned outages", "25% improvement in maintenance efficiency", "$2M annual cost savings"]
    },
    {
      industry: "Higher Education",
      title: "Student Success Analytics Platform",
      challenge: "University needed to identify at-risk students early and improve graduation rates.",
      solution: "Built comprehensive student analytics platform combining academic, financial, and engagement data.",
      results: ["15% improvement in retention rates", "Early intervention for 500+ at-risk students", "Enhanced academic support programs"]
    },
    {
      industry: "Financial Services",
      title: "Real-time Fraud Detection System",
      challenge: "Bank required advanced fraud detection to reduce losses while minimizing false positives.",
      solution: "Developed machine learning models for real-time transaction analysis and risk scoring.",
      results: ["60% reduction in fraud losses", "45% decrease in false positives", "Sub-second detection response time"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industries - DataSing</title>
        <meta name="description" content="Industry-specific data solutions for utilities, transport, property, education, health, government, and financial services." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6">
              Industries We Serve
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep industry expertise combined with cutting-edge data solutions. 
              We understand the unique challenges and opportunities in your sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 hover:border-black transition-colors duration-200 group">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors duration-200">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Key Challenges</h4>
                  <ul className="space-y-1">
                    {industry.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="text-sm text-gray-600">
                        • {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Our Solutions</h4>
                  <ul className="space-y-1">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="text-sm text-gray-600">
                        • {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Industry Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-world examples of how we've helped organizations transform their data capabilities 
              and achieve measurable business outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 p-8 border border-gray-200">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-black text-white text-sm uppercase tracking-wide">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  {study.title}
                </h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-black mb-2 uppercase tracking-wide">Challenge</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-black mb-2 uppercase tracking-wide">Solution</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-black mb-2 uppercase tracking-wide">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-gray-600">
                        • {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how our industry expertise and data solutions can address 
            your specific challenges and unlock new opportunities.
          </p>
          <button className="btn-primary inline-flex items-center">
            Discuss Your Needs
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Industries;