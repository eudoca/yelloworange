import React, { useState, useEffect } from 'react';

interface PlatformFeature {
  id: string;
  title: string;
  description: string;
}

interface PlatformProps {
  name: string;
  color: string;
  features: PlatformFeature[];
  icon: string;
  scale: 'small' | 'medium' | 'large';
}

export const PlatformDiagram: React.FC<PlatformProps> = ({ name, color, features, icon, scale }) => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Add animation delay for a better entrance effect
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Determine diagram complexity based on scale
  const getScaleConfig = () => {
    switch(scale) {
      case 'small':
        return {
          nodes: 4,
          width: 'w-64', 
          height: 'h-64',
          mainSize: 'w-20 h-20'
        };
      case 'medium':
        return {
          nodes: 6,
          width: 'w-72', 
          height: 'h-72',
          mainSize: 'w-24 h-24'
        };
      case 'large':
        return {
          nodes: 8,
          width: 'w-80', 
          height: 'h-80',
          mainSize: 'w-28 h-28'
        };
      default:
        return {
          nodes: 4,
          width: 'w-64', 
          height: 'h-64',
          mainSize: 'w-20 h-20'
        };
    }
  };
  
  const config = getScaleConfig();
  
  // Generate nodes in circular pattern
  const generateNodes = () => {
    const nodes = [];
    const radius = scale === 'small' ? 90 : scale === 'medium' ? 110 : 130;
    
    for (let i = 0; i < config.nodes; i++) {
      const angle = (i * (2 * Math.PI / config.nodes));
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      // Match node to feature if available
      const feature = features[i] || null;
      
      nodes.push(
        <div 
          key={i}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${animate ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
          style={{ 
            left: `calc(50% + ${x}px)`, 
            top: `calc(50% + ${y}px)`,
            transitionDelay: `${i * 0.1}s`
          }}
        >
          <div 
            className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110 ${
              activeFeature === feature?.id ? `${color} text-white shadow-lg` : 'bg-white shadow'
            }`}
            onClick={() => feature && setActiveFeature(feature.id)}
          >
            <span className="text-xs font-bold">{i + 1}</span>
          </div>
          
          {/* Line connecting to center */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed z-[-1]"
            style={{ 
              width: `${radius}px`,
              height: '1px',
              borderTopWidth: '1px',
              borderColor: activeFeature === feature?.id ? '#000' : '#d1d5db',
              transform: `rotate(${angle + Math.PI}rad) translateX(${radius / 2}px)`
            }}
          ></div>
        </div>
      );
    }
    
    return nodes;
  };
  
  // Get active feature details
  const getActiveFeature = () => {
    return features.find(f => f.id === activeFeature) || features[0];
  };
  
  return (
    <div className="relative">
      <div className={`relative ${config.width} ${config.height} mx-auto`}>
        {/* Platform nodes */}
        {generateNodes()}
        
        {/* Central platform icon */}
        <div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${config.mainSize} rounded-full ${color} flex items-center justify-center text-black transition-all duration-500 ${animate ? 'scale-100' : 'scale-0'}`}
        >
          <span className="text-4xl">{icon}</span>
        </div>
        
        {/* Outer circle */}
        <div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gray-200 transition-all duration-700 ${animate ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} 
          style={{ width: `${scale === 'small' ? 200 : scale === 'medium' ? 240 : 280}px`, height: `${scale === 'small' ? 200 : scale === 'medium' ? 240 : 280}px` }}
        ></div>
      </div>
      
      {/* Feature details */}
      <div className="mt-8 bg-white p-4 rounded-lg shadow-md transition-all duration-300">
        {activeFeature ? (
          <div>
            <h4 className="font-bold text-lg mb-2">{getActiveFeature()?.title}</h4>
            <p className="text-gray-600">{getActiveFeature()?.description}</p>
          </div>
        ) : (
          <div className="text-center p-4">
            <p>Click on a node to see feature details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatformDiagram; 