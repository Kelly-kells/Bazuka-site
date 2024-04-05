import React, { useState, useEffect } from 'react';
import "./hero.css";
import 'animate.css';
import { Link } from 'react-router-dom';
import image1 from "../Assets/herobg.jpg"
import image2 from "../Assets/Banner-3.jpg"
import image3 from "../Assets/first-flyer.jpg"

const Hero = () => {
  
  const images = [
    image1, image2, image3, image1
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero '>
      <div className="hero-left">
        <h2 className=' animate__animated animate__backInLeft animate__slow-1s' >Restoring Your Sexual Confidence</h2>
        <h1 className=' animate__animated animate__backInLeft animate__delay-2s'>Bazuka Herbal Care</h1>
        <p className='animate__animated animate__backInLeft animate__delay-1s'>Are suffering from poor performance <br/>in the bedroom? Do you feel inadequate in size?<br/> 
          Then you are at the right place.<br/> 
          Let us restore your confidence as a man with our trusted herbal remedies
        </p>
        <div className="hero-btn">
          <Link to="/Product"><button>Explore</button></Link>
        </div>
      </div>
      <div className="hero-right">
        {/* Display the current image */}
        <div className="image-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="gallery-image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
