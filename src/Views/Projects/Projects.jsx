import React from "react";
import ScrollToTopButton from "../../Components/Scroll/Scroll";

import homepoke from "../../imgs/img projects/pokemon/homepoke.png";
import detailpoke from "../../imgs/img projects/pokemon/detailpoke.png";
import createpoke from "../../imgs/img projects/pokemon/createpoke.png";
import homecountry from "../../imgs/img projects/countries/home countri.png";
import detailcountry from "../../imgs/img projects/countries/detail country.png";
import createcountry from "../../imgs/img projects/countries/countries create.png";
import listActivity from "../../imgs/img projects/countries/lista actividades countries.png";
import homeeco from "../../imgs/img projects/ecommerce/home eco.png";
import productoseco from "../../imgs/img projects/ecommerce/productos eco.png";
import detaileco from "../../imgs/img projects/ecommerce/detail product.png";
import abouteco from "../../imgs/img projects/ecommerce/about eco.png";
import pasarella from "../../imgs/img projects/ecommerce/pasarella de pago.png";
import Contact from "../Contact/Contact";
import "./Projects.css";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
const Projects = () => {
  return (
    <>
      <div class="container pt-3">
        <section>
          <h1 className="display-3 title">Proyectos</h1>

          {/*  ---------------------- POKEMON ---------------------------- */}

          <div class="card  mt-3">
            <h1 class="titulo">Pokemon App</h1>
            <div
              id="carouselDark"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-bs-target="#carouselDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                ></li>
                <li
                  data-bs-target="#carouselDark"
                  data-bs-slide-to="1"
                  class=""
                ></li>
                <li data-bs-target="#carouselDark" data-bs-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active bg-primary ">
                  <img src={homepoke} class="d-block w-100" alt="Slide 1" />
                  <div class="carousel-caption d-none d-sm-block">
                    <h3 class="pestaña">Home</h3>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src={detailpoke}
                    class="d-block w-100 h-100"
                    alt="Slide 2"
                  />
                  <div class="carousel-caption d-none d-sm-block">
                    <h3 class="pestaña">Detalle/Stats del Pokemon</h3>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src={createpoke}
                    class="d-block w-100 h-100"
                    alt="Slide 3"
                  />
                  <div class="carousel-caption d-none d-sm-block">
                    <h3 class="pestaña">Creacion de un Pokemon</h3>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev button-des "
                href="#carouselDark"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon bg-dark rounded-circle"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden ">Previous</span>
              </a>
              <a
                class="carousel-control-next button-des"
                href="#carouselDark"
                role="button"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon bg-dark rounded-circle"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
            <div class="card-body">
              <h3 class="card-title">RESTful API - PokeApi</h3>
              <p class="card-text">
                Poke app es un Single page Aplication Full Stack, la cual nos
                permite buscar, filtrar y crear nuevos Pokemons. Los pokemons de
                esta app esta traidos de la Api PokeApi, Tambien tiene su
                seccion de Stats de cada Pokemon.
              </p>
              <p className="card-text">
                Tecnologias usadas :
                <b> React.js, Redux, PostgreSql, Sequelize y Express.</b>
              </p>
              <div class="datos card-text p-1 h3">
                <Row xs={1} md={3} className="p-3">
                  <Col>
                    <a
                      href="https://github.com/Cristopher-99/PI-POKEMON-CL"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                    >
                      <i class="bi bi-github text-black"></i>Repositorio
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="https://clazo-pokemon.netlify.app/"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                    >
                      <i class="bi bi-globe2 text-success"></i>Visitar sitio
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="https://www.youtube.com/watch?v=y5DRZvSYKfg&t=48s&ab_channel=CristopherLazo"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                    >
                      <i class="bi bi-youtube text-danger"></i>Video
                      Presentacion {""}
                    </a>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </section>

        {/*  ---------------------- COUNTRIES ---------------------------- */}
        <div class="card mt-3">
          <h1 class="titulo">SPA Countries Api</h1>
          <div
            id="CountryApp"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-bs-target="#CountryApp"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
              ></li>
              <li data-bs-target="#CountryApp" data-bs-slide-to="1"></li>
              <li data-bs-target="#CountryApp" data-bs-slide-to="2"></li>
              <li data-bs-target="#CountryApp" data-bs-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={homecountry}
                  class="d-block w-100 h-100 imagen "
                  alt="Slide 1"
                />
                <div class="carousel-caption d-none d-sm-block">
                  <h3 class="pestaña">Home</h3>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={detailcountry}
                  class="d-block w-100 h-100"
                  alt="Slide 2"
                />
                <div class="carousel-caption d-none d-sm-block">
                  <h3 class="pestaña">Detalle de cada Pais</h3>
                </div>
              </div>
              <div class="carousel-item">
                <img src={createcountry} class="d-block w-100" alt="Slide 3" />
                <div class="carousel-caption d-none d-sm-block">
                  <h3 class="pestaña">
                    Creacion de Actividad en varios paises
                  </h3>
                </div>
              </div>
              <div class="carousel-item">
                <img src={listActivity} class="d-block w-100" alt="Slide 4" />
                <div class="carousel-caption d-none d-sm-block">
                  <h3 class="pestaña">Lista de Actividades creadas</h3>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev button-des "
              href="#CountryApp"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon bg-dark rounded-circle"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden ">Previous</span>
            </a>
            <a
              class="carousel-control-next button-des"
              href="#CountryApp"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon bg-dark rounded-circle"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
          <div class="card-body">
            <h3 class="card-title">RESTful API - REST COUNTRIES</h3>
            <p class="card-text">
              Countries app tambien un Single page Aplication Full Stack, la
              cual nos permite buscar, filtrar y crear actividades en los Paises
              de la api REST COUNTRIES.
            </p>
            <p className="card-text">
              Tecnologias usadas:{" "}
              <b>React.js, Redux, PostgreSql, Sequelize y Express. </b>
            </p>
            <div class="datos card-text p-1 h3">
              <a
                href="https://github.com/Cristopher-99/PI-Countries-CL"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <i class="bi bi-github text-black"></i>Repositorio {""}
              </a>
            </div>
          </div>
        </div>
        {/*  ---------------------- ECOMERCCE ---------------------------- */}

        <div class="card mt-3 mb-2">
          <h1 class="titulo">H-Buy App Ecommerce </h1>

          <div
            id="carouselEcommerce"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-bs-target="#carouselEcommerce"
                data-bs-slide-to="0"
                class=""
              ></li>
              <li
                data-bs-target="#carouselEcommerce"
                data-bs-slide-to="1"
                class=""
              ></li>
              <li
                data-bs-target="#carouselEcommerce"
                data-bs-slide-to="2"
                class="active"
                aria-current="true"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={homeeco}
                  class="d-block w-100 h-100 imagen"
                  alt="Slide 1"
                />
                <div class="carousel-caption d-none d-sm-block">
                  <h3 class="pestaña">Home Ecommerce</h3>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={detaileco}
                  class="d-block w-100 h-100"
                  alt="Slide 2"
                />
                <div class="carousel-caption d-none d-sm-block">
                  <h3 class="pestaña">Detalle de cada Producto</h3>
                </div>
              </div>
              <div class="carousel-item">
                <img src={productoseco} class="d-block w-100" alt="Slide 3" />
                <div class="carousel-caption d-none d-sm-block">
                  <h3 class="pestaña">Pagina de Productos</h3>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev button-des "
              href="#carouselEcommerce"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon bg-dark rounded-circle"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden ">Previous</span>
            </a>
            <a
              class="carousel-control-next button-des"
              href="#carouselEcommerce"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon bg-dark rounded-circle"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
          <div class="card-body">
            <h3 class="card-title">Ecommerce - Tematica mercado libre</h3>
            <p class="card-text">
              H-buy es un proyecto desarollado en forma grupal con la
              metodologia de trabajo "Scrum". La cual tiene como objetivo
              otorgar a los usuarios de esta pagina 2 roles, uno como vendedor y
              otro como comprador para poder tener alguno de estos roles tendran
              que loguearse con anterioridad. Para el propietario del Ecommerce
              se le otorga la funcionalidad de poder administrar todos los
              productos publicados y crear Categorias para productos.
            </p>
            <p class="card-text">
              Tecnologias usadas:{" "}
              <b>
                MondoDB, Redux Toolkit, React.js, NodeJS, JavaScript, Bootstrap,
                Material UI.{" "}
              </b>
            </p>
            <div class="datos card-text p-1 h3">
              <Row xs={1} md={3} className="p-3">
                <Col>
                  <a
                    href="https://github.com/Cristopher-99/PF-H-Buy"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <i class="bi bi-github text-black"></i>Repositorio
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://main.d2d0y3pf0pfssa.amplifyapp.com/"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <i class="bi bi-globe2 text-success"></i>Visitar sitio
                  </a>
                </Col>
                <Col>
                  <a
                    href="https://www.youtube.com/watch?v=SWiEAfj-TNY&ab_channel=HenryBuy"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <i class="bi bi-youtube text-danger"></i>Video Presentacion
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <ScrollToTopButton />
    </>
  );
};

export default Projects;
