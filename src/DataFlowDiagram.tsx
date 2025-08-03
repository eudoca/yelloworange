import React, { useState, useEffect } from 'react';

interface StageProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  isActive: boolean;
  onStageClick: () => void;
}

const Stage: React.FC<StageProps> = ({ title, icon, description, isActive, onStageClick }) => {
  return (
    <div 
      className={`relative ${isActive ? 'z-10' : 'z-0'}`}
      onClick={onStageClick}
    >
      <div 
        className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
          isActive 
            ? 'bg-amber-400 text-black shadow-lg ring-4 ring-amber-200' 
            : 'bg-white text-gray-800 shadow'
        } rounded-xl p-4 relative`}
      >
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{icon}</div>
          <h3 className="font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

interface DataFlowDiagramProps {
  animated?: boolean;
}

const DataFlowDiagram: React.FC<DataFlowDiagramProps> = ({ animated = true }) => {
  const [activeStage, setActiveStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(animated);
  
  // Animation effect
  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % stages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);
  
  const stages = [
    {
      title: 'Data Sources',
      icon: '📊',
      description: 'Connect to various data sources including databases, cloud storage, APIs, and file systems.',
      details: [
        'SQL databases',
        'NoSQL databases',
        'Excel/CSV files',
        'APIs & web services',
        'Cloud storage'
      ]
    },
    {
      title: 'Data Ingestion',
      icon: '⚡',
      description: 'Automated data ingestion process with configurable schedules and real-time streaming capabilities.',
      details: [
        'Batch processing',
        'Real-time streaming',
        'Incremental loading',
        'Change data capture',
        'Scheduled jobs'
      ]
    },
    {
      title: 'Data Processing',
      icon: '⚙️',
      description: 'Transform raw data into structured formats with cleaning, enrichment, and validation steps.',
      details: [
        'Data cleansing',
        'Normalization',
        'Enrichment',
        'Validation',
        'Business rules application'
      ]
    },
    {
      title: 'Data Storage',
      icon: '💾',
      description: 'Secure, scalable storage with Azure data services, optimized for analytics workloads.',
      details: [
        'Data warehouse',
        'Data lake',
        'Azure Blob Storage',
        'Azure Synapse',
        'Optimized schemas'
      ]
    },
    {
      title: 'Analysis & AI',
      icon: '🧠',
      description: 'Advanced analytics capabilities including machine learning models and predictive analytics.',
      details: [
        'BI dashboards',
        'ML models',
        'Predictive analytics',
        'Data mining',
        'Pattern recognition'
      ]
    },
    {
      title: 'Insights & Action',
      icon: '💡',
      description: 'Convert data into actionable insights with visualization, reporting, and action triggers.',
      details: [
        'Interactive dashboards',
        'Automated reporting',
        'Action triggers',
        'Business intelligence',
        'Decision support'
      ]
    }
  ];
  
  const handleStageClick = (index: number) => {
    setActiveStage(index);
    setIsAnimating(false); // Stop auto-animation when user interacts
  };
  
  const activeStageInfo = stages[activeStage];
  
  return (
    <div className="relative">
      {/* Flow diagram */}
      <div className="relative">
        {/* Stages */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {stages.map((stage, index) => (
            <Stage 
              key={index}
              title={stage.title}
              icon={stage.icon}
              description={stage.description}
              isActive={index === activeStage}
              onStageClick={() => handleStageClick(index)}
            />
          ))}
        </div>
        
        {/* Connection lines - only visible on wider screens */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full transform -translate-y-1/2 z-0">
          <div className="h-1 bg-gradient-to-r from-amber-300 to-amber-500"></div>
          {/* Arrow heads */}
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="absolute top-1/2 transform -translate-y-1/2"
              style={{ left: `${((i + 1) * 16.6) + 3}%` }}
            >
              <div className="w-3 h-3 border-t-2 border-r-2 border-amber-500 transform rotate-45"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Detail panel */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow transition-all duration-500">
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-4">{activeStageInfo.icon}</div>
          <div>
            <h3 className="text-xl font-bold">{activeStageInfo.title}</h3>
            <p className="text-gray-600">{activeStageInfo.description}</p>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeStageInfo.details.map((detail, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
              <span>{detail}</span>
            </div>
          ))}
        </div>
        
        {/* Animation control */}
        <div className="mt-6 flex justify-end">
          <button 
            onClick={() => setIsAnimating(!isAnimating)}
            className={`text-sm flex items-center px-3 py-1 rounded transition-colors ${
              isAnimating ? 'bg-amber-100 text-amber-900' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <span className="mr-2">
              {isAnimating ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </span>
            {isAnimating ? 'Pause Animation' : 'Resume Animation'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataFlowDiagram; 