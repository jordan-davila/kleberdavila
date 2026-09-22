import React, { Component } from "react";
import HomeNav from "../components/HomeNav";
import HomeHeader from "../components/HomeHeader";
import HomeFooter from "../components/HomeFooter";
import HomeModel from "../components/HomeModel";
import Main from "../components/Main";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { text: null, bg: null, cursor: null };
		this.changeColors = this.changeColors.bind(this);
	}

	changeColors(text, bg, cursor) {
		this.setState({
			text: text,
			bg: bg,
			cursor: cursor
		});
	}

	render() {
		return (
			<Main page={"home"} style={{ backgroundColor: this.state.bg }}>
				<HomeHeader changeColors={this.changeColors} text={this.state.text} />
				<HomeNav changeColors={this.changeColors} text={this.state.text} />
				<HomeFooter changeColors={this.changeColors} text={this.state.text} />
                <HomeModel />
			</Main>
		);
	}
}

export default Home;
