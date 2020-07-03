import React, { Component } from "react";
import "./HomeBar.css";
import SideMenu from "./SideMenu";
import { Link } from "react-router-dom";

export default class HomeBar extends Component {
  render() {
    return (
      <div className="topbar">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div className="titleBar">
            <p className="title">Arthur Ji</p>
          </div>
        </Link>

        <SideMenu />
      </div>
    );
  }
}
