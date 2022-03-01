import {Row, Col} from 'reactstrap';
import "./Leaderbird.scss";
import { Component } from 'react';
import { FacebookShareButton } from "react-share";
import { getGlobalLeaderbird, getFlockLeaderbird, getGlobalRank, getFlockRank } from '../../utils/api.js';

class Board extends Component{
    constructor(props) {
        super(props);
        this.state = {theLbDat: getLeaderbird(5),
        yourRank: getRank(5),
        quote: ""}
    }

    componentDidMount(){
        globalLb(this);
    }

    render(){
    return (
        <div className="parent">
            <div id="leaderbirdFrame" className="leaderbird">
                <table id="theLeaderbird"><tbody>
                    <tr>
                        <th className="rank rankH">Rank</th>
                        <th className="name">Name</th>
                        <th className="bName">Bird</th>
                        <th className="dist">Distance</th>
                    </tr>
                    {this.state.theLbDat.map((val, key) => {
                        if(key.valueOf() < 50){
                            if(key.valueOf() + 1 === this.state["yourRank"][0].rank){
                                return (    
                                    <tr key={key}>
                                        <td className="rank"
                                        style={{color: "orange"}}>{key.valueOf() +1}</td>
                                        <td className="name"
                                        style={{color: "green"}}>{splitUName(val.name)}</td>
                                        <td className="bName"
                                        style={{color: "green"}}>{val.bird}</td>
                                        <td className="dist"
                                        style={{color: "green"}}>{val.dist}</td>
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
                    {this.state.yourRank.map((val,key) => {
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

            <div id="buttons" className="buttons">
                <Row>
                    <Col><FacebookShareButton classname='single-button'
                    url={"www.google.com"}
                    quote={this.state["quote"]}
                    hashtag={"#Stravian"}>Share on FaceBook!</FacebookShareButton></Col>
                </Row>

                <Row>
                    <Col xs = "4"><button 
                    id = "globalButton"  className='single-button'
                    onClick={() => globalLb(this)}>Global</button></Col>
                    <Col xs = "4"><button
                    id = "flockButton"  className='single-button'
                    onClick={() => flockLb(this)}>Flock</button></Col>
                    <Col xs = "4"><button
                    //this doesn't work?? 
                    id = "eventButton"  className='single-button'
                    onClick={() => eventLb(this)}>Event</button></Col>
                </Row>
            </div>
        </div>
    );
    }
}

const Leaderbird = () => (
    <div className="page-container">
        <div className="page-header">Leaderbird</div>
        <div className="leaderbird-main page-main">    
            <div id="subtitle_" className="subtitle_">
                <div>Global</div>
            </div>
            <Board />
        </div>
    </div>

)
export default Leaderbird;

function globalLb(obj){
    document.getElementById("subtitle_").innerText = "Global";
    obj.setState({theLbDat: getLeaderbird(5),
        yourRank: getRank(5),
        quote: `${obj.state["yourRank"][0].name} and their bird, ${obj.state["yourRank"][0].bird}, ranked ${obj.state["yourRank"][0].rank} globally!`});
    document.getElementById("globalButton").style.borderStyle = "inset";
    document.getElementById("flockButton").style.borderStyle = "outset";
    document.getElementById("eventButton").style.borderStyle = "outset";
    if(getRank(5)[0].rank < 50){
        document.getElementById("yourRank").style.height="0%";
        document.getElementById("divider").style.width="0%";
    }
    else{
        document.getElementById("yourRank").style.height="auto";
        document.getElementById("divider").style.width="75%";
    }
}

function flockLb(obj){
    document.getElementById("subtitle_").innerText = "Flock";
    obj.setState({theLbDat: getLeaderbird(6),
        yourRank: getRank(6),
        quote: `${obj.state["yourRank"][0].name} and their bird, ${obj.state["yourRank"][0].bird}, ranked ${obj.state["yourRank"][0].rank} amongst their flock!`});
    document.getElementById("globalButton").style.borderStyle = "outset";
    document.getElementById("flockButton").style.borderStyle = "inset";
    document.getElementById("eventButton").style.borderStyle = "outset";
    if(getRank(6)[0].rank < 50){
        document.getElementById("yourRank").style.height="0%";
    }
    else{
        document.getElementById("yourRank").style.height="auto";
    }
}
function eventLb(obj){
}

function getLeaderbird(type){
    if(type === 5/*Leaderbirds.Global*/){
        //getGlobalLeaderbird();
        return getGlobalLeaderbird();
    }
    if(type === 6/*Leaderbirds.Flock*/){
        //stub for backend.get flock leadbird
        //getFlockLeaderbird();
        return getFlockLeaderbird();
    }
    else{
        return [];
    }
};

function getRank(type){
    if(type === 5/*Leaderbirds.Global*/){
        return getGlobalRank();
    }
    if(type === 6/*Leaderbirds.Flock*/){
        //stub for backend.get flock leadbird
        return getFlockRank();
    }
    else{
        return [];
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
