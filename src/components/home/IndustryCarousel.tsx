import { Link, withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";
import BlackArrow from "../../images/svg/black-arrow.svg";

function IndustryCarousel() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/home/IndustryCarousel.css")}
        />
        <link
          rel="stylesheet"
          href={withPrefix("/styles/industry-case-study/Swiper.Min.css")}
        />
      </Helmet>
      <div className="IndustryCarousel__Wrapper">
        <div className="IndustryCarousel__Header">
          <p>INDUSTRIES</p>
          <h1>WE’VE COVERED</h1>
        </div>

        <div className="IndustryCarousel__Container">
          <Swiper
            slidesPerView={1}
            modules={[Navigation]}
            spaceBetween={20}
            centeredSlides={true}
            // centeredSlidesBounds={true}
            navigation={{
              nextEl: ".swiper-button-next-unique",
              prevEl: ".swiper-button-prev-unique",
            }}
            breakpoints={{
              0: {
                grabCursor: true,
                slidesPerView: 1,
                spaceBetween: 20,
              },
              460: {
                grabCursor: true,
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                grabCursor: true,
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1600: {
                grabCursor: true,
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <Link to="/industry-case-study/first-industry/">
                <StaticImage
                  src="../../images/IndustryCaseStudy/one.jpg"
                  alt="1"
                ></StaticImage>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/industry-case-study/first-industry/">
                <StaticImage
                  src="../../images/IndustryCaseStudy/one.jpg"
                  alt="1"
                ></StaticImage>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/industry-case-study/first-industry/">
                <StaticImage
                  src="../../images/IndustryCaseStudy/one.jpg"
                  alt="1"
                ></StaticImage>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/industry-case-study/first-industry/">
                <StaticImage
                  src="../../images/IndustryCaseStudy/one.jpg"
                  alt="1"
                ></StaticImage>
              </Link>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-buttons-container">
            <div className="swiper-button-prev-unique">
              <BlackArrow />
            </div>
            <div className="swiper-button-next-unique">
              <BlackArrow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndustryCarousel;
