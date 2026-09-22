import React, { Component } from "react";

class MainNav extends Component {
	render() {
		return (
			<footer>
                {/* eslint-disable-next-line array-callback-return */}
                {window.data.social.map((link, index) => {
                        return <a
                        key={index}
                        style={{ color: this.props.text }}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        {link.name}
                    </a>
                })}
			</footer>
		);
	}
}

export default MainNav;
