import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
function BookADemo() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/home/BookADemo.css")}
        />
      </Helmet>
      <div className="BookADemo__Wrapper">
        <div className="BookADemo__ImageContainer">
          <StaticImage
            src="../../images/book-a-demo/book-a-demo.png"
            alt="demo"
          ></StaticImage>
        </div>
        <div className="BookADemo__Content">
          <div className="BookADemo__Content-col1">
            <p>SOUNDS INTERESTING?</p>
            <h1>book a demo with our interprise team</h1>
          </div>
          <div className="BookADemo__Content-col2">
            <div className="BookADemo__Btn">
              <h1>BOOK A DEMO</h1>
            </div>
            <div className="BookADemo__Btn__Hover">
              <h1>BOOK A DEMO</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookADemo;
