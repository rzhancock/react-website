import React, { Component } from 'react';
import './Nav.css';
import logo from './logo.png';

export default class Nav extends React.Component {
	render() {
		return ( 
			<nav>
				<div className="nav-container">
					<a className="" href="#">
						<img alt="logo" className="logo" src={logo}/>
					</a>
				</div>
				<div className="nav-links">
					<ul>
						<li><a>Projects</a></li>
						<li><a>History</a></li>
						<li><a>Contact</a></li>
						<li><a>Blog</a></li>
					</ul>
				</div>
			</nav>
						


		)
	}
}