import React, { useState } from 'react'
import { AboutUsGalleryData } from './AboutUsGalleryData';
import './AboutUsGallerySection.css';

function AboutUsGallerySection({ slides }) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <>
            <div className='about__gallery__slider'>
                <div className='about__gallery__left-arrow'>
                    <i class="fas fa-chevron-left" id='about__gallery__left-arrow' onClick={prevSlide}></i>
                </div>

                {AboutUsGalleryData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <img src={slide.src} alt={slide.alt} className='about__gallery__photo'/>
                                )}
                        </div>
                    );
                })}

                <div className='about__gallery__right-arrow'>
                    <i class="fas fa-chevron-right" id='about__gallery__right-arrow' onClick={nextSlide}></i>
                </div>
            </div>

        </>
    )
}
export default AboutUsGallerySection