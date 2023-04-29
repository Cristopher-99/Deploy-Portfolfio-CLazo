import React from "react";
import { Card, ListGroup, Row, Container, Col } from "react-bootstrap";
const Contact = () => {
  return (
    <div>
      <section className=" card bg-light py-5 m-3  about " id="about-me">
        <Container>
          <h1 className="text-primary mb-5">CONTACTO</h1>
          <div class="row row-cols-2 row-cols-sm-4 g-3 ">
            <Col>
              <a
                href="https://www.linkedin.com/in/cristopher-alexander-lazo-60a4b218a/"
                style={{ textDecoration: "none" }}
              >
                <i class="bi bi-linkedin m-3 text-primary display-1"></i>
                <h5 className="text-white">Linkedin</h5>
              </a>
            </Col>
            <Col>
              <a
                href="https://github.com/Cristopher-99"
                style={{ textDecoration: "none" }}
              >
                <i class="bi bi-github text-white m-3 display-1"></i>
                <h5 className="text-white">Git Hub</h5>
              </a>
            </Col>
            <Col>
              <a
                href="mailto:cristopherlazo1999@gmail.com"
                style={{ textDecoration: "none" }}
              >
                <i class="bi bi-envelope-at text-danger m-3 display-1"></i>
                <h2 className="text-white">cristopherlazo1999@gmail.com</h2>
              </a>
            </Col>
            <Col>
              <a
                href="https://wa.me/+5491128154333"
                style={{ textDecoration: "none" }}
              >
                <i class="bi bi-whatsapp text-success m-3 display-1"></i>
                <h5 className="text-white">Enviame un mensaje en whatsapp</h5>
              </a>
            </Col>
          </div>
          <Row className="text-center my-auto mt-3">
            <p className="display-5">
              Si tienes alguna pregunta o simplemente quieres charlar, ¡no dudes
              en ponerte en contacto conmigo!
            </p>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
