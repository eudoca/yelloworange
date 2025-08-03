import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = memo(({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const closeMenus = useCallback(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, []);

  const searchData = useMemo(() => [
    { title: 'Advisory & Delivery Services', content: 'End-to-end data consulting from strategy to implementation', path: '/what-we-do' },
    { title: 'AI & LLM Services', content: 'Enterprise-ready AI solutions including KeaAI', path: '/what-we-do' },
    { title: 'Platform Services', content: 'Pre-built Azure, Snowflake, and Databricks data warehouse solutions', path: '/what-we-do' },
    { title: 'Managed Services', content: 'Ongoing support and management for optimal platform performance', path: '/what-we-do' },
    { title: 'Industries', content: 'Utilities, Transport, Property, Education, Health, Government, Financial Services', path: '/industries' },
    { title: 'Training Programs', content: 'Professional data and analytics training courses and webinars', path: '/training' },
    { title: 'Our Team', content: 'Meet the DataSing team and learn about our company', path: '/who-we-are' },
    { title: 'Careers', content: 'Join our team of data professionals', path: '/join-datasing' },
    { title: 'Insights & Blog', content: 'Latest trends and best practices in data analytics', path: '/insights' },
    { title: 'Contact Us', content: 'Get in touch with our team for consultation', path: '/contact' },
  ], []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Perform search when debounced query changes
  useEffect(() => {
    if (debouncedQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [debouncedQuery, searchData]);

  const handleSearchResultClick = useCallback((path: string) => {
    setSearchQuery('');
    setDebouncedQuery('');
    setSearchResults([]);
    setIsSearchOpen(false);
  }, []);

  const navigation = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'What We Do',
      path: '/what-we-do',
      submenu: [
        { name: 'Consulting Services', path: '/what-we-do#consulting' },
        { name: 'Data Frameworks', path: '/what-we-do#frameworks' },
        { name: 'AI/ML Solutions', path: '/what-we-do#ai' },
        { name: 'Managed Services', path: '/what-we-do#managed' },
      ],
    },
    {
      name: 'Industries',
      path: '/industries',
    },
    {
      name: 'Who We Are',
      path: '/who-we-are',
    },
    {
      name: 'Training',
      path: '/training',
    },
    {
      name: 'Insights',
      path: '/insights',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header border-b border-neutral-200'
          : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center transition-transform duration-200 hover:scale-105" 
              aria-label="DataSing Home"
            >
              <img 
                src="/datasing_logo.png" 
                alt="DataSing" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                    location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50'
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-neutral-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2" role="menu" aria-label={`${item.name} submenu`}>
                    <div className="py-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.path}
                          className="block px-4 py-2 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-md mx-1"
                          role="menuitem"
                          onClick={closeMenus}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
              aria-label="Toggle search"
              aria-expanded={isSearchOpen}
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="btn btn-primary btn-md"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          isMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-neutral-200">
          <nav className="px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`block px-3 py-2 font-medium rounded-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50'
                  }`}
                  onClick={closeMenus}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        to={subitem.path}
                        className="block px-3 py-1 text-sm text-neutral-600 hover:text-primary-600 hover:bg-primary-50/50 rounded-md transition-colors"
                        onClick={closeMenus}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-neutral-200">
              <Link
                to="/contact"
                className="btn btn-primary btn-md w-full"
                onClick={closeMenus}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-neutral-200 z-50">
          <div className="max-w-3xl mx-auto p-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services, about us, contact..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                autoFocus
              />
              <Search className="absolute right-3 top-3 w-5 h-5 text-neutral-400" />
            </div>
            
            {searchResults.length > 0 && (
              <div className="mt-4 space-y-2">
                {searchResults.map((result, index) => (
                  <Link
                    key={index}
                    to={result.path}
                    onClick={() => handleSearchResultClick(result.path)}
                    className="block w-full p-3 text-left border border-neutral-200 rounded-lg hover:bg-primary-50 hover:border-primary-300 transition-all duration-200"
                  >
                    <div className="font-medium text-neutral-900">{result.title}</div>
                    <div className="text-sm text-neutral-600 mt-1">{result.content}</div>
                  </Link>
                ))}
              </div>
            )}
            
            {debouncedQuery && searchResults.length === 0 && (
              <div className="mt-4 p-3 text-center text-neutral-500">
                No results found for "{debouncedQuery}"
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
});

Header.displayName = 'Header';

export default Header; 