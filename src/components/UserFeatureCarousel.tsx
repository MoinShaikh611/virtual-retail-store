import { graphql, useStaticQuery, withPrefix } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

function UserFeatureCarousel() {
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

  const userData = data.UserData.nodes;
  const userImages = data.UserFeatureImages.nodes;

  const getUserImages = (name: string) => {
    let img = userImages.find((photo) => photo.name === name);
    if (!img) {
      img = userImages.find((photo: any) => photo.name === "user-1.png");
    }
    return getImage(img.user_image[0]);
  };

  let userCurrentSlide = 0;
  const UserSlidesRef = useRef(null);
  let userSlides: any;
  let userContentTitles: any;
  let userContentParas: any;
  let userContentNumbers: any;

  useEffect(() => {
    // user content slides
    userSlides = UserSlidesRef.current.childNodes;
    userSlides[userCurrentSlide].className = "slide showing";

    // user content titles
    userContentTitles = document.querySelectorAll(
      ".carousel__content__wrapper .carousel__content__container .carousel__content__header h1"
    );
    userContentTitles[userCurrentSlide].className = "showing";

    // content para
    userContentParas = document.querySelectorAll(
      ".carousel__content__wrapper .carousel__content__container .carousel__content__para p"
    );
    userContentParas[userCurrentSlide].className = "showing";

    // content number
    userContentNumbers = document.querySelectorAll(
      ".carousel__content__wrapper .carousel__content__container .carousel__content__number p"
    );
    userContentNumbers[userCurrentSlide].className = "showing";
  });

  // for User Slides

  // user goto slide
  let userGotoSlide = (n: any) => {
    userSlides[userCurrentSlide].className = "slide";
    userContentTitles[userCurrentSlide].className = "";
    userContentParas[userCurrentSlide].className = "";
    userContentNumbers[userCurrentSlide].className = "";
    userCurrentSlide = (n + userSlides.length) % userSlides.length;
    userSlides[userCurrentSlide].className = "slide showing";
    userContentTitles[userCurrentSlide].className = "showing";
    userContentParas[userCurrentSlide].className = "showing";
    userContentNumbers[userCurrentSlide].className = "showing";

    for (let i = 0; i < userSlides.length; i++) {
      const element = userSlides[i];
      if (i > userCurrentSlide && i <= userSlides.length - 1) {
        element.className = "slide next";
      } else if (i < userCurrentSlide && i >= 0) {
        element.className = "slide previous";
      }
    }

    for (let c = 0; c < userContentTitles.length; c++) {
      const element = userContentTitles[c];
      if (c > userCurrentSlide && c <= userContentTitles.length - 1) {
        element.className = "next";
      } else if (c < userCurrentSlide && c >= 0) {
        element.className = "previous";
      }
    }
  };

  let userPreviousSlide = () => {
    userGotoSlide(userCurrentSlide - 1);
  };
  let userNextSlide = () => {
    userGotoSlide(userCurrentSlide + 1);
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
          {userData.map((ud, i) => {
            return (
              <div className="carousel__content__container" key={i}>
                <div className="carousel__content__header">
                  <h1>{ud.childMarkdownRemark.frontmatter.title}</h1>
                </div>
                <div className="carousel__content__para">
                  <p>{ud.childMarkdownRemark.frontmatter.content}</p>
                </div>
                <div className="carousel__content__number">
                  <p>0{ud.childMarkdownRemark.frontmatter.pgNo}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="feature-carousel-buttons">
          <div
            className="feature-carousel-left-btn"
            onClick={userPreviousSlide}
          >
            <StaticImage
              className="feature-carousel-left-btn-image"
              src="../images/icons/arow.svg"
              alt="bg"
            ></StaticImage>
          </div>
          <div className="feature-carousel-right-btn" onClick={userNextSlide}>
            <StaticImage
              className="feature-carousel-right-btn-image"
              src="../images/icons/arow.svg"
              alt="bg"
            ></StaticImage>
          </div>
        </div>

        <div className="slides" ref={UserSlidesRef}>
          {userData.map((bd, i) => {
            return (
              <div className="slide" key={i}>
                <GatsbyImage
                  className="slide__image"
                  image={getUserImages(
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

export default UserFeatureCarousel;
