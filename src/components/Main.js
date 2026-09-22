import React, { Component } from "react";
import Cursor from "./Cursor";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = { cursor: { isVisible: true, pageX: null, pageY: null } };
	}

	cursorMouseMove(e) {
		let isVisible =
			e.target.parentNode.tagName.toLowerCase() === "a" || e.target.parentNode.className === "label" || e.target.parentNode.className === "types"
				? false
				: true;
		this.setState({ cursor: { isVisible: isVisible, pageX: e.pageX, pageY: e.pageY } });
	}

	render() {
		return (
			<main
				className={`grid ${this.props.page}`}
				onMouseMove={this.cursorMouseMove.bind(this)}
				style={this.props.style}>
				<Cursor cursorProps={this.state.cursor} />
				{this.props.children}
			</main>
		);
	}
}

export default Main;
