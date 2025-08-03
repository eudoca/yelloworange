import React from 'react';

interface ShapeDividerProps {
  type: 'tilt' | 'curve' | 'wave';
  color?: string;
  flip?: boolean;
}

const ShapeDivider: React.FC<ShapeDividerProps> = ({ type, color = '#ffffff', flip = false }) => {
  const styles = {
    position: 'relative',
    width: '100%',
    lineHeight: 0,
    transform: flip ? 'rotate(180deg)' : 'none',
  } as React.CSSProperties;

  const svgStyles = {
    position: 'relative',
    display: 'block',
    width: 'calc(100% + 1.3px)',
    height: '150px',
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
      default:
        return '';
    }
  };

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

export default ShapeDivider;
