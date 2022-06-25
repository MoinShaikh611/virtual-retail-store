import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
function AsSeenOn() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={withPrefix("/styles/AsSeenOn.css")} />
      </Helmet>
      <div className="AsSeenOn__Wrapper">
          <div className="firstLine"></div>
          <div className="AsSeenOnText">AS SEEN ON</div>
          <div className="secondLine"></div>
      </div>
      <div className="AsSeenOn__Showcase">
        <StaticImage src="../images/AsSeenOn/as-seen-on.png" alt="Brands"></StaticImage>
      </div>
    </>
  );
}

export default AsSeenOn;
