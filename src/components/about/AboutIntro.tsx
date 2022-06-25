import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";

function AboutIntro() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/about/AboutIntro.css")}
        />
      </Helmet>
      <div className="AboutIntro-Wrapper">
        <div className="AboutIntro-Container">
          <h1>we help you switch your business to virtual</h1>
          <div className="AboutIntro-Image">
            <StaticImage
              src="../../images/about/about-intro.jpg"
              alt="about-intro"
            ></StaticImage>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutIntro;
