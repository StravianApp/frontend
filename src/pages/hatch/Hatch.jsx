import './hatch.scss';
import unhatched from './assets/unhatched.png';
import parthatched from './assets/parthatched.png';
import hatched from './assets/hatched.png';
import React, { useState } from 'react';



/* Ideas - change the graphics so they don't suck, change the bird name so that it's the actual name of your bird, image of the bird that isn't generic, perhaps use a picture of the eagle's eggs, in a nest, make the egg shake */
const Hatch = () => {
    const [hatchCount, setHatchCount] = useState(0);
    return <div className="hatch-main">
        <div className="main-section">
            <div className="message-caption">
                {hatchCount < 3 ? "Tap the egg to hatch your bird" : hatchCount > 10 ? "Meet your bird" : "Keep going!"}
            </div>
            <div className="egg" onClick={() => setHatchCount(hatchCount + 1)}>
                <img src={hatchCount < 5 ? unhatched : hatchCount > 10 ? hatched : parthatched} alt="Egg" />
            </div>
        </div>
    </div>
};

export default Hatch;