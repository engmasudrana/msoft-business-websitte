import React, { Fragment } from 'react';
import { Col, Container, Row, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseDamage, faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faCcVisa, faCcMastercard, faCcPaypal, faCcStripe} from "@fortawesome/free-brands-svg-icons";
import  logo from '../../images/msoftlogo.png';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <Fragment>
            <Container fluid={true} className="footerBg">
                <Container>
                    <Row>
                        <Col lg={3} md={4} sm={12} className="text-justify">
                            <h1 className="mt-5"> <img src={logo} alt=""/> </h1>
                            <p className="tagTitle">Lorem Ipsum has been the text <br/> cindustry's standard dummy <br/>
                                text nwhen an unknown printer <br/> make a type specimen book <br/> wt has survived not only five </p>
                        </Col>
                        <Col lg={3} md={4} sm={12} className="text-justify">
                            <h1 className="footerTitle">My Account</h1>
                            <Link className="footerDes" to="/noMatch">My Account</Link> <br />
                            <Link className="footerDes" to="/login">Login/Register</Link> <br />
                            <Link className="footerDes" to="/noMatch">Cart</Link> <br />
                            <Link className="footerDes" to="/noMatch">Wishlist</Link> <br />
                            <Link className="footerDes" to="/noMatch">Order History</Link> <br />
                            <Link className="footerDes" to="/noMatch">Payment</Link> <br />
                            <Link className="footerDes" to="/noMatch">Delivery</Link> <br />
                        </Col>
                        <Col lg={3} md={4} sm={12} className="text-justify">
                            <h1 className="footerTitle">Support</h1>
                            <Link className="footerDes" to="/noMatch">How To Shop</Link> <br />
                            <Link className="footerDes" to="/noMatch">Payment</Link> <br />
                            <Link className="footerDes" to="/noMatch">Returns</Link> <br />
                            <Link className="footerDes" to="/noMatch">Delivery</Link> <br />
                            <Link className="footerDes" to="/noMatch">Privacy Policy</Link> <br />
                            <Link className="footerDes" to="/noMatch">Terms & Condition</Link> <br />
                        </Col>
                        <Col lg={3} md={4} sm={12} className="text-justify">
                            <h1 className="footerTitle">Address</h1>
                            <div className="footerAddress">
                                <p> <FontAwesomeIcon icon={faHouseDamage} /> Gulshan-1, Dhaka, Bangladesh.</p>
                                <p> <FontAwesomeIcon icon={faEnvelope} /> mranainfo247@gmail.com</p>
                                <p> <FontAwesomeIcon icon={faMobile} /> +880 1521380593</p>
                            </div>
                            <div className="iconList">
                                <span className="footerIcon"><FontAwesomeIcon icon={faCcVisa} /></span>
                                <span className="footerIcon"><FontAwesomeIcon icon={faCcMastercard} /></span>
                                <span className="footerIcon"><FontAwesomeIcon icon={faCcPaypal} /></span>
                                <span className="footerIcon"><FontAwesomeIcon icon={faCcStripe} /></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="endBorder py-3 mt-5">
                    <span className="copyrightInfo">Copyright © 2021 M Soft. All Rights Reserved.</span>
                    <span className="legal">
                        <Link className="legalInfo" to="/noMatch">Refund Policy </Link>
                        <Link className="legalInfo" to="/noMatch">Terms </Link>
                        <Link className="legalInfo" to="/noMatch">Privacy Policy </Link>
                        <Link className="legalInfo" to="/noMatch">FAQs</Link>
                    </span>
                </Container>
            </Container>
        </Fragment>
    );
};

export default Footer;