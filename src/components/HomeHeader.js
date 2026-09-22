import React, { Component } from "react";

class HomeHeader extends Component {
	render() {
		return (
			<header>
				<h1 style={{ color: this.props.text }}>Kleber Davila</h1>
				<h2 style={{ color: this.props.text }}>
					{ window.data.home.subtitle }
				</h2>
			</header>
		);
	}
}

export default HomeHeader;
