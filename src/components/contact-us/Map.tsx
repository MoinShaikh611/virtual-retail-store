import { withPrefix } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

function Map() {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/contact-us/Map.css")}
        />
      </Helmet>
      <div className="Map-Wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.773064356011!2d72.84841161483811!3d19.161408487038948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6f12d81c5a5%3A0xa441e0453e9b6c63!2sInk%20in%20Caps%20Leading%20Virtual%20Reality%2C%20Augmented%20Reality%20and%20Web%20Development%20Company!5e0!3m2!1sen!2sin!4v1649922334799!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Map;
