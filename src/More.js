import React, { Component } from 'react';
import MoreBanner from './components/MoreBanner';
import SecondNavbar from './components/SecondNavbar';
import Shop from './components/Shop';

class More extends Component {
	render() {
		return (
			<div>
				<SecondNavbar/>
				<MoreBanner />
				<Shop />
			</div>
		);
	}
}

export default More;
