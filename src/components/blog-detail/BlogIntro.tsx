import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";

function BlogIntro({ pageContext }) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/blog-detail/BlogIntro.css")}
        />
      </Helmet>
      <div className="BlogIntro-Wrapper">
        <div className="BlogIntro-Black-Bg">
          <h1>Lorem Ipsum adipiscing elit sed dolor sit amet.</h1>
          <div className="BlogIntro-Tag-date-Container">
            <p>Virtual Event</p>
            <p>&bull;</p>
            <p>Jan 18,2022</p>
          </div>
        </div>
        <div className="BlogIntro-White-Bg"></div>
        <div className="BlogIntro-Content-Container">
          <div className="BlogIntro-Content-Image">
            <StaticImage
              src="../../images/blog-detail/IntroSection-images/blogIntro.jpg"
              alt="blogIntro"
            ></StaticImage>
          </div>
          <div className="BlogIntro-Content-Para">
            <p>
              <span className="first-letter">L</span>orem ipsum dolor, sit amet
              consectetur adipisicing elit. Nulla, quos? Placeat hic quis ipsum
              optio ad sed. Laudantium modi nesciunt tenetur quas at quibusdam
              quis sit ab odit neque. At. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ratione, atque optio dolorem modi
              error veniam veritatis voluptates incidunt cumque magni ipsam
              animi. Fugit reprehenderit enim possimus iusto vitae, molestiae
              sapiente! orem ipsum dolor, sit amet consectetur adipisicing elit.
              Nulla, quos? Placeat hic quis ipsum optio ad sed. Laudantium modi
              nesciunt tenetur quas at quibusdam quis sit ab odit neque. At.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
              atque optio dolorem modi error veniam veritatis voluptates
              incidunt cumque magni ipsam animi. Fugit repr
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident laboriosam id officiis perspiciatis quo iste minima
              adipisci vero magni libero, soluta quas at, ad incidunt illo
              cumque eum sapiente ratione.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              placeat quae dolor et sequi cupiditate possimus illo. Magnam modi
              porro temporibus debitis tempore culpa, est dolor ad odio
              reprehenderit dignissimos!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogIntro;
