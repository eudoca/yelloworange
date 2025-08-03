import { Linkedin } from 'lucide-react';

function Footer() {
  const footerLinks = {
    company: [
      { name: "Home", href: "#" },
      { name: "Who we are", href: "#about" },
      { name: "Our Work", href: "#work" },
      { name: "Contact Us", href: "#contact" },
    ],
    services: [
      { name: "Advisory & Delivery Services", href: "#advisory" },
      { name: "AI & LLM Services", href: "#ai" },
      { name: "Platform Services", href: "#platforms" },
      { name: "Managed Services", href: "#managed" },
    ],
    help: [
      { name: "Our Support Site", href: "#support" },
      { name: "Our Privacy Policy", href: "#privacy" },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">DataSing</h3>
            <p className="text-slate-400 mb-6">
              Speedy. Savvy. Safe.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Email: info@datasing.nz</p>
              <p>Auckland, New Zealand</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">What we do</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-semibold mb-4">Help and Support</h4>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Follow us on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-slate-500 mb-4 md:mb-0">
              <p>©2024 by DataSing</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <img 
                src="/api/placeholder/150/50" 
                alt="AIFNZ" 
                className="h-8 opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 