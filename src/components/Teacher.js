import React from 'react';
import { Link } from 'react-router-dom';


function Teacher(props) {
    return (
        <>
            <li className='teacher'>
                <Link to={props.path} target='_blank' className='teacher__link'>
                    <img src={props.src} alt={props.alt} />
                    <h4>{props.name}</h4>
                    <h5>{props.position}</h5>
                </Link>
            </li>
        </>
    )
}

export default Teacher;