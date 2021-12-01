import React from 'react';
import '../Posters.css';
import Posters from '../Posters';
import './Events.css';

export default function Events() {
    return (
        <>
            <img src='../images/nyc-background.jpg' alt='background' className='background-photo' />
            <h2 className='events'>EVENTOS</h2>
            <div className='events-container'>
                <p>Síguenos en redes sociales para no perderte eventos como estos:</p>
                <Posters />
            </div>
        </>
    );
}