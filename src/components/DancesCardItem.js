import React from 'react';
import {Link} from 'react-router-dom';

function DancesCardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link'
                to={props.path}>
                    <div className='cards__item__pic-wrap' > 
                        <img src={props.src} alt="imagen" className="cards__item__img"/>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default DancesCardItem;
