import React from 'react';
import Teacher from './Teacher';
import './TeacherSection.css';

function TeacherSection() {
    return (
        // <div className='teacher-section'>
            <ul className='teacher-section'>
                <Teacher
                src='./images/facesevillanas.png'
                alt='Leire Cruz, Profesora de sevillanas'
                path={{ pathname: 'https://es-es.facebook.com/fenomenodanza/'}}
                name='Leire Cruz'
                position='Profesora de Sevillanas'
                />
                <Teacher 
                src='./images/facekizomba.png'
                alt='Felix Bandeira, Profesora de kizomba'
                path={{ pathname: 'https://es-es.facebook.com/fenomenodanza/'}}
                name='Felix Bandeira'
                position='Profesor de Kizomba'
                />
                <Teacher 
                src='./images/facepopping.png'
                alt='Andrea Gutiérrez, Profesora de popping'
                path={{ pathname: 'https://es-es.facebook.com/fenomenodanza/'}}
                name='Andrea Gutiérrez'
                position='Profesora de Popping'
                />
                <Teacher 
                src='./images/facecaribeños.png'
                alt='David Álvarez, Profesora de caribeños'
                path={{ pathname: 'https://es-es.facebook.com/fenomenodanza/'}}
                name='David Álvarez'
                position='Profesor de Caribeños'
                />
                <Teacher 
                src='./images/facesalsabachata.png'
                alt='Marian Rangel, Profesora de salsa y bachata'
                path={{ pathname: 'https://es-es.facebook.com/fenomenodanza/'}}
                name='Marian Rangel'
                position='Profesora de Estilo Chicas: salsa y bachata'
                />
                <Teacher 
                src='./images/facetango.png'
                alt='Adriana, Profesora de tango'
                path={{ pathname: 'https://es-es.facebook.com/fenomenodanza/'}}
                name='Adriana'
                position='Adriana de Tango Argentino'
                />
               
            </ul>
            
        // </div>
    )
}

export default TeacherSection
