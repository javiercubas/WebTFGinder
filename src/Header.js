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
                <a href='#caracteristicas' className="menu-item">Características</a>
                <a href='/' className="menu-item">Preguntas Frecuentes</a>
                <a href='/' className="menu-item">Mi TFG</a>
                <a href='/register' className="menu-item button-menu">Descargar</a>
            </div>
        </header>
    )
}

export default Header