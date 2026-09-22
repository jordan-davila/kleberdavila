import React, { Component } from "react";
import Main from "../components/Main";
import ContentContainer from "../components/ContentContainer";
import Nav from "../components/Nav";
import ProjectModel from "../components/ProjectModel";
import ReactPlayer from "react-player"
import _ from "lodash";

class Projects extends Component {
	componentWillMount() {
		let project = _.find(window.projects, this.props.match.params);
		this.setState(project);
	}

	getImages() {
		let images = [];
        for (let index = 0; index < this.state.images.length; index++) {
            images.push(`/images/${this.state.image_path}/${this.state.images[index]}`);
        }
		return images;
	}

	render() {
		return (
			<Main page={"projects"}>
				<Nav back="/work" page="Projects" />
				<ContentContainer>
					<div className="project-info">
						<h1>{this.state.name}</h1>
						<section className="info">
							<div className="description">
								<h2>DESCRIPTION</h2>
								<p>{this.state.description}</p>
							</div>
						</section>
					</div>

                    {this.state.model_path ? (
                        <ProjectModel model={this.state.model_path}/>
                    ) : (null)}

                    {this.state.video_path ? (
                         <div className="video">
                             <ReactPlayer url={this.state.video_path} width="100%" height="40vw" />
                         </div>
                    ) : (null)}

                    {this.state.images.length ? (
                        <div className="images">
                            {this.getImages().map(path => (
                                <img alt="" key={path} src={path} />
                            ))}
					    </div>
                    ) : (null)}

				</ContentContainer>
			</Main>
		);
	}
}

export default Projects;
