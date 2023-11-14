import React, { useState } from 'react';
import "./Slider.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Box from '../Box/Box';


function Slider() {
  const images = [
    {
      url: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/D/B/1/%7BDB1D4302-50CB-418F-B870-31F87911B514%7D1920x800-Shang-Palace.jpg",
      title: "Delicious Doubles",
      subtitle: "Earn double points on every bite and sip!"
    },
    {
      url: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/9/7/4/%7B97456971-8ECB-4613-A674-E8B7818B1A5A%7DBrand%20Campaign_SL_Homepage_Theme3_Penguin.jpg",
      title: "Shangri-La Colombo",
      subtitle: "Come with us through the whimsical world of Shangri-La, where your personal paradise awaits."
    },
    {
      url: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/2/0/B/{20B18195-50BE-4993-9CAE-0A141AFD3747}201126_slcb_homepage1.jpg",
      title: "Shangri-La Colombo",
      subtitle: "A personal tropical sanctuary set within the heart of the city"
    },
    {
      url: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/4/D/{34D215D5-931F-41E3-9164-4C4935192961}1.-Premier-Ocean-View-Room.jpg",
      title: "Rooms & Suites",
      subtitle: "Tastefully designed with the modern traveler in mind"
    },
    {
      url: "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/B/B/0/%7BBB024DAF-472A-44A9-98F7-CC720F714F4A%7DDouble%20Points%20Campaign-Hotel%20Website%20Banner_1920x1080.jpg",
      title: "Delicious Doubles",
      subtitle: "Earn double points on every bite and sip!"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (previous, next) => {
    setCurrentSlide(next);
  };

  return (
    <div>
      <div className="silder">
      <Slide onChange={handleSlideChange}>
        {images.map((image, index) => (
          <div key={index} className="each-slide-effect">
            <div style={{
              backgroundImage: `url(${image.url})`,
              backgroundPosition: '50%',
              backgroundSize: 'cover',
              height: '80vh',
              minWidth: '1180px'
            }}>

              <span>
                <h2>{image.title}</h2>
                <p>{image.subtitle}</p>
              </span>
            </div>
          </div>
        ))}
      </Slide>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={currentSlide === index ? 'dot active' : 'dot'}
          />
        ))}
      </div>
      </div>
      <div className="box">
      <Box/>
      </div>
   
    </div>
  );
}

export default Slider;
