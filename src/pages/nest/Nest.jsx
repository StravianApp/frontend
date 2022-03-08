import "./nest.scss";
import { getBirdname, getDisUnit, getLocation, getAggDistance, getDistance } from '../../utils/api';
import { getBirdfact } from "../../utils/birdfacts";
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from "leaflet";
import bird1 from './assets/bird.png';
import bird2 from './assets/bird2.png';

import { useEffect, useState } from "react";
const fact = getBirdfact();

const ICON = new icon({
    iconUrl: require("./assets/icon.png"),
    iconSize: [35, 42],
});



const bird = Math.random()>0.5 ? bird1 : bird2;

function SetView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
};


const Nest = () => {

    const [distance, setDistance] = useState(0);
    
    const showUpdatedDistance = () => {
        getDistance().then((v) => setDistance(v));
    };

    const [alldistance, setAggDistance] = useState(0);
    
    const showUpdatedAggDistance = () => {
        getAggDistance().then((v) => setAggDistance(v));
    };

    useEffect(() => {
        showUpdatedDistance();
        showUpdatedAggDistance();
    }, []);


     
    const [disUnit, setDisUnit] = useState('kilometres');
    
    const showUpdatedDisUnit = async () => {
        const unit = await getDisUnit()
        setDisUnit(unit);
    };


    const [position, setPosition] = useState([0, 0]);
    
    const showUpdatedPosition = () => {
        getLocation().then((v) => setPosition(v));
    };

    useEffect(() => {
        showUpdatedDisUnit();
        showUpdatedPosition();
    }, []);

    const [birdname, setBirdName] = useState('');
    
    useEffect(() => {
        getBirdname().then((birdName) => setBirdName(birdName));
    }, []);

    return (
        <div className="page-container">
            
            <div className="page-header">
                {birdname}
            </div>

            <div className='nest-main page-main'>
                <div className="content-box">
                <img className="bird" src={bird} alt="Eagle" />
                    <div className='text_'>
                        <i>Screech</i> hi there <i>screech</i>! I'm <b>{birdname}</b>, your friend and a greater spotted eagle!<br></br> This week, I've flown {distance} {disUnit}. Overall, I've flown {alldistance} {disUnit}! <br></br> Track me down below!
                    </div>
                </div>

                <hr className="section-divider" />

                <div className="content-box">
                    <div className='subtitle_'>
                        Did you know?
                    </div>
                    <div className='text_'>
                        {fact}
                    </div>
                </div>

                <hr className="section-divider" />

                <div className="content-box">
                    <div className='subtitle_'>
                        Tracking
                    </div>
                    <div className='map'>
                        <MapContainer center={position} zoom={8} scrollWheelZoom={false} style={{ width: "300px", height: "300px" }} >
                            <SetView coords={position} />
                            <Marker position={position} icon={ICON}> </Marker>
                            <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nest;