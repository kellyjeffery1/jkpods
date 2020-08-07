import React from 'react';
import PodInfoCard from './PodInfoCard';
import { Container, Row, Col } from 'reactstrap';

function Shop() {
	return (
		<div>
			<Container>
				<Row>
					<Col sm={4}>
						<PodInfoCard
							contact={{
								imageUrl: './images/IMG_2873.jpg',
								information:
									'Crane Garden Buildings 1.8 x 2.5m Summerhouse, FSC-Certified (Scandinavian Redwood), Sage',
								price: '12,000',
								rate: '07391023624'
							}}
						/>
					</Col>
					<Col sm={4}>
						<PodInfoCard
							contact={{
								imageUrl: './images/IMG_2873.jpg',
								information:
									'Crane Garden Buildings 1.8 x 2.5m Summerhouse, FSC-Certified (Scandinavian Redwood), Sage',
								price: '12,000',
								rate: '07391023624'
							}}
						/>
					</Col>
					<Col sm={4}>
						<PodInfoCard
							contact={{
								imageUrl: './images/IMG_2873.jpg',
								information:
									'Crane Garden Buildings 1.8 x 2.5m Summerhouse, FSC-Certified (Scandinavian Redwood), Sage',
								price: '12,000',
								rate: '073910 '
							}}
						/>
					</Col>
				</Row>
				<Row>
					<Col sm={4}>
						<PodInfoCard
							contact={{
								imageUrl: './images/IMG_2873.jpg',
								information:
									'Crane Garden Buildings 1.8 x 2.5m Summerhouse, FSC-Certified (Scandinavian Redwood), Sage',
								price: '12,000',
								rate: '07391023624'
							}}
						/>
					</Col>
					<Col sm={4}>
						<PodInfoCard
							contact={{
								imageUrl: './images/IMG_2873.jpg',
								information:
									'Crane Garden Buildings 1.8 x 2.5m Summerhouse, FSC-Certified (Scandinavian Redwood), Sage',
								price: '12,000',
								rate: '07391023624'
							}}
						/>
					</Col>
					<Col sm={4}>
						<PodInfoCard
							contact={{
								imageUrl: './images/IMG_2873.jpg',
								information:
									'Crane Garden Buildings 1.8 x 2.5m Summerhouse, FSC-Certified (Scandinavian Redwood), Sage',
								price: '12,000',
								rate: '073910 '
							}}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
export default Shop;
