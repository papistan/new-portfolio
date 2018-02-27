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
          <div className="wow slideInLeft" data-wow-offset="10">
            <a className="skills-title black-text skills-highlight">
              <strong>Skills at a Glance</strong>{" "}
            </a>
          </div>
          <div className="skills-icons">
            <span
              class="devicon-javascript-plain skills-icon wow flipInY"
              data-wow-iteration="1"
              data-wow-offset="150"
              data-wow-delay=".6s"
            />
            <span
              class="devicon-react-original-wordmark skills-icon wow flipInY"
              data-wow-iteration="1"
              data-wow-offset="150"
              data-wow-delay=".8s"
            />
            <span
              class="devicon-nodejs-plain-wordmark skills-icon wow flipInY"
              data-wow-iteration="1"
              data-wow-offset="150"
              data-wow-delay="1s"
            />
            <span
              class="devicon-ruby-plain-wordmark skills-icon wow flipInY"
              data-wow-iteration="1"
              data-wow-offset="150"
              data-wow-delay="1.2s"
            />
            <span
              class="devicon-rails-plain-wordmark skills-icon wow flipInY"
              data-wow-iteration="1"
              data-wow-offset="150"
              data-wow-delay="1.4s"
            />
            <span
              class="devicon-sass-original skills-icon wow flipInY"
              data-wow-iteration="1"
              data-wow-offset="150"
              data-wow-delay="1.6s"
            />
            <span
              class="devicon-jasmine-plain-wordmark skills-icon wow flipInY"
              data-wow-iteration="1"
              data-wow-offset="150"
              data-wow-delay="1.8s"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
