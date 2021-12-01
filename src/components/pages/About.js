import React from 'react'
import TeacherSection from '../TeacherSection';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsGallerySection from '../AboutUsGallerySection';
import { AboutUsGalleryData } from '../AboutUsGalleryData';

function About() {

    return (
        <>
            <img src='../images/nyc-background.jpg' alt='background' className='background-photo' />
            <h2 className='about__title'>NOSOTROS</h2>
            <div className='about__container'>
                <div className='about__director'>
                    <div >
                        <Link to={{ pathname: 'https://es-es.facebook.com/fenomenodanza/' }} target='_blank' className='director__title'>
                            <h3>Isidro Zapatero, Director</h3>
                        </Link>
                    </div>
                    <div className='director__info'>
                        <div className='director__info-p'>
                            <p>Isidro dirige la escuela, es profesor dando clases de bailes de salón, caribeños, sevillanas, tango argentino etc. y está involucrado en diferentes actividades organizadas por la escuela demostrando su gran creatividad y versatilidad como bailarín y profesional de la danza.</p>
                            <p>Isidro comienza su carrera como bailarín formándose en ballet clásico, principalmente en la <i>Academia Jon Beitia</i>. Además desarrolla experiencia profesional como figurante, actor y bailarín en diferentes producciones del Teatro Arriaga donde es reconocido por mostrar aptitudes poco frecuentes como bailarín. Así, Isidro es examinado por <i>La Real Escuela Profesional de Danza de Madrid</i> y becado por el <i>London Studio Centre</i> para continuar su formación en danza clásica en Londres. Aquí, además de participar en montajes coreografiados por los grandes Jack Carter y Michel Corder, entre otros, es seleccionado para bailar ópera en <i>Classical Productions London</i>, compañía con la que va de gira a Zurich y Munich.</p>
                            <p>Posteriormente se inicia en el mundo de la danza contemporánea de mano del gran coreógrafo <i>Damián Muñoz</i> participando en montajes como <i>Humedades</i> y <i>Daño</i>. También participa como bailarín y coreógrafo en los certámenes de jóvenes coreógrafos vascos y sigue trabajando en diferentes espectáculos de danza y teatro.</p>
                            <p>En esta época descubre los bailes de salón de competición en los cuales se vuelca completamente consiguiendo en poco tiempo la máxima categoría en bailes latinos en la cual gana siempre primeros puestos y podiums. Durante 4 años entrena en Italia compitiendo internacionalmente en grandes <i>Opens</i> como los de <i>Malta, Blackpool, Megive, Birmingham</i> etc. consiguiendo siempre podiums. Es de la pasión por el baile de competición y las ganas de ayudar a otros bailarines que Isidro comienza a impartir clases, decidiendo finalmente fundar su propia escuela junto a su marido, Javier Gómez.</p>
                        </div>
                        <Link to={{ pathname: 'https://es-es.facebook.com/fenomenodanza/' }} target='_blank' className='director__info-link'>
                            <img src='../images/isidro2.jpg' alt='Isidro Zapatero, Director' />
                            <img src='../images/isidro3.jpg' alt='Isidro Zapatero, Director' />
                            <img src='../images/isidro.jpg' alt='Isidro Zapatero, Director' />
                        </Link>
                    </div>
                </div>
                <div className='about__teachers'>
                    <h3>Profesor@s</h3>
                    <TeacherSection />
                </div>
                <div className='about__school'>
                    <h3>Nuestr@s Fenómen@s</h3>
                    <AboutUsGallerySection slides={AboutUsGalleryData} />
                </div>
            </div>
        </>
    );
}

export default About;