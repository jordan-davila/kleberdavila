import React, { Component } from "react";

class ContentContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<section className="container">
				<section className="gridWrapper">
					<section className="content">{this.props.children}</section>
				</section>
			</section>
		);
	}
}

export default ContentContainer;

