import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import './Intro.css';

const Intro = () => {
    return (
        <>
            <Container fluid={true} style={{marginTop: '100px'}} className="intro-bg p-0">
                <Container fluid={true} className="p-0" >
                    <div className="introBannerOverlay">
                        <Container className="introTopContent">
                            <Row>
                                <Col className="text-center">
                                    <h3 className="introTitle">Still Confused About Our Features?<br/> Get a Free Trial 7 Days</h3>
                                   <p className="text-white mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                       ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                       laboris nisi ut aliquip ex ea commodo consequat.
                                   </p>
                                    <Button variant="success btn-lg">GET FREE TRIAL</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Container>
        </>
    );
};

export default Intro;