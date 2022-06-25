import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import "../../images/home/OurProjects/hover1.png";
function OurProjects() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={withPrefix("/styles/OurProjects.css")} />
      </Helmet>
      <div className="our-projects-wrapper">
        <h1>OUR PROJECTS</h1>
        <div className="our-project-list">
          <div className="our-project-list-item-container">
            <div className="our-project-list-item-content">
              <h1>unmatched by j&j</h1>
              <p>&bull;Virtual Clothing Store</p>
            </div>

            <StaticImage
              className="our-project-reveal-image"
              src="../../images/home/OurProjects/hover1.png"
              alt="hover"
            ></StaticImage>

            <div className="our-project-arrow-image">
              <StaticImage
                src="../../images/icons/top-right-arrow.png"
                alt="hover"
              ></StaticImage>
            </div>
          </div>
          <div className="our-project-list-item-container">
            <div className="our-project-list-item-content">
              <h1>audi virtual showroom</h1>
              <p>&bull;Automobile Virtual Space</p>
            </div>

            <StaticImage
              className="our-project-reveal-image"
              src="../../images/home/OurProjects/hover2.png"
              alt="hover"
            ></StaticImage>

            <div className="our-project-arrow-image">
              <StaticImage
                src="../../images/icons/top-right-arrow.png"
                alt="hover"
              ></StaticImage>
            </div>
          </div>
          <div className="our-project-list-item-container">
            <div className="our-project-list-item-content">
              <h1>kumar properties</h1>
              <p>&bull;Real Estate</p>
            </div>

            <StaticImage
              className="our-project-reveal-image"
              src="../../images/home/OurProjects/hover3.png"
              alt="hover"
            ></StaticImage>

            <div className="our-project-arrow-image">
              <StaticImage
                src="../../images/icons/top-right-arrow.png"
                alt="hover"
              ></StaticImage>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProjects;
