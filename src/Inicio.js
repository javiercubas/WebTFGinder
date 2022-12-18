import React from 'react'
import './Inicio.css'

const Inicio = () => {
    return (
        <section id="inicio" className='inicio-div'>
            <div className="row-inicio-div">
                <div className='column-inicio-div'>
                <h2 className="title-inicio">¿TIENES UN TFG? CON ESTA APP PODRÁS OBTENER UN BUEN TUTOR Y UNA EMPRESA INTERESADA</h2>
                <p className="subtitle-inicio">Una aplicación ideal para enlazar profesores, estudiantes y empresas con el fin de potenciar los TFG. </p>
                <a href="#inicio" className="button-download-inicio">Descargar</a>
                <a href="mailto:tfginder@gmail.com" className="button-correo-inicio">
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <p>TFGinder@gmail.com</p>
                </a>
                </div>
                
                    <img src="./phone.png" className="img-phone-inicio" alt="phone"/>
                
            </div>
        </section>
    )
}

export default Inicio