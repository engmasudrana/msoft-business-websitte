import React, {useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import ServicesDetail from "../ServicesDetail/ServicesDetail";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://salty-refuge-88167.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <Container style={{marginTop: '90px'}} className="text-center">
                <h6 className="text-success">Our Services</h6>
                <h3 className="mb-5">What We Offer</h3>
                <Row>
                    {
                        services.map(service  => <ServicesDetail service={service} key={service._id}> </ServicesDetail>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Services;