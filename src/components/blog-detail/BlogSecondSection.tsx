import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";

function BlogSecondSection({ pageContext }) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/blog-detail/BlogSecondSection.css")}
        />
      </Helmet>
      <div className="BlogSecondSection-Wrapper">
        <div className="BlogSecondSection-Container">
          <div className="BlogSecondSection-Image">
            <StaticImage
              width={500}
              src="../../images/blog-detail/SecondSection-images/jnj-vr.jpg"
              alt="image"
            />
          </div>
          <div className="BlogSecondSection-Col2">
            <div className="BlogSecondSection-Content-Container">
              <p>
                Dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipi.
              </p>
              <p>
                <span className="BlogSecondSection-bullet">&bull;</span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet.
              </p>
              <p>
                <span className="BlogSecondSection-bullet">&bull;</span>Sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore.
              </p>
              <p>
                <span className="BlogSecondSection-bullet">&bull;</span>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSecondSection;
