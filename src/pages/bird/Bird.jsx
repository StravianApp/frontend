import "./bird.scss";
import { getBirdfact, getBirdname } from '../../utils/api';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import React from 'react';
import 'leaflet/dist/leaflet.css';
const birdname = getBirdname();
const fact = getBirdfact();
const position = [51.505, -0.09]

const Bird = () => {

    return <div className='settwings-main'>
        <div className='title'>
            {birdname}
        </div>
        <div className='subwords'>
            <b>Did you know?</b>
        </div>
        <div className='words'>
            {fact}
        </div> 
        <div  className='map'>
        <MapContainer  center={position} zoom={13} scrollWheelZoom={false} style={{ width: "300px", height: "300px" }} >
            <Marker position={position}> </Marker>
            <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        </MapContainer>
        </div>
    </div>
}

export default Bird;