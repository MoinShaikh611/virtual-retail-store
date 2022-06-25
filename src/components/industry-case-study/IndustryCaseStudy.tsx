import { withPrefix } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import AsSeenOn from "../AsSeenOn";
import ContactUs from "../common/ContactUs";
import FourLinesBar from "../common/FourLinesBar";
import Footer from "../Footer";
import Header from "../Header";
import WhiteHeader from "../header/WhiteHeader";
import ChallengeSolution from "./ChallengeSolution";
import IndustryFeature from "./IndustryFeature";
import IndustryIntro from "./IndustryIntro";
import ProjectGallery from "./ProjectGallery";

function IndustryCaseStudy({ pageContext }) {
  return (
    <>
      <Helmet>
        <meta http-equiv="Cache-Control" content="no-cache" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <link
          rel="stylesheet"
          href={withPrefix(
            "/styles/industry-case-study/IndustryCaseStudyMain.css"
          )}
        />
      </Helmet>
      <WhiteHeader></WhiteHeader>
      <div className="IndustryCaseStudy__Wrapper">
        <IndustryIntro pageContext={pageContext}></IndustryIntro>
        <ChallengeSolution pageContext={pageContext}></ChallengeSolution>
        <IndustryFeature pageContext={pageContext}></IndustryFeature>
        <FourLinesBar></FourLinesBar>
        <ProjectGallery pageContext={pageContext}></ProjectGallery>
        <ContactUs></ContactUs>
        <AsSeenOn></AsSeenOn>
        <Footer></Footer>
      </div>
    </>
  );
}

export default IndustryCaseStudy;
