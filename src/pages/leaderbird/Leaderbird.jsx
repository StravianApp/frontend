import { Row, Col } from 'reactstrap';
import "./Leaderbird.scss";
import { useEffect, useState } from 'react';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from "react-share";
import { getGlobalLeaderbird, getFlockLeaderbird, getDisUnit } from '../../utils/api.js';
import Popup from 'reactjs-popup';

const Leaderbird = () => {
    const [theLbDat, setLbDat] = useState([]);
    const [yourRank, setRank] = useState([]);
    const [quote, setQuote] = useState("hi");
    const [disUnit, setDisUnit] = useState("");

    const [type, setType] = useState(null);

    useEffect(() => {
        if (!type) return;
        if (type === "Global") {
            getGlobalLeaderbird().then((r) => { setLbDat(r[0]); setRank(r[1]) });
        }
        else if (type === "Flock") {
            getFlockLeaderbird().then((r) => { setLbDat(r[0]); setRank(r[1]) });
        }
        else {
            //getEventLeaderbird().then((r) => {setLbDat(r[0]); setRank(r[1])});
            // Can be expanded to event leaderbirds
        }
    }, [type]);

    useEffect(() => setType("Global"), []);

    useEffect(() => getDisUnit().then((r) => setDisUnit(r)), []);

    useEffect(() => setQuote(`${yourRank.name} and their bird, ${yourRank.bird}, has ranked ${yourRank.rank} in the ${type} leaderbird!`), [yourRank, type]);

    return <div className="page-container">
        <div className="page-header">Leaderbird</div>
        <div className="leaderbird-main page-main">
            <div className="parent">
                <div id="buttons" className="buttons2">
                    <Row>
                        <Col xs="4"><button
                            className={`single-button${type === "Global" ? "-selected" : ""}`}
                            onClick={() => setType("Global")}>Global</button></Col>
                        <Col xs="4"><button
                            className={`single-button${type === "Flock" ? "-selected" : ""}`}
                            onClick={() => setType("Flock")}>Flock</button></Col>
                        <Col xs="4">
                            <Popup className='pop-up' trigger={<button
                                className={`single-button${type === "Event" ? "-selected" : ""}`}>Event</button>}>
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

                {yourRank.rank > 50 && (
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
                )}

                <br />

                <div id="buttons" className="buttons">
                    <Row>
                        <Col>
                            <div className='facebook-button soc-med-button'> <FacebookShareButton
                                url={"https://stravian.app"}
                                quote={quote}
                                hashtag={"#Stravian"}>{<FacebookIcon size={32} round={true} />}Share on Facebook</FacebookShareButton> </div> </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='twitter-button soc-med-button'> <TwitterShareButton
                                url={"https://stravian.app"}
                                hashtags={["Stravian"]}
                                title={quote}>
                                {<TwitterIcon size={32} round={true} />}Share on Twitter</TwitterShareButton> </div> </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
};

export default Leaderbird;

function splitUName(uName) {
    var ret = "";
    if (uName == null) {
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