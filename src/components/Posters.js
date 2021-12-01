import React from 'react';
import PosterItem from './PosterItem';
import './Posters.css';

function Posters() {
    return (
        <ul className='posters__items'>
            <PosterItem
                src='../images/poster.png'
                title='Lorem ipsum'
                path=''
                text='Aliquam suscipit enim nulla, a pulvinar erat rutrum quis.'
            />
            <PosterItem
                src='images/poster1.png'
                title='Lorem ipsum'
                path=''
                text='Aliquam suscipit enim nulla, a pulvinar erat rutrum quis.'
            />
            <PosterItem
                src='images/poster2.png'
                title='Lorem ipsum'
                path=''
                text='Aliquam suscipit enim nulla, a pulvinar erat rutrum quis.'
            />
            <PosterItem
                src='images/poster3.png'
                title='Lorem ipsum'
                path=''
                text='Aliquam suscipit enim nulla, a pulvinar erat rutrum quis.'
            />
            <PosterItem
                src='images/poster4.png'
                title='Lorem ipsum'
                path=''
                text='Aliquam suscipit enim nulla, a pulvinar erat rutrum quis.'
            />
            <PosterItem
                src='images/poster5.png'
                title='Lorem ipsum'
                path=''
                text='Aliquam suscipit enim nulla, a pulvinar erat rutrum quis.'
            />
            <PosterItem
                src='images/poster6.png'
                title='Lorem ipsum'
                path=''
                text='Aliquam suscipit enim nulla, a pulvinar erat rutrum quis.'
            />
            
        </ul>
    )
}

export default Posters;
