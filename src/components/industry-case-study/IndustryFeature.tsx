import { withPrefix } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

function IndustryFeature({ pageContext }) {
  const { featuresList } = pageContext;

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/industry-case-study/IndustryFeature.css")}
        />
      </Helmet>
      <div className="IndustryFeature-Wrapper">
        <div className="IndustryFeature-Title">
          <h1>FEATURES</h1>
        </div>

        <ul className="IndustryFeature-List">
          {featuresList.map((feature) => (
            <li className="IndustryFeature-list-item" key={feature}>
              <span className="IndustryFeature-bullet-circle">&#10004;</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
//
export default IndustryFeature;
