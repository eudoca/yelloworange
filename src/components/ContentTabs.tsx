import React from 'react';

interface TabContentProps {
  title: string;
  content: string;
  imageSrc: string;
  altText: string;
  buttonText?: string;
  buttonLink?: string;
}

interface ContentTabsProps {
  tabs: TabContentProps[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

// Placeholder SVG component to use instead of via.placeholder.com
const ImagePlaceholder = ({ text }: { text: string }) => (
  <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-full h-48 flex items-center justify-center rounded-lg">
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 16L8.29289 10.7071C8.68342 10.3166 9.31658 10.3166 9.70711 10.7071L13 14M13 14L15.7929 11.2071C16.1834 10.8166 16.8166 10.8166 17.2071 11.2071L21 15M13 14L15.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
    <span className="ml-2 text-gray-500 font-medium">{text}</span>
  </div>
);

const ContentTabs: React.FC<ContentTabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <>
      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`btn-tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Stylish Divider */}
      <div className="stylish-divider"></div>

      {/* Active Tab Content */}
      <div className="premium-card fade-in">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="overflow-hidden rounded-lg">
              {/* Use inline SVG placeholder if image fails to load */}
              <img
                src={tabs[activeTab].imageSrc}
                alt={tabs[activeTab].altText}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                key={`tab-image-${activeTab}`}
                onError={(e) => {
                  // Hide the broken image
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  
                  // Replace with our SVG placeholder
                  const parent = target.parentNode;
                  if (parent) {
                    // First, remove any existing placeholders
                    const existingPlaceholder = parent.querySelector('.image-placeholder');
                    if (existingPlaceholder) {
                      parent.removeChild(existingPlaceholder);
                    }
                    
                    // Create new placeholder
                    const placeholder = document.createElement('div');
                    placeholder.innerHTML = `<div class="image-placeholder bg-gradient-to-br from-gray-100 to-gray-200 w-full h-48 flex items-center justify-center rounded-lg">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-400">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5" />
                        <path d="M3 16L8.29289 10.7071C8.68342 10.3166 9.31658 10.3166 9.70711 10.7071L13 14M13 14L15.7929 11.2071C16.1834 10.8166 16.8166 10.8166 17.2071 11.2071L21 15M13 14L15.5 16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                      </svg>
                      <span class="ml-2 text-gray-500 font-medium">${tabs[activeTab].title}</span>
                    </div>`;
                    parent.appendChild(placeholder.firstChild as Node);
                  }
                }}
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
                {tabs[activeTab].title}
              </span>
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {tabs[activeTab].content}
            </p>
            <a 
              href={tabs[activeTab].buttonLink || "#learn-more"} 
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-200"
            >
              {tabs[activeTab].buttonText || "Learn more"}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentTabs; 