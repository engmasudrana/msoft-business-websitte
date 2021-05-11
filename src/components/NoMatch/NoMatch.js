import React from 'react';
import {Col, Row, Container} from "react-bootstrap";

const NoMatch = () => {
    return (
        <>
            <Container className="text-center text-danger" style={{marginTop: '10rem'}}>
                <Row>
                    <Col>
                        <h1>404</h1>
                        <h1>Page Not Found!</h1>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default NoMatch;