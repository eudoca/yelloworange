import React, { useEffect, useState } from 'react';

interface AIVisualizationProps {
  height?: number;
  animate?: boolean;
}

type Node = {
  id: number;
  x: number;
  y: number;
  radius: number;
  color: string;
  active: boolean;
};

type Connection = {
  source: number;
  target: number;
  active: boolean;
};

const AIVisualization: React.FC<AIVisualizationProps> = ({ 
  height = 300,
  animate = true
}) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Set up the initial network
  useEffect(() => {
    // Create nodes
    const initialNodes: Node[] = [
      // Input layer
      { id: 1, x: 10, y: 20, radius: 5, color: '#fbbf24', active: false },
      { id: 2, x: 10, y: 50, radius: 5, color: '#fbbf24', active: false },
      { id: 3, x: 10, y: 80, radius: 5, color: '#fbbf24', active: false },
      
      // Hidden layer 1
      { id: 4, x: 40, y: 30, radius: 6, color: '#f59e0b', active: false },
      { id: 5, x: 40, y: 70, radius: 6, color: '#f59e0b', active: false },
      
      // Hidden layer 2
      { id: 6, x: 70, y: 20, radius: 7, color: '#d97706', active: false },
      { id: 7, x: 70, y: 50, radius: 7, color: '#d97706', active: false },
      { id: 8, x: 70, y: 80, radius: 7, color: '#d97706', active: false },
      
      // Output layer
      { id: 9, x: 90, y: 50, radius: 8, color: '#111827', active: false }
    ];
    
    // Connect nodes
    const initialConnections: Connection[] = [
      // Input to hidden 1
      { source: 1, target: 4, active: false },
      { source: 1, target: 5, active: false },
      { source: 2, target: 4, active: false },
      { source: 2, target: 5, active: false },
      { source: 3, target: 4, active: false },
      { source: 3, target: 5, active: false },
      
      // Hidden 1 to hidden 2
      { source: 4, target: 6, active: false },
      { source: 4, target: 7, active: false },
      { source: 4, target: 8, active: false },
      { source: 5, target: 6, active: false },
      { source: 5, target: 7, active: false },
      { source: 5, target: 8, active: false },
      
      // Hidden 2 to output
      { source: 6, target: 9, active: false },
      { source: 7, target: 9, active: false },
      { source: 8, target: 9, active: false }
    ];
    
    setNodes(initialNodes);
    setConnections(initialConnections);
    setIsInitialized(true);
  }, []);
  
  // Animation effect
  useEffect(() => {
    if (!isInitialized || !animate) return;
    
    const animationInterval = setInterval(() => {
      // Randomly activate input nodes
      setNodes(prev => {
        const newNodes = [...prev];
        
        // Reset all nodes
        newNodes.forEach(node => {
          node.active = false;
        });
        
        // Activate random input node
        const inputNodeIds = [1, 2, 3];
        const randomInputId = inputNodeIds[Math.floor(Math.random() * inputNodeIds.length)];
        const inputNode = newNodes.find(n => n.id === randomInputId);
        if (inputNode) inputNode.active = true;
        
        // Activate nodes with delay based on layer
        setTimeout(() => {
          setNodes(prev => {
            const updatedNodes = [...prev];
            // Activate hidden layer 1
            [4, 5].forEach(id => {
              const node = updatedNodes.find(n => n.id === id);
              if (node) node.active = Math.random() > 0.3;
            });
            return updatedNodes;
          });
          
          // Activate connections
          setConnections(prev => {
            const newConns = [...prev];
            newConns.forEach(conn => {
              if ([1, 2, 3].includes(conn.source) && [4, 5].includes(conn.target)) {
                conn.active = Math.random() > 0.5;
              } else {
                conn.active = false;
              }
            });
            return newConns;
          });
        }, 200);
        
        // Activate hidden layer 2 with delay
        setTimeout(() => {
          setNodes(prev => {
            const updatedNodes = [...prev];
            [6, 7, 8].forEach(id => {
              const node = updatedNodes.find(n => n.id === id);
              if (node) node.active = Math.random() > 0.4;
            });
            return updatedNodes;
          });
          
          // Activate connections
          setConnections(prev => {
            const newConns = [...prev];
            newConns.forEach(conn => {
              if ([4, 5].includes(conn.source) && [6, 7, 8].includes(conn.target)) {
                conn.active = Math.random() > 0.5;
              }
            });
            return newConns;
          });
        }, 400);
        
        // Activate output layer with delay
        setTimeout(() => {
          setNodes(prev => {
            const updatedNodes = [...prev];
            const outputNode = updatedNodes.find(n => n.id === 9);
            if (outputNode) outputNode.active = true;
            return updatedNodes;
          });
          
          // Activate connections
          setConnections(prev => {
            const newConns = [...prev];
            newConns.forEach(conn => {
              if ([6, 7, 8].includes(conn.source) && conn.target === 9) {
                conn.active = Math.random() > 0.3;
              }
            });
            return newConns;
          });
        }, 600);
        
        return newNodes;
      });
    }, 2000);
    
    return () => clearInterval(animationInterval);
  }, [isInitialized, animate]);
  
  const getNodePosition = (node: Node) => {
    return {
      x: `${node.x}%`,
      y: `${node.y}%`
    };
  };
  
  const getConnectionPath = (source: Node, target: Node) => {
    // Convert percentages to coordinates
    const sourceX = (source.x / 100) * 100;
    const sourceY = (source.y / 100) * height;
    const targetX = (target.x / 100) * 100; 
    const targetY = (target.y / 100) * height;
    
    return `M${sourceX},${sourceY} C${(sourceX + targetX) / 2},${sourceY} ${(sourceX + targetX) / 2},${targetY} ${targetX},${targetY}`;
  };
  
  return (
    <div 
      className="relative ai-visualization bg-gray-50 rounded-xl overflow-hidden"
      style={{ height: `${height}px` }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 100 ${height}`}
        preserveAspectRatio="none"
      >
        {/* Connections */}
        {connections.map((conn, index) => {
          const source = nodes.find(n => n.id === conn.source);
          const target = nodes.find(n => n.id === conn.target);
          
          if (!source || !target) return null;
          
          return (
            <path 
              key={`conn-${index}`}
              d={getConnectionPath(source, target)}
              stroke={conn.active ? source.color : '#e5e7eb'}
              strokeWidth={conn.active ? 2 : 1}
              fill="none"
              strokeDasharray={conn.active ? "0" : "3,3"}
              className="transition-all duration-300"
            />
          );
        })}
        
        {/* Nodes */}
        {nodes.map(node => (
          <circle
            key={`node-${node.id}`}
            cx={node.x}
            cy={node.y}
            r={node.radius}
            fill={node.active ? node.color : '#e5e7eb'}
            className={`transition-all duration-300 ${node.active ? 'filter drop-shadow-md' : ''}`}
          />
        ))}
      </svg>
      
      {/* Labels */}
      <div className="absolute top-2 left-2 text-xs text-gray-500 font-mono">Input</div>
      <div className="absolute bottom-2 right-2 text-xs text-gray-500 font-mono">Output</div>
      
      {/* Security Layer Visualization */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full border-2 border-dashed border-gray-300 rounded-xl opacity-20"></div>
        <div className="absolute top-3 right-3 bg-black text-white text-xs font-mono px-2 py-1 rounded">
          Security Layer
        </div>
        <div className="absolute bottom-3 left-3 flex items-center space-x-1">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs text-gray-500 font-mono">Protected</span>
        </div>
      </div>
    </div>
  );
};

export default AIVisualization; 