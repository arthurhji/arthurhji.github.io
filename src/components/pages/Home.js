import React, { Component } from "react";
import PhotoSplitBar from "../PhotoSplitBar";
import selfPic from "../../images/selfPhoto.jpg";

import aboutMeBG from "../../images/aboutme_background.jpg";
import workBG from "../../images/work_background.jpg";
import careerBG from "../../images/career_background.jpg";

import "./Home.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="homePage">
        <PhotoSplitBar
          picture={selfPic}
          direction="left"
          title="Welcome!"
          animate={true}
        >
          <p style={{ fontSize: "28px" }}>
            My name is Arthur, and I'm a student currently attending UT Austin.
            I'm incredibly passionate about finding the next big breakthrough in
            tech, finance, and entrepreneurship.
          </p>
        </PhotoSplitBar>

        <div className="otherPagesRef">
          <p className="PageBarTitle">Want to learn more about me?</p>
          <div className="buttonPanel">
            <Link to="/about" className="buttonLink">
              <div
                style={{
                  backgroundImage: "url(" + aboutMeBG + ")",
                }}
              >
                <p>About Me</p>
              </div>
            </Link>
            <Link to="/career" className="buttonLink">
              <div
                style={{
                  backgroundImage: "url(" + careerBG + ")",
                }}
              >
                <p>Career & Resume</p>
              </div>
            </Link>
            <Link to="/work" className="buttonLink">
              <div
                style={{
                  backgroundImage: "url(" + workBG + ")",
                }}
              >
                <p>My Work</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
