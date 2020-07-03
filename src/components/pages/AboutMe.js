import React, { Component } from "react";
import PhotoSplitBar from "../PhotoSplitBar";

import "./AboutMe.css";

import selfPic from "../../images/selfPhoto.jpg";
import pianoPlay from "../../images/selfPiano.jpg";
import youngPic from "../../images/youngPicture.jpg";
import UTAustin from "../../images/ut_austin.png";

export default class AboutMe extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="aboutMePage">
        <div
          style={{
            position: "relative",
          }}
        >
          <PhotoSplitBar
            picture={selfPic}
            direction="left"
            title="Nice to meet you!"
            backgroundColor="rgba(0,0,0,0.7)"
            animate={true}
          >
            <p>
              My name is Arthur, and I'm a student currently attending UT
              Austin. I'm strongly interested in the fields of finance and
              computer science! Currently, I'm intending to major at part of UT
              Austin's CSB program with a joint degree in Business Honors and
              Comp. Sci. Honors
            </p>
          </PhotoSplitBar>

          <PhotoSplitBar
            picture={youngPic}
            direction="right"
            title="A Little About My Life"
            backgroundColor="rgba(0,0,0,0.7)"
            animate={true}
          >
            <p>
              Born on the east coast, and spending most of my adolescent years
              on the West coast, I've been lucky enough to have a pretty diverse
              experience growing up in the Silicon Valley. A high expectation
              from a first-generation Asian-American family, plus, a very
              competitive experience at a rigorous public high school forced me
              to learn to adapt and work hard.
            </p>
          </PhotoSplitBar>

          <PhotoSplitBar
            picture={pianoPlay}
            direction="left"
            title="if(bored==true){ ... }"
            backgroundColor="rgba(0,0,0,0.7)"
            animate={true}
          >
            <p>
              Besides my formal work and education, I love to spend time doing
              various things. Baking and cooking have always been a keen
              interest of mine. Classical music is also my passions, as I've
              been playing piano for over 10 years and had previously played
              violin, and really early on, clarinet. I also have a strong love
              for all-things debate and politics. Though not really a sports
              person, I'm a fan of racquet sports.
            </p>
          </PhotoSplitBar>

          <PhotoSplitBar
            picture={UTAustin}
            direction="right"
            title="Looking Forward"
            backgroundColor="rgba(0,0,0,0.7)"
            animate={true}
          >
            <p>
              An aspiring businessman, I'm extremely interested in going into
              the fields of finance, entrepreneurship, and tech. Personally,
              I've always hoped of building my own business. I'm aiming to makes
              these goals a reality with my next 4 years @ UT Austin. Hook 'em!
            </p>
          </PhotoSplitBar>
        </div>
      </div>
    );
  }
}
