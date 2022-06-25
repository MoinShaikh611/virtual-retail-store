import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";

function Tags() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/blog-detail/Tags.css")}
        />
      </Helmet>
      <div className="Tags-Wrapper">
        <div className="Tags-Container">
          <div className="Tags-Col1">
            <p>Tag Used:</p>
            <button className="tag-btns">Virtual</button>
            <button className="tag-btns">2022</button>
            <button className="tag-btns">Industrial</button>
          </div>
          <div className="Tags-Col2">
            <p>Share On:</p>
            <StaticImage
              src="../../images/blog-detail/tags/facebook.png"
              alt="tag"
            ></StaticImage>
            <StaticImage
              src="../../images/blog-detail/tags/linkdin.png"
              alt="tag"
            ></StaticImage>
            <StaticImage
              src="../../images/blog-detail/tags/twitter.png"
              alt="tag"
            ></StaticImage>
            <StaticImage
              src="../../images/blog-detail/tags/instagram.png"
              alt="tag"
            ></StaticImage>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tags;
