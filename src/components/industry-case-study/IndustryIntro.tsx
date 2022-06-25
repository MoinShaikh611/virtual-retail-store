import { withPrefix } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";

function IndustryIntro({ pageContext }) {
  const { introTitle, introPara, introExploreLink, introImages, slug } =
    pageContext;
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/industry-case-study/IndustryIntro.css")}
        />
      </Helmet>
      <div className="IndustryIntro__Wrapper">
        <div className="IndustryIntro-Container">
          <div className="IndustryIntro-Container-Col1">
            <h1>{introTitle}</h1>
            <p>{introPara}</p>
            <div className="IndustryIntro-Explore-Btn-Wrapper">
              <a
                href={introExploreLink}
                className="IndustryIntro-Explore-Btn-Container"
              >
                <p>Explore Now</p>
                <StaticImage
                  src="../../images/icons/send-arrow.png"
                  alt="send"
                ></StaticImage>
              </a>
            </div>
          </div>
          <div className="IndustryIntro-Container-Col2">
            <div className="IndustryIntro-Image-Wrapper">
              <GatsbyImage
                className="portfolio-detail-second-img"
                image={getImage(introImages)}
                alt={slug}
              ></GatsbyImage>
            </div>

            <div className="IndustryIntro-Mobile-Explore-Wrapper">
              <a
                href={introExploreLink}
                className="IndustryIntro-Explore-Btn-Container"
              >
                <p>Explore Now</p>
                <StaticImage
                  src="../../images/icons/send-arrow.png"
                  alt="send"
                ></StaticImage>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndustryIntro;
