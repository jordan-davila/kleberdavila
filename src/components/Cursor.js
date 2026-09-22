import React, { Component } from "react";

class Cursor extends Component {
	render() {
		const props = this.props.cursorProps;
		const styles = {
			opacity: props.isVisible ? 1 : 0,
			transform: `translate(${props.pageX}px, ${props.pageY}px) scale(${props.isVisible ? 1 : 0})`
		};

		return <div className="cursor" style={styles}></div>;
	}
}

export default Cursor;
