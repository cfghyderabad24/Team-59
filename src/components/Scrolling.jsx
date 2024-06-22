// src/ScrollingBanner.js
import React from 'react';
import './ScrollingBanner.css'; // Import the CSS file for styling
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg'; // Add the path to your banner image

const ScrollingBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <img src={image1} alt="Banner" />
        <img src={image2} alt="Banner" />
      </div>
    </div>
  );
};

export default ScrollingBanner;