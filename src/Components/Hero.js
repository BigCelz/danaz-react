import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Hero.css";
import Image from "react-bootstrap/Image";
import img1 from './images/img1.png';

function Hero() {
  return (
    <section id="hero">
      <Container>
        <Row>
          <Col md={12}>
            <div className="hero-content text-center">
              <h2 className="hero-head">Minimalist Room</h2>
              <p className="hero-word ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </Col>

          <Col md={12}>
            <div className="text-center mt-4">
              <Image src={img1} fluid />;
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6}>
            <div className="project">
              <h4 className="project-head">Project Overview</h4>

              <p className="project-word">
                Online learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere. Online
                learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere. Online
                learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere.
              </p>

              <div className="d-flex">
                <p className="project-word">July 22 - 2022</p>
                <p className="project-word interior">Interior Design - Furniture</p>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="project">
              <h4 className="project-head">Design Process</h4>

              <p className="project-word">
                Online learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere. Online
                learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere.
              </p>

              <p className="project-word mt-4">
                Online learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere. Online
                learning with us does not interfere with your daily life.
                because learning can be done anytime and anywhere.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
