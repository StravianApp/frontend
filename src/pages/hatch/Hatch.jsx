import './hatch.scss';
import bird from './assets/bird.png';
import notbird from './assets/notbird.png';
import unhatched from './assets/unhatched.png';
import parthatched from './assets/parthatched.png';
import hatched from './assets/hatched.png';
import React, { useState } from 'react';
import { getBirdname } from '../../utils/api';
const Birdname = getBirdname();


/* Ideas - change the graphics so they don't suck, image of the bird that isn't generic, perhaps use a picture of the eagle's egg in a nest, make the egg shake, redirect to bird page afterwards? */
const Hatch = () => {
    const [hatchCount, setHatchCount] = useState(0);
    return <div className="hatch-main">
        <div className="main-section">
            <div className="message-caption">
                {hatchCount < 3 ? "Tap the egg to hatch your bird" : hatchCount > 10 ? "Meet your bird, " + Birdname : "Keep going!"}
            </div>
            <div className="bird">
                <img src={hatchCount > 10 ? bird : notbird} alt="A truly majestic bird" />
            </div>
            <div className="egg" onClick={() => setHatchCount(hatchCount + 1)}>
                <img src={hatchCount < 5 ? unhatched : hatchCount > 10 ? hatched : parthatched} alt="Egg" />
            </div>
        </div>
    </div>
    //redirect to bird page
};

export default Hatch;