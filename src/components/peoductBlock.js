import React, { Component } from 'react';
import requireAuth from './requireAuth';
import { Container, Row, Col } from 'react-bootstrap';

class ProductBlock extends Component {
    render() {
        return <Container className='product-block'>
            <Col>
                <div className="product-card">
            
                </div>
            </Col>
            <Col>
                <div className="product-card">

                </div>
            </Col>
        </Container>
    }
}

export default ProductBlock;
