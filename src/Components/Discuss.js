import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Discuss.css'

function Discuss() {
    return (
        <Container fluid className='previous'>
            <section>
                <Row>
                    <Col md={6}>
                        <h3 className='contact-head'>let's discuss making your interior like a dream place!</h3>
                    </Col>

                    <Col md={6}>
                        <div className='contact-sec-col'>
                            <p className='contact-word'>Contact us below to work together to build your amazing interior</p>
                            <div className='contact-btn-container'>
                                <a href='#' className='contact-btn mt-3'>Contact Us</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
    )
}

export default Discuss