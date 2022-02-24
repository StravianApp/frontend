import "./nest.scss";
import { getBirdfact, getBirdname, getLocation, getAggDistance } from '../../utils/api';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from "leaflet";
const birdname = getBirdname();
const fact = getBirdfact();
const position = getLocation();
const ICON = new icon({
    iconUrl: require("./assets/icon.png"),
    iconSize: [10, 10],
});
const distance = getAggDistance();


const Nest = () => {
    return <div className='nest-main'>
        <div className='title_'>
            {birdname}
        </div>

        <div className='subtitle_'>
            Screech - hi there - screech
        </div>

        <div className='text_'>
            I'm {birdname}, your friend and a greater spotted eagle!<br></br>
            This week, I've flown {distance}km. track me down below!
        </div> 

        <div className='subtitle_'>
            <b>Did you know?</b>
        </div>


        <div className='text_'>
            {fact}
        </div> 

        <div className='subtitle_'>
            <b>Bird tracking</b>
        </div>
        <div  className='map'>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ width: "300px", height: "300px" }} >
            <Marker position={position} icon={ICON}> </Marker>
            <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        </MapContainer>
        </div>
    </div>
}

export default Nest;