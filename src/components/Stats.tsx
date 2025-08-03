function Stats() {
  const stats = [
    {
      title: "Certified & Secure",
      description: "State-of-the-art security features with data encryption and automated threat detection",
      icon: "🔒",
    },
    {
      title: "Flexible & Scalable",
      description: "Solutions that grow with you - from small agencies to large enterprises",
      icon: "📈",
    },
    {
      title: "Automated Build",
      description: "Pre-built templates for rapid deployment in days not weeks",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose DataSing
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Flexible, automated build, quick to scale, Microsoft Azure data and analytics solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {stat.title}
              </h3>
              <p className="text-lg text-blue-100">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            We are independently audited yearly to ensure our security practices, standards and policies are exemplar. 
            We are a Microsoft Partner of choice, and on Government Marketplace panels for Data, and Cloud Managed Services.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Stats; 