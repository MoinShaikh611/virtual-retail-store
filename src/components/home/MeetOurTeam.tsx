import { graphql, useStaticQuery, withPrefix } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import FourLinesBar from "../common/FourLinesBar";
import BlackArrow from "../../images/svg/black-arrow.svg";

function MeetOurTeam() {
  const data = useStaticQuery(
    graphql`
      {
        TeamOneData: allFile(
          filter: {
            relativeDirectory: { eq: "Team/TeamOne" }
            sourceInstanceName: { eq: "data" }
          }
        ) {
          nodes {
            childMarkdownRemark {
              frontmatter {
                name
                photo
                author
              }
            }
          }
        }

        TeamTwoData: allFile(
          filter: {
            relativeDirectory: { eq: "Team/TeamTwo" }
            sourceInstanceName: { eq: "data" }
          }
        ) {
          nodes {
            childMarkdownRemark {
              frontmatter {
                name
                photo
                author
              }
            }
          }
        }

        TeamThreeData: allFile(
          filter: {
            relativeDirectory: { eq: "Team/TeamThree" }
            sourceInstanceName: { eq: "data" }
          }
        ) {
          nodes {
            childMarkdownRemark {
              frontmatter {
                name
                photo
                author
              }
            }
          }
        }

        TeamImages: allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            relativeDirectory: { eq: "Team" }
          }
        ) {
          nodes {
            team_image: childrenImageSharp {
              gatsbyImageData(width: 300, height: 400)
            }
            name: base
          }
        }
      }
    `
  );

  const teamOneData = data.TeamOneData.nodes;
  const teamTwoData = data.TeamTwoData.nodes;
  const teamThreeData = data.TeamThreeData.nodes;

  const teamImages = data.TeamImages.nodes;

  const getTeamOneImages = (name: string) => {
    let img = teamImages.find((photo) => photo.name === name);
    if (!img) {
      img = teamImages.find((photo: any) => photo.name === "manishSir.jpg");
    }
    return getImage(img.team_image[0]);
  };

  let currentSlide = 0;
  let TeamOneSlidesRef = useRef(null);
  let TeamTwoSlidesRef = useRef(null);
  let TeamThreeSlidesRef = useRef(null);

  let TeamOneNameRef = useRef(null);
  let TeamTwoNameRef = useRef(null);
  let TeamThreeNameRef = useRef(null);

  let TeamOneDesignationRef = useRef(null);
  let TeamTwoDesignationRef = useRef(null);
  let TeamThreeDesignationRef = useRef(null);

  let teamSlidesOne: any;
  let teamSlidesTwo: any;
  let teamSlidesThree: any;

  let teamOneName: any;
  let teamTwoName: any;
  let teamThreeName: any;

  let teamOneDesignation: any;
  let teamTwoDesignation: any;
  let teamThreeDesignation: any;

  useEffect(() => {
    teamSlidesOne = TeamOneSlidesRef.current.childNodes;
    teamSlidesOne[currentSlide].className = "MeetOurTeam__Slide meet-show";

    teamSlidesTwo = TeamTwoSlidesRef.current.childNodes;
    teamSlidesTwo[currentSlide].className = "MeetOurTeam__Slide meet-show";

    teamSlidesThree = TeamThreeSlidesRef.current.childNodes;
    teamSlidesThree[currentSlide].className = "MeetOurTeam__Slide meet-show";

    teamOneName = TeamOneNameRef.current.childNodes;
    teamOneName[currentSlide].className =
      "MeetOurTeam__Names__Slide meet-name-show";

    teamTwoName = TeamTwoNameRef.current.childNodes;
    teamTwoName[currentSlide].className =
      "MeetOurTeam__Names__Slide meet-name-show";

    teamThreeName = TeamThreeNameRef.current.childNodes;
    teamThreeName[currentSlide].className =
      "MeetOurTeam__Names__Slide meet-name-show";

    // designation
    teamOneDesignation = TeamOneDesignationRef.current.childNodes;
    teamOneDesignation[currentSlide].className =
      "MeetOurTeam__Designation__Slides meet-desig-show";

    teamTwoDesignation = TeamTwoDesignationRef.current.childNodes;
    teamTwoDesignation[currentSlide].className =
      "MeetOurTeam__Designation__Slides meet-desig-show";

    teamThreeDesignation = TeamThreeDesignationRef.current.childNodes;
    teamThreeDesignation[currentSlide].className =
      "MeetOurTeam__Designation__Slides meet-desig-show";
  });

  let gotoTeamSlide = (n: any) => {
    teamSlidesOne[currentSlide].className = "MeetOurTeam__Slide";
    teamSlidesTwo[currentSlide].className = "MeetOurTeam__Slide";
    teamSlidesThree[currentSlide].className = "MeetOurTeam__Slide";

    teamOneName[currentSlide].className = "MeetOurTeam__Names__Slide";
    teamTwoName[currentSlide].className = "MeetOurTeam__Names__Slide";
    teamThreeName[currentSlide].className = "MeetOurTeam__Names__Slide";

    teamOneDesignation[currentSlide].className =
      "MeetOurTeam__Designation__Slide";
    teamTwoDesignation[currentSlide].className =
      "MeetOurTeam__Designation__Slide";
    teamThreeDesignation[currentSlide].className =
      "MeetOurTeam__Designation__Slide";

    currentSlide = (n + teamSlidesOne.length) % teamSlidesOne.length;
    currentSlide = (n + teamSlidesTwo.length) % teamSlidesTwo.length;
    currentSlide = (n + teamSlidesThree.length) % teamSlidesThree.length;

    currentSlide = (n + teamSlidesOne.length) % teamSlidesOne.length;
    currentSlide = (n + teamSlidesTwo.length) % teamSlidesTwo.length;
    currentSlide = (n + teamSlidesThree.length) % teamSlidesThree.length;

    teamSlidesOne[currentSlide].className = "MeetOurTeam__Slide meet-show";
    teamSlidesTwo[currentSlide].className = "MeetOurTeam__Slide meet-show";
    teamSlidesThree[currentSlide].className = "MeetOurTeam__Slide meet-show";

    teamOneName[currentSlide].className =
      "MeetOurTeam__Names__Slide meet-name-show";
    teamTwoName[currentSlide].className =
      "MeetOurTeam__Names__Slide meet-name-show";
    teamThreeName[currentSlide].className =
      "MeetOurTeam__Names__Slide meet-name-show";

    teamOneDesignation[currentSlide].className =
      "MeetOurTeam__Designation__Slide meet-desig-show";
    teamTwoDesignation[currentSlide].className =
      "MeetOurTeam__Designation__Slide meet-desig-show";
    teamThreeDesignation[currentSlide].className =
      "MeetOurTeam__Designation__Slide meet-desig-show";

    for (let i = 0; i < teamSlidesOne.length; i++) {
      const element = teamSlidesOne[i];
      if (i > currentSlide && i <= teamSlidesOne.length - 1) {
        element.className = "MeetOurTeam__Slide meet-next";
      } else if (i < currentSlide && i >= 0) {
        element.className = "MeetOurTeam__Slide meet-previous";
      }
    }

    for (let i = 0; i < teamSlidesTwo.length; i++) {
      const element = teamSlidesTwo[i];
      if (i > currentSlide && i <= teamSlidesTwo.length - 1) {
        element.className = "MeetOurTeam__Slide meet-next";
      } else if (i < currentSlide && i >= 0) {
        element.className = "MeetOurTeam__Slide meet-previous";
      }
    }

    for (let i = 0; i < teamSlidesThree.length; i++) {
      const element = teamSlidesThree[i];
      if (i > currentSlide && i <= teamSlidesThree.length - 1) {
        element.className = "MeetOurTeam__Slide meet-next";
      } else if (i < currentSlide && i >= 0) {
        element.className = "MeetOurTeam__Slide meet-previous";
      }
    }

    // team names

    for (let i = 0; i < teamOneName.length; i++) {
      const element = teamOneName[i];
      if (i > currentSlide && i <= teamOneName.length - 1) {
        element.className = "MeetOurTeam__Names__Slide meet-name-next";
      } else if (i < currentSlide && i >= 0) {
        element.className = "MeetOurTeam__Names__Slide meet-name-previous";
      }
    }

    for (let i = 0; i < teamTwoName.length; i++) {
      const element = teamTwoName[i];
      if (i > currentSlide && i <= teamTwoName.length - 1) {
        element.className = "MeetOurTeam__Names__Slide meet-name-next";
      } else if (i < currentSlide && i >= 0) {
        element.className = "MeetOurTeam__Names__Slide meet-name-previous";
      }
    }

    for (let i = 0; i < teamThreeName.length; i++) {
      const element = teamThreeName[i];
      if (i > currentSlide && i <= teamThreeName.length - 1) {
        element.className = "MeetOurTeam__Names__Slide meet-name-next";
      } else if (i < currentSlide && i >= 0) {
        element.className = "MeetOurTeam__Names__Slide meet-name-previous";
      }
    }

    // team designation

    for (let i = 0; i < teamOneDesignation.length; i++) {
      const element = teamOneDesignation[i];
      if (i > currentSlide && i <= teamOneDesignation.length - 1) {
        element.className = "MeetOurTeam__Designation__Slide meet-desig-next";
      } else if (i < currentSlide && i >= 0) {
        element.className =
          "MeetOurTeam__Designation__Slide meet-desig-previous";
      }
    }

    for (let i = 0; i < teamTwoDesignation.length; i++) {
      const element = teamTwoDesignation[i];
      if (i > currentSlide && i <= teamTwoDesignation.length - 1) {
        element.className = "MeetOurTeam__Designation__Slide meet-desig-next";
      } else if (i < currentSlide && i >= 0) {
        element.className =
          "MeetOurTeam__Designation__Slide meet-desig-previous";
      }
    }

    for (let i = 0; i < teamThreeDesignation.length; i++) {
      const element = teamThreeDesignation[i];
      if (i > currentSlide && i <= teamThreeDesignation.length - 1) {
        element.className = "MeetOurTeam__Designation__Slide meet-desig-next";
      } else if (i < currentSlide && i >= 0) {
        element.className =
          "MeetOurTeam__Designation__Slide meet-desig-previous";
      }
    }
  };

  const previousTeamSlide = () => {
    gotoTeamSlide(currentSlide - 1);
  };
  const nextTeamSlide = () => {
    gotoTeamSlide(currentSlide + 1);
  };

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/home/MeetOurTeam.css")}
        />
      </Helmet>
      <div className="MeetOurTeam__Wrapper">
        <div className="MeetOurTeam__Bg">
          <div className="MeetOurTeam_50vh_Bg"></div>
          <div className="MeetOurTeam__FourLinesBar">
            <FourLinesBar></FourLinesBar>
          </div>
        </div>
        <div className="MeetOurTeam__Header">
          <h1>Meet our team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing sed diam nonummy
            nibh euismod.
          </p>
        </div>

        <div className="MeetOurTeam__Slides__Container">
          <div className="MeetOurTeam__Slides" ref={TeamOneSlidesRef}>
            {teamOneData.map((t, i) => {
              return (
                <div className="MeetOurTeam__Slide" key={i}>
                  <GatsbyImage
                    image={getTeamOneImages(
                      t.childMarkdownRemark.frontmatter.photo
                    )}
                    alt={t.childMarkdownRemark.frontmatter.author}
                  />
                </div>
              );
            })}
          </div>
          <div className="MeetOurTeam__Slides" ref={TeamTwoSlidesRef}>
            {teamTwoData.map((t, i) => {
              return (
                <div className="MeetOurTeam__Slide" key={i}>
                  <GatsbyImage
                    image={getTeamOneImages(
                      t.childMarkdownRemark.frontmatter.photo
                    )}
                    alt={t.childMarkdownRemark.frontmatter.author}
                  />
                </div>
              );
            })}
          </div>
          <div className="MeetOurTeam__Slides" ref={TeamThreeSlidesRef}>
            {teamThreeData.map((t, i) => {
              return (
                <div className="MeetOurTeam__Slide" key={i}>
                  <GatsbyImage
                    image={getTeamOneImages(
                      t.childMarkdownRemark.frontmatter.photo
                    )}
                    alt={t.childMarkdownRemark.frontmatter.author}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="MeetOurTeam__Names__And__Designation__Container">
          <div className="MeetOurTeam__Names__Slides__Container">
            <div className="MeetOurTeam__Names__Slides" ref={TeamOneNameRef}>
              {teamOneData.map((tn, i) => {
                return (
                  <div className="MeetOurTeam__Names__Slide" key={i}>
                    {tn.childMarkdownRemark.frontmatter.name}
                  </div>
                );
              })}
            </div>
            <div className="MeetOurTeam__Names__Slides" ref={TeamTwoNameRef}>
              {teamTwoData.map((tn, i) => {
                return (
                  <div className="MeetOurTeam__Names__Slide" key={i}>
                    {tn.childMarkdownRemark.frontmatter.name}
                  </div>
                );
              })}
            </div>
            <div className="MeetOurTeam__Names__Slides" ref={TeamThreeNameRef}>
              {teamThreeData.map((tn, i) => {
                return (
                  <div className="MeetOurTeam__Names__Slide" key={i}>
                    {tn.childMarkdownRemark.frontmatter.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="MeetOurTeam__Designation__Slides__Container">
            <div
              className="MeetOurTeam__Designation__Slides"
              ref={TeamOneDesignationRef}
            >
              {teamOneData.map((tn, i) => {
                return (
                  <div className="MeetOurTeam__Designation__Slide" key={i}>
                    {tn.childMarkdownRemark.frontmatter.author}
                  </div>
                );
              })}
            </div>
            <div
              className="MeetOurTeam__Designation__Slides"
              ref={TeamTwoDesignationRef}
            >
              {teamTwoData.map((tn, i) => {
                return (
                  <div className="MeetOurTeam__Designation__Slide" key={i}>
                    {tn.childMarkdownRemark.frontmatter.author}
                  </div>
                );
              })}
            </div>
            <div
              className="MeetOurTeam__Designation__Slides"
              ref={TeamThreeDesignationRef}
            >
              {teamThreeData.map((tn, i) => {
                return (
                  <div className="MeetOurTeam__Designation__Slide" key={i}>
                    {tn.childMarkdownRemark.frontmatter.author}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="MeetOurTeam-carousel-buttons">
          <div
            className="MeetOurTeam-carousel-left-btn"
            onClick={previousTeamSlide}
          >
            <BlackArrow />
          </div>
          <div
            className="MeetOurTeam-carousel-right-btn"
            onClick={nextTeamSlide}
          >
            <BlackArrow />
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetOurTeam;
