import React, {
	Component
} from 'react';
import './Nav.css';

export default class Nav extends React.Component {
	render() {
		return ( 
			<nav>
				<div className="nav-container">
					<a className="" href="#">
						<img alt="logo" className="" src="images/logo.png"/>
					</a>
				</div>
				<div className="nav-links">
					<ul>
						<li>Projects</li>
						<li>History</li>
						<li>Contact</li>
						<li>Blog</li>
					</ul>
				</div>
			</nav>
						


		)
	}
}