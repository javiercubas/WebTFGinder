import React from "react";
import "./SolutionPropose.css";

const SolutionPropose = () => {
    return(
        <section id="solution" className="solution-div">
        <div className="solution-section">
            <div className="esquema">
                <div className="iconME">

                </div>
                <div className="text">
                    <h3 className="textInfo">TÚ</h3>
                </div>
                <div className="row1">

                </div>
                <div className="text">
                    <h3 className="textInfo">TUTOR</h3>
                </div>
                <div className="iconUni">

                </div>
                <div className="row2">

                </div>
                <div className="iconEmpresa">
                    {/* <img src="assets/empresa.png" className="img"/>  */}
                </div>
                <div className="text">
                    <h3 className="textInfo">EMPRESA</h3>
                </div>
            </div>
            <div className="sectionText">
                <div className="text">
                    <p className="textP">Los estudiantes podrán entrar a la aplicación
                    cuando la universidad les de permiso para comenzar a buscar un tutor. Estos
                    indicarán 1 o 2 temas que le gustaría realizar y le aparecerán una serie de 
                    profesores que tenga un tema relacionado con el suyo. </p>
                </div>
                <div className="text">
                    <p className="textP">
                    Los profesores recibirán peticiones de los estudiantes para ser tutorizados
                    y podrán aceptarlas o rechazarlas. En caso de aceptarlas, comenzará lo comunicación 
                    entre ambos para que el estudiante pueda comenzar a realizar su TFG.
                    </p>
                </div>
                <div className="text">
                    <p className="textP">
                    Las empresas podrán entrar a la aplicación y ver los TFG que están realizando
                    los estudiantes. En caso de que les interese alguno, podrán contactar con el estudiante y profesor
                    para poder realizar el TFG en su empresa y potenciarlo en caso de una gran idea.
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default SolutionPropose;