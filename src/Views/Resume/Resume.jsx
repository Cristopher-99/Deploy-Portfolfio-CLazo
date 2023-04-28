import React, { useState } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import "./Resume.css";
import hogar from "../../imgs/education/hogar.jpg";
import ub from "../../imgs/education/ub.jpg";
import henry from "../../imgs/education/henry.png";
import csharp from "../../imgs/lenguajes/csharp.png";
import python from "../../imgs/lenguajes/pyton.png";
import js from "../../imgs/lenguajes/js.png";
import java from "../../imgs/lenguajes/java.png";
import { tecnologias, herramientas } from "./resume.js";
import scrum from "../../imgs/metodologias/scrum.jpg";
import gitflow from "../../imgs/metodologias/git flow.jpg";

const Resume = () => {
  const [key, setKey] = useState("home");
  const escuelas = [
    {
      titulo: "Full Stack Web Developer ",
      institucion: "Henry",
      imagen: henry,
      duracion: "+800 horas de cursado teórico-práctico ",
    },
    {
      titulo: "Licenciatura en Sistemas ",
      institucion: "(En curso 2do año y medio) Universidad de Belgrano",
      imagen: ub,
      duracion: "2021 - Actualidad",
    },
    {
      titulo: "Tecnico en computacion e Informatica",
      institucion: "Hogar naval Stella Maris ET 37 D 11",
      imagen: hogar,
      duracion: "2013 - 2019",
    },
  ];
  const experienciaAcademica = [
    {
      cargo: "Front-End Developer | H-buy Ecommerce",
      empresa: "Henry",
      tareas: [
        "Diseño de las Card/Cards en Bootstrap",
        "Detalle del Producto: con su información principal, Descripción, Características y Sección de Reviews del producto",
        "Loaders en toda la App",
        "Formato de fechas de publicaciones de los productos con Moment.js",
        "Sistema de Reviews y puntuación de los productos : Con un formulario controlado para la creación de una review y restricciones de usuarios.",
      ],

      duracion: "Febrero 2023 - Mar 2023 - 1 mes",
    },
    {
      cargo: "Full Stack Development | POKEMON RESTful API",
      empresa: "Henry",
      tareas: [
        "Filtros (Por Tipo de pokemon y por pokemon creado de la DB o Api",
        "Ordenamiento (Albafetico y por Ataque)",
        "Formulario controlado para la creación de pokemons",
        "Búsqueda exacta por nombre de pokemon",
        "Carta de detalle con las estadisticas (stats) de cada pokemon",
      ],
      duracion: "Enero 2023 - Feb 2023 · 1 mes",
    },
  ];
  const lenguajes = [
    {
      imagen: js,
      titulo: "Java Script",
    },
    {
      imagen: csharp,
      titulo: "C Sharp",
    },
    {
      imagen: python,
      titulo: "Python",
    },
    {
      imagen: java,
      titulo: "Java",
    },
  ];

  return (
    <div className="pestañasContainer m-2">
      <div className="my-auto">
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            className="p-4 mb-1 rounded-5 w-100 "
          >
            <h1 className="display-3 ">Resume</h1>
          </Dropdown.Toggle>
          <Dropdown.Menu className="text-center w-100 bg-dark menu">
            <Dropdown.Item href="#education" className="text-white">
              Educacion
            </Dropdown.Item>
            <Dropdown.Item href="#experience" className="text-white ">
              Experiencia{" "}
            </Dropdown.Item>
            <Dropdown.Item href="#languages" className="text-white">
              Lenguajes de Programacion
            </Dropdown.Item>
            <Dropdown.Item href="#tech" className="text-white">
              Tecnologias
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/*----------------------- Educacion --------------------------*/}
      <section className="bg-light p-3 seccion">
        <Row id="education">
          <Col>
            <Row>
              <Col className="text-center my-auto">
                <h1 className="title">Educacion</h1>
                <div class="row row-cols-1 row-cols-sm-1 g-3 ">
                  {escuelas.map((e) => (
                    <div class="card mb-3 col">
                      <div class="row g-0">
                        <div class="col-5 col-sm-4">
                          <img
                            src={e.imagen}
                            class="img-fluid w-100 image "
                            alt="card-horizontal-image"
                          />
                        </div>
                        <div class="col-7 col-sm-8 centrado">
                          <div class="card-body">
                            <h2 class="card-title">{e.titulo}</h2>
                            <p class="card-text">{e.institucion}</p>
                            <p class="card-text text-primary h5">
                              {e.duracion}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      {/*----------------------- Experiencia Laboral --------------------------*/}
      <section className="bg-light p-3 m-3 seccion">
        <Row>
          <Col id="experience" className="">
            <Col className="text-center my-auto">
              <Row>
                <h1 className="title">Experiencia Laboral</h1>
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-5 col-sm-4">
                      <img
                        src={henry}
                        class="img-fluid w-100 image "
                        alt="card-horizontal-image"
                      />
                    </div>
                    <div class="col-7 col-sm-8">
                      <div class="card-body">
                        <h4 class="card-title">
                          Data Entry / Desarollador Junior
                        </h4>
                        <p class="card-text">
                          Agencia de Proteccion Ambiental APRA
                        </p>
                      </div>
                    </div>
                    <div class="row g-0 border">
                      <p class="card-text">
                        <h5 className="card-title">Tareas Realizadas</h5>
                        <ul>
                          <li>
                            Cargar, eliminar y modificar información de internos
                            registrados en el sistema de APRA.
                          </li>
                          <li>
                            Modificaciones de código en páginas web del gobierno
                            mediante HTML y corrección de estilos con CSS puro.
                          </li>
                          <li>
                            Modificar y arreglar Anexos CUR (Cuadro de
                            Asimilación)s
                          </li>
                          <li>Testear páginas web de Mascotas Perdidas.</li>
                          <li>
                            Lograr mantener la Base de datos de APRA actualizada
                            con respecto a el personal que se encontraba
                            trabajando en la empresa y el que ya no se
                            encontraba trabajando actualmente
                          </li>
                        </ul>
                      </p>

                      <p class="card-text text-primary h5 m-2">
                        Agosto 2019 - Diciembre 2019 - 5 meses
                      </p>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </Col>
          <Col>
            <h1 className="title">Experiencia Academica</h1>
            <div>
              {experienciaAcademica.map((ex) => (
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-5 col-sm-4">
                      <img
                        src={henry}
                        class="img-fluid w-100 image "
                        alt="card-horizontal-image"
                      />
                    </div>
                    <div class="col-7 col-sm-8">
                      <div class="card-body">
                        <h4 class="card-title">{ex.cargo}</h4>
                        <p class="card-text">{ex.empresa}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0 border m-2">
                    <h5>Tareas Realizadas</h5>
                    {ex.tareas.map((t) => (
                      <li>{t}</li>
                    ))}
                    <p class="card-text text-primary h5 m-2">
                      <span className="text-primary">{ex.duracion}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </section>
      {/* LENGUAJESS      */}
      <section className="bg-light py-5 m-3  " id="languages">
        <Container>
          <h2 className="text-primary mb-4">Lenguajes de Programacion</h2>
          <div class="row row-cols-2 row-cols-sm-4 g-3 ">
            {lenguajes.map((l) => (
              <div className="col ">
                <div class="card ">
                  <img
                    src={l.imagen}
                    class="card-img-top"
                    alt="card-group-image"
                  />
                  <div class="card-body bg-primary text-white p-1">
                    <h5 class="card-title ">{l.titulo}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-light py-5 m-3  " id="tech">
        <Container>
          <h2 className="text-primary mb-4">Tecnologias</h2>
          <div class="row row-cols-1 row-cols-sm-3 g-2 ">
            {tecnologias.map((l) => (
              <div className="col ">
                <div class="card rounded-3">
                  <img
                    src={l.imagen}
                    class="card-img-top imagentech p-4"
                    alt="card-group-image"
                  />
                  <div class="card-body  carta mt-3 p-1">
                    <h5 class="card-title bg-dark text-white rounded-3 p-1">
                      {l.titulo}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light py-5 m-3  " id="herramientas">
        <Container>
          <h2 className="text-primary mb-4">Herramientas de Trabajo</h2>
          <div class="row row-cols-2 row-cols-sm-4 g-3 ">
            {herramientas.map((l) => (
              <div>
                <Col>
                  <Row>
                    <h1>{l.titulo}</h1>
                  </Row>
                  <Row>
                    <img
                      src={l.imagen}
                      alt="Profile"
                      className="img-fluid rounded-circle"
                      style={{ height: "150px" }}
                    />
                  </Row>
                </Col>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-light py-5 m-3  " id="metodologias">
        <Container>
          <h2 className="text-primary mb-4">Metodologias de Trabajo</h2>
          <div class="row row-cols-1 row-cols-sm-2 g-3 ">
            <Col>
              <Row className="text-center">
                <img
                  src={scrum}
                  alt="scrum"
                  className="img-fluid rounded-circle"
                  style={{ maxHeight: "300px" }}
                />
              </Row>
              <Col className="text-center my-auto">
                <h2 className="text-primary ">Scrum</h2>
                <p className="lead">
                  Utilicé esta metodologia para desarollar un ecommerce (llamado
                  H-buy) de manera grupal. Para llevar a cabo este proyecto
                  tuvimos que trabajar en sprints de una semana y entregar en
                  cada una de estas los avances de la App. Ademas contabamos con
                  encuentros diarios (Dailys)con el equipo de desarollo y el
                  Scrum Master.
                </p>
                <p className="lead">
                  Resultados obtenidos: Como resultado de utilizar la
                  metodología Scrum, pudimos cumplir con los objetivos del
                  proyecto en un plazo de un mes y entregamos un ecommerce
                  completamente funcional y optimizado para los usuarios.
                </p>
              </Col>
            </Col>
            <Col>
              <Row className="text-center ">
                <img
                  src={gitflow}
                  alt="scrum"
                  className="img-fluid rounded-circle"
                  style={{ maxHeight: "300px" }}
                />
              </Row>
              <Col className="text-center my-auto">
                <h2 className="text-primary">Git Flow</h2>
                <p className="lead">
                  Utilicé Git Flow, una metodología de gestión de versiones de
                  código que permite una fácil colaboración en equipo.
                </p>
                <p className="lead">
                  Resultados obtenidos: Como resultado de utilizar Git Flow,
                  pudimos colaborar de manera efectiva en equipo y reducir
                  conflictos en el código fuente. Además, pudimos gestionar de
                  manera eficiente las versiones del software y realizar mejoras
                  continuas en el sitio web.
                </p>
              </Col>
            </Col>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Resume;
