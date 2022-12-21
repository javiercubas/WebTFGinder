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
                        <p className="subtitle-mitfg">La finalidad de la app es el ayudar a todo tipo de estudiante a encontrar el TFG perfecto para su entrega  y así poder mejorar la relación estudiante-profesor durante todo su proceso de desarrollo.</p>
                    </div>
                </div>
                <div className="row-mitfg-div">
                    <h3 className="index-mitfg">02</h3>
                    <div className='right-row-mitfg'>
                        <h4 className="title-mitfg">Nuestros objetivos</h4>
                        <p className="subtitle-mitfg">Conectar a las personas y ayudarlas a encontrar a su profesor ideal. De esta manera facilitar la realización el TFG produciendo trabajos de mayor calidad y una mejor experiencia a a hora de realizarlo.</p>
                    </div>
                </div>
                <div className="row-mitfg-div">
                    <h3 className="index-mitfg">03</h3>
                    <div className='right-row-mitfg'>
                        <h4 className="title-mitfg">La privacidad</h4>
                        <p className="subtitle-mitfg">Queremos dar una sensación de total seguridad e impunidad ante todo posible ataque cibernético para así impedir pérdidas de datos confidenciales de la empresa o de los datos de los propios clientes.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MiTFG

