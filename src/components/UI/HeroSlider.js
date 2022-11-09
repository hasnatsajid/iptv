import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        <div className="slider-item">
          <a href="/" target="new">
            <img src="/images/banner-1.jpg" alt="Banner 1" />
          </a>
        </div>
        <div className="slider-item">
          <a href="/" target="new">
            <img src="/images/banner-2.jpg" alt="Banner 2" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
