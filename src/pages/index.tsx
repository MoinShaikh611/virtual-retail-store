import { withPrefix } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import AsSeenOn from "../components/AsSeenOn";
import BackgroundVideo from "../components/BackgroundVideo";
import ContactUs from "../components/common/ContactUs";
import FourLinesBar from "../components/common/FourLinesBar";
import FeaturesCarousel from "../components/FeaturesCarousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BookADemo from "../components/home/BookADemo";
import IndustryCarousel from "../components/home/IndustryCarousel";
import MeetOurTeam from "../components/home/MeetOurTeam";
import OurProjects from "../components/home/OurProjects";
import ParentCompanies from "../components/home/ParentCompanies";
import TestimonialCarousel from "../components/home/TestimonialCarousel";
import WhyVirtual from "../components/WhyVirtual";

const IndexPage = () => {
  return (
    <>
      <Helmet></Helmet>
      <div className="HomeWrapper">
        <Header></Header>
        <BackgroundVideo></BackgroundVideo>
      </div>
      <WhyVirtual></WhyVirtual>
      <FeaturesCarousel></FeaturesCarousel>
      <OurProjects></OurProjects>
      <IndustryCarousel></IndustryCarousel>
      <TestimonialCarousel></TestimonialCarousel>
      <BookADemo></BookADemo>
      <FourLinesBar></FourLinesBar>
      <ParentCompanies></ParentCompanies>
      <MeetOurTeam></MeetOurTeam>
      <ContactUs></ContactUs>
      <AsSeenOn></AsSeenOn>
      <Footer></Footer>
    </>
  );
};

export default IndexPage;
