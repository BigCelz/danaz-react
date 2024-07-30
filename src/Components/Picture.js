import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img6 from './images/img6.png';
import img5 from './images/img5.png';
import img2 from './images/img2.png';
import img4 from './images/img4.png';
import img3 from './images/img3.png';
import './Picture.css'

function Picture() {
  return (
    <Container>
      <Row className='picture-row-one'>
        <Col md={6}>
          <Image src={img5} fluid className='img-flu' />
        </Col>

        <Col md={6} className='pics-second-col'>
          <Image src={img6} fluid />
        </Col>
      </Row>

      <Row className='picture-row-two'>
        <Col md = {12}>
          <Image src={img2} fluid />
        </Col>
      </Row>

      <Row className='picture-row-three'>
        <Col md={6}>
          <Image src={img3} fluid />
        </Col>

        <Col md={6}  className='pics-second-col-two'>
          <Image src={img4} fluid />
        </Col>
      </Row>
    </Container>
  )
}

export default Picture