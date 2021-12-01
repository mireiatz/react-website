import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';

function MapContainer() {
    const location1 =
        [{
            name: "Escuela de baile Fenómeno Danza, Bilbao",
            location: {
                lat: 43.2721325,
                lng: -2.945791
            }
        }];
    const location2 =
        [{
            name: "Escuela de baile Fenómeno Danza, Santurtzi",
            location: {
                lat: 43.319563,
                lng: -3.0467799
            }
        }];
    const mapStyles = {
        height: "300px",
        width: "100%"
    };

    const defaultCenter1 = {
        lat: 43.2721325, lng: -2.945791
    }

    const defaultCenter2 = {
        lat: 43.319563, lng: -3.0467799
    }

    return (
        <>
            <div className='locations'>
                <h4>En Bilbao</h4>
                <LoadScript googleMapsApiKey='AIzaSyBAPEXujOHvjJ3PyLfbm75KdYvDek6-fg4'>
                    <Link to={{ pathname: 'https://goo.gl/maps/dFssLZHwgcieyZjG7' }} target='_blank'>
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={15}
                            center={defaultCenter1}>
                            {
                                location1.map(item => {
                                    return (
                                        <Marker key={item.name} position={item.location} />
                                    )
                                })
                            }
                        </GoogleMap>
                    </Link>
                </LoadScript>
                <div className='locations__each-address'>
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <p>Ramón y Cajal Etorbidea, 14</p>
                        <p>48014 Bilbo</p>
                    </div>
                </div>
            </div>
            <div className='locations'>
                <h4>En Santurce</h4>
                <LoadScript googleMapsApiKey='AIzaSyBAPEXujOHvjJ3PyLfbm75KdYvDek6-fg4'>
                    <Link to={{ pathname: 'https://goo.gl/maps/cYRakrWqSwpEoTQ38' }} target='_blank'>
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={15}
                            center={defaultCenter2}>
                            {
                                location2.map(item => {
                                    return (
                                        <Marker key={item.name} position={item.location} />
                                    )
                                })
                            }
                        </GoogleMap>
                    </Link>
                </LoadScript>
                <div className='locations__each-address'>
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <p>Pol. Ind. El Árbol, 19</p>
                        <p>48980 Santurtzi</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MapContainer;