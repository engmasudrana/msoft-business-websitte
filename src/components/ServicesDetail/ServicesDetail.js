import React from 'react';
import {Button, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import './ServicesDetail.css';

const ServicesDetail = (props) => {
    const { name, price, description, icon, _id} = props.service;
    return (
        <>
            <Col lg={4} md={6} sm={12}>
                <div className="service-card p-4">
                    <img className="service-icon" src={icon} alt=""/>
                    <h4 className="mt-2 service-title">{name}</h4>
                    <h4 className="text-secondary">${price}</h4>
                    <p className="text-des">{description}</p>
                    <Link to={"/book/" + _id} ><Button variant="outline-secondary btn-sm">Get Service</Button></Link>
                </div>
            </Col>
        </>
    );
};

export default ServicesDetail;