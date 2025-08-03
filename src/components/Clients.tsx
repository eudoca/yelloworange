import { Quote } from 'lucide-react';

function Clients() {
  const testimonials = [
    {
      quote: "Before DataSing, we were drowning in data but unable to analyse it. DataSing's config driven ingestion solution means we can now get straight into analysis and modelling with up-to-date, clean data from four different sources.",
      author: "Director of Data Science",
      company: "Public Sector Organisation"
    },
    {
      quote: "Tīeke has changed the way we look at our data. From inventory tracking to sales analytics, it's like having an extra team just for data analysis. Extremely cost-effective.",
      author: "Business Owner",
      company: "SME Retail"
    },
    {
      quote: "They've done what they promised to do - deliver us an analytical capability. We chose them because they sat with us, understood what wanted and then smashed it. Most importantly, they're a partner - they haven't walked away once finished.",
      author: "Head of Service Delivery",
      company: "Public Sector Agency"
    },
    {
      quote: "We were nervous - moving our data to the cloud could as we knew it could be expensive - but DataSing's pre-built fixed price solution gave us assurance on the outcome AND kept our budget intact.",
      author: "CTO",
      company: "Insurance Sector"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600">
            Trusted by organisations across New Zealand
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-200" />
              <blockquote className="relative z-10">
                <p className="text-lg text-slate-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <footer>
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-600">{testimonial.company}</p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients; 