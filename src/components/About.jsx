import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';  

const About = () => {
    useEffect(() => {
		Aos.init({ duration: 3000})
	})
    return (
            <div className="about-section">
                <div className="about-title-section">
                    <h1 className="about-header-title" style={{ color: 'white' }}>
                          ABO
					     <span className="full-stop" style={{ color: '#72BDA3' }}>UT</span>
                    </h1>         
                </div>
                <div className="about-text-container" data-aos="fade-up">
                    <p>Garden pods are the latest trend in home improvement.
                       Garden pods versatility makes them the perfect space-saving addition to any property. 
                       Home extensions,renovations or other methods of adding additional space are time-consuming and can interrupt your everyday life.
                       A beautiful exterior with finishes available in various natural materials, our gardens pods are the perfect addition to any property.
                       Durable and made from the highest quality materials, our buildings are built to last.
                       Complete with insulation and other components that mimic a room in your home, our products are suited for year-round use, even during the coldest Winter months. </p>
                </div>
            </div>
          );

};
export default About;