import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Pods from './components/Pods';
import Footer from './components/Footer';


class Home extends Component {
	state = {};
	render() {
		return (
			<div>
				<Header />
				<About />
				<Pods />
				<Footer />
			</div>
		);
	}
}

export default Home;
