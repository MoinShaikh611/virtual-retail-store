import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function Footer() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={withPrefix("/styles/Footer.css")} />
      </Helmet>
      <div className="Footer__Wrapper">
        <div className="Footer__Container">
          <div className="Footer__row">
            <div className="Footer__Col">
              <div className="Footer__Vretail__logo">
                <StaticImage
                  src={"../images/Footer/v-retail-logo.png"}
                  alt="v-retail"
                />
              </div>

              <div className="global-award-wrapper">
                <StaticImage
                  style={{ marginRight: "2rem" }}
                  src={"../images/Footer/digies-home.png"}
                  alt="digies-home"
                />
                <p>
                  gold award under best <br /> use of technology
                </p>
              </div>
            </div>
            <div className="socialIcons1">
              <ul>
                <li>
                  <StaticImage
                    src={"../images/SocialIcons/facebook.png"}
                    alt="v-retail"
                  />
                </li>
                <li>
                  <StaticImage
                    src={"../images/SocialIcons/instagram.png"}
                    alt="v-retail"
                  />
                </li>
                <li>
                  <StaticImage
                    src={"../images/SocialIcons/twitter.png"}
                    alt="v-retail"
                  />
                </li>
                <li>
                  <StaticImage
                    src={"../images/SocialIcons/linkedin.png"}
                    alt="v-retail"
                  />
                </li>
              </ul>
            </div>
            <div className="Footer__Col-2">
              <div className="Address__Col">
                <div className="Email__Phone__Col-1">
                  +91 99306 77169 <br /> help@vretail.com
                </div>
                <p>
                  405, Corporate Annexe, Sonawala Rd, Sonawala Industry Estate,
                  Goregaon, Mumbai, 400063
                </p>
                <div className="socialIcons2">
                  <ul>
                    <li>
                      <StaticImage
                        src={"../images/SocialIcons/facebook.png"}
                        alt="v-retail"
                      />
                    </li>
                    <li>
                      <StaticImage
                        src={"../images/SocialIcons/instagram.png"}
                        alt="v-retail"
                      />
                    </li>
                    <li>
                      <StaticImage
                        src={"../images/SocialIcons/twitter.png"}
                        alt="v-retail"
                      />
                    </li>
                    <li>
                      <StaticImage
                        src={"../images/SocialIcons/linkedin.png"}
                        alt="v-retail"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Email__Phone__Col">
                +91 99306 77169 <br /> help@vretail.com
              </div>
              <ul className="nav__Col">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact us</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="v-retail-2021">&copy; 2021 | V-retail India</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
