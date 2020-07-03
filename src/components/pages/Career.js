import React, { Component } from "react";
import PhotoSplitBar from "../PhotoSplitBar";

import "./Career.css";

import workplace from "../../images/workplace.jpg";
import UTAustin from "../../images/ut_austin.png";
import coding from "../../images/coding_skills.jpg";

export default class Career extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="careerPage">
        <div
          style={{
            position: "relative",
          }}
        >
          <div className="profResBar">
            <div className="profResTitle">
              <p>Resume & Resources</p>
            </div>

            <div className="profResList">
              <div className="profResItem">
                <a
                  href="https://drive.google.com/file/d/12nhgelQyo4YvVxqhrVgUcgXIAa-i5WQP/view?usp=sharing"
                  target="_blank"
                >
                  <div style={{ padding: "5px" }}>
                    <p>Current Resume</p>{" "}
                  </div>
                </a>
              </div>
              <div className="profResItem">
                <a href="http://linkedin.com/in/jiarthur/" target="_blank">
                  <div style={{ padding: "5px" }}>
                    <p>LinkedIn</p>{" "}
                  </div>
                </a>
              </div>
            </div>
          </div>
          <PhotoSplitBar
            picture={workplace}
            direction="left"
            title="Career Interests"
            backgroundColor="rgba(0,0,0,0.7)"
            animate={true}
          >
            <p>
              My name is Arthur, and I'm a student currently attending UT
              Austin. I'm strongly interested in the fields of finance and
              computer science! I'm looking at industries such as:
              <ul>
                <li>Consulting (Strategic, Financial Advisory, Management)</li>
                <li>Investment Banking (Traditional or Quantitative)</li>
                <li>Venture Capital</li>
                <li>Software Engineering & High Tech</li>
                <li>Data Science & Machine Learning</li>
              </ul>
            </p>
          </PhotoSplitBar>

          <PhotoSplitBar
            picture={UTAustin}
            direction="right"
            title="Education"
            backgroundColor="rgba(0,0,0,0.7)"
            animate={true}
          >
            <ul>
              <li>
                University of Texas at Austin (Aug 2020 - Jun 2024)
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <i>
                      Texas Honors Computer Science and Business Joint Degree
                      Program, Mccombs Scholar
                    </i>
                  </li>
                  <li>
                    <i>
                      BS in Computer Science Honors, BBA in Business Honors,
                      Finance
                    </i>
                  </li>
                </ul>
              </li>
              <li>
                Monta Vista High School (Aug 2016 - Jun 2020)
                <ul>
                  <li style={{ listStyle: "none" }}>
                    <i>
                      Concurrent Enrollment at West Valley College, Foothill
                      College, and De Anza College
                    </i>
                  </li>
                </ul>
              </li>
            </ul>
          </PhotoSplitBar>

          <PhotoSplitBar
            picture={coding}
            direction="left"
            title="Industry Skills"
            backgroundColor="rgba(0,0,0,0.7)"
            animate={true}
          >
            <p>
              From my work and education, I've gained many skills that I can
              bring to the table. These include
              <ul>
                <li>
                  React.js, Java, Javascript, Python, HTML/CSS, React Native
                </li>
                <li>G-suite and Microsoft Excel, Word, and Powerpoint</li>
                <li>Building & Pitching Presentations and Ideas</li>
                <li>Product Management</li>
                <li>Software (Web App & Mobile) Development</li>
                <li>Marketing & Market Analysis</li>
              </ul>
            </p>
          </PhotoSplitBar>
        </div>
      </div>
    );
  }
}
