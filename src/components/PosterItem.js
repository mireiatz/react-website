import React from 'react';
import { Link } from 'react-router-dom';

function PosterItem(props) {
    return (
        <>
            <li className='posters__item'>
                <Link className='posters__item__link'
                    to={props.path}>
                    <img src={props.src} alt="imagen" className="posters__item__img" />
                    {/* <div className='posters__item__info'>
                        <h5>{props.title}</h5>
                        <p>{props.text}</p>
                    </div> */}
                </Link>
            </li>
        </>
    );
}

export default PosterItem;