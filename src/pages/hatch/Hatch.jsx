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
    const [caption, setCaption] = useState("Tap the egg to hatch your bird");

    useEffect(() => {
        if (hatchCount < 3) setCaption("Tap the egg to hatch your bird");
        else if (hatchCount > 10) {
            setCaption("Meet your bird, " + birdname);
            setTimeout(() => {
                assignBird(birdname);
                window.location.href = '/app';
            }, 7000);
        }
        else setCaption("Keep tapping the egg!")
    }, [hatchCount]);

    const hatchTap = () => (hatchCount <= 10) && setHatchCount(hatchCount + 1);

    return (
        <div className="hatch-main">
            <div className="subtitle_">
                {caption}
            </div>

            <div className="egg" onClick={hatchTap}>
                <img src={hatchCount < 5 ? unhatched : hatchCount > 10 ? hatched : parthatched} alt="Egg" />
            </div>



        </div>)
};

export default Hatch;