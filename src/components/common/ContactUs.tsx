import Axios from "axios";
import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brandName, setBrandName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [message, setMessage] = useState("");

  const myContactFormRef = useRef(null);

  const sendContactForm = () => {
    Axios.post("http://localhost:3001/contact-form", {
      name: name,
      email: email,
      brandName: brandName,
      phoneNumber: phoneNumber,
      message: message,
    });
    myContactFormRef.current.reset();
  };
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/home/ContactUs.css")}
        />
      </Helmet>
      <div className="ContactUs__Wrapper">
        <div className="ContactUs__Header">
          <h1>CONTACT US</h1>
        </div>
        <div className="ContactUs__Container">
          <div className="ContactUs__Col1">
            <p>help@vretail.com</p>
            <p>(+91) 99306 77169</p>
            <div className="ContactUs__link__Container">
              <StaticImage
                width={30}
                src="../../images/icons/messenger.png"
                alt="bg"
              ></StaticImage>
              <StaticImage
                width={30}
                src="../../images/icons/watsapp.png"
                alt="bg"
              ></StaticImage>
            </div>
          </div>
          <div className="ContactUs__Col2">
            <form ref={myContactFormRef}>
              <div className="contact-first-row">
                <div className="contact-name-col">
                  <label className="input__label">
                    <span className="input__label-content">Your Name</span>
                  </label>
                  <input
                    type="text"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
                <div className="contact-email-col">
                  <label className="input__label">
                    <span className="input__label-content">Email Address</span>
                  </label>
                  <input
                    type="text"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="contact-second-row">
                <div className="contact-brand-col">
                  <label className="input__label">
                    <span className="input__label-content">Brand Name</span>
                  </label>
                  <input
                    type="text"
                    onChange={(event) => {
                      setBrandName(event.target.value);
                    }}
                  />
                </div>
                <div className="contact-phone-col">
                  <label className="input__label">
                    <span className="input__label-content">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    onChange={(event) => {
                      setPhoneNumber(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="contact-third-row">
                <label className="input__label">
                  <span className="input__label-content">Message</span>
                </label>
                <textarea
                  cols={10}
                  rows={20}
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                ></textarea>
              </div>
              <div className="contact-fourth-row">
                <div className="send-btn-container" onClick={sendContactForm}>
                  <p>Send</p>
                  <StaticImage
                    src="../../images/icons/send-arrow.png"
                    alt="bg"
                  ></StaticImage>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
