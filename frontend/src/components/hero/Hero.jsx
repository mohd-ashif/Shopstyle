
import React from 'react';
import hand_icon from "../../../public/Assets/hand_icon.png";
import arrow_icon from "../../../public/Assets/arrow.png"
import hero_image from "../../../public/Assets/hero_image.png"


const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hand-hand-icon">
             
              <img src={hand_icon} alt="Hand Icon" />
            </div>
            <p>new</p>
            <p>Collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>
              Latest Collection
            </div>
            <img src={arrow_icon} alt="Arrow Icon" />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
