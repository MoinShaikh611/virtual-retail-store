import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

function BackgroundVideo() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])
  return (
      <>
    <Helmet>
        <link rel="stylesheet" href={withPrefix("/styles/BackgroundVideo.css")} />
    </Helmet>
    <div className="background__video__wrapper" style={{transform: `translateY(${offsetY * .8}px)`}}>
    <video
            src="video/bg-video.mp4"
            typeof="video/mp4"
            id="background_video"
            autoPlay
            muted
            loop
            playsInline
    ></video>
    <div className="background__video__overlay__content">
      <h1>Get your business <br /> virtualize the right way.</h1>
      <div className="overlay__links">
        <a href="#">Book A Demo</a>
        <a href="#">Explore Spaces</a>
      </div>
      <div className="overlay__meta-globe-mobile">
        <StaticImage src={"../images/Home-video/meta-glob-mobile.png"} alt="meta-verse"></StaticImage>
      </div> 
      <div className="overlay__trusted-top-content">
          <p><span></span>&nbsp; &nbsp;TRUSTED BY TOP CLIENTS WORLDWIDE &nbsp;&nbsp; <span></span></p>
      </div>
      <div className="overlay__trusted-brands-section">
        <StaticImage src={"../images/brands/Group-of-brands.png"} alt="company-brands"></StaticImage>
      </div>
    </div>
    </div>

    </>
  )
}

export default BackgroundVideo