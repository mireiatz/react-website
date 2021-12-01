import React from 'react';
import './Timetable.css';

function Timetable() {
    return (
        <div className='timetable-container'>
            <div className='timetable-container__timetable'>
                <table className='timetable__table'>
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th colSpan='3'>Lu</th>
                            <th colSpan='3'>Ma</th>
                            <th colSpan='3'>Mi</th>
                            <th colSpan='2'>Ju</th>
                            <th colSpan='3'>Vi</th>
                            <th colSpan='1'>Sá</th>
                            <th colSpan='1'>Do</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>10:00</th>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='2'></td>
                            <td colSpan='3'></td>
                            <td colSpan='1'></td>
                            <td colSpan='1' rowSpan='8' className='room1'>FR</td>
                        </tr>
                        <tr>
                            <th>10:30</th>
                            <td colSpan='3'></td>
                            <td rowSpan='3' colSpan='3' className='room2'>JZ</td>
                            <td colSpan='3'></td>
                            <td rowSpan='2' colSpan='2' className='room1'>EC</td>
                            <td colSpan='3'></td>
                            <td colSpan='1'></td>
                        </tr>
                        <tr>
                            <th>11:00</th>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='1'></td>
                        </tr>
                        <tr>
                            <th>11:30</th>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='2'></td>
                            <td colSpan='3'></td>
                            <td colSpan='1' rowSpan='4' className='room2'>PP</td>
                        </tr>
                        <tr>
                            <th>12:00</th>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='2'></td>
                            <td colSpan='3'></td>
                        </tr>
                        <tr>
                            <th>12:30</th>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='2'></td>
                            <td colSpan='3'></td>
                        </tr>
                        <tr>
                            <th>13:00</th>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='2'></td>
                            <td colSpan='3'></td>
                        </tr>
                        <tr>
                            <th>13:30</th>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='2'></td>
                            <td colSpan='3'></td>
                            <td colSpan='1'></td>
                        </tr>
                        <tr>
                            <th>14:00</th>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='2'></td>
                            <td colSpan='3'></td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                        </tr>
                        <tr>
                            <th>17:00</th>
                            <td rowSpan='3' colSpan='1' className='room1'>CP</td>
                            <td colSpan='2'></td>
                            <td colSpan='3'></td>
                            <td colSpan='1' rowSpan='3' className='room2'>CP</td>
                            <td colSpan='2'></td>
                            <td colSpan='2'></td>
                            <td colSpan='3'></td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                        </tr>
                        <tr>
                            <th>17:30</th>
                            <td colSpan='2' rowSpan='3' className='room1'>BS</td>
                            <td colSpan='3' rowSpan='3' className='room1'>BS</td>
                            <td colSpan='2' rowSpan='3' className='room3'>BS</td>
                            <td colSpan='1'></td>
                            <td colSpan='1' rowSpan='3' className='room3'>BS</td>
                            <td colSpan='1' rowSpan='4' className='room2'>FR</td>
                            <td colSpan='1' rowSpan='3' className='room3'>BS</td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                        </tr>
                        <tr>
                            <th>18:00</th>
                            <td colSpan='1' rowSpan='2' className='room1'>EC</td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                        </tr>
                        <tr>
                            <th>18:30</th>
                            <td colSpan='1'></td>
                            <td colSpan='1' rowSpan='5' className='room2'>BA</td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                        </tr>
                        <tr>
                            <th >19:00</th>
                            <td colSpan='1' rowSpan='3' className='room2'>JZ</td>
                            <td colSpan='1' rowSpan='3' className='room1'>TA</td>
                            <td colSpan='1'></td>
                            <td colSpan='2' rowSpan='3' className='room1'>SV</td>
                            <td colSpan='1'></td>
                            <td colSpan='2' rowSpan='3' className='room3'>BS</td>
                            <td colSpan='1' rowSpan='3' className='room2'>BS</td>
                            <td colSpan='1'></td>
                            <td colSpan='1' rowSpan='3' className='room3'>BS</td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                        </tr>
                        <tr>
                            <th>19:30</th>
                            <td colSpan='1'></td>
                            <td colSpan='1' rowSpan='4' className='room2'>JZ</td>
                            <td colSpan='1' rowSpan='2' className='room1'>BA</td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                        </tr>
                        <tr>
                            <th>20:00</th>
                            <td colSpan='1' rowSpan='3' className='room1'>SV</td>
                            <td colSpan='1' rowSpan='3' className='room1'>CR</td>
                            <td colSpan='1' rowSpan='3' className='room2'>KI</td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                        </tr>
                        <tr>
                            <th>20:30</th>
                            <td colSpan='2' rowSpan='3' className='room2'>BS</td>
                            <td colSpan='1'></td>
                            <td colSpan='1' rowSpan='3' className='room1'>CR</td>
                            <td colSpan='2' rowSpan='3' className='room3'>BS</td>
                            <td colSpan='2' rowSpan='3' className='room2'>BS</td>
                            <td colSpan='1' rowSpan='3' className='room3'>BS</td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                        </tr>
                        <tr>
                            <th>21:00</th>
                            <td colSpan='1' rowSpan='3' className='room2'>KI</td>
                            <td colSpan='1' rowSpan='3' className='room2'>BA</td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                        </tr>
                        <tr>
                            <th>21:30</th>
                            <td colSpan='2'></td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                        </tr>
                        <tr>
                            <th>22:00</th>
                            <td colSpan='3'></td>
                            <td colSpan='2'></td>
                            <td colSpan='1'></td>
                            <td colSpan='3'></td>
                            <td colSpan='3'></td>
                            <td colSpan='1'></td>
                            <td colSpan='1'></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='timetable-container__legends'>
                <div className='legend__rooms'>
                    <p className='legend__room1'>Sala 1 <br></br>Bilbao</p>
                    <p className='legend__room2'>Sala 2 <br></br>Bilbao</p>
                    <p className='legend__room3'>Sala 3 <br></br>Santurtzi</p>
                </div>
                <div className='legend__classes'>
                    <table className='legend__classes__table'>
                        <tr>
                            <td>BS</td>
                            <td className='second-td'>Bailes de Salón</td>
                        </tr>
                        <tr>
                            <td>CÑ</td>
                            <td className='second-td'>Caribeños</td>
                        </tr>
                        <tr>
                            <td>CP</td>
                            <td className='second-td'>Competición</td>
                        </tr>
                        <tr>
                            <td>EC</td>
                            <td className='second-td'>Estilo Chicas</td>
                        </tr>
                        <tr>
                            <td>FR</td>
                            <td className='second-td'>Formación</td>
                        </tr>
                        <tr>
                            <td>JZ</td>
                            <td className='second-td'>Danza Jazz</td>
                        </tr>
                        <tr>
                            <td>KI</td>
                            <td className='second-td'>Kizomba</td>
                        </tr>
                        <tr>
                            <td>PP</td>
                            <td className='second-td'>Popping</td>
                        </tr>
                        <tr>
                            <td>SV</td>
                            <td className='second-td'>Sevillanas</td>
                        </tr>
                        <tr>
                            <td>TA</td>
                            <td className='second-td'>Tango Argentino</td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    )
}



export default Timetable;