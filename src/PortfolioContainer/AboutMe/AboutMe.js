import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeInScreen !== props.id) return;
  //   Animations.animations.fadeInScreen(props.id);
  // };
  // const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
  //   fadeInScreenHandler
  // );

  const SCREEN_CONSTATNTS = {
    description:
      "Hi, I'm Venkata! I'm currently pursuing my Master's in Software Engineering and have about a year and a half of professional experience as an Automation Engineer. My passion lies in exploring automation, LLMs, and cutting-edge technologies to make software development more efficient. During my time in the industry, I've had the chance to build robust automation pipelines that significantly reduced manual effort and increased efficiency. I'm always excited to dive into new challenges and collaborate on projects that push the boundaries of technology!",
    highlights: {
      bullets: [" Detail-oriented and reliable", "Curious & experimental", "Impact-driven problem solver"],
      heading: "Few qualities can describe myself:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTATNTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTATNTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTATNTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >Let's talk</button>
              <a href="Sai_cv.pdf" download="Sai Sai_cv.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
