import { withPrefix } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

function ReadyToVirtual() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/about/ReadyToVirtual.css")}
        />
      </Helmet>
      <div className="ReadyToVirtual-Wrapper">
        <div className="ReadyToVirtual-Container">
          <div className="ReadyToVirtual-Content">
            <h1>ready to go virtual?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nonum
              nibh euismod.
            </p>
          </div>
          <div className="ReadyToVirtual-Btn-Container">
            <a>Explore Projects</a>
            <a>Book A Demo</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadyToVirtual;
