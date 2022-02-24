import "./bird.scss";
import { getBirdfact, getBirdname } from '../../utils/api';
const birdname = getBirdname();
const fact = getBirdfact();

const Bird = () => {
    return <div className='settwings-main'>
        <div className='title'>
            {birdname}
        </div>
        <div className='subtitle'>
            Did you know?
        </div>
        <div className='words'>
            {fact}
        </div> 
    </div>
}

export default Bird;