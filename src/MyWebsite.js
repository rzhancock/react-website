import React, { Component } from 'react';
import Nav from './components/Nav/Nav.js';

import './Main.css';


class MyWebsite extends React.Component {
	render() {
		return ( 
			<div  className="container">
				<Nav />
			</div>
		)
	}
}

export default MyWebsite;