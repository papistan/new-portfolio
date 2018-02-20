import React,{ Component } from 'react';


class Skills extends Component {

    render() {
        return (
            <div>
                <div className="skills-background">
                   <div>
                    <a className="skills-title black-text skills-highlight"> Skills at a Glance </a>
                    </div>
						<div className="skills-icons">
						    <span class="devicon-javascript-plain skills-icon"/>
                            <span class="devicon-react-original-wordmark skills-icon"/>
                            <span class="devicon-nodejs-plain-wordmark skills-icon"/>
                            <span class="devicon-ruby-plain-wordmark skills-icon"/>	
                            <span class="devicon-rails-plain-wordmark skills-icon"/>		
                            <span class="devicon-sass-original skills-icon"/>
                            <span class="devicon-jasmine-plain-wordmark skills-icon"/>		
						</div>
                </div>
            </div>
        )
    }
}

export default Skills;