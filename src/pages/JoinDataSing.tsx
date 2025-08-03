import { Helmet } from 'react-helmet';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  ArrowRight,
  Heart,
  Coffee,
  Lightbulb,
  Users
} from 'lucide-react';

function JoinDataSing() {
  const openPositions = [
    {
      title: "Senior Data Engineer",
      location: "Auckland, NZ",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      description: "Build and maintain scalable data pipelines and infrastructure for our clients across various industries."
    },
    {
      title: "Azure Data Architect",
      location: "Wellington, NZ",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      description: "Design and implement Azure-based data solutions for enterprise clients. Lead technical architecture decisions."
    },
    {
      title: "Power BI Developer",
      location: "Sydney, AU",
      type: "Full-time",
      salary: "AU$85,000 - $110,000",
      description: "Create compelling data visualizations and self-service analytics solutions using Microsoft Power BI."
    },
    {
      title: "Machine Learning Engineer",
      location: "Remote",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      description: "Develop and deploy ML models in production environments. Work on cutting-edge AI solutions."
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Flexible Work",
      description: "Remote work options and flexible hours to suit your lifestyle"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Learning & Development",
      description: "Training budget and conference attendance for continuous growth"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Great Culture",
      description: "Collaborative team environment with regular social events"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Join DataSing - Careers</title>
        <meta name="description" content="Join our team of data professionals. Explore career opportunities at DataSing and help shape the future of data analytics." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6">
              Join DataSing
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Be part of a team that's transforming how organizations use data. 
              Work on challenging projects, learn cutting-edge technologies, 
              and make a real impact with talented colleagues.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Why Join DataSing?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job - we provide a platform for growth, 
              learning, and making meaningful contributions to the data community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore current opportunities to join our growing team.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gray-50 p-8 border border-gray-200 hover:border-black transition-colors duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="btn-primary inline-flex items-center">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            We're always looking for talented data professionals to join our team. 
            Send us your CV and let us know how you'd like to contribute to our mission.
          </p>
          <button className="btn-outline text-white border-white hover:bg-white hover:text-black inline-flex items-center">
            Get in Touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
}

export default JoinDataSing;