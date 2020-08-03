import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Pods = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	});
	return (
		<div className="pods-section">
			<h1 className="pod-title" style={{ color: 'white' }}>
				POD
				<span className="full-stop" style={{ color: '#72BDA3' }}>
					S
				</span>
			</h1>
			<div className="pod-container">
				<Container>
					<Row>
						<Col sm={4}>
							<div className="pod-card" data-aos="fade-up">
								<img className="pod-card-image" alt="something" src="./images/IMG_2869.jpg" />
								<div className="card-text-container">
									<h4 className="cottage-title">COTTAGE GRANDE DELUXE</h4>
								</div>
							</div>
						</Col>
						<Col sm={4}>
							<div className="pod-card" data-aos="fade-up">
								<img className="pod-card-image" alt="something" src="./images/IMG_2873.jpg" />
								<div className="middle">
									<button className="text-button">MORE</button>
								</div>
								<div className="card-text-container">
									<h4 className="luxury-title">LUXURY SUMMER</h4>
								</div>
							</div>
						</Col>
						<Col sm={4}>
							<div className="pod-card" data-aos="fade-up">
								<img className="pod-card-image" alt="something" src="./images/IMG_2874.jpg" />
								<div className="card-text-container">
									<h4 className="helena-title">HELENA GARDEN POD</h4>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};
export default Pods;
