import React from "react";
import "./PreguntasFrecuentes.css";

const PreguntasFrecuentes = () => {
    return(
        <section id="preguntas-frecuentes" className="preguntas-div">
            <div className="preguntas-section">
                <h2 className="title">PREGUNTAS FRECUENTES</h2>
                <div className="questions-grid">
                    <div className="question">
                        <h5 className="questionTitle">¿PUEDO BUSCAR UN PROFESOR EN CONCRETO?</h5>
                        <p className="questionText">
                            Sí, puedes buscar un profesor en concreto, pero no es necesario. Esto significará
                            que la sinergia entre ambos puede ser buena poque os conocéis de antes o sabes como
                            trabaja y te gustaría trabajar con él. 
                        </p>
                    </div>
                    <div className="question">
                        <h5 className="questionTitle">¿PUEDO BUSCAR VARIOS PROFES ANTES DE DECIDIRME POR UNO?</h5>
                        <p className="questionText">
                            Sí, puedes buscar varios profesores y compararlos entre ellos. Esto te ayudará a
                            decidirte por uno u otro comparando los temas de uno y los temas del otro. Siempre recomendamos
                            que elijas un tema que te guste y que te motive a realizar el TFG, es por esto que deberías 
                            escoger aquel que tenga el tema más parecido al tuyo. 
                        </p>
                    </div>
                    <div className="question">
                        <h5 className="questionTitle">SI UN PROFESOR ME RECHAZA, ¿PUEDO SOLICITAR A OTROS?</h5>
                        <p className="questionText">
                            Sí, puedes solicitar a otros profesores. Esto puede ser debido a que el profesor no tenga
                            tiempo para ti o que no tenga temas que te interesen. En cualquier caso, puedes buscar a otros
                            profesores y solicitarles a ellos.
                        </p>
                    </div>
                    <div className="question">
                        <h5 className="questionTitle">¿COMO ACCEDEN LAS EMPRESAS A NOSOTROS?</h5>
                        <p className="questionText">
                            Las empresas acceden a nosotros a través de un chat. Este chat es privado y solo puede acceder
                            a él el profesor y el alumno. En este chat se puede hablar de cualquier tema relacionado con el TFG.
                            Si el profesor y el alumno están de acuerdo, se puede hablar de temas relacionados con la empresa.
                            
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PreguntasFrecuentes;