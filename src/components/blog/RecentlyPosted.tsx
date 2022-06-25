import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";

function RecentlyPosted() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/blog/RecentlyPosted.css")}
        />
      </Helmet>
      <div className="RecentlyPosted-Wrapper">
        <div className="RecentlyPosted-Title-Marquee-Container">
          <p>RECENTLY POSTED</p>
          <p>&bull;</p>
          <p>RECENTLY POSTED</p>
          <p>&bull;</p>
          <p>RECENTLY POSTED</p>
          <p>&bull;</p>
          <p>RECENTLY POSTED</p>
          <p>&bull;</p>
          <p>RECENTLY POSTED</p>
        </div>
        <div className="RecentlyPosted-Title-Marquee-Container-Mobile">
          <p>RECENT</p>
          <p>&bull;</p>
          <p>RECENT</p>
          <p>&bull;</p>
          <p>RECENT</p>
        </div>
        <div className="RecentlyPosted-Container">
          <div className="RecentlyPosted-Container-Row1">
            <div className="RecentlyPosted-Container-Row1-Col1">
              <StaticImage
                src="../../images/blog/RencentlyPosted/wind-mill.jpg"
                alt="featured-blog"
              ></StaticImage>
            </div>
            <div className="RecentlyPosted-Container-Row1-Col2">
              <div className="RecentlyPosted-Content-Container">
                <div className="RecentlyPosted-tag-and-date-wrapper">
                  <p className="RecentlyPosted-tag">Virtual Event</p>
                  <p>&bull;</p>
                  <p className="RecentlyPosted-date">Jan 18, 2022</p>
                </div>
                <h1>Lorem Ipsum adipiscing elit, sed dolor sit amet.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam
                  nonummy nibh euismod.
                </p>
                <div className="RecentlyPosted-Read-More-Wrapper">
                  <p>Read More</p>
                  <StaticImage
                    src="../../images/blog/icons/white-read-more-icon.png"
                    alt="read-more"
                  ></StaticImage>
                </div>
              </div>
            </div>
          </div>
          <div className="RecentlyPosted-Container-Row2">
            <div className="RecentlyPosted-Container-Row2-Col1">
              <div className="RecentlyPosted-Content-Container">
                <div className="RecentlyPosted-tag-and-date-wrapper">
                  <p className="RecentlyPosted-tag">Virtual Event</p>
                  <p>&bull;</p>
                  <p className="RecentlyPosted-date">Jan 18, 2022</p>
                </div>
                <h1>Lorem Ipsum adipiscing elit, sed dolor sit amet.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam
                  nonummy nibh euismod.
                </p>
                <div className="RecentlyPosted-Read-More-Wrapper">
                  <p>Read More</p>
                  <StaticImage
                    src="../../images/blog/icons/white-read-more-icon.png"
                    alt="read-more"
                  ></StaticImage>
                </div>
              </div>
            </div>
            <div className="RecentlyPosted-Container-Row2-Col2">
              <StaticImage
                src="../../images/blog/RencentlyPosted/writing-on-board.jpg"
                alt="featured-blog"
              ></StaticImage>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentlyPosted;
