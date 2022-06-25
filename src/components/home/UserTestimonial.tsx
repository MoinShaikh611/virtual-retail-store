import { graphql, useStaticQuery, withPrefix } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

function UserTestimonial() {
  const data = useStaticQuery(graphql`
    {
      BrandData: allFile(
        filter: {
          relativeDirectory: { eq: "TestimonialCarousel/UserTestimonial" }
          sourceInstanceName: { eq: "data" }
        }
        sort: { fields: childMarkdownRemark___frontmatter___seq, order: ASC }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              brandImage
              content
              seq
              userImage
              userDesignation
              userName
            }
          }
        }
      }
      BrandBrandImages: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "TestimonialCarousel/ByUser/brandImage" }
        }
      ) {
        nodes {
          brandBrand_image: childrenImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
          name: base
        }
      }
      BrandUserImages: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "TestimonialCarousel/ByUser/userImage" }
        }
      ) {
        nodes {
          brandUser_image: childrenImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
          name: base
        }
      }
    }
  `);

  const brandData = data.BrandData.nodes;
  const brandBrandImages = data.BrandBrandImages.nodes;
  const brandUserImages = data.BrandUserImages.nodes;

  const getBrandBrandImages = (name: string) => {
    let img = brandBrandImages.find((photo) => photo.name === name);
    if (!img) {
      img = brandBrandImages.find((photo: any) => photo.name === "iic.png");
    }
    return getImage(img.brandBrand_image[0]);
  };

  const getBrandUserImages = (name: string) => {
    let img = brandUserImages.find((photo) => photo.name === name);
    if (!img) {
      img = brandUserImages.find((photo: any) => photo.name === "dean.png");
    }
    return getImage(img.brandUser_image[0]);
  };

  let currentSlide = 0;
  let SlidesRef = useRef(null);
  let ContentSlidesRef = useRef(null);

  let brandSlides: any;
  let brandContents: any;

  useEffect(() => {
    brandSlides = SlidesRef.current.childNodes;
    brandSlides[currentSlide].className = "testimonial-carousel-slide showing";

    brandContents = ContentSlidesRef.current.childNodes;
    brandContents[currentSlide].className = "testimonial-content-slide showing";
  });

  let gotoBrandSlide = (n: any) => {
    brandSlides[currentSlide].className = "testimonial-carousel-slide";
    brandContents[currentSlide].className = "testimonial-content-slide ";
    currentSlide = (n + brandSlides.length) % brandSlides.length;
    brandSlides[currentSlide].className = "testimonial-carousel-slide showing";
    brandContents[currentSlide].className = "testimonial-content-slide showing";

    for (let i = 0; i < brandSlides.length; i++) {
      const element = brandSlides[i];
      if (i > currentSlide && i <= brandSlides.length - 1) {
        element.className = "testimonial-carousel-slide next";
      } else if (i < currentSlide && i >= 0) {
        element.className = "testimonial-carousel-slide previous";
      }
    }

    for (let i = 0; i < brandContents.length; i++) {
      const element = brandContents[i];
      if (i > currentSlide && i <= brandContents.length - 1) {
        element.className = "testimonial-content-slide next";
      } else if (i < currentSlide && i >= 0) {
        element.className = "testimonial-content-slide previous";
      }
    }
  };

  const previousSlide = () => {
    gotoBrandSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    gotoBrandSlide(currentSlide + 1);
  };

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/home/Brand-User-Testimonial.css")}
        />
      </Helmet>
      <div className="testimonial-carousel-wrapper">
        <div className="testimonial-carousel-container">
          <div className="testimonial-carousel-slides" ref={SlidesRef}>
            {brandData.map((bd: any, i: number) => {
              return (
                <>
                  <div className="testimonial-carousel-slide" key={i}>
                    <GatsbyImage
                      image={getBrandUserImages(
                        bd.childMarkdownRemark.frontmatter.userImage
                      )}
                      alt="image"
                    ></GatsbyImage>
                    <div className="testimonial-carousel-slide-brand-container">
                      <h3>{bd.childMarkdownRemark.frontmatter.userName}</h3>
                      <p>
                        {bd.childMarkdownRemark.frontmatter.userDesignation}
                      </p>
                    </div>
                    <div className="testimonial-carousel-slide-vertical-line"></div>
                    <div className="testimonial-carousel-slide-image-container">
                      <GatsbyImage
                        image={getBrandBrandImages(
                          bd.childMarkdownRemark.frontmatter.brandImage
                        )}
                        alt="image"
                      ></GatsbyImage>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="feature-carousel-buttons">
          <div className="feature-carousel-left-btn" onClick={previousSlide}>
            <StaticImage
              className="feature-carousel-left-btn-image"
              src="../../images/icons/arow.svg"
              alt="bg"
            ></StaticImage>
          </div>
          <div className="feature-carousel-right-btn" onClick={nextSlide}>
            <StaticImage
              className="feature-carousel-right-btn-image"
              src="../../images/icons/arow.svg"
              alt="bg"
            ></StaticImage>
          </div>
        </div>
        <div className="testimonial-content-container">
          <div className="testimonial-content-slides" ref={ContentSlidesRef}>
            {brandData.map((bd: any, i: number) => {
              return (
                <>
                  <div className="testimonial-content-slide" key={i}>
                    <p>“{bd.childMarkdownRemark.frontmatter.content}”</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserTestimonial;
