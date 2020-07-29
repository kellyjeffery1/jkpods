import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<Container fluid>
					<Row>
						<Col sm={6}>
							<div className="title-section">
								<h1 className="header-title" style={{ color: 'white' }}>
									JK
									<span className="full-stop" style={{ color: '#72BDA3' }}>
										PODS
									</span>
								</h1>
								<p className="header-para">
									<em>-Created by Jim Jeffery</em>
								</p>
								<button className="title-button">Buy</button>
							</div>
						</Col>
						<Col sm={6}>
							<div className="pod-image">
								<img
									className="leaves"
									alt="something"
									src="./images/IMG_2876.jpg"
									height="80%"
									width="40%"
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Header;
