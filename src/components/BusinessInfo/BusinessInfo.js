import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faDatabase, faCertificate } from '@fortawesome/free-solid-svg-icons'
import './BusinessInfo.css';

const infoData = [
    {
        title: 'Security Services',
        description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        icon: faLock,
    },
    {
        title: 'Data Privacy',
        description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        icon: faDatabase,
    },
    {
        title: 'Industry Certified',
        description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        icon: faCertificate,
    }
]
const BusinessInfo = () => {
    return (
        <>
            <Container className="text-center">
              <Row>
                  {
                      infoData.map(info =>
                          <Col lg={4} md={6} sm={12} className="">
                              <div className="business-info-card shadow-sm">
                                  <FontAwesomeIcon className="business-icon" icon={info.icon} />
                                  <h4>{info.title}</h4>
                                  <p className="text-des">{info.description}</p>
                              </div>
                          </Col>
                      )
                  }
              </Row>
            </Container>
        </>
    );
};

export default BusinessInfo;