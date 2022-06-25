import { withPrefix } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

function ChallengeSolution({ pageContext }) {
  const {
    challengeTitle,
    challengeTag,
    challengeDate,
    challengeList,
    solutionList,
  } = pageContext;
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={withPrefix("/styles/industry-case-study/ChallengeSolution.css")}
        />
      </Helmet>
      <div className="ChallengeSolution__Wrapper">
        <div className="ChallengeSolution-Header-Container">
          <h1>{challengeTitle}</h1>
          <p>{challengeTag} </p>
          <p>{challengeDate} </p>
        </div>
        <div className="ChallengeSolution-Header-Bg"></div>
        <div className="ChallengeSolution-Container">
          <div className="ChallengeSolution-Content-Wrapper">
            <div className="ChallengeSolution-Title">
              <h1>CHALLENGES</h1>
              <div className="dash-line"></div>
            </div>
            <ul className="Challenges-List">
              {challengeList.map((challenge) => (
                <li className="challenge-list-item" key={challenge}>
                  {challenge}
                </li>
              ))}
            </ul>
            <div
              className="ChallengeSolution-Title"
              style={{ marginTop: "3em" }}
            >
              <h1>SOLUTION</h1>
              <div className="dash-line"></div>
            </div>
            <ul className="Challenges-List">
              {solutionList.map((solution) => (
                <li className="challenge-list-item" key={solution}>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChallengeSolution;
