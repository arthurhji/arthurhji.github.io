import React, { Component } from "react";
import "./BottomBar.css";

export default class BottomBar extends Component {
  render() {
    return (
      <div className="bottomBar">
        <div className="contactInfo">
          <div className="contactInfoTitle">
            <p>Want to contact me? Here's how!</p>
          </div>

          <div className="contactInfoList">
            <div className="contactInfoItem">
              <a href="mailto: ji.arthur@utexas.edu">
                <div style={{ padding: "5px" }}>
                  <p>Email: ji.arthur@utexas.edu</p>{" "}
                </div>
              </a>
            </div>
            <div className="contactInfoItem">
              <a href="http://linkedin.com/in/jiarthur/" target="_blank">
                <div style={{ padding: "5px" }}>
                  <p>LinkedIn: linkedin.com/in/jiarthur/</p>{" "}
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="endBar">
          <p>Made by Arthur H. Ji &copy;</p>
        </div>
      </div>
    );
  }
}
