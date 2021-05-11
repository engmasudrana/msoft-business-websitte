import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import aboutImg from '../../images/banner1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <>
            <Container style={{marginTop: '100px'}}>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <img className="w-100" style={{height: '520px', borderRadius: '4px'}} src={aboutImg} alt=""/>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h5>About us</h5> <hr/>
                        <h1>Over 26 Years of Experience in Serve People</h1> <br/>
                        <p className="text-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p> <br/>

                        <h2> <FontAwesomeIcon className="text-success" icon={faCheckSquare} /> Our Mission</h2>
                        <p className="text-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, aliquip ex ea commodo consequat.
                        </p> <br/>

                        <h2> <FontAwesomeIcon className="text-success" icon={faCheckSquare} /> Our Vision</h2>
                        <p className="text-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, aliquip ex ea commodo consequat.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;