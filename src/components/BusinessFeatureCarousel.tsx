import { graphql, useStaticQuery, withPrefix } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import BlackArrow from "../images/svg/black-arrow.svg";

function BusinessFeatureCarousel() {
  const data = useStaticQuery(
    graphql`
      {
        BusinessData: allFile(
          filter: {
            relativeDirectory: { eq: "FeaturesCarousel/BusinessFeatures" }
            sourceInstanceName: { eq: "data" }
          }
          sort: { fields: childMarkdownRemark___frontmatter___pgNo, order: ASC }
        ) {
          nodes {
            childMarkdownRemark {
              frontmatter {
                image
                content
                pgNo
                title
              }
            }
          }
        }
        BusinessFeatureImages: allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            relativeDirectory: { eq: "FeaturesCarousel/BusinessFeatures" }
            extension: { regex: "/(png)|(jpg)|(jpeg)/" }
          }
          sort: { fields: name }
        ) {
          nodes {
            business_image: childrenImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
            name: base
          }
        }

        UserData: allFile(
          filter: {
            relativeDirectory: { eq: "FeaturesCarousel/UserFeatures" }
            sourceInstanceName: { eq: "data" }
          }
          sort: { fields: childMarkdownRemark___frontmatter___pgNo, order: ASC }
        ) {
          nodes {
            childMarkdownRemark {
              frontmatter {
                image
                content
                pgNo
                title
              }
            }
          }
        }
        UserFeatureImages: allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            relativeDirectory: { eq: "FeaturesCarousel/UserFeatures" }
            extension: { regex: "/(png)|(jpg)|(jpeg)/" }
          }
          sort: { fields: name }
        ) {
          nodes {
            user_image: childrenImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
            name: base
          }
        }
      }
    `
  );
  const businessData = data.BusinessData.nodes;
  const businessImages = data.BusinessFeatureImages.nodes;

  const getBusinessImages = (name: string) => {
    let img = businessImages.find((photo) => photo.name === name);
    if (!img) {
      img = businessImages.find((photo: any) => photo.name === "feature-1.png");
    }
    return getImage(img.business_image[0]);
  };

  let currentSlide = 0;

  const SlidesRef = useRef(null);

  let businessSlides: any;
  let contentTitles: any;
  let contentParas: any;
  let contentNumbers: any;

  // for Business Slides
  useEffect(() => {
    // content slides
    businessSlides = SlidesRef.current.childNodes;
    businessSlides[currentSlide].className = "slide showing";

    // content titles
    contentTitles = document.querySelectorAll(
      ".carousel__content__wrapper .carousel__content__container .carousel__content__header h1"
    );
    contentTitles[currentSlide].className = "showing";

    // content para
    contentParas = document.querySelectorAll(
      ".carousel__content__wrapper .carousel__content__container .carousel__content__para p"
    );
    contentParas[currentSlide].className = "showing";

    // content number
    contentNumbers = document.querySelectorAll(
      ".carousel__content__wrapper .carousel__content__container .carousel__content__number p"
    );
    contentNumbers[currentSlide].className = "showing";
  });

  let gotoSlide = (n: any) => {
    businessSlides[currentSlide].className = "slide";
    contentTitles[currentSlide].className = "";
    contentParas[currentSlide].className = "";
    contentNumbers[currentSlide].className = "";
    currentSlide = (n + businessSlides.length) % businessSlides.length;
    businessSlides[currentSlide].className = "slide showing";
    contentTitles[currentSlide].className = "showing";
    contentParas[currentSlide].className = "showing";
    contentNumbers[currentSlide].className = "showing";

    for (let i = 0; i < businessSlides.length; i++) {
      const element = businessSlides[i];
      if (i > currentSlide && i <= businessSlides.length - 1) {
        element.className = "slide next";
      } else if (i < currentSlide && i >= 0) {
        element.className = "slide previous";
      }
    }

    for (let c = 0; c < contentTitles.length; c++) {
      const element = contentTitles[c];
      if (c > currentSlide && c <= contentTitles.length - 1) {
        element.className = "next";
      } else if (c < currentSlide && c >= 0) {
        element.className = "previous";
      }
    }
  };

  const previousSlide = () => {
    gotoSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    gotoSlide(currentSlide + 1);
  };

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/FeaturesCarousel.css")}
        />
      </Helmet>
      <div className="carousel-wrapper">
        <div className="carousel__content__wrapper">
          {businessData.map((bd, i) => {
            return (
              <div className="carousel__content__container" key={i}>
                <div className="carousel__content__header">
                  <h1>{bd.childMarkdownRemark.frontmatter.title}</h1>
                </div>
                <div className="carousel__content__para">
                  <p>{bd.childMarkdownRemark.frontmatter.content}</p>
                </div>
                <div className="carousel__content__number">
                  <p> 0{bd.childMarkdownRemark.frontmatter.pgNo}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="feature-carousel-buttons">
          <div className="feature-carousel-left-btn" onClick={previousSlide}>
            <StaticImage
              className="feature-carousel-left-btn-image"
              src="../images/icons/arow.svg"
              alt="bg"
            ></StaticImage>
          </div>
          <div className="feature-carousel-right-btn" onClick={nextSlide}>
            <StaticImage
              className="feature-carousel-right-btn-image"
              src="../images/icons/arow.svg"
              alt="bg"
            ></StaticImage>
          </div>
        </div> */}

        <div className="feature-carousel-buttons">
          <div className="feature-carousel-left-btn" onClick={previousSlide}>
            <BlackArrow />
          </div>
          <div className="feature-carousel-right-btn" onClick={nextSlide}>
            <BlackArrow />
          </div>
        </div>

        <div className="slides" ref={SlidesRef}>
          {businessData.map((bd, i) => {
            return (
              <div className="slide" key={i}>
                <GatsbyImage
                  className="slide__image"
                  image={getBusinessImages(
                    bd.childMarkdownRemark.frontmatter.image
                  )}
                  alt={bd.childMarkdownRemark.frontmatter.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BusinessFeatureCarousel;
