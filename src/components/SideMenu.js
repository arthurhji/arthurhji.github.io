import React, { Component } from "react";
import "./SideMenu.css";
import { Link } from "react-router-dom";
import menuIcon from "../images/open-menu.png";
import personIcon from "../images/person_icon.png";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.sidebar = React.createRef();
    this.handleClose = this.handleClose.bind();
    this.handleOpen = this.handleOpen.bind();
  }

  handleClose = () => {
    this.sidebar.current.style.width = "0vh";
  };

  handleOpen = () => {
    this.sidebar.current.style.width = "30vh";
  };

  render() {
    return (
      <div>
        <div className="sidebar" ref={this.sidebar}>
          <div onClick={this.handleClose} className="closeButton">
            Close
          </div>
          <p className="title">Arthur Ji</p>
          <img style={{ width: "10vh", height: "10vh" }} src={personIcon} />
          <p>Happy to meet you!</p>

          <div className="navbar">
            <Link to="/" onClick={this.handleClose}>
              Home
            </Link>
            <Link to="/about" onClick={this.handleClose}>
              About Me
            </Link>
            <Link to="/career" onClick={this.handleClose}>
              Career & Resume
            </Link>
            <Link to="/work" onClick={this.handleClose}>
              Current & Past Work
            </Link>
          </div>
        </div>
        <div className="menuButton" onClick={this.handleOpen}>
          <img src={menuIcon} className="menuIcon" />
        </div>
      </div>
    );
  }
}
