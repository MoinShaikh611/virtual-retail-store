import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

function WhyVirtual() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={withPrefix("/styles/WhyVirtual.css")} />
      </Helmet>
      <div className="why-go-virtual-wrapper">
        <div className="virtual-content">
          <h1>WHY GO VIRTUAL?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            neque ad aliquid non nostrum reiciendis exercitationem dolorum,
            ipsam dolor excepturi perferendis earum, omnis iure, ipsa laborum
            sit aliquam. Adipisci, inventore!
          </p>
        </div>
        <div className="virtual-growth-rate">
          <div className="x4">
            <StaticImage
              src={"../images/shapes/elipse.png"}
              alt="rate"
            ></StaticImage>
            <h6>4X</h6>
            <p className="higher-text">Higher</p>
            <p className="conversation-rate">Clickthrough Rate</p>
          </div>
          <div className="x3">
            <StaticImage
              src={"../images/shapes/elipse.png"}
              alt="rate"
            ></StaticImage>
            <h6>3X</h6>
            <p className="higher-text">Higher</p>
            <p className="conversation-rate">Retention Rate</p>
          </div>
          <div className="percent-17">
            <StaticImage
              src={"../images/shapes/elipse.png"}
              alt="rate"
            ></StaticImage>
            <h6>17%</h6>
            <p className="higher-text">Higher</p>
            <p className="conversation-rate">Conversion Rate</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyVirtual;
