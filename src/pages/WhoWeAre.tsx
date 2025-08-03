import { Helmet } from 'react-helmet';
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  Mail,
  ExternalLink
} from 'lucide-react';

function WhoWeAre() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Managing Director & Founder",
      bio: "20+ years in data architecture and analytics, former Microsoft Azure architect. Passionate about helping organizations realize the value of their data.",
      expertise: ["Data Strategy", "Azure Architecture", "Digital Transformation"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Chen",
      role: "Principal Data Architect",
      bio: "Expert in cloud data platforms with extensive experience in enterprise data warehouse design and implementation across multiple industries.",
      expertise: ["Data Architecture", "Snowflake", "AWS", "Data Modeling"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Emma Rodriguez",
      role: "Lead AI/ML Engineer",
      bio: "Specializes in machine learning model development and deployment. PhD in Computer Science with focus on artificial intelligence applications.",
      expertise: ["Machine Learning", "Python", "TensorFlow", "MLOps"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "James Thompson",
      role: "Senior DevOps Engineer",
      bio: "Infrastructure automation expert ensuring reliable, scalable deployments. Certified in multiple cloud platforms and DevOps practices.",
      expertise: ["DevOps", "Kubernetes", "Terraform", "CI/CD"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Lisa Wang",
      role: "Principal Consultant",
      bio: "Business intelligence and analytics specialist with deep industry knowledge in financial services and healthcare sectors.",
      expertise: ["Power BI", "Tableau", "Business Intelligence", "Analytics"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Brown",
      role: "Senior Data Engineer",
      bio: "Experienced in building robust data pipelines and ETL processes. Expert in real-time data processing and stream analytics.",
      expertise: ["Data Engineering", "Apache Spark", "Kafka", "Stream Processing"],
      image: "/api/placeholder/300/300"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customer-Centric",
      description: "We put our clients' success at the center of everything we do, delivering solutions that create real business value."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative",
      description: "We work as an extension of your team, sharing knowledge and building capabilities together."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we deliver, from code quality to client service."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay at the forefront of technology, bringing the latest innovations to solve your toughest challenges."
    }
  ];

  const certifications = [
    "Microsoft Azure Solutions Architect Expert",
    "AWS Certified Solutions Architect",
    "Snowflake SnowPro Advanced Architect",
    "Google Cloud Professional Data Engineer",
    "Databricks Certified Data Engineer",
    "Power BI Data Analyst Associate",
    "Terraform Associate",
    "Kubernetes Administrator"
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "15+", label: "Team Members" },
    { number: "8", label: "Years Experience" }
  ];

  return (
    <>
      <Helmet>
        <title>Who We Are - DataSing</title>
        <meta name="description" content="Meet the DataSing team - experienced data professionals passionate about helping organizations transform through data." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6" style={{ color: '#5F607A' }}>
              Who We Are
            </h1>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#5F607A' }}>
              We're a team of passionate data professionals dedicated to helping organizations 
              unlock the full potential of their data. With deep technical expertise and strong 
              industry knowledge, we deliver solutions that drive real business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0BA6E8' }}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6" style={{ color: '#5F607A' }}>
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  DataSing was founded in 2016 with a simple mission: to help organizations 
                  become truly data-driven. We saw too many companies struggling with data 
                  silos, outdated infrastructure, and analytics that didn't deliver actionable insights.
                </p>
                <p>
                  Starting as a small team of data architects and engineers, we've grown into 
                  a comprehensive data consultancy serving clients across New Zealand and Australia. 
                  Our approach combines deep technical expertise with strong business acumen, 
                  ensuring that every solution we deliver creates measurable value.
                </p>
                <p>
                  Today, we're proud to be trusted partners to organizations across utilities, 
                  transport, property, education, health, government, and financial services. 
                  Our commitment to excellence and innovation continues to drive everything we do.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 border border-gray-200">
              <h3 className="text-xl font-semibold mb-6" style={{ color: '#5F607A' }}>Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                To empower organizations with data solutions that are speedy to implement, 
                savvy in design, and safe by default. We believe that great data solutions 
                should be accessible, reliable, and transformative.
              </p>
              <h3 className="text-xl font-semibold mb-6" style={{ color: '#5F607A' }}>Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every organization can harness the full power of their data 
                to make better decisions, improve outcomes, and create positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide how we work with clients, approach challenges, 
              and build solutions that last.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 text-white flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#0BA6E8' }}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals who are passionate about data and committed 
              to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-white border border-gray-300 text-xs text-gray-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <button className="p-2 text-gray-400 hover:text-black transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-black transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Certifications & Expertise
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our team maintains current certifications across all major cloud platforms 
              and data technologies, ensuring we deliver best-practice solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 border border-gray-700 p-4 text-center">
                <p className="text-white text-sm font-medium">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoWeAre;