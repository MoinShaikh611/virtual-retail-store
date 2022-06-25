import { graphql, useStaticQuery, withPrefix } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";

function BrandSection() {
  const data = useStaticQuery(graphql`
    {
      AboutBrandImages: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "brands/about-brands" }
        }
        sort: { fields: name }
      ) {
        nodes {
          childrenImageSharp {
            gatsbyImageData
          }
          name: base
        }
      }
    }
  `);

  let aboutBrandImages = data.AboutBrandImages.nodes;

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/about/BrandSection.css")}
        />
      </Helmet>
      <div className="BrandSection-Wrapper">
        <div className="BrandSection-Title">
          <h1>brands we’ve worked with</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nonummy
            nibh euismod.
          </p>
        </div>

        <div className="BrandSection-Brands-Container">
          {aboutBrandImages.map((image, i) => (
            <div key={i} className="BrandSection-Brand-Item">
              <GatsbyImage
                image={getImage(aboutBrandImages[i].childrenImageSharp[0])}
                alt={image.name}
              ></GatsbyImage>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BrandSection;
