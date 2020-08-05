import React, { Component } from 'react';
import MoreBanner from './components/MoreBanner';
import SecondNavbar from './components/SecondNavbar';
class More extends Component {
	render() {
		return (
			<div>
				<SecondNavbar/>
				<MoreBanner/>
			</div>
		);
	}
}

export default More;
