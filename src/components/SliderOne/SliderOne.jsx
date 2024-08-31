import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import css from './SliderOne.module.css';

import header_mobile1 from '../../images/header/header_mob1.jpg';
import header_mobile1_2x from '../../images/header/header_mob1.jpg';
import header_tablet1 from '../../images/header/header_tablet1.jpg';
import header_tablet_2x from '../../images/header/header_tablet1@2x.jpg';
import header_desc1 from '../../images/header/header_desc1.jpg';
import header_desc1_2x from '../../images/header/header_desc1@2x.jpg';

import header_mobile2 from '../../images/header/header_mob2.jpg';
import header_mobile2_2x from '../../images/header/header_mob2.jpg';
import header_tablet2 from '../../images/header/header_tablet2.jpg';
import header_tablet2_2x from '../../images/header/header_tablet2@2x.jpg';
import header_desc2 from '../../images/header/header_desc2.jpg';
import header_desc2_2x from '../../images/header/header_desc2@2x.jpg';

import header_mobile3 from '../../images/header/header_mob3.jpg';
import header_mobile3_2x from '../../images/header/header_mob3.jpg';
import header_tablet3 from '../../images/header/header_tablet3.jpg';
import header_tablet3_2x from '../../images/header/header_tablet3@2x.jpg';
import header_desc3 from '../../images/header/header_desc3.jpg';
import header_desc3_2x from '../../images/header/header_desc3@2x.jpg';

const SliderOne = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    dotsClass: css.customDots,
    beforeChange: (current, next) => setActiveSlide(next),
    customPaging: i => (
      <button
        className={`${css.customDot} ${
          i === activeSlide ? css.customDotActive : ''
        }`}
      ></button>
    ),
  };

  return (
    <div className={css.sliderWrapper}>
      <Slider {...settings}>
        <div className={css.wrapper}>
          <picture>
            <source
              width="1440"
              className={css.headerImg}
              media="(min-width:1440px )"
              srcSet={`${header_desc1} 1x, ${header_desc1_2x} 2x`}
            />

            <source
              width="768"
              className={css.headerImg}
              media="(min-width:768px)"
              srcSet={`${header_tablet1} 1x, ${header_tablet_2x} 2x`}
            />

            <img
              loading="eager"
              width="320"
              className={css.headerImg}
              srcSet={`${header_mobile1} 1x, ${header_mobile1_2x} 2x`}
              alt="header"
            />
          </picture>
          <div className={css.wrapperContent}>
            <div className={css.content}>
              <div className={css.title}>Find your own style</div>
              <button className={css.button}>
                <Link to="/catalog">View more</Link>
              </button>
            </div>
          </div>
        </div>
        <div className={css.wrapper}>
          <picture>
            <source
              width="1440"
              className={css.headerImg}
              media="(min-width:1440px )"
              srcSet={`${header_desc2} 1x, ${header_desc2_2x} 2x`}
            />

            <source
              width="768"
              className={css.headerImg}
              media="(min-width:768px)"
              srcSet={`${header_tablet2} 1x, ${header_tablet2_2x} 2x`}
            />

            <img
              loading="eager"
              width="320"
              className={css.headerImg}
              srcSet={`${header_mobile2} 1x, ${header_mobile2_2x} 2x`}
              alt="header"
            />
          </picture>
          <div className={css.wrapperContent}>
            <div className={css.content}>
              <div className={css.title}>Find your own style</div>
              <button className={css.button}>
                <Link to="/catalog">View more</Link>
              </button>
            </div>
          </div>
        </div>
        <div className={css.wrapper}>
          <picture>
            <source
              width="1440"
              className={css.headerImg}
              media="(min-width:1440px )"
              srcSet={`${header_desc3} 1x, ${header_desc3_2x} 2x`}
            />

            <source
              width="768"
              className={css.headerImg}
              media="(min-width:768px)"
              srcSet={`${header_tablet3} 1x, ${header_tablet3_2x} 2x`}
            />

            <img
              loading="eager"
              width="320"
              className={css.headerImg}
              srcSet={`${header_mobile3} 1x, ${header_mobile3_2x} 2x`}
              alt="header"
            />
          </picture>
          <div className={css.wrapperContent}>
            <div className={css.content}>
              <div className={css.title}>Find your own style</div>
              <button className={css.button}>
                <Link to="/catalog">View more</Link>
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderOne;
