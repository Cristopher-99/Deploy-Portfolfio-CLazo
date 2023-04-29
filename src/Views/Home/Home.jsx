import React from "react";
import foto from "../../imgs/img perfil/foto.jpg";
import about from "../../imgs/about.jpeg";
import cv from "../../imgs/CV/CV_Cristopher_Lazo.pdf";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { mascotas, juegos } from "./fotos";
import Contact from "../Contact/Contact";
import ScrollToTopButton from "../../Components/Scroll/Scroll";
import "./Home.css";
const Home = () => {
  return (
    <div className="fondo ">
      <ScrollToTopButton />

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
                  <Col className="text-center p-3">
                    <Button variant="primary" href="#about-me ">
                      Conóceme más<i class="bi bi-file-earmark-person h3"></i>
                    </Button>
                  </Col>
                  <Col className="text-center p-3">
                    <Button variant="danger" href="#hobbies ">
                      Intereses y Hobbies <i class="bi bi-controller"></i>
                    </Button>
                  </Col>
                  <Col className="text-center  p-3">
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
      <section className="bg-light py-5 m-3 hobbies  " id="hobbies">
        <Container>
          <h2 className="text-primary mb-4">Intereses y hobbies</h2>
          <div class="row row-cols-1 row-cols-sm-2 g-3 ">
            <Col>
              <h2 className="text-white bg-success rounded-3 m-3">Juegos</h2>
              <Row className="text-center">
                <div class="row row-cols-1 row-cols-sm-3 g-3 ">
                  {juegos.map((juegos) => (
                    <div className="col">
                      <img
                        src={juegos.foto}
                        alt="scrum"
                        className="img-fluid rounded-circle"
                        style={{ maxHeight: "100px" }}
                      />
                    </div>
                  ))}
                </div>
              </Row>
              <Row className="text-center my-auto mt-4">
                <p className="lead">
                  Soy un apasionado de los videojuegos y disfruto mucho jugando
                  en mi tiempo libre. Aunque debo admitir que no soy el mejor
                  jugador del mundo, me gusta explorar diferentes géneros y
                  descubrir nuevas historias y mundos virtuales. Me divierto
                  jugando juegos como Rust, League of Legends (LoL) y Valorant,
                  aunque a veces me lleve un poco de tiempo dominarlos.
                </p>
              </Row>
            </Col>
            <Col>
              <h2 className="text-white bg-success rounded-3 m-3">Mascotas</h2>
              <Row className="text-center">
                <div class="row row-cols-1 row-cols-sm-2 g-3 ">
                  {mascotas.map((m) => (
                    <div className="col">
                      <img
                        src={m.foto}
                        alt="scrum"
                        className="img-fluid rounded-circle"
                        style={{ maxHeight: "200px" }}
                      />
                      <h3>{m.nombre}</h3>
                    </div>
                  ))}
                </div>
              </Row>
              <Col className="text-center my-auto">
                <p className="lead">
                  Una de mis actividades favoritas es pasear a mis dos perros,
                  Chiki y Pancha. Ambas son hembras y han sido mis compañeras de
                  vida durante los últimos años. Chiki es una perrita pequeña y
                  cariñosa, mientras que Pancha es más grande y energética.
                  Salir a caminar con ellas me da la oportunidad de desconectar
                  de todo lo demás y disfrutar de su compañía. Me encanta verlas
                  correr, jugar y explorar su entorno.
                </p>
              </Col>
            </Col>
          </div>
        </Container>
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
