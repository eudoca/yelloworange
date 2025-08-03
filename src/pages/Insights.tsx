import { Helmet } from 'react-helmet';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

function Insights() {
  const featuredPost = {
    title: "The Future of Data Architecture: Trends Shaping 2024",
    excerpt: "Explore the key trends transforming data architecture, from mesh architectures to real-time analytics.",
    author: "Sarah Mitchell",
    date: "March 15, 2024",
    category: "Data Architecture",
    image: "/api/placeholder/800/400",
    readTime: "8 min read"
  };

  const blogPosts = [
    {
      title: "Implementing Data Governance in the Cloud Era",
      excerpt: "Best practices for establishing effective data governance frameworks in cloud environments.",
      author: "David Chen",
      date: "March 10, 2024",
      category: "Data Governance",
      readTime: "6 min read"
    },
    {
      title: "Machine Learning Operations: From Model to Production",
      excerpt: "A comprehensive guide to MLOps practices for reliable machine learning deployments.",
      author: "Emma Rodriguez",
      date: "March 5, 2024",
      category: "Machine Learning",
      readTime: "10 min read"
    },
    {
      title: "Power BI Performance Optimization Techniques",
      excerpt: "Advanced techniques to optimize Power BI reports for better performance and user experience.",
      author: "Lisa Wang",
      date: "February 28, 2024",
      category: "Business Intelligence",
      readTime: "7 min read"
    },
    {
      title: "Real-time Data Streaming with Apache Kafka",
      excerpt: "Building robust real-time data pipelines using Apache Kafka and cloud streaming services.",
      author: "Michael Brown",
      date: "February 25, 2024",
      category: "Data Engineering",
      readTime: "9 min read"
    },
    {
      title: "Data Security Best Practices for Modern Enterprises",
      excerpt: "Essential security considerations for protecting data in modern cloud-based architectures.",
      author: "James Thompson",
      date: "February 20, 2024",
      category: "Data Security",
      readTime: "8 min read"
    },
    {
      title: "Building a Data-Driven Culture: A Practical Guide",
      excerpt: "Strategies for fostering data literacy and building a truly data-driven organizational culture.",
      author: "Sarah Mitchell",
      date: "February 15, 2024",
      category: "Data Strategy",
      readTime: "6 min read"
    }
  ];

  const categories = [
    "All Posts",
    "Data Architecture",
    "Data Engineering",
    "Machine Learning", 
    "Business Intelligence",
    "Data Governance",
    "Data Security",
    "Data Strategy"
  ];

  const webinars = [
    {
      title: "Azure Synapse Analytics Deep Dive",
      date: "April 15, 2024",
      time: "2:00 PM NZST",
      presenter: "David Chen",
      status: "upcoming"
    },
    {
      title: "Building Scalable ML Pipelines",
      date: "April 8, 2024",
      time: "3:00 PM NZST", 
      presenter: "Emma Rodriguez",
      status: "upcoming"
    },
    {
      title: "Power BI Advanced Analytics",
      date: "March 25, 2024",
      time: "2:00 PM NZST",
      presenter: "Lisa Wang",
      status: "completed"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Insights - DataSing</title>
        <meta name="description" content="Latest insights, trends, and best practices in data analytics, engineering, and architecture from the DataSing team." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-black mb-6">
              Insights
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay up-to-date with the latest trends, best practices, and insights 
              from our team of data experts. Learn from real-world experiences and 
              industry thought leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Featured Image</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-black text-white text-sm uppercase tracking-wide">
                    Featured
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-black mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="btn-primary inline-flex items-center">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Posts */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-black mb-6">
                  Latest Posts
                </h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 text-sm border transition-colors duration-200 ${
                        index === 0 
                          ? 'bg-black text-white border-black' 
                          : 'bg-white text-gray-600 border-gray-300 hover:border-black'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-gray-50 border border-gray-200 hover:border-black transition-colors duration-200">
                    <div className="h-48 bg-gray-200 flex items-center justify-center border-b border-gray-200">
                      <span className="text-gray-400">Post Image</span>
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-flex items-center px-2 py-1 bg-white border border-gray-300 text-xs text-gray-600">
                          <Tag className="w-3 h-3 mr-1" />
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          <span className="mr-3">{post.author}</span>
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Upcoming Webinars */}
              <div className="bg-gray-50 p-6 border border-gray-200 mb-8">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Upcoming Webinars
                </h3>
                <div className="space-y-4">
                  {webinars.filter(w => w.status === 'upcoming').map((webinar, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                      <h4 className="font-medium text-black text-sm mb-2">
                        {webinar.title}
                      </h4>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {webinar.date}
                        </div>
                        <div>{webinar.time}</div>
                        <div>Presenter: {webinar.presenter}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn-outline w-full mt-4 text-sm">
                  View All Webinars
                </button>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-black p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">
                  Stay Updated
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Subscribe to our newsletter for the latest insights and updates.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 bg-white text-black text-sm focus:outline-none"
                  />
                  <button className="btn-outline w-full text-sm border-white text-white hover:bg-white hover:text-black">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Insights;