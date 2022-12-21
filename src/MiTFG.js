import React from 'react'
import './MiTFG.css'


const MiTFG = () => {
    return (
        <section id='mi-tfg' className="mitfg-div">
            <div className="logo-mitfg-div">
                <img src='assets/miTFG.png' className='img-mitfg' alt='miTFG' />
                <h2 className="title-mitfg-div">MI TFG</h2>
            </div>
            <div className="column-mitfg-div">
                <div className="row-mitfg-div">
                    <h3 className="index-mitfg">01</h3>
                    <div className='right-row-mitfg'>
                        <h4 className="title-mitfg">Nuestro compromiso</h4>
                        <p className="subtitle-mitfg">
                            Nuestro compromiso es que todos los estudiantes puedan
                            realizar su TFG de una manera más sencilla y eficiente. Con fechas de entregas 
                            menos agresivas y con una posible empresa detrás que pueda ayudar al desarrollo.  

                        </p>
                    </div>
                </div>
                <div className="row-mitfg-div">
                    <h3 className="index-mitfg">02</h3>
                    <div className='right-row-mitfg'>
                        <h4 className="title-mitfg">Nuestros objetivos</h4>
                        <p className="subtitle-mitfg">
                            El principal objetivo es que todos los estudiantes realicen su TFG de una manera
                            más sencilla y eficiente, para ello hemos creado una plataforma que permite 
                            a los estudiantes encontrar el TFG perfecto para ellos, y a los profesores
                            encontrar a los estudiantes perfectos para ellos. A los cuales se podrán unir las 
                            empresas que quieran colaborar con el desarrollo del TFG.
                        </p>
                    </div>
                </div>
                <div className="row-mitfg-div">
                    <h3 className="index-mitfg">03</h3>
                    <div className='right-row-mitfg'>
                        <h4 className="title-mitfg">La privacidad</h4>
                        <p className="subtitle-mitfg">
                            En TFGinder nos preocupamos por la privacidad de nuestros usuarios, por ello
                            hemos creado una plataforma que permite a los usuarios controlar qué datos
                            quieren compartir con los demás usuarios. Además, los datos de los usuarios
                            no se compartirán con terceros.

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MiTFG

