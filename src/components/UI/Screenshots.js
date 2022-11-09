import { useTranslation } from 'react-i18next';
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

const Screenshots = () => {
  const { t, i18n } = useTranslation();

  const [toggler, setToggler] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [slide, setslide] = useState(0);

  const styleImg = {
    display: 'block',
    margin: '1vw',
    width: '30vw',
    height: '30vw',
  };

  const showSlide = (slide) => {
    setIsVisible((prev) => !prev);
    setslide(slide);
  };

  return (
    <div className="screenshots">
      <h2>{t('Screenshots')}</h2>

      {/* <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button> */}

      <div className="gallery wrapper">
        <div className="ss">
          <img onClick={() => showSlide(1)} src="/images/dashboad.jpg" alt="swamp" />
        </div>
        <div className="ss">
          <img onClick={() => showSlide(2)} src="/images/ss2.jpg" alt="swamp" />
        </div>
        <div className="ss">
          <img onClick={() => showSlide(3)} src="/images/ss3.jpg" alt="swamp" />
        </div>
        <div className="ss">
          <img onClick={() => showSlide(4)} src="/images/ss4.jpg" alt="swamp" />
        </div>
        <div className="ss">
          <img onClick={() => showSlide(5)} src="/images/ss5.jpg" alt="swamp" />
        </div>
        <div className="ss">
          <img onClick={() => showSlide(6)} src="/images/ss6.jpg" alt="swamp" />
        </div>
        <div className="ss">
          <img onClick={() => showSlide(7)} src="/images/ss7.jpg" alt="swamp" />
        </div>
        <div className="ss">
          <img onClick={() => showSlide(8)} src="/images/ss8.jpg" alt="swamp" />
        </div>
        <div className="ss">
          <img onClick={() => showSlide(9)} src="/images/ss9.jpg" alt="swamp" />
        </div>
        <div className="ss">
          <img onClick={() => showSlide(10)} src="/images/ss10.jpg" alt="swamp" />
        </div>
        <div className="ss">
          <img onClick={() => showSlide(11)} src="/images/ss11.jpg" alt="swamp" />
        </div>
        <div className="ss">
          <img onClick={() => showSlide(12)} src="/images/ss12.jpg" alt="swamp" />
        </div>

        <FsLightbox
          toggler={isVisible}
          slide={slide}
          sources={[
            'images/dashboad.jpg',
            'images/ss2.jpg',
            'images/ss3.jpg',
            'images/ss4.jpg',
            'images/ss5.jpg',
            'images/ss6.jpg',
            'images/ss7.jpg',
            'images/ss8.jpg',
            'images/ss9.jpg',
            'images/ss10.jpg',
            'images/ss11.jpg',
            'images/ss12.jpg',
          ]}
        />
      </div>

      <FsLightbox
        toggler={toggler}
        slide={slide}
        sources={[
          'images/dashboad.jpg',
          'images/ss2.jpg',
          'images/ss3.jpg',
          'images/ss4.jpg',
          'images/ss5.jpg',
          'images/ss6.jpg',
          'images/ss7.jpg',
          'images/ss8.jpg',
          'images/ss9.jpg',
          'images/ss10.jpg',
          'images/ss11.jpg',
          'images/ss12.jpg',
        ]}
      />
    </div>
  );
};

export default Screenshots;
