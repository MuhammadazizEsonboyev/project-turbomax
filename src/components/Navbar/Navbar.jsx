import React from 'react'
import "./navbar.css"
import { Col, Container, Row } from 'react-bootstrap'
const icon = require('./img/logo.png')
const icon2 = require("./img/translate.png")
const icon3 = require("./img/profile.png")

export default function Navbar() {
    return (
        <>
            <Container>
                <Row className='mt-4 justify-content-between'>
                    <Col xs={4}>
                        <div className="nav_left">
                            <div className="logo-image">
                                <img className='first_logo' src={icon} alt="" />
                            </div>
                            <div className="left-info-text">
                                <h5 className='num'>+7 (495) 677-17-79
                                </h5>
                                <p className='every'>Ежедневно с 10:00 до 20:00 </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className='icons mt-3'>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-apple"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                    </Col>
                    <Col xs={5}>
                        <div className="right_div">
                            <div className="flag_div">
                                <img src={icon2} className="flag" alt="" />
                            </div>
                            <div className="flex_icons">
                                <div className="image_div">
                                    <img src={icon3} className="personal" alt="" />
                                </div>
                                <p className="text-icon mt-3">Личный кабинет</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="buttons_header">
                <Container>
                    <Row className='justify-content-center mt-3'>
                        <div className="flex-box-bg">
                            <Col xs={3}>
                                <div className="box">
                                    <p className='btn-text'>О нашей компании</p>
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className="box">
                                    <p className='btn-text'>О нашей компании</p>
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className="box">
                                    <p className='btn-text'>О нашей компании</p>
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className="box">
                                    <p className='btn-text'>О нашей компании</p>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}
