import React, { Component } from 'react';
import { FaPhone, FaFileContract, FaTape } from 'react-icons/fa';

class SecondNavbar extends Component {
	state = {};
	render() {
		return (
			<nav className="second-nav">
				<div className="second-nav-container">
					<ul className="second-nav-links">
						<li className="second-nav-title">
							<span className="fa fa-twitter" />
							<FaPhone /> Call us: 07391023624 |
						</li>
						<li className="second-nav-title" style={{ color: '#72BDA3' }}>
							<FaFileContract /> Book an Appointment |
						</li>
						<li className="second-nav-title">
							{' '}
							<FaTape /> Design your pod
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default SecondNavbar;
