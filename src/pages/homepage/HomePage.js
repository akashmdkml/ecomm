import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import './default.css';
import './Homepage.scss';

import HeroSlider from '../../components/HeroSlider';
import Responsive from '../../components/carousel';
import ProductBlock from '../../components/peoductBlock';

class HomePage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="landingPage main">
                <Container fluid className='header-offer'>
                    <Container>
                        <div className="offer-copy">
                            Free delivary on order above 300
                    </div>
                    </Container>
                </Container>
                <Container className="desktop-header">
                    <Row>
                        <Col sm={4}>
                            <div className='search-bar'>
                                Search...
                        </div>
                        </Col>
                        <Col sm={4} className="logo-section">
                            <div>
                                <h1>ECOMM</h1>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="accouts-section">
                                Accounts
                        </div></Col>
                    </Row>
                </Container>
                <HeroSlider ></HeroSlider>
                <ProductBlock></ProductBlock>
                <Responsive></Responsive>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(HomePage);
