import './flock.scss';
import {Row, Col} from 'reactstrap';
import logo from '../../assets/logos/full-text-1.png';


const Flock = () => (
    <div className='flock-main'>
        <Row>
            <Col>Friend name</Col>
            <Col>Associated bird</Col>
            <Col>Combined miles</Col>
        </Row>
    </div>
)

export default Flock;