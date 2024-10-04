import React from 'react';

const FeatureItem = ({ img, title, description }) => {
  return (
    <div className="feature-item">
      <img src={img} alt={title} className="feature-img" />  
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureItem;
