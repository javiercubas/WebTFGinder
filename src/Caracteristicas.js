import React from 'react'
import './Caracteristicas.css'

const Caracteristicas = () => {
    return (
        <section id="caracteristicas" className="caracteristicas-div">
            <div className="column-caracteristicas-div">
                <h3 className='title-caracteristicas'>Problematicas</h3>
                <p className="text-caracteristicas">Mas de un 50% de los estudiantes no encuentran su profesor ideal, porque los temas seleccionados no son su especialidad. Nuestro producto simplifica la búsqueda estudiante profesor, consiguiendo una mayor sincronía entre ellos.</p>
                <img src='https://media-public.canva.com/AYNWk/MAESjjAYNWk/1/t.png' className='img-caracteristicas' />
            </div>
            <div className="column-caracteristicas-div">
                <h3 className='title-caracteristicas'>Beneficios</h3>
                <div className="row-caracteristicas-div">
                    <img src='/' />
                    <h4 className="title-beneficios">Empresa</h4>
                    <p className="text-beneficios">Facilita la búsqueda, el contacto y la información en base a los tfg.</p>
                </div>
                <div className="row-caracteristicas-div">
                    <img src='/' />
                    <h4 className="title-beneficios">Profesores</h4>
                    <p className="text-beneficios">Facilita la comunicación con el alumno ya no solo para contactar con el, sino que también para que se conozcan sus temas y especialidades.</p>
                </div>
                <div className="row-caracteristicas-div">
                    <img src='/' />
                    <h4 className="title-beneficios">Alumno</h4>
                    <p className="text-beneficios">Simplifica la búsqueda del profesor con el que además se consigue una mayor complicidad en cuanto a la relación persona y tema del tfg.</p>
                </div>
            </div>
        </section>
    )
}

export default Caracteristicas