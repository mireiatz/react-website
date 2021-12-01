import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import {SliderData} from '../ReviewsSliderData';
import MarketingSection from '../MarketingSection';
import ContactSection from '../ContactSection';

function Home(){
    return (
        <>
        <HeroSection id='top'/>
        <MarketingSection slides={SliderData}/>
        <ContactSection/>
        </>
    )
}

export default Home;