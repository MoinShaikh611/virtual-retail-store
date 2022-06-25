import { withPrefix } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import AsSeenOn from "../components/AsSeenOn";
import ContactUs from "../components/common/ContactUs";
import GetInTouch from "../components/contact-us/GetInTouch";
import Map from "../components/contact-us/Map";
import Footer from "../components/Footer";
import BlackHeader from "../components/header/BlackHeader";

function Contact() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={withPrefix("/styles/GlobalStyle.css")} />

        {/* contact styles */}
        <link
          rel="stylesheet"
          href={withPrefix("/styles/contact-us/ContactMain.css")}
        />
      </Helmet>
      <BlackHeader></BlackHeader>
      <div className="Contact__Wrapper">
        <GetInTouch></GetInTouch>
        <Map></Map>
        <ContactUs></ContactUs>
        <AsSeenOn></AsSeenOn>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Contact;
