import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import BusinessFeatureCarousel from "./BusinessFeatureCarousel";
import UserFeatureCarousel from "./UserFeatureCarousel";

function FeaturesCarousel() {
  const [businessTabState, setBusinessTabState] = useState(true);
  const [userTabState, setUserTabState] = useState(false);

  const bussinessFeatureTab = () => {
    setBusinessTabState(true);
    setUserTabState(false);
  };

  const userFeatureTab = () => {
    setBusinessTabState(false);
    setUserTabState(true);
  };

  return (
    <>
      <div className="Feature__Carousel__Wrapper">
        <div className="carousel__tabs__wrapper">
          <div
            className={
              businessTabState
                ? `business__feature__tab active`
                : `business__feature__tab `
            }
            onClick={bussinessFeatureTab}
          >
            <p>Business Features</p>
          </div>
          <div
            className={
              userTabState ? `user__feature__tab active` : `user__feature__tab`
            }
            onClick={userFeatureTab}
          >
            <p>User Features</p>
          </div>
        </div>
        {businessTabState ? (
          <BusinessFeatureCarousel></BusinessFeatureCarousel>
        ) : (
          <UserFeatureCarousel></UserFeatureCarousel>
        )}
        <div className="Feature__Carousel__BackgroundImage">
          {/* <StaticImage
            src="../images/FeaturesCarousel/BackgroundImage/bg-feature-desktop.png"
            alt="bg"
            style={{ height: "100%", width: "100%" }}
          ></StaticImage> */}
        </div>
      </div>
    </>
  );
}

export default FeaturesCarousel;
