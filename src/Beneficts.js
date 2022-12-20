import React from "react";
import "./Beneficts.css";

const Beneficts = () => {
    return (
        <section id="beneficts" className="beneficts-div">
            <div className="section_benefict">
                <h2 className="title">¿QUÉ BENEFICIOS OBTENDRÁS?</h2>
                <div className="benefictSection">
                    <div className="benefict">
                        <div className="icon"></div>
                        <div className="info">
                            <p className="text">Mejoramos la búsqueda de los temas para poder obtener una mejor complejidad
                                y un mejor resultado provocado por la buena conexión profesor alumno y el
                                agrado de ambos por el tema.</p>
                        </div>
                    </div>
                    <div className="benefict">
                        <div className="info">
                            <p className="text">Reducimos el tiempo de unión profesor alumno para poder empezar a trabajar antes.
                            Con esto queremos conseguir que los plazos de entrega sean menos estrictos y que el alumno afronte el TFG
                            menos estrés.</p>
                        </div>
                        <div className="icon"></div>
                    </div>
                    <div className="benefict">
                        <div className="icon"></div>
                        <div className="info">
                            <p className="text">Incluimos empresas que se puedan interesar en los TFG. Con esto queremos 
                            ofrecer una experiencia laboral (a parte de las prácticas universitarias). Además de poder sacarlo
                            a mercado en caso de que fuese una innovación pudiendo así generar ingresos. </p>
                        </div>
                    </div>
                    <div className="benefict">
                    <div className="info">
                            <p className="text">Establecemos un chat al mas puro estilo WhatsApp, para que la comunicación 
                            entre porfesor, alumno y empresas sea la más rápida posible (respuestas en menos de 24 horas). </p>
                        </div>
                        <div className="icon"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Beneficts; 