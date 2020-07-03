import React, { Component } from "react";
import "./PhotoSplitBar.css";

export default class LeftPhotoSplitBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let bgColor = "transparent";
    if (this.props.backgroundColor != "") bgColor = this.props.backgroundColor;

    let animation = "none";

    if (this.props.direction == "left") {
      if (this.props.animate == true) {
        animation = "slideFromLeft 2.5s forwards";
      }

      return (
        <div
          style={{
            backgroundColor: bgColor,
            overflow: "hidden",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              animation: animation,
            }}
          >
            <div className="pictureSplitIntro">
              <div className="pictureSplit">
                <div
                  className="pictureSplitImage"
                  style={{ backgroundImage: "url(" + this.props.picture + ")" }}
                />
              </div>
              <div className="pictureSplitInfo" style={{ textAlign: "left" }}>
                <p className="pictureSplitInfoTitle">{this.props.title}</p>

                <div className="pictureSplitInfoText">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.direction == "right") {
      if (this.props.animate == true) {
        animation = "slideFromRight 2.5s forwards";
      }

      return (
        <div
          style={{
            backgroundColor: bgColor,
            overflow: "hidden",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              animation: animation,
            }}
          >
            <div className="pictureSplitIntro">
              <div className="pictureSplitInfo" style={{ textAlign: "left" }}>
                <p className="pictureSplitInfoTitle">{this.props.title}</p>
                <div className="pictureSplitInfoText">
                  {this.props.children}
                </div>
              </div>
              <div className="pictureSplit">
                <div
                  className="pictureSplitImage"
                  style={{ backgroundImage: "url(" + this.props.picture + ")" }}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}
