import React, { Component } from "react";
import WOW from "wowjs";

class Skills extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <div>
        <div className="skills-background">
          <div className="straight">
            <div className="wow slideInLeft" data-wow-offset="10">
              <a className="skills-title skills-highlight">
                Skills at a Glance
              </a>
            </div>
            <div className="skills-icons">
              <span
                class="devicon-javascript-plain skills-icon wow flipInY"
                data-wow-iteration="1"
                data-wow-offset="40"
                data-wow-delay=".6s"
              />
              <span
                class="devicon-react-original-wordmark skills-icon wow flipInY"
                data-wow-iteration="1"
                data-wow-offset="40"
                data-wow-delay=".8s"
              />
              <span
                class="devicon-nodejs-plain-wordmark skills-icon wow flipInY"
                data-wow-iteration="1"
                data-wow-offset="40"
                data-wow-delay="1s"
              />
              <span
                class="devicon-express-original-wordmark skills-icon wow flipInY"
                data-wow-iteration="1"
                data-wow-offset="40"
                data-wow-delay="1.2s"
              />
              <span
                class="devicon-ruby-plain-wordmark skills-icon wow flipInY"
                data-wow-iteration="1"
                data-wow-offset="40"
                data-wow-delay="1.3s"
              />
              <span
                class="devicon-css3-plain-wordmark skills-icon wow flipInY"
                data-wow-iteration="1"
                data-wow-offset="40"
                data-wow-delay="1.4s"
              />
              <span
                class="devicon-sass-original skills-icon wow flipInY"
                data-wow-iteration="1"
                data-wow-offset="40"
                data-wow-delay="1.5s"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
