import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BrandTestimonial from "./BrandTestimonial";
import UserTestimonial from "./UserTestimonial";

function TestimonialCarousel() {
  const [brandTabState, setBrandTabState] = useState(true);
  const [userTabState, setUserTabState] = useState(false);

  const brandTestimonialTab = () => {
    setBrandTabState(true);
    setUserTabState(false);
  };

  const userTestimonialTab = () => {
    setBrandTabState(false);
    setUserTabState(true);
  };
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/home/TestimonialCarousel.css")}
        />
      </Helmet>
      <div className="TestimonialCarousel__Wrapper">
        <h1 style={{ margin: " 0px 3rem 1em", color: " white" }}>
          TESTIMONIALS
        </h1>
        <div className="carousel__tabs__wrapper">
          <div
            className={
              brandTabState
                ? `brand__testimonial__tab active`
                : `brand__testimonial__tab `
            }
            onClick={brandTestimonialTab}
          >
            <p>BY BRANDS</p>
          </div>
          <div
            className={
              userTabState
                ? `user__testimonial__tab active`
                : `user__testimonial__tab`
            }
            onClick={userTestimonialTab}
          >
            <p>BY USERS</p>
          </div>
        </div>
        {brandTabState ? (
          <BrandTestimonial></BrandTestimonial>
        ) : (
          <UserTestimonial></UserTestimonial>
        )}
        <div className="Testimonial__Carousel__BackgroundImage"></div>
      </div>
    </>
  );
}

export default TestimonialCarousel;
