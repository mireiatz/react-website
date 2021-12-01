import React from 'react';
import './ContactSection.css';
import { Link } from 'react-router-dom';


function ContactSection() {

    return (
        <>
            <div className='contact-section__container'>
                <div className='contact-section__contact-us'>
                    <h3>Contáctanos</h3>
                    <div className='contact-us__contact-details'>
                        <div className='contact-details__each'>
                            <i class="fas fa-phone"></i>
                            <p>123456789</p>
                        </div>
                        <div className='contact-details__each'>
                            <i class="fas fa-mobile-alt"></i>
                            <p>&nbsp;123456789</p>
                        </div>
                        <div className='contact-details__each'>
                            <i class="fas fa-envelope"></i>
                            <p>fenomenod@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='contact-section__follow-us'>
                    <h3>Síguenos</h3>
                    <div className='follow-us__socialmedia'>
                        <Link className='follow-us__social-icon-link' to={{ pathname: 'https://es-es.facebook.com/fenomenodanza/' }} target='_blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-square' />
                        </Link>
                        <Link className='follow-us__social-icon-link' to={{ pathname: 'https://www.instagram.com/fenomenodanza/' }} target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram-square' />
                        </Link>
                        <Link className='follow-us__social-icon-link' to={{ pathname: 'https://www.youtube.com/channel/UCQtBTlfeZIE3ArFw-Z7R8Eg' }} target='_blank' aria-label='Youtube'>
                            <i className='fab fa-youtube-square' />
                        </Link>
                    </div>
                </div>
                <div className='contact-section__visit-us'>
                    <h3>Visítanos</h3>
                    <div className='visit-us__each'>
                        <Link className='visit-us__each-link' to={{ pathname: 'https://goo.gl/maps/dFssLZHwgcieyZjG7' }} target='_blank'>
                            <i class="fas fa-map-marker-alt"></i>
                            <div className='visit-us__each-address'>
                                <p>Ramón y Cajal Etorbidea, 14</p>
                                <p>48014 Bilbo</p>
                            </div>
                        </Link>
                    </div>
                    <div className='visit-us__each'>
                        <Link className='visit-us__each-link' to={{ pathname: 'https://goo.gl/maps/cYRakrWqSwpEoTQ38' }} target='_blank'>
                            <i class="fas fa-map-marker-alt"></i>
                            <div className='visit-us__each-address'>
                                <p>Pol. Ind. El Árbol, 19</p>
                                <p>48980 Santurtzi</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactSection;
