import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";

function ParentCompanies() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/home/ParentCompanies.css")}
        />
      </Helmet>
      <div className="ParentCompanies__Wrapper">
        <div className="ParentCompanies__Content__Container">
          <h1>PARENT COMPANIES</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            commodi excepturi, doloremque eligendi blanditiis praesentium.
          </p>
        </div>
        <div className="ParentCompanies__Container">
          {/* df */}
          <div className="ParentCompany">
            {/* df */}
            <div className="parentCompany-header">
              <div className="parentCompany-header-seq-no">
                <h1>01</h1>
              </div>
              <div className="parentCompany-header-logo">
                <StaticImage
                  src="../../images/ParentCompanies/vtour.png"
                  alt="vtour"
                ></StaticImage>
              </div>
            </div>
            <div className="parentCompany-para">
              <p>
                V-Tour Is A Re-Visualised And Heightened Multi Disciplinary
                Platform (Both Web And APP) Integrated With AR For All Kinds Of
                Devices That Strives To Take Any Event, Gathering, Conference A
                Notch Higher.
              </p>
            </div>
            <div className="parentCompany-link">
              <a href="#">
                <button>visit website</button>
              </a>
            </div>
          </div>

          {/* df */}
          <div className="ParentCompany">
            {/* df */}
            <div className="parentCompany-header">
              <div className="parentCompany-header-seq-no">
                <h1>02</h1>
              </div>
              <div className="parentCompany-header-logo">
                <StaticImage
                  src="../../images/ParentCompanies/iic.png"
                  alt="vtour"
                ></StaticImage>
              </div>
            </div>
            <div className="parentCompany-para">
              <p>
                INK IN CAPS is a creative technology company that produces
                digital interactions for brands to create maximum engagement
                with the target audience.
              </p>
            </div>
            <div className="parentCompany-link">
              <a href="#">
                <button>visit website</button>
              </a>
            </div>
          </div>

          {/* df */}
          <div className="ParentCompany">
            {/* df */}
            <div className="parentCompany-header">
              <div className="parentCompany-header-seq-no">
                <h1>03</h1>
              </div>

              <div className="parentCompany-header-logo">
                <StaticImage
                  src="../../images/ParentCompanies/square-pixel.png"
                  alt="vtour"
                ></StaticImage>
              </div>
            </div>
            <div className="parentCompany-para">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam.
              </p>
            </div>
            <div className="parentCompany-link">
              <a href="#">
                <button>visit website</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ParentCompanies;
