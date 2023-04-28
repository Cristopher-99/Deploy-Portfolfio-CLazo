import React from "react";
import foto from "../../imgs/img perfil/foto.jpg";
import about from "../../imgs/about.jpeg";
import cv from "../../imgs/CV/CV_Cristopher_Lazo.pdf";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Home.css";
const Home = () => {
  return (
    <div className="fondo ">
      <div className="card mb-4 mx-auto  landing-page ">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <img
                src={foto}
                alt="Profile"
                className="img-fluid rounded-circle"
              />
            </Col>
            <Col md={6} className="text-center">
              <h1 className="display-3">¡Bienvenido a mi portfolio!</h1>

              <p className="lead">
                Soy un desarrollador full-stack y estoy en constante búsqueda de
                nuevos retos y oportunidades para crecer profesionalmente.
              </p>
              <div className="m-3">
                <Row>
                  <Col md={6} className="text-center p-3">
                    <Button variant="primary" href="#about-me ">
                      Conóceme más<i class="bi bi-file-earmark-person h3"></i>
                    </Button>
                  </Col>
                  <Col md={6} className="text-center  p-3">
                    <Button variant="success">
                      <a
                        class="text-white h5 "
                        href={cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        download="CV_Cristopher_Lazo.pdf"
                        style={{ textDecoration: "none" }}
                      >
                        Descargar CV{" "}
                        <i class="bi bi-cloud-arrow-down-fill h3"></i>
                      </a>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="bg-light py-5 m-3  about " id="about-me">
        <Container>
          <Row>
            <Col md={4} className="text-center">
              <img
                src={about}
                alt="Profile"
                className="img-fluid rounded-circle"
              />
            </Col>
            <Col md={7} className="text-center my-auto">
              <h2 className="text-primary">Acerca de mí</h2>
              <p className="lead">
                Hola me llamo <b>Cristopher Alexander Lazo </b>, vivo en Buenos
                aires, Argentina y Soy Tecnico en informatica, Estudiante de la
                Carrera de Lic. en Sistemas y ante todo un Desarollador Full
                Stack orientado mas al Front-end con conocimientos de diversos
                Lenguajes de programacion y Tecnologias . Me apasiona crear
                sitios web de alta calidad que sean hermosos y funcionales. Me
                gusta trabajar en equipo y siempre estoy buscando formas de
                mejorar mi habilidad en programación.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light py-5 m-3 hobbies  " id="about-me">
        <Container>
          <Row>
            <Col md={4} className="text-center">
              <img
                src={about}
                alt="Profile"
                className="img-fluid rounded-circle"
              />
            </Col>
            <Col md={7} className="text-center my-auto">
              <h2 className="text-primary">Acerca de mí</h2>
              <p className="lead">
                Hola me llamo <b>Cristopher Alexander Lazo </b>, vivo en Buenos
                aires, Argentina y Soy Tecnico en informatica, Estudiante de la
                Carrera de Lic. en Sistemas y ante todo un Desarollador Full
                Stack orientado mas al Front-end con conocimientos de diversos
                Lenguajes de programacion y Tecnologias . Me apasiona crear
                sitios web de alta calidad que sean hermosos y funcionales. Me
                gusta trabajar en equipo y siempre estoy buscando formas de
                mejorar mi habilidad en programación.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
