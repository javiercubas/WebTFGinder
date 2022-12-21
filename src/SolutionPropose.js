import React from "react";
import "./SolutionPropose.css";

const SolutionPropose = () => {
    return (
        <section id="solucion" className="solution-div">
            <div className="solution-section">
                <div className="esquema">
                    <div className="iconME">
                        <img src="assets/student.png" alt="Student" className="img-icons img-student" />
                    </div>
                    <h3 className="textInfo textTu">TÚ</h3>
                    <div className="row1">
                        <img src="assets/row1.png" alt="Arrow" className="img-arrow" />
                    </div>
                    <h3 className="textInfo textTeacher">TUTOR</h3>

                    <div className="iconUni">
                        <img src="assets/teacher.png" alt="Teacher" className="img-icons img-teacher" />
                    </div>
                    <div className="row2">
                        <img src="assets/row2.png" alt="Arrow" className="img-arrow" />
                    </div>
                    <div className="iconEmpresa">
                        <img src="assets/empresa.png" alt="Empresa" className="img-icons img-empresa" />
                    </div>
                    <h3 className="textInfo textEmpresa">EMPRESA</h3>
                </div>
                <div className="sectionText">
                    <p className="textP">Los estudiantes podrán entrar a la aplicación
                        cuando la universidad les de permiso para comenzar a buscar un tutor. Estos
                        indicarán 1 o 2 temas que le gustaría realizar y le aparecerán una serie de
                        profesores que tenga un tema relacionado con el suyo. </p>

                    <p className="textP">
                        Los profesores recibirán peticiones de los estudiantes para ser tutorizados
                        y podrán aceptarlas o rechazarlas. En caso de aceptarlas, comenzará lo comunicación
                        entre ambos para que el estudiante pueda comenzar a realizar su TFG.
                    </p>
                    <p className="textP">
                        Las empresas podrán entrar a la aplicación y ver los TFG que están realizando
                        los estudiantes. En caso de que les interese alguno, podrán contactar con el estudiante y profesor
                        para poder realizar el TFG en su empresa y potenciarlo en caso de una gran idea.
                    </p>

                </div>
            </div>
        </section >
    )
}

export default SolutionPropose;