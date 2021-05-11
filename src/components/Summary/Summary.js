import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faHandshake, faUserLock, faLock, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import './Summary.css';

const Data = [
    {
        icon: faHandshake,
        number: 300,
        title: 'Cybersecurity Projects',
    },
    {
        icon: faUserLock,
        number: 200,
        title: 'Clients Protection',
    },
    {
        icon: faLock,
        number: 400,
        title: 'Service Guarantee',
    },
    {
        icon: faUsers,
        number: 300,
        title: 'Team Experts',
    }
]
const Summary = () => {
    return (
        <>
            <Container style={{marginTop: '90px'}} className="text-center">
                <Row className="">
                    {
                        Data.map(data =>
                            <Col lg={3} md={6} sm={12} className="p-5 border-left">
                                <FontAwesomeIcon className="summary-icon" icon={data.icon} />
                                <h4 className="countNumber">
                                    <CountUp start={0} end={data.number}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h4>
                                <h3 className="countTitle">{data.title}</h3>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </>
    );
};

export default Summary;