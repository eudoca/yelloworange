import { Helmet } from 'react-helmet';
import { 
  Brain, 
  Cloud, 
  Code, 
  Settings, 
  Database, 
  Workflow,
  BarChart3,
  Cog,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

function WhatWeDo() {
  const consultingServices = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Advisory & Strategy",
      description: "Strategic guidance for your data transformation journey, from assessment to roadmap development.",
      features: ["Data Strategy Development", "Technology Assessment", "ROI Analysis", "Change Management"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Delivery",
      description: "End-to-end implementation of data solutions with expert project management and execution.",
      features: ["Project Management", "Solution Implementation", "Quality Assurance", "Go-Live Support"]
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Managed Services",
      description: "Ongoing support and management for optimal platform performance and continuous improvement.",
      features: ["24/7 Monitoring", "Performance Optimization", "Maintenance & Updates", "Service Level Agreements"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML",
      description: "Enterprise-ready AI and machine learning solutions including our powerful KeaAI platform.",
      features: ["Machine Learning Models", "AI Strategy", "KeaAI Implementation", "Predictive Analytics"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Data Platforming",
      description: "Modern data platform architecture and implementation using cloud-native technologies.",
      features: ["Cloud Architecture", "Data Lakes", "Data Warehousing", "Platform Migration"]
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "DevOps",
      description: "DevOps practices and automation for reliable, scalable data infrastructure deployment.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Deployment Automation"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Migration",
      description: "Seamless migration of data across systems with minimal downtime and maximum accuracy.",
      features: ["Legacy System Migration", "Cloud Migration", "Data Validation", "Risk Mitigation"]
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Data Integration",
      description: "Connecting disparate data sources to create unified, accessible data ecosystems.",
      features: ["ETL/ELT Processes", "Real-time Integration", "API Development", "Data Synchronization"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Visualisation",
      description: "Transform complex data into clear, actionable insights through compelling visualizations.",
      features: ["Dashboard Development", "Interactive Reports", "Self-Service Analytics", "Mobile BI"]
    }
  ];

  const frameworks = [
    {
      title: "Azure Data Frameworks",
      description: "Comprehensive frameworks for Azure data platform implementation.",
      technologies: ["Azure Synapse", "Azure Data Factory", "Azure Data Lake", "Power BI"]
    },
    {
      title: "AWS Data Frameworks",
      description: "Scalable data solutions built on Amazon Web Services infrastructure.",
      technologies: ["Amazon Redshift", "AWS Glue", "Amazon S3", "QuickSight"]
    },
    {
      title: "Snowflake Data Accelerator",
      description: "Rapid deployment framework for Snowflake cloud data platform.",
      technologies: ["Snowflake", "SnowSQL", "Snowpipe", "Streams & Tasks"]
    },
    {
      title: "DataSing Data Load Accelerator",
      description: "Proprietary framework for fast, reliable data ingestion and processing.",
      technologies: ["Custom ETL", "Data Validation", "Error Handling", "Performance Monitoring"]
    },
    {
      title: "DevOps Accelerator",
      description: "Automated deployment and management framework for data infrastructure.",
      technologies: ["Terraform", "Docker", "Kubernetes", "Azure DevOps"]
    },
    {
      title: "Power BI Framework",
      description: "Standardized approach to Power BI implementation and governance.",
      technologies: ["Power BI Service", "Premium Workspaces", "Row-Level Security", "Custom Visuals"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>What We Do - DataSing</title>
        <meta name="description" content="Comprehensive data consulting services from strategy to implementation. We help organizations transform their data capabilities." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6">
              What We Do
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive data and analytics consulting services to help organizations 
              become truly data-driven. From strategy to implementation, we're your trusted partner 
              in digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Consulting Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end data consulting services designed to transform your organization's data capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 hover:border-black transition-colors duration-200 group">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-black mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Data Frameworks & Accelerators
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proven frameworks and accelerators that reduce implementation time and ensure best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <div key={index} className="bg-gray-50 p-8 border border-gray-200 hover:border-black transition-colors duration-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  {framework.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {framework.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {framework.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-white border border-gray-300 text-sm text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DataSing */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Why Choose DataSing?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence, proven methodologies, and focus on business outcomes 
              set us apart in the data consulting landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Speedy</h3>
              <p className="text-gray-300">
                Rapid implementation using proven frameworks and accelerators, 
                getting you to value faster.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Savvy</h3>
              <p className="text-gray-300">
                Deep expertise across all major cloud platforms and data technologies, 
                ensuring best-practice solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Safe</h3>
              <p className="text-gray-300">
                Security and governance built into every solution, 
                protecting your data and ensuring compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatWeDo;