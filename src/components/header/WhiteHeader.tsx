import { Link, withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function WhiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function noScrollWhenMenuOpen() {
    let body = document.body;
    if (isMenuOpen == false) {
      body.className = "no-scroll";
    } else {
      body.className = "";
    }
  }
  useEffect(() => {
    if (typeof window || document !== undefined) {
      noScrollWhenMenuOpen();
    }
  });
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={withPrefix("/styles/GlobalStyle.css")} />
        <link
          rel="stylesheet"
          href={withPrefix("/styles/header/WhiteHeader.css")}
        />
      </Helmet>
      <header className="header__wrapper">
        <div className="header__logo">
          <StaticImage
            src="../../images/Logos/v-retail-black-logo.png"
            alt="v-retail"
          ></StaticImage>
        </div>
        <nav>
          <ul className="header__nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contact-us/">Contact</Link>
            </li>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="header__btn">
          <button className="header__pricingBtn">Pricing</button>
          <div
            className={`header__MenuIcon ${isMenuOpen ? "open" : "closed"}`}
            onClick={openMenu}
          >
            <StaticImage
              src={"../../images/icons/black-nav-hamburger.png"}
              alt="Menu"
            />
          </div>
        </div>
        <div className={`header__sideBar ${isMenuOpen ? "closed" : "open"}`}>
          <nav>
            <ul className="header__nav__mobile">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/contact-us/">Contact</Link>
              </li>
              <li>
                <Link to="/blog/">Blog</Link>
              </li>
            </ul>
          </nav>
          <div className={`header__nav__close`} onClick={openMenu}>
            <StaticImage src={"../../images/icons/close-nav.svg"} alt="Close" />
          </div>
        </div>
      </header>
    </>
  );
}

export default WhiteHeader;
