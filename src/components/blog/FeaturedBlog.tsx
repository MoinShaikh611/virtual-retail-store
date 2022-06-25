import { Link, withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";

function FeaturedBlog() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/blog/FeaturedBlog.css")}
        />
      </Helmet>
      <div className="FeaturedBlog-Wrapper">
        <div className="FeaturedBlog-Title-Marquee-Container">
          <p>Featured</p>
          <p>&bull;</p>
          <p>Featured</p>
          <p>&bull;</p>
          <p>Featured</p>
          <p>&bull;</p>
          <p>Featured</p>
          <p>&bull;</p>
          <p>Featured</p>
          <p>&bull;</p>
          <p>Featured</p>
          <p>&bull;</p>
          <p>Featured</p>
        </div>
        <div className="FeaturedBlog-Title-Marquee-Container-Mobile">
          <p>Featured</p>
          <p>&bull;</p>
          <p>Featured</p>
          <p>&bull;</p>
          <p>Featured</p>
        </div>
        <div className="Featured-Blog-Container">
          <div className="Featured-Blog-Container-Col1">
            <div className="Featured-Blog-Container-image">
              <StaticImage
                src="../../images/blog/FeaturedBlogs/girl-touch-ar.jpg"
                alt="featured-blog"
              ></StaticImage>
            </div>
          </div>
          <div className="Featured-Blog-Container-Col2">
            <div className="Featured-Blog-tag-and-date-wrapper">
              <p className="Featured-Blog-tag">Virtual Event</p>
              <p>&bull;</p>
              <p className="Featured-Blog-date">Jan 18, 2022</p>
            </div>
            <h1>Lorem Ipsum adipiscing elit, sed dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam
              nonummy nibh euismod.
            </p>
            <div className="Featured-Blog-Read-More-Wrapper">
              <Link to="/blog/first-blog">
                <p>Read More</p>
                <StaticImage
                  src="../../images/blog/icons/read-more-icon.png"
                  alt="read-more"
                ></StaticImage>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedBlog;
