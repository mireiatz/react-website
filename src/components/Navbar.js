import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick =() => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>  {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
           <nav className='navbar'>
               <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src='./images/logo.png' alt='logo'></img>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            Nosotros
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/classes' className='nav-links' onClick={closeMobileMenu}>
                            Clases
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                            Eventos
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Contacto
                        </Link>
                    </li>
                </ul>
                {button && <Button to='/contact' buttonStyle='btn--outline'>Contacto</Button>}
               </div>
            </nav> 
        </>
    );
}

export default Navbar;

