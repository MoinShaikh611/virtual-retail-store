import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
function BlogIntro() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/blog/BlogIntro.css")}
        />
      </Helmet>
      <div className="BlogIntro-Wrapper">
        <div className="BlogIntro-Container">
          <div className="BlogIntro-Container-Col1">
            <h1>V-RETAIL BLOG</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              tempora veniam eum natus.
            </p>
            <div className="subscribe-btn-wrapper">
              <input
                type="text"
                placeholder="Type your email here"
                className="blog-subscribe-input"
              />
              <button className="blog-subscribe-btn">Subscribe</button>
            </div>
            <p>
              We’ll send you our news once a week. By clicking “Subscribe”, you
              agree to our Privacy Policy
            </p>
          </div>
          <div className="BlogIntro-Container-Col2">
            <div className="BlogIntro-Image-Wrapper">
              <StaticImage
                src="../../images/blog/blogintro.png"
                alt="blogintro"
              ></StaticImage>
            </div>
          </div>
        </div>
        <div className="BlogIntro-Background">
          <StaticImage
            src="../../images/blog/blog-intro-bg.png"
            alt="blogintro"
          ></StaticImage>
        </div>
      </div>
    </>
  );
}

export default BlogIntro;
