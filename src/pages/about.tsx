import { withPrefix } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import AboutIntro from "../components/about/AboutIntro";
import BrandSection from "../components/about/BrandSection";
import GroupOfCompanies from "../components/about/GroupOfCompanies";
import ReadyToVirtual from "../components/about/ReadyToVirtual";
import ContactUs from "../components/common/ContactUs";
import Footer from "../components/Footer";
import WhiteHeader from "../components/header/WhiteHeader";

function about() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/about/AboutMain.css")}
        />
      </Helmet>
      <WhiteHeader></WhiteHeader>
      <div className="About__Wrapper">
        <AboutIntro></AboutIntro>
        <GroupOfCompanies></GroupOfCompanies>
        <BrandSection></BrandSection>
        <ReadyToVirtual></ReadyToVirtual>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
    </>
  );
}

export default about;
