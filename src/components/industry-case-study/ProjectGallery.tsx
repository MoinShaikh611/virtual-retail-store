import { withPrefix } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper";
import BlackArrow from "../../images/svg/black-arrow.svg";

function ProjectGallery({ pageContext }) {
  const { projectGalleryImageNames, projectGalleryImages } = pageContext;

  let specificProjectGalleryImages = [];

  projectGalleryImageNames.forEach((imageName) => {
    projectGalleryImages.forEach((element) => {
      if (element.name === imageName) {
        specificProjectGalleryImages.push(element);
      }
    });
  });

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/industry-case-study/ProjectGallery.css")}
        />
      </Helmet>
      <div className="ProjectGallery-Wrapper">
        <div className="ProjectGallery-Title">
          <h1>PROJECT GALLERY</h1>
        </div>
        <div className="ProjectGallery-Carousel-Wrapper">
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
              <StaticImage
                src="../../images/IndustryCaseStudy/one.jpg"
                alt="1"
              ></StaticImage>
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src="../../images/IndustryCaseStudy/one.jpg"
                alt="1"
              ></StaticImage>
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src="../../images/IndustryCaseStudy/one.jpg"
                alt="1"
              ></StaticImage>
            </SwiperSlide>
            <SwiperSlide>
              <StaticImage
                src="../../images/IndustryCaseStudy/one.jpg"
                alt="1"
              ></StaticImage>
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

export default ProjectGallery;
