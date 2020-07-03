import React, { Component } from "react";
import PhotoSplitBar from "../PhotoSplitBar";

import "./CurrentPastWork.css";

import tutoring from "../../images/tutoring.jpg";
import ModelUN from "../../images/united_nations.jpg";
import youngPic from "../../images/youngPicture.jpg";
import UTAustin from "../../images/ut_austin.png";

export default class CurrentPastWork extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="currentPastWorkPage">
        <div
          style={{
            position: "relative",
          }}
        >
          <PhotoSplitBar
            picture={tutoring}
            direction="left"
            title="Tutoring Service"
            backgroundColor="rgba(0,0,0,0.7)"
            animate={true}
          >
            <p>
                I have over 3 years of teaching experience, teaching topics
              including Java, Public Speaking, and Negotiation. I'm currently
              open to tutor any topics. Please contact by email for details on
              tutoring topics, rates, and working out a class schedule.
            </p>
          </PhotoSplitBar>

          <PhotoSplitBar
            picture={ModelUN}
            direction="right"
            title="Model UN"
            backgroundColor="rgba(0,0,0,0.7)"
            animate={true}
          >
            <p>
              I've been heavily involved in Model UN during my time in high
              school. Topics regarding economics have always been my passions.
              I've also written a guide for financing resolutions for MUN. You
              can find it here:
            </p>
            <a
              href="https://drive.google.com/file/d/1_pxp7bxU8YSfSyA_shC0wJRTv27rjmbm/view?usp=sharing"
              target="_blank"
              style={{ color: "white" }}
            >
              <i>Model UN Guide to Plan Financing</i>
            </a>
          </PhotoSplitBar>
        </div>
      </div>
    );
  }
}
