import { Row, Col } from 'reactstrap';
import "./Leaderbird.scss";
import { useEffect, useState } from 'react';
import {
    FacebookShareButton, TwitterShareButton,
    FacebookIcon, TwitterIcon
} from "react-share";
import {
    getGlobalLeaderbird, getFlockLeaderbird, getEventLeaderbird,
    getDisUnit
} from '../../utils/api.js';
import Popup from 'reactjs-popup';

const Leaderbird = () => {
    const [theLbDat, setLbDat] = useState([]);
    const [yourRank, setRank] = useState([]);
    const [quote, setQuote] = useState("hi");
    const [disUnit, setDisUnit] = useState("");

    const [type, setType] = useState(null);

    function lB(type) {
        setType(type);
        
        if (yourRank.rank > 50) {
            document.getElementById("yourRank").style.height = "auto";
            document.getElementById("divider").className = "section-divider";
        }
        else {
            document.getElementById("yourRank").style.height = "0%";
            document.getElementById("divider").className = "section-divider-invisible";
        }
        document.getElementById("globalButton").className = "single-button";
        document.getElementById("flockButton").className = "single-button";
        document.getElementById("flockButton").className = "single-button";
        if (type === "Global") {
            document.getElementById("globalButton").className = "single-button-selected";
        }
        else if (type === "Flock") {
            document.getElementById("flockButton").className = "single-button-selected";
        }
        else if (type === "Event") {
            document.getElementById("eventButton").className = "single-button-selected";
        }
    }

    useEffect(() => {
        if (!type) return;
        if (type === "Global") {
            getGlobalLeaderbird().then((r) => {setLbDat(r[0]); setRank(r[1])});
        }
        else if (type === "Flock") {
            getFlockLeaderbird().then((r) => {setLbDat(r[0]); setRank(r[1])});
        }
        else {
            //getEventLeaderbird().then((r) => {setLbDat(r[0]); setRank(r[1])});
        }
    }, [type]);

    useEffect(() => lB("Global"), []);

    useEffect(() => 
    getDisUnit().then((r) => setDisUnit(r)));

    useEffect(() => setQuote(`${yourRank.name} and their bird, ${yourRank.bird}, has ranked ${yourRank.rank} in the ${type} leaderbird!`));

    function doNothing(type) {
        /*document.getElementById("globalButton").className = "single-button";
        document.getElementById("flockButton").className = "single-button";
        document.getElementById("eventButton").className = "single-button-selected";
        document.getElementById("yourRank").style.height = "0%";
        document.getElementById("divider").className = "section-divider-invisible";
        document.getElementById("theLeaderbirdFrame").style.height = "0%";
        document.getElementById("buttons").style.height = "0%";
        */
       console.log("NOTHING");
    }
    
    return <div className="page-container">
        <div className="page-header">Leaderbird</div>
        <div className="leaderbird-main page-main">
            <div className="parent">
                <div id="buttons" className="buttons2">
                    <Row>
                        <Col xs="4"><button
                            id="globalButton" className='single-button'
                            onClick={() => lB("Global")}>Global</button></Col>
                        <Col xs="4"><button
                            id="flockButton" className='single-button'
                            onClick={() => lB("Flock")}>Flock</button></Col>
                        <Col xs="4">
                            <Popup trigger={ <button
                                id="eventButton" className='single-button'>Event</button>}>
                                <div className='pop-up'>Coming soon!</div>
                            </Popup>
                        </Col>
                    </Row>
                </div>

                <hr className="section-divider" />

                <div id="leaderbirdFrame" className="leaderbird">
                    <table id="theLeaderbird"><tbody>
                        <tr>
                            <th className="rank rankH">Rank</th>
                            <th className="name">Name</th>
                            <th className="bName">Bird</th>
                            <th className="dist">Distance ({disUnit})</th>
                        </tr>
                        {theLbDat.map((val, key) => {
                            if (key.valueOf() < 50) {
                                if (key.valueOf() + 1 === yourRank.rank) {
                                    return (
                                        <tr className='YOU'
                                            key={key}>
                                            <td className="rank">{key.valueOf() + 1}</td>
                                            <td className="name">{splitUName(val.name)}</td>
                                            <td className="bName">{val.bird}</td>
                                            <td className="dist">{val.dist}</td>
                                        </tr>
                                    )
                                }
                                return (
                                    <tr key={key}>
                                        <td className="rank">{key.valueOf() + 1}</td>
                                        <td className="name">{splitUName(val.name)}</td>
                                        <td className="bName">{val.bird}</td>
                                        <td className="dist">{val.dist}</td>
                                    </tr>
                                )
                            }
                            return null;
                        })}
                    </tbody></table>
                </div>

                <hr id="divider" className="section-divider" />

                <div id="yourRank" className="yourRank" height="0%">
                    <table><tbody>
                        <tr>
                            <th className="rank rankH"> You! </th>
                            <th className="name">Name</th>
                            <th className="bName">Bird</th>
                            <th className="dist">Distance</th>
                        </tr>
                        <tr>
                            <td className="rank">{yourRank.rank}</td>
                            <td className="name">{splitUName(yourRank.name)}</td>
                            <td className="bName">{yourRank.bird}</td>
                            <td className="dist">{yourRank.dist}</td>
                        </tr>
                    </tbody></table>
                </div>

                <hr id="div1" className="section-divider" />

                <div id="buttons" className="buttons">
                    <Row>
                        <Col>
                            <button className='facebook-button soc-med-button'> <FacebookShareButton
                                url={"https://stravian.app"}
                                quote={quote}
                                hashtag={"#Stravian"}>{<FacebookIcon size={32} round={true} />}Share on FaceBook</FacebookShareButton> </button> </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button className='twitter-button soc-med-button'> <TwitterShareButton
                                url={"https://stravian.app"}
                                hashtags={["Stravian"]}
                                title={quote}>
                                {<TwitterIcon size={32} round={true} />}Share on Twitter</TwitterShareButton> </button> </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
};
export default Leaderbird;

function doNothing(type) {
    console.log(type);
}

function splitUName(uName) {
    var ret = "";
    if (uName == null){
        return ret;
    }
    for (var i = 0; i < uName.length; i++) {
        if (i % 12 === 0 && i !== 0) {
            ret += "\n";
        }
        ret += uName.charAt(i);
    }
    return ret;
}
