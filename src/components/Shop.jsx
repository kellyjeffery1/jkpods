import React from 'react'
import PodInfoCard from './PodInfoCard';

function Shop() {
    return (
        <div>
            <PodInfoCard
				contact={{
					imageUrl:
                        './images/IMG_2873.jpg',
					information: 'Crane Garden Buildings 1.8 x 2.5m Summerhouse, FSC-Certified (Scandinavian Redwood), Sage',
					price: '1234',
					rate: '07391023624'
				}}
			/>
        </div>
    )
}
export default Shop;