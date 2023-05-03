import React from "react";
import "../views/QuienesSomos.css";

const QuienesSomos = () => {
  return (
    <div>
      <section className="portadaQuienes"></section>
      <article className="quienes py-5">
        <div className="container text-center">
          <h2>Quienes Somos</h2>
          <hr />
        </div>
        <div className="container moov">
          <p className="texto">
            En Ophicus trabajamos cada día para brindar un servicio de
            excelencia.
            <br />
            <br />
            Somos una empresa tucumana con la pasión, el compromiso, la ética y
            profesionalismo de trabajo por lo que hacemos, son nuestros pilares.
            Estar siempre a la vanguardia en tecnología aplicada a la logística
            y el vínculo cercano que tenemos con nuestros clientes y nuestro
            equipo es lo que nos permite tener el liderazgo en el sector.
            <br />
            <br />
            La calidad es nuestra meta, y para nosotros esto significa ofrecer
            más y mejores soluciones a nuestros clientes y proveedores. Estamos
            convencidos que el camino para lograr este objetivo es la inversión
            constante en innovación, tecnología y gestión. Esto nos permite
            garantizar condiciones de almacenamiento y transporte por sobre los
            estándares exigidos, y un manejo confiable de trazabilidad de
            medicamentos que así lo requieren.
          </p>
        </div>
      </article>
    </div>
  );
};

export default QuienesSomos;
