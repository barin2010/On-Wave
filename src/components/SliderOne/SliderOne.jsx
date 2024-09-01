import React, { useState, useMemo } from 'react';
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

  const settings = useMemo(
    () => ({
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
          aria-label="Следующий слайд"
          className={`${css.customDot} ${
            i === activeSlide ? css.customDotActive : ''
          }`}
        ></button>
      ),
    }),
    [activeSlide]
  );

  return (
    <div className={css.sliderWrapper}>
      <Slider {...settings}>
        <div className={css.wrapper}>
          <picture>
            <source
              loading="lazy"
              width="1440"
              height="700"
              className={css.headerImg}
              media="(min-width:1440px )"
              srcSet={`${header_desc1} 1x, ${header_desc1_2x} 2x`}
            />

            <source
              loading="lazy"
              width="768"
              height="380"
              className={css.headerImg}
              media="(min-width:768px)"
              srcSet={`${header_tablet1} 1x, ${header_tablet_2x} 2x`}
            />

            <img
              loading="eager"
              width="320"
              height="384"
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
              loading="lazy"
              width="1440"
              height="700"
              className={css.headerImg}
              media="(min-width:1440px )"
              srcSet={`${header_desc2} 1x, ${header_desc2_2x} 2x`}
            />

            <source
              loading="lazy"
              width="768"
              height="380"
              className={css.headerImg}
              media="(min-width:768px)"
              srcSet={`${header_tablet2} 1x, ${header_tablet2_2x} 2x`}
            />

            <img
              loading="lazy"
              width="320"
              height="384"
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
              loading="lazy"
              width="1440"
              height="700"
              className={css.headerImg}
              media="(min-width:1440px )"
              srcSet={`${header_desc3} 1x, ${header_desc3_2x} 2x`}
            />

            <source
              loading="lazy"
              width="768"
              height="380"
              className={css.headerImg}
              media="(min-width:768px)"
              srcSet={`${header_tablet3} 1x, ${header_tablet3_2x} 2x`}
            />

            <img
              loading="lazy"
              width="320"
              height="384"
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

export default React.memo(SliderOne);

// import React, { useState, useMemo } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Link } from 'react-router-dom';
// import css from './SliderOne.module.css';
// import OptimizedImage from '../OptimizedImage/OptimizedImage';

// import header_mobile1 from '../../images/header/header_mob1.jpg';
// import header_mobile1_2x from '../../images/header/header_mob1.jpg';
// import header_tablet1 from '../../images/header/header_tablet1.jpg';
// import header_tablet_2x from '../../images/header/header_tablet1@2x.jpg';
// import header_desc1 from '../../images/header/header_desc1.jpg';
// import header_desc1_2x from '../../images/header/header_desc1@2x.jpg';

// import header_mobile2 from '../../images/header/header_mob2.jpg';
// import header_mobile2_2x from '../../images/header/header_mob2.jpg';
// import header_tablet2 from '../../images/header/header_tablet2.jpg';
// import header_tablet2_2x from '../../images/header/header_tablet2@2x.jpg';
// import header_desc2 from '../../images/header/header_desc2.jpg';
// import header_desc2_2x from '../../images/header/header_desc2@2x.jpg';

// import header_mobile3 from '../../images/header/header_mob3.jpg';
// import header_mobile3_2x from '../../images/header/header_mob3.jpg';
// import header_tablet3 from '../../images/header/header_tablet3.jpg';
// import header_tablet3_2x from '../../images/header/header_tablet3@2x.jpg';
// import header_desc3 from '../../images/header/header_desc3.jpg';
// import header_desc3_2x from '../../images/header/header_desc3@2x.jpg';

// const SliderOne = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const settings = useMemo(
//     () => ({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: false,
//       autoplaySpeed: 2000,
//       dots: true,
//       arrows: false,
//       dotsClass: css.customDots,
//       beforeChange: (current, next) => setActiveSlide(next),
//       customPaging: i => (
//         <button
//           aria-label="Следующий слайд"
//           className={`${css.customDot} ${
//             i === activeSlide ? css.customDotActive : ''
//           }`}
//         ></button>
//       ),
//     }),
//     [activeSlide]
//   );

//   const slides = useMemo(
//     () => [
//       {
//         mobile: {
//           src: header_mobile1,
//           srcSet: `${header_mobile1} 1x, ${header_mobile1_2x} 2x`,
//         },
//         tablet: {
//           src: header_tablet1,
//           srcSet: `${header_tablet1} 1x, ${header_tablet_2x} 2x`,
//         },
//         desktop: {
//           src: header_desc1,
//           srcSet: `${header_desc1} 1x, ${header_desc1_2x} 2x`,
//         },
//       },
//       {
//         mobile: {
//           src: header_mobile2,
//           srcSet: `${header_mobile2} 1x, ${header_mobile2_2x} 2x`,
//         },
//         tablet: {
//           src: header_tablet2,
//           srcSet: `${header_tablet2} 1x, ${header_tablet2_2x} 2x`,
//         },
//         desktop: {
//           src: header_desc2,
//           srcSet: `${header_desc2} 1x, ${header_desc2_2x} 2x`,
//         },
//       },
//       {
//         mobile: {
//           src: header_mobile3,
//           srcSet: `${header_mobile3} 1x, ${header_mobile3_2x} 2x`,
//         },
//         tablet: {
//           src: header_tablet3,
//           srcSet: `${header_tablet3} 1x, ${header_tablet3_2x} 2x`,
//         },
//         desktop: {
//           src: header_desc3,
//           srcSet: `${header_desc3} 1x, ${header_desc3_2x} 2x`,
//         },
//       },
//       // ... добавьте остальные слайды здесь
//     ],
//     []
//   );

//   return (
//     <div className={css.sliderWrapper}>
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div key={index} className={css.wrapper}>
//             <picture>
//               <source
//                 media="(min-width:1440px)"
//                 srcSet={slide.desktop.srcSet}
//               />
//               <source media="(min-width:768px)" srcSet={slide.tablet.srcSet} />
//               <OptimizedImage
//                 src={slide.mobile.src}
//                 srcSet={slide.mobile.srcSet}
//                 alt="header"
//                 className={css.headerImg}
//                 width={320}
//                 height={384}
//                 loading={index === 0 ? 'eager' : 'lazy'}
//               />
//             </picture>
//             <div className={css.wrapperContent}>
//               <div className={css.content}>
//                 <div className={css.title}>Find your own style</div>
//                 <button className={css.button}>
//                   <Link to="/catalog">View more</Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default React.memo(SliderOne);
