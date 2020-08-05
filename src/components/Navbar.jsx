import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="nav">
					<div className="menu__right">
						<div className="header-title">
							<h1 className="nav-main-title" style={{ color: 'white' }}>
								J
								<span className="full-stop" style={{ color: '#72BDA3' }}>
									K
								</span>
							</h1>
						</div>
						<div className="nav-container">
							<ul className="nav-links">
								<Link to="/">
									<li className="nav-links-item one">
										<p className="nav-title">HOME</p>
									</li>
								</Link>
								<li className="nav-links-item two">
									<p className="nav-title">ABOUT</p>
								</li>
								<li className="nav-links-item three">
									<p className="nav-title">CONTACT</p>
								</li>
								<Link to="/More">
									<li className="nav-links-item four">
										<p className="nav-title">MORE</p>
									</li>	
								</Link>
								<hr />
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
