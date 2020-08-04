import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

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
							<div className="icon-container">
								<ul className="icon-ul">
									<li className="icon-li">
										<a target="blank" href="https://www.linkedin.com/in/kelly-jeffery/">
											<FaLinkedinIn style={{ color: 'white' }} />
										</a>
									</li>
									<li className="icon-li">
										<a target="blank" href="https://www.instagram.com/kellyjeffery1/?hl=en">
											<FaInstagram style={{ color: 'white' }} />
										</a>
									</li>
									<li className="icon-li">
										<a target="blank" href="https://github.com/kellyjeffery1">
											<FaGithub style={{ color: 'white' }} />
										</a>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}

export default Footer;
