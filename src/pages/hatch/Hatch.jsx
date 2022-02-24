import './hatch.scss';
import bird from './assets/bird.png';
import unhatched from './assets/unhatched.png';
import parthatched from './assets/parthatched.png';
import hatched from './assets/hatched.png';
import React, { useEffect, useState } from 'react';
import { assignBird, getBirdname } from '../../utils/api';
const birdname = getBirdname();


const Hatch = () => {
    const [hatchCount, setHatchCount] = useState(0);

    useEffect(() => {
        if (hatchCount > 10) {
            setTimeout(() => {
                assignBird(birdname);
                window.location.href = '/app';
            }, 8000);
        }
    }, [hatchCount]);

    return <div className="hatch-main">

            <div className="title">
                {hatchCount < 3 ? "Tap the egg to hatch your bird" : hatchCount > 10 ? "Meet your bird, " + birdname : "Keep tapping the egg!"}
            </div>

            <div className="bird" onClick={() => setHatchCount(hatchCount + 1)}>
                <img src={hatchCount > 10 ? bird : null} />
            </div>
            <div className="egg" onClick={() => {if (hatchCount <= 10) setHatchCount(hatchCount + 1)}}>
                <img src={hatchCount < 5 ? unhatched : hatchCount > 10 ? hatched : parthatched} alt="Egg" />
            </div>

        {hatchCount > 10 && <small className="photo-credit">"Greater Spotted Eagle (Aquila clanga)" by Sergey Pisarevskiy is licensed under CC BY-NC-SA 2.0</small>}
    </div>
};

export default Hatch;