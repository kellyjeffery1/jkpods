import React, { Component } from 'react';
import MoreBanner from './components/MoreBanner';
import SecondNavbar from './components/SecondNavbar';
import Shop from './components/Shop';
import Footer from './components/Footer';

class More extends Component {
	render() {
		return (
			<div>
				<SecondNavbar/>
				<MoreBanner />
				<Shop />
				<Footer/>
			</div>
		);
	}
}

export default More;
