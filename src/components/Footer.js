import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.css';


export default function Footer() {
    return (
        <div className='footer'>

            <HashLink to='/#top' className='footer__link'>
                Fenómeno Danza
            </HashLink>

            <Link className='footer__chat' to={{ pathname: 'https://wa.me/34607482535' }} target='_blank'  >
                <i class="fab fa-whatsapp"></i>
            </Link>

        </div>
    )
}
