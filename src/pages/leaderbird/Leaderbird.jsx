import {Row, Col} from 'reactstrap';
import "./Leaderbird.scss";
import { Component, useEffect, useState } from 'react';
import { FacebookShareButton, TwitterShareButton,
        FacebookIcon, TwitterIcon } from "react-share";
import { getGlobalLeaderbird, getFlockLeaderbird, getEventLeaderbird,
    getGlobalRank, getFlockRank, getEventRank } from '../../utils/api.js';

// class Board extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {theLbDat: getLeaderbird(5),
//         yourRank: getRank(5),
//         quote: ""}
//     }

//     componentDidMount(){
//         lB(this, "Global");
//     }

//     render(){
//     return (
//         <div className="parent">
//             <div id="buttons" className="buttons2">
//                     <Row>
//                         <Col xs = "4"><button 
//                         id = "globalButton"  className='single-button'
//                         onClick={() => lB(this, "Global")}>Global</button></Col>
//                         <Col xs = "4"><button
//                         id = "flockButton"  className='single-button'
//                         onClick={() => lB(this, "Flock")}>Flock</button></Col>
//                         <Col xs = "4"><button
//                         id = "eventButton"  className='single-button'
//                         onClick={() => doNothing(this, "Event")/*lB(this, "Event")*/}>Event</button></Col>
//                     </Row>
//             </div>

//             <hr className="section-divider"/>

//             <div id="leaderbirdFrame" className="leaderbird">
//                 <table id="theLeaderbird"><tbody>
//                     <tr>
//                         <th className="rank rankH">Rank</th>
//                         <th className="name">Name</th>
//                         <th className="bName">Bird</th>
//                         <th className="dist">Distance</th>
//                     </tr>
//                     {this.state.theLbDat.map((val, key) => {
//                         if(key.valueOf() < 50){
//                             if(key.valueOf() + 1 === this.state["yourRank"][0].rank){
//                                 return (    
//                                     <tr className='YOU'
//                                     key={key}>
//                                         <td className="rank">{key.valueOf() +1}</td>
//                                         <td className="name">{splitUName(val.name)}</td>
//                                         <td className="bName">{val.bird}</td>
//                                         <td className="dist">{val.dist}</td>
//                                     </tr>
//                                 )   
//                             }
//                             return (
//                                 <tr key={key}>
//                                     <td className="rank">{key.valueOf() +1}</td>
//                                     <td className="name">{splitUName(val.name)}</td>
//                                     <td className="bName">{val.bird}</td>
//                                     <td className="dist">{val.dist}</td>
//                                 </tr>
//                             )
//                         }
//                     })}
//                 </tbody></table>
//             </div>
            
//             <hr id="divider" className="section-divider"/>

//             <div id="yourRank" className="yourRank">
//                 <table><tbody>
//                     <tr>
//                         <th className="rank rankH"> You! </th>
//                         <th className="name">Name</th>
//                         <th className="bName">Bird</th>
//                         <th className="dist">Distance</th>
//                     </tr>
//                     {this.state.yourRank.map((val,key) => {
//                         return(
//                             <tr key={key}>
//                                 <td className="rank">{val.rank}</td>
//                                 <td className="name">{splitUName(val.name)}</td>
//                                 <td className="bName">{val.bird}</td>
//                                 <td className="dist">{val.dist}</td>
//                             </tr>
//                         )
//                     })}
//                 </tbody></table>
//             </div>

//             <hr id="div1" className="section-divider"/>

//             <div id="buttons" className="buttons">
//                 <Row>
//                     <Col>
//                     <button className='facebook-button soc-med-button'> <FacebookShareButton
//                     url={"https://stravian.app"}
//                     quote={this.state["quote"]}
//                     hashtag={"#Stravian"}>{<FacebookIcon size={32} round={true} />}Share on FaceBook</FacebookShareButton> </button> </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                     <button className='twitter-button soc-med-button'> <TwitterShareButton
//                     url={"https://stravian.app"}
//                     hashtags={["Stravian"]}
//                     title={this.state["quote"]}>
//                         {<TwitterIcon size={32} round={true} />}Share on Twitter</TwitterShareButton> </button> </Col>
//                 </Row>
//             </div>
//         </div>
//     );
//     }
//}

const Leaderbird = () => {
    const [theLbDat, setDat] = useState({name: null, bird: null, dist: null});
    const [yourRank, setRank] = useState([]);
    const [quote, setQuote] = useState("hi");

    lB("Global");

    return <div className="page-container">
        <div className="page-header">Leaderbird</div>
        <div className="leaderbird-main page-main">    
        <div className="parent">
            <div id="buttons" className="buttons2">
                    <Row>
                        <Col xs = "4"><button 
                        id = "globalButton"  className='single-button'
                        onClick={() => lB(this, "Global")}>Global</button></Col>
                        <Col xs = "4"><button
                        id = "flockButton"  className='single-button'
                        onClick={() => lB(this, "Flock")}>Flock</button></Col>
                        <Col xs = "4"><button
                        id = "eventButton"  className='single-button'
                        onClick={() => doNothing(this, "Event")/*lB(this, "Event")*/}>Event</button></Col>
                    </Row>
            </div>

            <hr className="section-divider"/>

            <div id="leaderbirdFrame" className="leaderbird">
                <table id="theLeaderbird"><tbody>
                    <tr>
                        <th className="rank rankH">Rank</th>
                        <th className="name">Name</th>
                        <th className="bName">Bird</th>
                        <th className="dist">Distance</th>
                    </tr>
                    {theLbDat.map((val, key) => {
                        if(key.valueOf() < 50){
                            if(key.valueOf() + 1 === yourRank.rank){
                                return (    
                                    <tr className='YOU'
                                    key={key}>
                                        <td className="rank">{key.valueOf() +1}</td>
                                        <td className="name">{splitUName(val.name)}</td>
                                        <td className="bName">{val.bird}</td>
                                        <td className="dist">{val.dist}</td>
                                    </tr>
                                )   
                            }
                            return (
                                <tr key={key}>
                                    <td className="rank">{key.valueOf() +1}</td>
                                    <td className="name">{splitUName(val.name)}</td>
                                    <td className="bName">{val.bird}</td>
                                    <td className="dist">{val.dist}</td>
                                </tr>
                            )
                        }
                    })}
                </tbody></table>
            </div>
            
            <hr id="divider" className="section-divider"/>

            <div id="yourRank" className="yourRank">
                <table><tbody>
                    <tr>
                        <th className="rank rankH"> You! </th>
                        <th className="name">Name</th>
                        <th className="bName">Bird</th>
                        <th className="dist">Distance</th>
                    </tr>
                    {yourRank.map((val,key) => {
                        return(
                            <tr key={key}>
                                <td className="rank">{val.rank}</td>
                                <td className="name">{splitUName(val.name)}</td>
                                <td className="bName">{val.bird}</td>
                                <td className="dist">{val.dist}</td>
                            </tr>
                        )
                    })}
                </tbody></table>
            </div>

            <hr id="div1" className="section-divider"/>

            <div id="buttons" className="buttons">
                <Row>
                    <Col>
                    <button className='facebook-button soc-med-button'> <FacebookShareButton
                    url={"https://stravian.app"}
                    quote={this.state["quote"]}
                    hashtag={"#Stravian"}>{<FacebookIcon size={32} round={true} />}Share on FaceBook</FacebookShareButton> </button> </Col>
                </Row>
                <Row>
                    <Col>
                    <button className='twitter-button soc-med-button'> <TwitterShareButton
                    url={"https://stravian.app"}
                    hashtags={["Stravian"]}
                    title={this.state["quote"]}>
                        {<TwitterIcon size={32} round={true} />}Share on Twitter</TwitterShareButton> </button> </Col>
                </Row>
            </div>
        </div>
        </div>
    </div>
};
export default Leaderbird;

function lB(obj, type){
    //document.getElementById("subtitle_").innerText = type;
    /*obj.setState({
        theLbDat: getLeaderbird(type),
        yourRank: getRank(type),
        quote: `${obj.state["yourRank"][0].name} and their bird, ${obj.state["yourRank"][0].bird}, ranked ${obj.state["yourRank"][0].rank} in the ${type} leaderbird!`
    });*/

    getData(type);

    if(4 < 50){
        document.getElementById("yourRank").style.height="0%";
        document.getElementById("divider").className="section-divider-invisible";
    }
    else{
        document.getElementById("yourRank").style.height="auto";
        document.getElementById("divider").className="section-divider";
    }
    document.getElementById("globalButton").className = "single-button";
    document.getElementById("flockButton").className = "single-button";
    document.getElementById("flockButton").className = "single-button";
    if(type === "Global"){
        document.getElementById("globalButton").className = "single-button-selected";
    }
    else if(type === "Flock"){
        document.getElementById("flockButton").className = "single-button-selected";
    }
    else if(type === "Event"){
        document.getElementById("eventButton").className = "single-button-selected";
    }
}

function doNothing(obj, type){
    console.log(type);
}

function getData(type){
    if(type === "Global" || type === 5/*Leaderbirds.Global*/){
        useEffect(() => {
            getGlobalLeaderbird().then((r) => setLbDat(r));
            getGlobalRank.then((r) => setRank(r));
        }, []);
    }
    if(type === "Flock" || type === 6/*Leaderbirds.Flock*/){
        useEffect(() => {
            getFlockLeaderbird().then((r) => setLbDat(r));
            getFlockRank.then((r) => setRank(r));
        }, []);
    }
    else{ //type === "Event"
        useEffect(() => {
            getEventLeaderbird().then((r) => setLbDat(r));
            getEventRank.then((r) => setRank(r));
        }, []);
    }
};

function getRank(type){
    if(type === 5 || type === "Global"/*Leaderbirds.Global*/){
        useEffect(() => {
            getFlockRank.then((r) => setRank(r));
        }, []);
    }
    if(type === 6 || type === "Flock"/*Leaderbirds.Flock*/){
        useEffect(() => {
            getFlockRank.then((r) => setRank(r));
        }, []);
    }
    else{
        useEffect(() => {
            getEventRank.then((r) => setRank(r));
        }, []);
    }
}

function splitUName(uName){
    var ret = "";
    for(var i = 0; i < uName.length; i++){
        if(i % 12 == 0 && i != 0){
            ret += "\n";
        }
        ret += uName.charAt(i);
    }
    return ret;
}
