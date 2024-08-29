import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css from './SliderTwo.module.css';

import gitar1 from '../../images/arrivals/gitar1.jpg';
import gitar1_2x from '../../images/arrivals/gitar1@2x.jpg';
import gitar1_3x from '../../images/arrivals/gitar1@3x.jpg';

const SliderTwo = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    slidesToShow: 1, // Для маленьких экранов по умолчанию показываем 1 картинку
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
    responsive: [
      {
        breakpoint: 1280, // При ширине экрана от 1280px и выше
        settings: {
          slidesToShow: 5, // Показываем 5 картинок
          arrows: true, // Показываем стрелки
          dots: false, // Скрываем точки
        },
      },
      {
        breakpoint: 768, // При ширине экрана от 768px до 1279px
        settings: {
          slidesToShow: 3, // Показываем 3 картинки
          arrows: false, // Скрываем стрелки
          dots: true, // Показываем точки
        },
      },
      {
        breakpoint: 320, // При ширине экрана от 320px до 767px
        settings: {
          slidesToShow: 1, // Показываем 1 картинку
          arrows: false, // Скрываем стрелки
          dots: true, // Показываем точки
        },
      },
    ],
  };
  return (
    <div className={css.sliderContainer}>
      <Slider {...settings}>
        <div className={css.card}>
          <div className={css.lable}>
            <p>in stock</p>
          </div>
          <img
            className={css.cardImg}
            srcSet={`${gitar1} 1x, ${gitar1_2x} 2x, ${gitar1_3x} 3x`}
            src={gitar1}
            alt="gitar"
          />
          <div className={css.descr}>
            <p className={css.name}>Hagstrom Alvar Limited Edition</p>
            <p className={css.prise}>€2.990,00</p>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.lable}>
            <p>in stock</p>
          </div>
          <img
            className={css.cardImg}
            srcSet={`${gitar1} 1x, ${gitar1_2x} 2x, ${gitar1_3x} 3x`}
            src={gitar1}
            alt="gitar"
          />
          <div className={css.descr}>
            <p className={css.name}>Hagstrom Alvar Limited Edition</p>
            <p className={css.prise}>€2.990,00</p>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.lable}>
            <p>in stock</p>
          </div>
          <img
            className={css.cardImg}
            srcSet={`${gitar1} 1x, ${gitar1_2x} 2x, ${gitar1_3x} 3x`}
            src={gitar1}
            alt="gitar"
          />
          <div className={css.descr}>
            <p className={css.name}>Hagstrom Alvar Limited Edition</p>
            <p className={css.prise}>€2.990,00</p>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.lable}>
            <p>in stock</p>
          </div>
          <img
            className={css.cardImg}
            srcSet={`${gitar1} 1x, ${gitar1_2x} 2x, ${gitar1_3x} 3x`}
            src={gitar1}
            alt="gitar"
          />
          <div className={css.descr}>
            <p className={css.name}>Hagstrom Alvar Limited Edition</p>
            <p className={css.prise}>€2.990,00</p>
          </div>
        </div>
        <div className={css.card}>
          <div className={css.lable}>
            <p>in stock</p>
          </div>
          <img
            className={css.cardImg}
            srcSet={`${gitar1} 1x, ${gitar1_2x} 2x, ${gitar1_3x} 3x`}
            src={gitar1}
            alt="gitar"
          />
          <div className={css.descr}>
            <p className={css.name}>Hagstrom Alvar Limited Edition</p>
            <p className={css.prise}>€2.990,00</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderTwo;
