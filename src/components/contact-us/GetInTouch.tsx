import { withPrefix } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

function GetInTouch() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/contact-us/GetInTouch.css")}
        />
      </Helmet>
      <div className="GetInTouch-Wrapper">
        <div className="GetInTouch-Withus-Container">
          <div className="GetInTouch-Withus-Row1">
            <h1>get in touch with us</h1>
          </div>
          <div className="GetInTouch-Withus-Row2">
            <span style={{ color: "#53DEAC", fontSize: "3rem" }}>&bull;</span>
            <p>Open Now</p>
          </div>
        </div>
        <div className="GetInTouch-Address-Container">
          <div className="GetInTouch-Address-Wrapper">
            <div className="GetInTouch-Address-Row1">
              <h1>ADDRESS</h1>
            </div>
            <div className="GetInTouch-Address-Row2">
              <p>
                405, Corporate Annexe Sonawala Rd, Goregaon (East), Mumbai
                400063, India
              </p>
            </div>
          </div>
          <div className="GetInTouch-Timing-Wrapper">
            <div className="GetInTouch-Timing-Row1">
              <h1>TIMING</h1>
            </div>
            <div className="GetInTouch-Timing-Row2">
              <p>Mon - Sat: &nbsp;10:00 to 18:30 IST</p>
              <p>Sundays: &nbsp;&nbsp;&nbsp;&nbsp;Closed</p>
            </div>
          </div>
        </div>
        <div className="GetInTouch-Contact-Container">
          <div className="GetInTouch-Contact-Content">
            <div className="GetInTouch-Contact-Title">
              <h1>CONTACT</h1>
            </div>
            <div className="GetInTouch-Contact-Para">
              <p>info@vretail.com</p>
              <p>+91 99306 77169</p>
              <p>+91 83033 85888</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetInTouch;
