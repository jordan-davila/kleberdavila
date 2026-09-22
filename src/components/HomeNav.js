import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Pages } from "../Pages";
import { ChangeBGColor } from "../Helpers";
import _ from "lodash";

class HomeNav extends Component {
	constructor(props) {
		super(props);
		this.state = { pageX: 4, pages: _.filter(Pages, "isMainMenu") };
	}

	navMouseMove(e) {
		let width = window.innerWidth;
		let pageX = Math.max(-width / 2, Math.min(width / 2, width / 2 - e.clientX));
		this.setState({ pageX: parseFloat(pageX / 20) });
	}

	linkMouseEnter(id) {
        let page = _.find(this.state.pages, ["id", id]);
		let { text, bg, cursor } = page.colors;
        window.model = page.modelColor;
		this.props.changeColors(text, bg, cursor);
		ChangeBGColor(bg, cursor);
	}

	render() {
		return (
			<nav
				onMouseMove={this.navMouseMove.bind(this)}
				onMouseLeave={() => this.setState({ pageX: 4 })}>
				<div
					className="wrapper"
					style={{
						transform: `translateX(${this.state.pageX}vw)`
					}}>
					{this.state.pages.map((page, key) => {
						return (
							<React.Fragment key={key}>
								{page.isMainMenu && (
									<Link
										to={page.path}
										style={{ color: this.props.text }}
										className="snap"
										onMouseEnter={() => this.linkMouseEnter(page.id)}>
										<div className="label">{page.name}</div>
										<div className="num">0{page.id}</div>
									</Link>
								)}
								{this.state.pages.length !== key + 1 && (
									<div
										className="line"
										style={{ backgroundColor: this.props.text }}></div>
								)}
							</React.Fragment>
						);
					})}
				</div>
			</nav>
		);
	}
}

export default HomeNav;
