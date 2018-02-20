import React,{ Component } from 'react';


class Portfolio extends Component {

    render() {
        return (
            <div className="portfolio-title">
                <div>
                    <a className="highlight black-text"><strong>Portfolio</strong></a>
                </div>
                <div className="section">
                    <div className="title-items black-text">
                        <h2>Scoutr</h2>
                        <p>A tinder-style swipe card app to explore locations by neighborhood, build lists and share with friends. <br/>Built on React Native / Ruby on Rails with Yelp API. </p>
                    </div>
                    <div className="gifs">
                        <span><img src="login.gif"/></span>
                        <span><img src="swipe.gif"/></span>
                        <span><img src="show.gif"/></span>
                    </div>
                    <div className="links">
                        <a className="highlight black-text" href="https://github.com/papistan/Scoutr/blob/master/README.md" target="_blank" rel="noopener noreferrer">Learn more</a>
                    </div>
                </div>
            <br/>
                <div className="smaller-projects">
                    <div className="section2">
                        <div className="title-items black-text">
                            <h2>FrontEndTrivia.com</h2>
                            <p>Open source (50+ contributors | 75+ forks) front end-focused trivia card app built in React / Redux / Node. <br/>Fully managed open source workflow (42 issues created, 120+ pull requests reviewed) </p>
                        </div>
                        <div className="gifs">
                            <span><img src="frontendtrivia.png"/></span>
                        </div>
                        <div className="links">
                            <span><a className="highlight black-text" href="http://www.frontendtrivia.com" target="_blank" rel="noopener noreferrer">Live |</a>
                            <a className="highlight black-text" href="https://github.com/papistan/FrontEndTrivia" target="_blank" rel="noopener noreferrer">Learn more</a></span>
                        </div>
                    </div>
                <br/>
                    <div className="section2">
                        <div className="title-items black-text">
                            <h2>Event Search</h2>
                            <p>Event search tool with Eventbrite's API built on React, Node, Webpack, and Sass </p>
                        </div>
                        <div className="gifs">
                            <span><img src="event.png"/></span>
                        </div>
                        <div className="links">
                            <span><a className="highlight black-text" href="https://radiant-savannah-62825.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live |</a>
                            <a className="highlight black-text" href="https://github.com/papistan/eventbrite" target="_blank" rel="noopener noreferrer">Learn more</a></span>
                        </div>
                    </div>
                 <br/>
                    <div className="section2">
                        <div className="title-items black-text">
                            <h2>First Prize - AngelHack Hackathon</h2>
                            <p>WINNER AngelHack Hackathon Sacramento 2017 for best use of Satori API </p>
                        </div>
                        <div className="gifs">
                            <span><img src="satori.png"/></span>
                        </div>
                        <div className="links">
                            <span><a className="highlight black-text" href="http://www.hackathon.io/projects/16197" target="_blank" rel="noopener noreferrer">Learn more</a></span>
                        </div>
                    </div>
                    <br/>
                    <div className="section2">
                        <div className="title-items black-text">
                            <h2>SAFE.LY</h2>
                            <p>Alert contacts of your safety during earthquakes. Built on Ruby on Rails, Bootstrap, USGS API and Twilio API text-messaging service.</p>
                        </div>
                        <div className="gifs">
                            <span><img src="safely.jpg"/></span>
                        </div>
                        <div className="links">
                            <span><a className="highlight black-text" href="https://github.com/papistan/safe.ly/blob/master/README.md" target="_blank" rel="noopener noreferrer">Learn more</a></span>
                        </div>
                    </div>
                </div>
            
                <br/>
                <div className="break-portfolio" />
            </div>
        )
    }
}

export default Portfolio;