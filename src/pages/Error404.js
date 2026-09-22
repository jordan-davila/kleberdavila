import React, { Component } from "react";
import ContentContainer from "../components/ContentContainer";
import Main from "../components/Main";
import Nav from "../components/Nav";

class Home extends Component {
	render() {
		return (
			<Main page={"error404"}>
				<Nav back="/" page="404" />
				<ContentContainer>
					{" "}
					<h1>404 Not Found</h1>
				</ContentContainer>
			</Main>
		);
	}
}

export default Home;
