import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
class Pods extends Component {
    state = {  }
    render() { 
        return (
            <div className="pods-section">
                <h1 className="pod-title" style={{ color: 'white' }}>
				                    POD
				<span className="full-stop" style={{ color: '#72BDA3' }}>S</span>
                </h1>
                <div className="pod-container">
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className="pod-card">
                                <img className="pod-card-image" alt="something" src="./images/IMG_2869.jpg"></img>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="pod-card">
                                <img className="pod-card-image" alt="something" src="./images/IMG_2873.jpg"></img>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="pod-card">
                                <img className="pod-card-image" alt="something" src="./images/IMG_2874.jpg"></img>
                            </div>
                        </Col>
                    </Row>
                    </Container> 
                </div>    
            </div>
          );
    }
}
 
export default Pods;