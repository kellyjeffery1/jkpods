import React from 'react';

function PodInfoCard(props){
    return (
        <div className='card-section'>
            <div className='pod-info-card'>
                <img src={props.contact.imageUrl} alt="" className='card-image' />
                <div className='card-line-seperator'></div>
                <p>{props.contact.information}</p>
                <div className='card-line-seperator'></div>
                <p>£{props.contact.price}</p>
                <div className='card-line-seperator'></div>
				<p>{props.contact.rate}</p>
			</div>
        </div>
    )
}
export default PodInfoCard;