import { Row, Col } from 'reactstrap';
import "./Leaderbird.scss";
import { Component, useEffect, useState } from 'react';
import {
    FacebookShareButton, TwitterShareButton,
    FacebookIcon, TwitterIcon
} from "react-share";
import {
    getGlobalLeaderbird, getFlockLeaderbird, getEventLeaderbird,
    getGlobalRank, getFlockRank, getEventRank
} from '../../utils/api.js';

const Leaderbird = () => {
    const [theLbDat, setLbDat] = useState([{ name: null, bird: null, dist: null }]);
    const [yourRank, setRank] = useState([{rank: 51, name: null, bird: null, dist: null}]);
    const [quote, setQuote] = useState("hi");

    const [type, setType] = useState(null);

    function lB(type) {

        setType(type);

        if (yourRank.rank < 50) {
            document.getElementById("yourRank").style.height = "0%";
            document.getElementById("divider").className = "section-divider-invisible";
        }
        else {
            document.getElementById("yourRank").style.height = "auto";
            document.getElementById("divider").className = "section-divider";
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
            getGlobalLeaderbird().then((r) => setLbDat(r));
            getGlobalRank().then((r) => setRank(r));
        }
        else if (type === "Flock") {
            getFlockLeaderbird().then((r) => setLbDat(r));
            getFlockRank().then((r) => setRank(r));
        }
        else {
            getEventLeaderbird().then((r) => setLbDat(r));
            getEventRank().then((r) => setRank(r));
        }
    }, [type]);

    useEffect(() => lB("Global"), []);

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
                        <Col xs="4"><button
                            id="eventButton" className='single-button'
                            onClick={() => doNothing(this, "Event")/*lB(this, "Event")*/}>Event</button></Col>
                    </Row>
                </div>

                <hr className="section-divider" />

                <div id="leaderbirdFrame" className="leaderbird">
                    <table id="theLeaderbird"><tbody>
                        <tr>
                            <th className="rank rankH">Rank</th>
                            <th className="name">Name</th>
                            <th className="bName">Bird</th>
                            <th className="dist">Distance</th>
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

function doNothing(obj, type) {
    console.log(type);
}

function splitUName(uName) {
    var ret = "";
    if (uName == null){
        return ret;
    }
    for (var i = 0; i < uName.length; i++) {
        if (i % 12 == 0 && i != 0) {
            ret += "\n";
        }
        ret += uName.charAt(i);
    }
    return ret;
}
