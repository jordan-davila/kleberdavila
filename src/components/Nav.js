import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = { circle: { X: 0, Y: 0 }, inner: { X: 0, Y: 0 } };
		this.onMouseMove = this.onMouseMove.bind(this);
	}

	onMouseMove(e) {
		let width = 22;
		let clientX = Math.max(-width, Math.min(width, e.clientX / 3 - width));
		let clientY = Math.max(-width, Math.min(width, e.clientY / 3 - width));
		let innerX = Math.max(-width, Math.min(width, width - e.clientX / 5));
		let innerY = Math.max(-width, Math.min(width, width - e.clientY / 5));
		this.setState({
			circle: { X: parseFloat(clientX), Y: parseFloat(clientY) },
			inner: { X: parseFloat(innerX), Y: parseFloat(innerY) }
		});
	}

	render() {
		return (
			<nav className="sidebar">
				<Link
					to={this.props.back}
					className="circleLink"
					onMouseMove={this.onMouseMove}
					onMouseLeave={() => this.setState({ circle: { X: 0, Y: 0 }, inner: { X: 0, Y: 0 } })}
					style={{
						transform: `translate(${this.state.circle.X}px, ${this.state.circle.Y}px)`
					}}>
					<div className="circleBorder"></div>
					<div
						className="circleWrap"
						style={{
							transform: `translate(${this.state.inner.X}px, ${this.state.inner.Y}px)`
						}}>
						{this.props.back === "/" ? (
							<React.Fragment>
								<div className="circle"></div>
								<div className="circle"></div>
								<div className="circle"></div>
							</React.Fragment>
						) : (
							<React.Fragment>
								<div className="line"></div>
								<div className="line reverse"></div>
							</React.Fragment>
						)}
					</div>
				</Link>
				<h1>Kleber Davila</h1>
				<h2>{this.props.page}</h2>
			</nav>
		);
	}
}
