import React, { useState } from 'react';
import './Contact.css';
import MapContainer from '../Location.js';
import { send } from 'emailjs-com';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_aafml1l',
            'template_n78l5za',
            toSend,
            'user_wjEcILsrAzjLSAb5hqCJs'
        )
            .then((response) => {
                window.alert('Mensaje enviado!');
                console.log('sucess', response.status, response.text);
            })
            .catch((err) => {
                window.alert('Ha habido un error... Vuelve a intentarlo');
                console.log('error', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>
            <img src='../images/nyc-background.jpg' alt='background' className='background-photo' />
            <h2 className='contact__title'>CONTACTO</h2>
            <div className='contact-container'>
                <div className='contact-container__1'>
                    <h3>Escríbenos</h3>
                    <p>Y nos pondremos en contacto contigo cuanto antes.</p>
                    <form onSubmit={onSubmit} className='contact__contact-form'>
                        <input type='text'
                            name='from_name'
                            placeholder='Nombre'
                            value={toSend.from_name}
                            onChange={handleChange}>
                        </input>
                        <input
                            type='text'
                            name='reply_to'
                            placeholder='Email'
                            value={toSend.reply_to}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            name='message'
                            placeholder='Mensaje'
                            value={toSend.message}
                            onChange={handleChange}
                        />
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
                <div className='contact-container__2'>
                    <h3>Contáctanos</h3>
                    <p>Para solucionar cualquier duda.</p>
                    <div className='contact-container__2__details'>
                        <div className='contact-container__2__details__each'>
                            <i class="fas fa-phone"></i>
                            <p>607482535</p>
                        </div>
                        <div className='contact-container__2__details__each'>
                            <i class="fas fa-mobile-alt"></i>
                            <p>&nbsp;627758527</p>
                        </div>
                        <div className='contact-container__2__details__each'>
                            <i class="fas fa-envelope"></i>
                            <p>fenomenod@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='contact-container__3'>
                    <h3>Visítanos</h3>
                    <p>Descubre nuestro ambiente y ¡apúntate!</p>
                    <div className='contact-container__3__maps'>
                        <MapContainer />
                    </div>
                </div>
                <div className='contact-container__4'>
                    <h3>Síguenos</h3>
                    <p>No te pierdas nada.</p>
                    <div className='contact-container__4__social-media'>
                        <Link className='social-icon-link' to={{ pathname: 'https://es-es.facebook.com/fenomenodanza/' }} target='_blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-square' />
                        </Link>
                        <Link className='social-icon-link' to={{ pathname: 'https://www.instagram.com/fenomenodanza/' }} target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram-square' />
                        </Link>
                        <Link className='social-icon-link' to={{ pathname: 'https://www.youtube.com/channel/UCQtBTlfeZIE3ArFw-Z7R8Eg' }} target='_blank' aria-label='Youtube'>
                            <i className='fab fa-youtube-square' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}