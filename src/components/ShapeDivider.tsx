import React from 'react';

interface ShapeDividerProps {
  type: 'tilt' | 'curve' | 'wave' | 'gradient-wave' | 'layered';
  color?: string;
  flip?: boolean;
  animated?: boolean;
}

const ShapeDivider: React.FC<ShapeDividerProps> = ({ type, color = '#ffffff', flip = false, animated = false }) => {
  const styles = {
    position: 'relative',
    width: '100%',
    lineHeight: 0,
    transform: flip ? 'rotate(180deg)' : 'none',
    overflow: 'hidden',
  } as React.CSSProperties;

  const svgStyles = {
    position: 'relative',
    display: 'block',
    width: 'calc(100% + 1.3px)',
    height: type === 'layered' ? '200px' : '150px',
    animation: animated ? 'float 6s ease-in-out infinite' : 'none',
  } as React.CSSProperties;

  const shapeStyles = {
    fill: color,
  };

  const getPath = () => {
    switch (type) {
      case 'tilt':
        return 'M1200 120L0 16.48 0 0 1200 0 1200 120z';
      case 'curve':
        return 'M1200 0L0 0 598.97 114.72 1200 0z';
      case 'wave':
        return 'M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z';
      case 'gradient-wave':
        return 'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,128C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z';
      case 'layered':
        return 'M0,64L60,74.7C120,85,240,107,360,117.3C480,128,600,128,720,117.3C840,107,960,85,1080,90.7C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z';
      default:
        return '';
    }
  };

  const renderDivider = () => {
    if (type === 'gradient-wave') {
      return (
        <div style={styles}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={svgStyles}
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#0BA6E8', stopOpacity: 0.8 }} />
                <stop offset="50%" style={{ stopColor: '#60a5fa', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#FCB802', stopOpacity: 0.4 }} />
              </linearGradient>
            </defs>
            <path d={getPath()} fill="url(#gradient)"></path>
          </svg>
        </div>
      );
    }

    if (type === 'layered') {
      return (
        <div style={styles}>
          {/* Background layer */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ ...svgStyles, position: 'absolute', opacity: 0.3 }}
          >
            <path d="M0,128L60,138.7C120,149,240,171,360,181.3C480,192,600,192,720,181.3C840,171,960,149,1080,154.7C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="#0BA6E8" fillOpacity="0.2"></path>
          </svg>
          {/* Foreground layer */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={svgStyles}
          >
            <path d={getPath()} style={shapeStyles}></path>
          </svg>
        </div>
      );
    }

    return (
      <div style={styles}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={svgStyles}
        >
          <path d={getPath()} style={shapeStyles}></path>
        </svg>
      </div>
    );
  };

  return renderDivider();
};

export default ShapeDivider;
