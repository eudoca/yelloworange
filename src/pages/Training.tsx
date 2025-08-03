import { Helmet } from 'react-helmet';
import { 
  Users, 
  Clock, 
  Award, 
  Calendar,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Video
} from 'lucide-react';

function Training() {
  const privateCourses = [
    {
      title: "Introduction to AI/ML",
      duration: "2 days",
      level: "Beginner",
      description: "Comprehensive introduction to artificial intelligence and machine learning concepts for business professionals.",
      topics: ["AI/ML Fundamentals", "Use Cases & Applications", "Implementation Planning", "ROI Assessment"]
    },
    {
      title: "Data Governance",
      duration: "1 day",
      level: "Intermediate",
      description: "Establish effective data governance frameworks and policies for your organization.",
      topics: ["Governance Strategy", "Data Quality", "Privacy & Compliance", "Stewardship Programs"]
    },
    {
      title: "Data Architecture",
      duration: "3 days",
      level: "Advanced",
      description: "Modern data architecture patterns and best practices for scalable enterprise solutions.",
      topics: ["Architecture Patterns", "Cloud Platforms", "Data Modeling", "Performance Optimization"]
    },
    {
      title: "Data Storytelling",
      duration: "1 day",
      level: "Beginner",
      description: "Learn to communicate data insights effectively through compelling narratives and visualizations.",
      topics: ["Narrative Techniques", "Visualization Best Practices", "Audience Engagement", "Presentation Skills"]
    },
    {
      title: "Data Platform",
      duration: "2 days",
      level: "Intermediate",
      description: "Building and managing modern data platforms using cloud-native technologies.",
      topics: ["Platform Design", "Data Lakes & Warehouses", "Integration Patterns", "Monitoring & Maintenance"]
    },
    {
      title: "Data Literacy",
      duration: "Half day",
      level: "Beginner",
      description: "Fundamental data literacy skills for all organizational levels.",
      topics: ["Data Fundamentals", "Reading Charts & Graphs", "Statistical Basics", "Critical Thinking"]
    }
  ];

  const publicCourses = [
    {
      title: "Azure Data Engineering Fundamentals",
      date: "April 18-19, 2024",
      location: "Auckland",
      price: "$1,200",
      instructor: "David Chen"
    },
    {
      title: "Power BI Advanced Analytics",
      date: "May 8-9, 2024", 
      location: "Wellington",
      price: "$950",
      instructor: "Lisa Wang"
    },
    {
      title: "Machine Learning for Business",
      date: "May 22-23, 2024",
      location: "Sydney",
      price: "$1,400",
      instructor: "Emma Rodriguez"
    }
  ];

  const softSkills = [
    {
      title: "Communication for Technical People",
      description: "Develop essential communication skills to bridge the gap between technical and business teams."
    },
    {
      title: "Leading Data Transformation",
      description: "Leadership skills for driving organizational change and data transformation initiatives."
    },
    {
      title: "Stakeholder Management",
      description: "Effective techniques for managing diverse stakeholders in data and analytics projects."
    },
    {
      title: "Project Management for Data Teams",
      description: "Agile project management methodologies tailored for data and analytics projects."
    }
  ];

  const webinars = [
    {
      title: "Getting Started with Azure Synapse",
      date: "April 15, 2024",
      time: "2:00 PM NZST",
      presenter: "David Chen",
      duration: "60 minutes"
    },
    {
      title: "Building Your First ML Model",
      date: "April 22, 2024",
      time: "3:00 PM NZST",
      presenter: "Emma Rodriguez", 
      duration: "90 minutes"
    },
    {
      title: "Power BI Performance Tips",
      date: "April 29, 2024",
      time: "2:00 PM NZST",
      presenter: "Lisa Wang",
      duration: "45 minutes"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Training - DataSing</title>
        <meta name="description" content="Professional data and analytics training programs. Build your team's capabilities with expert-led courses and workshops." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6">
              Training Programs
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Build your team's data and analytics capabilities with our comprehensive 
              training programs. From fundamentals to advanced topics, we provide 
              practical, hands-on learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Training Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Private Training
              </h3>
              <p className="text-gray-600">
                Customized training programs delivered at your organization, 
                tailored to your specific needs and context.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Public Courses
              </h3>
              <p className="text-gray-600">
                Scheduled public courses where individuals can join 
                other professionals for collaborative learning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">
                Webinars
              </h3>
              <p className="text-gray-600">
                Free online sessions covering current topics and 
                trends in data and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Private Training Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Private Data & Analytics Training
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive training courses designed for teams and organizations. 
              All courses can be customized to your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privateCourses.map((course, index) => (
              <div key={index} className="bg-gray-50 p-8 border border-gray-200 hover:border-black transition-colors duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-medium ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.level}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-black mb-4">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-black mb-2 uppercase tracking-wide">
                    Topics Covered
                  </h4>
                  <ul className="space-y-1">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 mt-0.5 mr-2 text-black flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="btn-outline w-full text-sm">
                  Request Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills Training */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Soft Skills for Technical People
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential soft skills training to help technical professionals 
              communicate effectively and lead successful data initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200">
                <h3 className="text-lg font-semibold text-black mb-4">
                  {skill.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Training Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Public Training Calendar
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our scheduled public courses and learn alongside other professionals.
            </p>
          </div>

          <div className="space-y-6">
            {publicCourses.map((course, index) => (
              <div key={index} className="bg-gray-50 p-8 border border-gray-200 hover:border-black transition-colors duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {course.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {course.date}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.instructor}
                      </div>
                      <div>{course.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-lg font-semibold text-black">
                        {course.price}
                      </div>
                      <div className="text-sm text-gray-500">per person</div>
                    </div>
                    <button className="btn-primary">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Free online sessions covering the latest trends and best practices 
              in data and analytics. No registration required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white/10 border border-gray-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2 py-1 bg-white text-black text-xs font-medium">
                    <Video className="w-3 h-3 mr-1" />
                    WEBINAR
                  </span>
                  <span className="text-gray-300 text-sm">{webinar.duration}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-4">
                  {webinar.title}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-300 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {webinar.date} at {webinar.time}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Presented by {webinar.presenter}
                  </div>
                </div>
                
                <button className="btn-outline w-full text-white border-white hover:bg-white hover:text-black">
                  Join Webinar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Training;