import React, { Component } from "react";
import ContentContainer from "../components/ContentContainer";
import Main from "../components/Main";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
// import { onTransitionWillStart } from "react-router-page-transition";

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = { type: "Featured" };
    }
    selectType(type, e) {
        e.preventDefault();
        this.setState({type: type})
    }
	render() {
		return (
			<Main page={"work"}>
				<Nav back="/" page="Work" />
				<ContentContainer>
                    <nav className="project-nav">
						<section className="info">
							<div className="description">
								<h2>PROJECT TYPE</h2>
							</div>
                            <div className="types">
                            {window.data.categories.map((category, index) => (
                                <a
                                href="/"
                                onClick={(e) => this.selectType(category, e)}
                                key={index}
                                className={this.state.type === category ? 'active' : undefined}>
                                    {category}
                                </a>
					        ))}
                            </div>
						</section>
					</nav>
                    <div className="project-list">
                    {/* eslint-disable-next-line array-callback-return */}
					{window.projects.slice(0).reverse().map((project, index) => {
                            return <Link key={index} to={`/projects/${project.slug}`} style={project.categories.indexOf(this.state.type) >= 0 ? undefined : {display: 'none'}}>
                                <div className="label">
                                    <span className="type"># {project.categories[project.categories.length - 1]}</span><br/>
                                    <span className="name">{project.name}</span>
                                </div>
                                <img alt="" src={`/images/${project.image_path}/${project.images[0]}`} />
                            </Link>
                    })}
                    </div>
                    {/* <p className="description">
						I'm constantly experimenting outside of client work to uncover unique layouts,
						styles, and interactions, and of late have been taking a lot of inspiration from
						print design in particular.
				    </p> */}
				</ContentContainer>
			</Main>
		);
	}
}

export default Work;
