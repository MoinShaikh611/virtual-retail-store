import { withPrefix } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

function FourLinesBar() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={withPrefix("/styles/FourLinesBar.css")} />
      </Helmet>
      <div className="four-bar-lines-wrapper">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>
    </>
  );
}

export default FourLinesBar;
