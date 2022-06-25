import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";

function GroupOfCompanies() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/about/GroupOfCompanies.css")}
        />
      </Helmet>
      <div className="GroupOfCompanies-Wrapper">
        <div className="GroupOfCompanies-Title">
          <h1>group of companies</h1>
        </div>
        <div className="GroupOfCompanies-Brand-Wrapper">
          <div className="GroupOfCompanies-Brand-Container">
            <div className="GroupOfCompanies-Brand-Item1">
              <div className="GroupOfCompanies-Brand-Item-Container">
                <div className="GroupOfCompanies-Brand-Item-Brand-Image">
                  <StaticImage
                    width={150}
                    src="../../images/brands/vtour.png"
                    alt="Group-of-brands"
                  ></StaticImage>
                </div>
                <div className="GroupOfCompanies-Brand-Item-Brand-Content">
                  <p>
                    V-Tour Is A Re-Visualised And Heightened Multi Disciplinary
                    Platform (Both Web And APP) Integrated With AR For All Kinds
                    Of Devices That Strives To Take Any Event, Gathering,
                    Conference A Notch Higher.
                  </p>
                  <a>Visit Website</a>
                </div>
              </div>
            </div>
            <div className="GroupOfCompanies-Brand-Item2">
              <div className="GroupOfCompanies-Brand-Item-Container">
                <div className="GroupOfCompanies-Brand-Item-Brand-Image">
                  <StaticImage
                    width={150}
                    src="../../images/brands/iic.png"
                    alt="Group-of-brands"
                  ></StaticImage>
                </div>
                <div className="GroupOfCompanies-Brand-Item-Brand-Content">
                  <p>
                    INK IN CAPS is a creative technology company that produces
                    digital interactions for brands to create maximum engagement
                    with the target audience.
                  </p>
                  <a>Visit Website</a>
                </div>
              </div>
            </div>
            <div className="GroupOfCompanies-Brand-Item3">
              <div className="GroupOfCompanies-Brand-Item-Container">
                <div className="GroupOfCompanies-Brand-Item-Brand-Image">
                  <StaticImage
                    width={180}
                    src="../../images/brands/square-pixel.png"
                    alt="Group-of-brands"
                  ></StaticImage>
                </div>
                <div className="GroupOfCompanies-Brand-Item-Brand-Content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                  </p>
                  <a>Visit Website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupOfCompanies;
