import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
import Form from 'react-bootstrap/Form';

function Footer() {
    return (
        <section id='footer'>
            <Container fluid>
                <Row>
                    <Col md={6}>
                        <div className='footer-content'>
                            <h4 className='footer-head'>Dananz</h4>
                            <h3 className='footer-word'>One of the best furniture agency.</h3>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className='second-foot-col'>
                            <Form>
                                <Form.Group className="py-4" controlId="formGroupEmail">
                                    <Form.Label className='form-label'>Enter  your email to get the laterst news</Form.Label>
                                    <Form.Control className='form-control' type="email" placeholder="Email Address" />
                                </Form.Group>
                            </Form>
                        </div>

                        {/* adding icons */}
                        <div className='iconss mt-3'>
                            <p className='follow'>Follow us On</p>
                            <div className='footer-icons'>
                               <i className="fa-brands fa-facebook icon-background"></i>
                               <i className="fa-brands fa-instagram icon-background"></i>
                               <i className="fa-brands fa-tiktok icon-background"></i>
                               <i className="fa-brands fa-youtube icon-background"></i>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer