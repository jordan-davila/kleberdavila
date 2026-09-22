import React, { Component } from "react";
import ContentContainer from "../components/ContentContainer";
import Main from "../components/Main";
import Nav from "../components/Nav";

class Contact extends Component {
	render() {
		return (
			<Main page={"contact"}>
				<Nav back="/" page="Contact" />
				<ContentContainer>
					<div className="title">
						<h1>
							LET'S MAKE
							<br />
							SOMETHING
						</h1>
					</div>
					<div className="description">
						<div class="wrap">
							<a href={'mailto:' + window.data.contacts.email}>{window.data.contacts.email}</a>
							<p>
								{window.data.contacts.message}
								<br />
								<br />
								Cheers,
								<br />
								{window.data.contacts.first_name}
							</p>
						</div>
					</div>
				</ContentContainer>
			</Main>
		);
	}
}

export default Contact;
