import React from "react";
import "./Problematica.css";

const Problematica = () => {
    return (
        <section id="problematica" className="problematica-div">
            <div className="section_problem">
                <div className="title_section">
                    <h2 className="title">¿QUÉ QUEREMOS RESOLVER?</h2>
                </div>
                <div className="content_section">
                    <div className="info2">
                        <div className="icon_info">
                            <img src="./" className="img_info"/>
                        </div>
                        <div className="text_controll">
                            <h3 className="title_info">FALTA DE SINERGIA</h3>
                        </div>
                        
                        <p className="text">En la actualidad, podemos encontrar dos problemas principales
                                en la realización de los TFG. Por un lado, los estudiantes no encuentran un tutor
                                adecuado por culpa de la restricción de los temas a la hora de elegir. Y por otro,
                                el abandono de algunos profesores a la hora de tutorizar a los estudiantes.
                            </p>
                    </div>
                    <div className="info2">
                        <div className="icon_info">
                            <img src='' className="img_info"/>
                        </div>
                        <div className="text_controll">
                            <h3 className="title_info">LENTITUD DEL PROCESO DE UNIÓN PROFE ALUMNO</h3>
                        </div>
                        <p className="text">Actualmente, los estudiantes tardan en comenzar su TFG
                            entre 3-6 meses(desde el inicio del curso). Esto se debe a que los estudiantes 
                            deben esperar a que el profesor elija un tema de su interés y que el profesor
                            acepte ser tutor de dicho estudiante.
                            </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Problematica; 
