import React from 'react';

const CustomBar = ({ text, barWidth, backgroundColor }) => {
  const barStyle = {
    background: backgroundColor || '#000',
    width: barWidth || '50px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: 'white',
    fontSize: '16px',
    borderRadius: '4px',
    gap:'24px',
    padding: '16px',
  };

  return (
    <div style={barStyle}>
      {text}
    </div>
  );
};

export default CustomBar;
