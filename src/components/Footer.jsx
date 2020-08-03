import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer className="footer-section">
				<Container fluid>
					<Row>
						<Col sm={6}>
							<div className="footer-title-section">
								<h1 className="footer-title" style={{ color: 'white' }}>
									JK
									<span className="full-stop" style={{ color: '#72BDA3' }}>
										PODS
									</span>
								</h1>
								<div className="line-seperator" />
							</div>
							<div className="contact-information">
								<div className="text-container-information">
									<h5 className="location-title">LOCATION:</h5>
									<p className="location-paragrapgh">
										15 Meadpark Bickington<br />
										Barnstaple<br />
										North Devon<br />
										EX31 2PF
									</p>
								</div>
								<div className="email-container-information">
									<h5 className="email-title">EMAIL:</h5>
									<p className="email-paragrapgh">arkjkjeffery@gmail.com</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="line-seperator-2" />
							
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}

export default Footer;
