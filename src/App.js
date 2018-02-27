import React, { Component } from "react";
import Typist from "react-typist";
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
                  data-wow-delay=".7s"
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
                  data-wow-delay="1.1s"
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
                  data-wow-delay="1.5s"
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
                  data-wow-delay="1.9s"
                />
              </a>
              <a
                href="./JayPapisanResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-file-pdf-o App-header--icon wow flipInY"
                  data-wow-iteration="1"
                  data-wow-delay="2.3s"
                />
              </a>
            </div>
            <div className="App-header-title">
              <div className="Typist">
                <Typist>
                  <span> Hi. I'm Jay</span>
                  <Typist.Backspace count={3} delay={300} />
                  <span>a Front-end developer</span>
                  <Typist.Backspace count={19} delay={300} />
                  <span>JavaScript developer</span>
                  <Typist.Backspace count={20} delay={300} />
                  <span>React developer</span>
                  <Typist.Backspace count={17} delay={300} />
                  <span>Jay</span>
                  <Typist.Backspace count={3} delay={300} />
                  <span>a Front-end developer</span>
                  <Typist.Backspace count={19} delay={300} />
                  <span>JavaScript developer</span>
                  <Typist.Backspace count={20} delay={300} />
                  <span>React developer</span>
                  <Typist.Backspace count={17} delay={300} />
                  <span>Jay</span>
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
            href="JayPapisanResume.pdf"
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
