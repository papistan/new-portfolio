import React, { Component } from "react";
import WOW from "wowjs";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="portfolio-title">
          <div
            className="wow slideInRight"
            id="portfolio-label"
            data-wow-offset="200"
          >
            <a className="highlight black-text">Portfolio</a>
          </div>
          <div
            className="section wow slideInLeft"
            data-wow-iteration="1"
            data-wow-offset="320"
            data-wow-delay=".1s"
          >
            <div className="title-items black-text">
              <h2>Webflix</h2>
              <p>Neflix clone built in React</p>
            </div>
            <br />
            <div className="gifs">
              <span>
                <img src="webflix.png" alt="webflix" />
              </span>
            </div>
            <div
              className="links wow flipInX"
              data-wow-offset="40"
              data-wow-delay=".1s"
            >
              <a
                className="highlight black-text bold"
                href="http://webflix.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live |
              </a>
              <a
                className="highlight black-text bold"
                href="https://github.com/papistan/webflix"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div
            className="section wow slideInRight"
            data-wow-iteration="1"
            data-wow-offset="320"
            data-wow-delay=".1s"
          >
            <div className="title-items black-text">
              <h2>Taptrust</h2>
              <p>
                Full Stack JavaScript - React, Redux, Node, Express, PostgreSQL
              </p>
            </div>
            <br />
            <div className="gifs">
              <span>
                <img src="taptrust.png" alt="taptrust" />
              </span>
            </div>
            <div
              className="links wow flipInX"
              data-wow-offset="40"
              data-wow-delay=".1s"
            >
              <a
                className="highlight black-text bold"
                href="http://app.taptrust.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
          <br />
          <div
            className="section wow slideInLeft"
            data-wow-iteration="1"
            data-wow-offset="250"
            data-wow-delay=".2s"
          >
            <div className="title-items black-text">
              <h2>Scoutr</h2>
              <p>React Native / Ruby on Rails with Yelp API</p>
            </div>
            <br />
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
                className="highlight black-text bold"
                href="https://github.com/papistan/Scoutr/blob/master/README.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
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
              <br />
              <div className="gifs">
                <span>
                  <img src="event.png" alt="event brite" />
                </span>
              </div>
              <div className="links">
                <span>
                  <a
                    className="highlight black-text bold"
                    href="https://radiant-savannah-62825.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live |
                  </a>
                  <a
                    className="highlight black-text bold"
                    href="https://github.com/papistan/eventbrite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
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
                  Open source (50+ contributors | 75+ forks) app built in React
                  / Redux / Node. <br />42 issues created, 120+ pull requests
                  reviewed{" "}
                </p>
              </div>
              <br />
              <div className="gifs">
                <span>
                  <img src="frontendtrivia.png" alt="front end trivia" />
                </span>
              </div>
              <div className="links">
                <span>
                  <a
                    className="highlight black-text bold"
                    href="http://www.frontendtrivia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live |
                  </a>
                  <a
                    className="highlight black-text bold"
                    href="https://github.com/papistan/FrontEndTrivia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
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
              <br />
              <div className="gifs">
                <span>
                  <img src="satori.png" alt="winner" />
                </span>
              </div>
              <div className="links">
                <span>
                  <a
                    className="highlight black-text bold"
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
                <p>Ruby on Rails, Bootstrap, USGS API and Twilio API.</p>
              </div>
              <br />
              <div className="gifs">
                <span>
                  <img src="safely.jpg" alt="safely" />
                </span>
              </div>
              <div className="links">
                <span>
                  <a
                    className="highlight black-text bold"
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
          <div className="straight">
            <div className="medium-items">
              <p className="wow zoomIn medium-title" data-wow-offset="180">
                <p>
                  <i className="fa fa-medium App-header--icon3" />
                </p>
                Recent Medium Publications
              </p>
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
                  <i className="devicon-react-original App-header--icon6" />
                </a>
                <a
                  className="skills-highlight white-text"
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
                  <i className="devicon-react-original App-header--icon6" />
                </a>
                <a
                  className="skills-highlight white-text"
                  href="https://medium.freecodecamp.org/imagine-react-router-as-your-switchboard-operator-f4f1ac22188c"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Imagine React Router as your switchboard operator
                </a>
              </div>
              <div
                className="links wow flipInX"
                data-wow-offset="160"
                data-wow-delay="1s"
              >
                <a
                  href="https://medium.com/@jpapisan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="devicon-sass-original App-header--icon6" />
                </a>
                <a
                  className="skills-highlight white-text"
                  href="https://codeburst.io/intro-to-sass-386eb8f2e005"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Intro to Sass
                </a>
              </div>
              <div
                className="links wow flipInX"
                data-wow-offset="140"
                data-wow-delay="1.1s"
              >
                <a
                  href="https://medium.com/@jpapisan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="devicon-react-original App-header--icon6" />
                </a>
                <a
                  className="skills-highlight white-text"
                  href="https://codeburst.io/animate-your-react-in-2-mins-dd4b50c45976"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Animate your React
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <img
            className="profile-pic"
            src="https://media.licdn.com/dms/image/C4E03AQFrdeSou4meiw/profile-displayphoto-shrink_200_200/0?e=1533168000&v=beta&t=ixzTUl0gt8n3VTrx5kslxLWRVgZST_ssIodGf84KB9g"
          />
          <p>Frontend role in East Bay or SF? Reach out below.</p>
        </div>
      </div>
    );
  }
}

export default Portfolio;
