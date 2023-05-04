import React from "react";
import "../views/Home.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesPacking, faTruckFast, faTruckRampBox } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <main>
      <section className="portada text-light">
        {/* <h1 className=''>Ophicus</h1> */}
      </section>
      <section className="servicios py-5">
        <div className="container text-center">
          <h2 className="my-4">Nuestros Servicios</h2>
          <hr />
          <Row className="w-100 mt-5">
            <Col sm={12} md={4} lg={4} >
              <div className="cardInfo w-100 p-2">
                <div className="icono">
                  <FontAwesomeIcon icon={faBoxesPacking} className="icon"/>
                </div>
                <h3>Trazabilidad</h3>
                <p className="m-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Soluta, id! Voluptates minus.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
            <div className="cardInfo w-100 p-2">
                <div className="icono">
                  <FontAwesomeIcon icon={faTruckFast} className="icon"/>
                </div>
                <h3>Logística</h3>
                <p className="m-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Soluta, id! Voluptates minus.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
            <div className="cardInfo w-100 p-2">
                <div className="icono">
                  <FontAwesomeIcon icon={faTruckRampBox} className="icon"/>
                </div>
                <h3>Proveedores</h3>
                <p className="m-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Soluta, id! Voluptates minus.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Home;
