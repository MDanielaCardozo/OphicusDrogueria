import React from 'react';
import "../views/Contacto.css";
import { Col, Form, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import MapaGoogle from './MapaGoogle';

const Contacto = () => {
    return (
        <div className='contacto'>
            <section className='portadaContacto'></section>
            <section className='container text-center mb-5'>
                <h2>Contacto</h2>
                <hr />
            </section>
            <section className='container mt-5'>
                <Row>
                    <Col lg={6} md={6} sm={12} className='my-4'>
                    <div className='d-flex'>
                        <FontAwesomeIcon icon={faLocationDot} className='iconoContacto mx-4'/>
                        <p>Ayacucho 830, San Miguel de Tucumán(4000). Argentina.</p>
                    </div>
                    <div className='d-flex'>
                        <FontAwesomeIcon icon={faEnvelope} className='iconoContacto mx-4'/>
                        <p>drogueriaophicus@hotmail.com</p>
                    </div>
                    <div className='d-flex'>
                        <FontAwesomeIcon icon={faPhone} className='iconoContacto mx-4'/>
                        <p>381-842079</p>
                    </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className='contactoBox'>
                            <Form.Group className='my-4'>
                                <Form.Label>Nombre Completo*</Form.Label>
                                <Form.Control type='text' placeholder='Nombre Apellido'/>
                                <Form.Label className='my-2'>Email*</Form.Label>
                                <Form.Control type='text' placeholder='Ej: pilargarcia@gmail.com'/>
                                <Form.Label className='my-2'>Mensaje*</Form.Label>
                                <Form.Control as='textarea' rows={4}/>
                                <Button variant='outline-light' className='my-3 ms-1'>Enviar</Button>
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className='container py-5'>
                <div className='text-center mb-5'>
                <h2>Ubicación</h2>
                <hr />
                </div>
                <MapaGoogle></MapaGoogle>
            </section>
        </div>
    );
};

export default Contacto;