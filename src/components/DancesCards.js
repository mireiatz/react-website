import React from 'react';
import DancesCardItem from './DancesCardItem';
import './DancesCards.css'

function DancesCards() {
    return (
        <ul className='cards__items'>
            <DancesCardItem
                src='images/dancecaribeños.jpg'
                path='/classes'
            />
            <DancesCardItem
                src='images/dancejazz.jpg'
                path='/classes'
            />
            <DancesCardItem
                src='images/dancekizomba.jpg'
                path='/classes'
            />
            <DancesCardItem
                src='images/dancepopping.jpg'
                path='/classes'
            />
            <DancesCardItem
                src='images/dancesalon.jpg'
                  path='/classes'
            />
            <DancesCardItem
                src='images/danceestilochicas.jpg'
                path='/classes'
            />
            <DancesCardItem
                src='images/dancesevillanas.jpg'
                path='/classes'
            />
            <DancesCardItem
                src='images/dancetango.jpg'
                path='/classes'
            />
             <DancesCardItem
                src='images/danceformacion.jpg'
                path='/classes'
            />
             <DancesCardItem
                src='images/dancecompeticion.jpg'
                path='/classes'
            />
       
        </ul>
    )
}

export default DancesCards;
