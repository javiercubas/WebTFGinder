import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className="App-header">
            <a href="/" className="title-div">
                <img src="./logo.png" className="img-logo" alt="logo"/>
                <p className="title-logo">TFGinder</p>
            </a>
            <div className="menu-div">
                <a href='#inicio' className="menu-item">Inicio</a>
                <a href='#problematica' className="menu-item">Problematica</a>
                <a href='#solucion' className="menu-item">Nuestra Solución</a>
                <a href='#beneficios' className="menu-item">Beneficios</a>
                <a href='#preguntas-frecuentes' className="menu-item">Preguntas Frecuentes</a>
                <a href='#mi-tfg' className="menu-item">Mi TFG</a>
                <a href='/download' className="menu-item button-menu">Descargar</a>
            </div>
        </header>
    )
}

export default Header