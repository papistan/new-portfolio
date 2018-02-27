import React, { Component } from "react";
import WOW from "wowjs";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="portfolio-title">
          <div className="wow slideInRight" data-wow-offset="200">
            <a className="highlight black-text">
              <strong>Portfolio</strong>
            </a>
          </div>
          <div
            className="section wow zoomIn"
            data-wow-iteration="1"
            data-wow-offset="320"
            data-wow-delay="1s"
          >
            <div className="title-items black-text">
              <h2>Scoutr</h2>
              <p>
                A tinder-style swipe card app to explore locations by
                neighborhood, build lists and share with friends. <br />Built on
                React Native / Ruby on Rails with Yelp API.{" "}
              </p>
            </div>
            <div className="gifs">
              <span>
                <img src="scoutr.png" alt="login" />
              </span>
            </div>
            <div
              className="links wow flipInX"
              data-wow-offset="40"
              data-wow-delay="1s"
            >
              <a
                className="highlight black-text"
                href="https://github.com/papistan/Scoutr/blob/master/README.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </div>
          </div>
          <br />
          <div className="smaller-projects">
            <div
              className="section2 wow slideInLeft"
              data-wow-iteration="1"
              data-wow-offset="380"
            >
              <div className="title-items black-text">
                <h2>Event Search</h2>
                <p>
                  Event search tool with Eventbrite's API built on React, Node,
                  Webpack, and Sass{" "}
                </p>
              </div>
              <div className="gifs">
                <span>
                  <img src="event.png" alt="event brite" />
                </span>
              </div>
              <div className="links">
                <span>
                  <a
                    className="highlight black-text"
                    href="https://radiant-savannah-62825.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live |
                  </a>
                  <a
                    className="highlight black-text"
                    href="https://github.com/papistan/eventbrite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </span>
              </div>
            </div>
            <br />
            <div
              className="section2 wow slideInRight"
              data-wow-iteration="1"
              data-wow-offset="380"
            >
              <div className="title-items black-text">
                <h2>FrontEndTrivia.com</h2>
                <p>
                  Open source (50+ contributors | 75+ forks) front end-focused
                  trivia card app built in React / Redux / Node. <br />Fully
                  managed open source workflow (42 issues created, 120+ pull
                  requests reviewed){" "}
                </p>
              </div>
              <div className="gifs">
                <span>
                  <img src="frontendtrivia.png" alt="front end trivia" />
                </span>
              </div>
              <div className="links">
                <span>
                  <a
                    className="highlight black-text"
                    href="http://www.frontendtrivia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live |
                  </a>
                  <a
                    className="highlight black-text"
                    href="https://github.com/papistan/FrontEndTrivia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </span>
              </div>
            </div>
            <br />
            <div
              className="section2 wow slideInLeft"
              data-wow-iteration="1"
              data-wow-offset="380"
            >
              <div className="title-items black-text">
                <h2>First Prize - AngelHack Hackathon</h2>
                <p>
                  WINNER AngelHack Hackathon Sacramento 2017 for best use of
                  Satori API{" "}
                </p>
              </div>
              <div className="gifs">
                <span>
                  <img src="satori.png" alt="winner" />
                </span>
              </div>
              <div className="links">
                <span>
                  <a
                    className="highlight black-text"
                    href="http://www.hackathon.io/projects/16197"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </span>
              </div>
            </div>
            <br />
            <div
              className="section2 wow slideInRight"
              data-wow-iteration="1"
              data-wow-offset="380"
            >
              <div className="title-items black-text">
                <h2>SAFE.LY</h2>
                <p>
                  Alert contacts of your safety during earthquakes. Built on
                  Ruby on Rails, Bootstrap, USGS API and Twilio API
                  text-messaging service.
                </p>
              </div>
              <div className="gifs">
                <span>
                  <img src="safely.jpg" alt="safely" />
                </span>
              </div>
              <div className="links">
                <span>
                  <a
                    className="highlight black-text"
                    href="https://github.com/papistan/safe.ly/blob/master/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="medium">
          <div className="title-items">
            <h2 className="wow zoomIn" data-wow-offset="180">
              Recent Medium Publications
            </h2>
            <div
              className="links wow flipInX"
              data-wow-offset="180"
              data-wow-delay=".7s"
            >
              <a
                href="https://medium.com/@jpapisan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-medium App-header--icon3" />
              </a>
              <a
                className="skills-highlight grey-text"
                href="https://codeburst.io/how-redux-would-run-a-donut-shop-52af6dbd59b0"
                target="_blank"
                rel="noopener noreferrer"
              >
                How Redux would run a donut shop
              </a>
            </div>
            <div
              className="links wow flipInX"
              data-wow-offset="180"
              data-wow-delay=".9s"
            >
              <a
                href="https://medium.com/@jpapisan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-medium App-header--icon3" />
              </a>
              <a
                className="skills-highlight grey-text"
                href="https://medium.freecodecamp.org/imagine-react-router-as-your-switchboard-operator-f4f1ac22188c"
                target="_blank"
                rel="noopener noreferrer"
              >
                Imagine React Router as your switchboard operator
              </a>
            </div>
            <div
              className="links wow flipInX"
              data-wow-offset="180"
              data-wow-delay="1.1s"
            >
              <a
                href="https://medium.com/@jpapisan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-medium App-header--icon3" />
              </a>
              <a
                className="skills-highlight grey-text"
                href="https://codeburst.io/intro-to-sass-386eb8f2e005"
                target="_blank"
                rel="noopener noreferrer"
              >
                Intro to Sass
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
