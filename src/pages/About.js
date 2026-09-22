import React, { Component } from "react";
import ContentContainer from "../components/ContentContainer";
import Main from "../components/Main";
import Nav from "../components/Nav";

class About extends Component {
	render() {
		return (
			<Main page={"about"}>
				<Nav back="/" page="About" />
				<ContentContainer>
					<div className="title">
						<h1 dangerouslySetInnerHTML={{__html: window.data.about.title}} />
					</div>
					<div className="description">
						<div class="wrap">
							<p>{window.data.about.description}</p>
						</div>
					</div>
					<div className="experiences">
						<h1>Experience</h1>
                        {/* eslint-disable-next-line array-callback-return */}
                        {window.data.about.experiences.map((exp, index) => {
                                return <div key={index} className={index === 0 ? "exp current" : "exp"}>
                                <div key={index} className="name">{exp.job}</div>
                                <div key={index} className="name">{exp.company}</div>
                                <div key={index} className="name">{exp.time}</div>
                            </div>
                        })}
					</div>
				</ContentContainer>
			</Main>
		);
	}
}

export default About;
