import React, { useState } from 'react'
import './MarketingSection.css'
import { Button } from './Button'
import { SliderData } from './ReviewsSliderData';


function MarketingSection({ slides }) {


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
        <div className='marketing-section__container'>
            <div className='marketing-section__about-us'>
                <h3>Quiénes somos</h3>
                <div className='marketing-section__about-us__info'>
                    <p>Fenómeno Danza es una escuela de baile que desde hace más de 10 años proporciona un espacio seguro con instalaciones excepcionales donde amantes del baile de todos los niveles y edades se reunen para diviertirse aprendiendo de la mano de grandes profesionales especializados en diversos estilos de danza. ¡No te lo pierdas!</p>
                    <img src='../images/students.jpg' alt='Fenómeno Danza' />
                </div>
            </div>
            <div className='marketing-section__shortcuts-container'>
                <h3>Qué ofrecemos</h3>
                <div className='marketing-section__shortcuts'>
                    <div className='marketing-section__each-shortcut'>
                        <img src="../images/shortcut1.jpg" alt="presentation" className='gallery__each-photo' />
                        <h4>Elige tu estilo</h4>
                        <p>Ofrecemos una gran variedad de estilos de baile desde los más tradicionales hasta las últimas tendencias. ¿Te animas a descubrir cuál es el tuyo?</p>
                        <Button
                            to='/classes#dances'
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--medium'>
                            Ver más
                        </Button>
                    </div>
                    <div className='marketing-section__each-shortcut'>
                        <img src="../images/shortcut2.jpg" alt="presentation" className='gallery__each-photo' />
                        <h4>Consulta horarios</h4>
                        <p>Tenemos un horario muy completo, repartido en dos localizaciones. Consulta nuestra agenda para este curso y ponte en contacto para reservar tu sitio.</p>
                        <Button
                            to='/classes#timetable'
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--medium'>
                            Ver más
                        </Button>
                    </div>
                    <div className='marketing-section__each-shortcut'>
                        <img src="../images/shortcut3.jpg" alt="presentation" className='gallery__each-photo' />
                        <h4>Conócenos</h4>
                        <p>Contamos con grandes profesionales especializados en diversos estilos de baile y apasionados por la enseñanza a personas de todas las edades.</p>
                        <Button
                            to='/about'
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--medium'>
                            Ver más
                        </Button>
                    </div>

                </div>
            </div>

            <div className='marketing-section__reviews'>
                <h3>Qué opinan de nosotros</h3>
                <div className='reviews__slider'>
                    <div className='reviews__left-arrow'>
                        <i class="fas fa-chevron-left" id='reviews__left-arrow' onClick={prevSlide}></i>
                    </div>

                    {SliderData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <div className='reviews__each-review'>
                                        <div className='each-review__stars'>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <p className='each-review__opinion'>{slide.opinion}</p>
                                        <p className='each-review__signature'><i>{slide.signature}</i></p>
                                    </div>)}
                            </div>
                        );
                    })}

                    <div className='reviews__right-arrow'>
                        <i class="fas fa-chevron-right" id='reviews__right-arrow' onClick={nextSlide}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketingSection
