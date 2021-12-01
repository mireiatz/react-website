import React from 'react';
import Timetable from '../Timetable.js';
import DancesCards from '../DancesCards';
import './Classes.css';
import { Button } from '../Button.js';

export default function Classes() {

    return (
        <>
            <img src='../images/nyc-background.jpg' alt='background' className='background-photo' />
            <h2 className='classes__title'>CLASES</h2>
            <div className='classes__container'>
                <div className='classes__shortcuts'>
                    <Button
                        to='/classes#dances'
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--medium'>
                        ESTILOS
                    </Button>
                    <Button
                        to='/classes#timetable'
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--medium'>
                        HORARIOS
                    </Button>
                    <Button
                        to='/classes#tarifs'
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--medium'>
                        TARIFAS
                    </Button>
                </div>
                <div className='dances-section' id='dances'>
                    <h3>Estilos</h3>
                    <DancesCards />
                    <div>
                        <p>En Fenómeno Danza nos renovamos continuamente y pronto introduciremos nuevos estilos y actividades.</p>
                        <Button to='/contact'
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--medium' >
                            Consultar
                        </Button>

                    </div>
                </div>
                <div className='timetable-section' id='timetable'>
                    <h3>Horario</h3>
                    <Timetable />
                    <div className='timetable-section__info'>
                        <p>El horario está sujeto a cambios y también puedes utilizar nuestras instalaciones para tus eventos o actividades.</p>
                        <Button to='/contact'
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--medium' >
                            Consultar
                        </Button>
                    </div>
                </div>
                <div className='tarifs-section' id='tarifs'>
                    <h3>Tarifas</h3>
                    <p>No hay matrícula y el importe varía dependiendo del tipo y cantidad de clases.</p>
                    <Button to='/contact'
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--medium' >
                        Consultar
                    </Button>
                </div>
            </div>

        </>
    );
}