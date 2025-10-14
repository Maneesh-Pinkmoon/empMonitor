import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"; // ensure this CSS file contains the above CSS

function AutoPlayMethods() {
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="slider-container">
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        {[...Array(7)].map((_, i) => (
          <div key={i} className="car-img">
            <img
              src="https://empmonitor.com/wp-content/uploads/2024/05/Frame-2042-1.webp"
              alt={`slide-${i}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlayMethods;
