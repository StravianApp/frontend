import './hatch.scss';
import unhatched from './assets/unhatched.png';
import parthatched from './assets/parthatched.png';
import hatched from './assets/hatched.png';
import React, { useEffect, useState } from 'react';
import { hatchEgg, getBirdname, birdAssigned } from '../../utils/api';

const Hatch = () => {
    const [hatchCount, setHatchCount] = useState(0);
    const [caption, setCaption] = useState("Tap the egg to hatch your bird");

    useEffect(() => {
        if (hatchCount < 3) setCaption("Tap the egg to hatch your bird");
        else if (hatchCount > 10) {
            hatchEgg().then((r) => {
                if (r) {
                    getBirdname().then((birdname) => {
                        setCaption("Meet your bird, " + birdname);
                        setTimeout(() => {
                            window.location.href = '/app';
                        }, 7000);
                    })
                }
                else setCaption("An error occurred... Please restart Stravian and try again later.");
            });
        }
        else setCaption("Keep tapping the egg!")
    }, [hatchCount]);

    useEffect(() => {
        birdAssigned().then((b) => {if (b) window.location.href = '/app'});
        
    }, []);

    const hatchTap = () => (hatchCount <= 10) && setHatchCount(hatchCount + 1);

    return (
        <div className="hatch-main">
            <div className="subtitle_">
                {caption}
            </div>
            <div className="egg" onClick={hatchTap}>
                <img src={hatchCount < 5 ? unhatched : hatchCount > 10 ? hatched : parthatched} alt="Egg" />
            </div>



            {/* {hatchCount > 10 && <small className="photo-credit">"Greater Spotted Eagle (Aquila clanga)" by Sergey Pisarevskiy is licensed under CC BY-NC-SA 2.0</small>} */}
        </div>)
};

export default Hatch;