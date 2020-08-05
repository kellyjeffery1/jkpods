import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function More() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <div className="banner-container">
                            <div className="banner-text-container">
                                <h2 className="banner-title" style={{ color: 'white' }}>
								        Lets go out
								    <span className="full-stop" style={{ color: '#72BDA3' }}>
									   side
							        </span>
							    </h2>
                                <p style={{ color: 'white'}}>Make the most out of your outdoor space with a summer house suitable for a makeshift office or gym</p>
                            </div>
                            <img className="banner-pod-image" alt="something" src="./images/IMG_2996.jpg" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="subheading-container">
                            <div className="banner-line-seperator"></div>
                            <div className='subheading-title-container'>
                              <h2 className="subheading" style={{ color: 'white' }}>
								        Garden
								    <span className="full-stop" style={{ color: '#72BDA3' }}>
									   pods
							        </span>
                                </h2>
                            </div>
                            <div className="banner-line-seperator"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default More;