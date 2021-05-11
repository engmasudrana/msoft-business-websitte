import React from 'react';
import { Col, Container, Row, Button } from "react-bootstrap";
import Typical from 'react-typical';
import { Link } from "react-router-dom";
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <>
            <Container fluid={true} className="topFixedBanner p-0" >
                <div className="topBannerOverlay">
                    <Container className="topContent">
                        <Row>
                            <Col className="text-center">
                                <h1 className="topTitle">Professional
                                    <Typical className=" ml-2 text-success"
                                             steps={['Company', 4000, 'Security', 4000, 'Protection']}
                                             loop={Infinity}
                                             wrapper="p"
                                    />
                                </h1>
                                <h2 className="topSubTitle">With Reliable Service</h2>
                                <p className="text-des mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod enim tempor<br/> incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim.
                                </p>
                                <Link to="/noMatch"><Button variant="success">More Info</Button></Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    );
};

export default HomeBanner;