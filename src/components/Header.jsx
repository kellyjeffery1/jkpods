import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SecondNavbar from './SecondNavbar';
import ReactPlayer from 'react-player';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	});
	return (
		<div className="header">
			<SecondNavbar />
			<Container fluid>
				<Row>
					<Col sm={6}>
						<div className="title-section" data-aos="fade-up">
							<h1 className="header-title" style={{ color: 'white' }}>
								JK
								<span className="full-stop" style={{ color: '#72BDA3' }}>
									PODS
								</span>
							</h1>
							<p className="header-para">
								<em>-Created by Jim Jeffery</em>
							</p>
							<button className="title-button">MORE</button>
						</div>
					</Col>
					<Col sm={6}>
						<div className="pod-image" data-aos="fade-in">
							<ReactPlayer
								controls
								samesite="None"
								url="https://www.youtube.com/watch?v=5ZIisIvzOnE"
								height="80%"
								width="100%"
								data-aos="fade-in"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Header;
