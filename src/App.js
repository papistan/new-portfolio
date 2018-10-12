import React, { Component } from "react";
import Typist from "react-typist";
import TextLoop from 'react-text-loop';
import Portfolio from "./portfolio";
import Skills from "./skills";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="content">
            <div className="link-bar">
              <a href="mailto:jpapisan@gmail.com">
                <i
                  className="fa fa-envelope-o App-header--icon wow flipInY"
                  data-wow-iteration="1"
                  data-wow-delay="1.5s"
                />
              </a>
              <a
                href="https://github.com/papistan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-github App-header--icon wow flipInY"
                  data-wow-iteration="1"
                  data-wow-delay="1.9s"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/papisan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-linkedin App-header--icon wow flipInY"
                  data-wow-iteration="1"
                  data-wow-delay="2.3s"
                />
              </a>
              <a
                href="https://medium.com/@jpapisan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-medium App-header--icon wow flipInY"
                  data-wow-iteration="1"
                  data-wow-delay="2.7s"
                />
              </a>
              <a
                href="https://github.com/papistan/currentResume/blob/master/JayPapisanResume2018.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-file-pdf-o App-header--icon wow flipInY"
                  data-wow-iteration="1"
                  data-wow-delay="3.1s"
                />
              </a>
            </div>
            <div className="App-header-title">
              <div className="Typist">
                <Typist>
                  <span>Hi. I'm Jay. I'm a </span>
                  <TextLoop
                    children={[
                      " ",
                      " Frontend",
                      " JavaScript",
                      " React",
                      "Node",
                      "CSS",
                      "HTML",
                      "?"
                    ]}
                    speed={2000}
                    springConfig={{ stiffness: 340, damping: 30 }}
                  />
                  <span> Developer</span>
                </Typist>
              </div>
            </div>
          </div>
        </header>
        <Skills />
        <Portfolio className="App-intro" />
        <div className="link-bar2">
          <a href="mailto:jpapisan@gmail.com">
            <i className="fa fa-envelope-o App-header--icon2" />
          </a>
          <a
            href="https://github.com/papistan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github App-header--icon2" />
          </a>
          <a
            href="https://www.linkedin.com/in/papisan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin App-header--icon2" />
          </a>
          <a
            href="https://medium.com/@jpapisan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-medium App-header--icon2" />
          </a>
          <a
            href="https://github.com/papistan/currentResume/blob/master/JayPapisanResume2018.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-file-pdf-o App-header--icon2" />
          </a>
        </div>
        <p>&copy; Jay Papisan</p>
      </div>
    );
  }
}

export default App;
