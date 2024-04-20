import React from 'react';

const ComponentWithBackgroundImage = () => {
  const containerStyle = {
    backgroundImage: `url('./Assets/bg1.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

  return (
    <div style={containerStyle}>
      {}
    </div>
  );
}

export default ComponentWithBackgroundImage;
