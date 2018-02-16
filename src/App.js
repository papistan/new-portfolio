import React, { Component } from 'react';
import Typist from 'react-typist';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="content">
            <div className="link-bar">
              <a href="mailto:jpapisan@gmail.com"><i className="fa fa-envelope-o App-header--icon">M</i></a>
              <a href="https://github.com/papistan"><i className="fa fa-github App-header--icon">M</i></a>
              <a href="https://www.linkedin.com/in/papisan"><i className="fa fa-linkedin App-header--icon">M</i></a>
              <a href="https://medium.com/@jpapisan"><i className="fa fa-medium App-header--icon">M</i></a>
              <a href="" target="_blank" rel="noopener noreferrer"><i className="fa fa-file-pdf-o App-header--icon">M</i></a>
            </div>
            <div className="App-header-title">
              <div className="Typist">
              <Typist>
                <span> Hi. I'm Jay</span>
                <Typist.Backspace count={3} delay={300} />
                <span>a Front-end developer</span>
                <Typist.Backspace count={21} delay={200} />
                <span>a JavaScript developer</span>
                <Typist.Backspace count={22} delay={200} />
                <span>a React developer</span>
                <Typist.Backspace count={17} delay={200} />
                <span>a human</span>
              </Typist>
              </div>
            </div>
            <a>
              <div class="Portfolio-down-arrow"></div>
            </a>
          </div>
        </header>
        <p className="App-intro">
          COOL STUFF
        </p>
      </div>
    );
  }
}

export default App;
