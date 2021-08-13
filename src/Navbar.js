import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
	const [expand, setExpand] = useState(false);
	const linksContainer = useRef(null);
	const linksRef = useRef(null);

	const toggleOnClick = () => {
		setExpand(!expand);
	};

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (expand) {
			linksContainer.current.style = `height: ${linksHeight}px`;
			return;
		} else {
			linksContainer.current.style = "height: 0px";
			return;
		}
	}, [expand]);
	return (
		<div className="nav-center">
			<div className="nav-header">
				<img src={logo} alt="logo" className="logo" />
				<button className="nav-toggle" onClick={toggleOnClick}>
					<FaBars />
				</button>
			</div>
			<div className="links-container" ref={linksContainer}>
				<ul className="links" ref={linksRef}>
					{links.map((item) => {
						const { id, url, text } = item;
						return (
							<li key={id}>
								<a href={url}>{text}</a>
							</li>
						);
					})}
				</ul>
			</div>
			<ul className="social-icons">
				{social.map((item) => {
					const { id, url, icon } = item;
					return (
						<li key={id}>
							<a href={url}>{icon}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Navbar;
