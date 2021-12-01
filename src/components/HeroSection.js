import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='../videos/school.mp4' autoPlay loop muted />
            <h1>¡Únete fenómen@!</h1>
            <p>Aprende a bailar, muévete y disfruta en el mejor ambiente</p>
            <div className='hero-btns'>
                <Button 
                    to='/contact'
                    className='btns' 
                    buttonStyle='btn--primary' 
                    buttonSize='btn--large'>
                        ME APUNTO
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
