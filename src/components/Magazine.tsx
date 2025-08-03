import { Calendar, Clock, ArrowRight } from 'lucide-react';

function Magazine() {
  const articles = [
    {
      title: "Fin du support SharePoint On-Premises en 2026 : comment anticiper la transition ?",
      excerpt: "Anticipez la fin du support SharePoint On-Premises en 2026 et planifiez votre transition vers SharePoint Online pour éviter des risques.",
      date: "14 mars 2025",
      readTime: "5 min",
      category: "Microsoft 365",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Digital Champion : découvrez ce rôle émergent avec Mathieu, consultant chez DataSing",
      excerpt: "Explorez le rôle stratégique du Digital Champion dans l'adoption des technologies innovantes et la conduite du changement.",
      date: "19 novembre 2024",
      readTime: "8 min",
      category: "Stratégie digitale & Innovation",
      image: "/api/placeholder/400/250"
    },
    {
      title: "GED SharePoint : comment créer une base documentaire structurée ?",
      excerpt: "Optimisez votre GED SharePoint avec une structuration efficace. Découvrez comment créer une base documentaire adaptée.",
      date: "19 novembre 2024",
      readTime: "6 min",
      category: "EDM Microsoft 365",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <section id="magazine" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Magazine
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            DataSing Mag - Actualités, conseils et retours d'expérience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-slate-200 relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Lire l'article
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-white text-slate-700 rounded-full font-medium hover:bg-slate-100 transition-colors shadow-lg"
          >
            Lire tous les articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Magazine; 