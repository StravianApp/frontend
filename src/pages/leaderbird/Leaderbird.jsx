import {Card, Row, Col} from 'reactstrap';
import "./Leaderbird.scss";
import { Component } from 'react';
import {
    FacebookShareButton
} from "react-share";
import {
    getGlobalLeaderbird,
    getFlockLeaderbird,
    getGlobalRank,
    getFlockRank
} from '../../utils/api.js';

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
        <div>
            <div id="leaderbirdFrame" class="leaderbird">
                <table id="theLeaderbird">
                    <tr>
                        <th class="rank">Rank</th>
                        <th>Name</th>
                        <th>Bird</th>
                        <th>Distance</th>
                    </tr>
                    {this.state.theLbDat.map((val, key) => {
                        if(key.valueOf() < 50){
                            if(key.valueOf() + 1 == this.state["yourRank"][0].rank){
                                return (    
                                    <tr key={key}>
                                        <td class="rank"
                                        style={{color: "red"}}>{key.valueOf() +1}</td>
                                        <td>{val.name}</td>
                                        <td>{val.bird}</td>
                                        <td>{val.dist}</td>
                                    </tr>
                                )   
                            }
                            return (
                                <tr key={key}>
                                    <td class="rank">{key.valueOf() +1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.bird}</td>
                                    <td>{val.dist}</td>
                                </tr>
                            )
                        }
                    })}
                </table>
            </div>

            <div id="yourRank" class="yourRank">
                <table>
                    {this.state.yourRank.map((val,key) => {
                        return(
                            <tr key={key}>
                                <td>{val.rank}</td>
                                <td>{val.name}</td>
                                <td>{val.bird}</td>
                                <td>{val.dist}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>

            <div id="buttons" class="buttons">
                <Row>
                    <Col><FacebookShareButton
                    url="www.google.com"
                    quote={this.state["quote"]}
                    hashtag={"#Stravian"}>Share on FaceBook!</FacebookShareButton></Col>
                </Row>
                <Row>
                    <Col xs = "4"><button 
                    id = "globalButton"
                    onClick={() => globalLb(this)}>Global</button></Col>
                    <Col xs = "4"><button
                    id = "flockButton"
                    onClick={() => flockLb(this)}>Flock</button></Col>
                    <Col xs = "4"><button
                    id = "eventButton"
                    onClick={() => eventLb(this)}>Event</button></Col>
                </Row>
            </div>
        </div>
    );
    }
}

const Leaderbird = () => (
    <div class="page">
        <div id="title" class="title">
            <div>Leaderbird</div>
        </div>
        
        <div id="subTitle" class="subTitle">
            <div>Global</div>
        </div>
            
        <Board />
    </div>

)
export default Leaderbird;

function globalLb(obj){
    document.getElementById("subTitle").innerText = "Global";
    obj.setState({theLbDat: getLeaderbird(5),
        yourRank: getRank(5),
        quote: `${obj.state["yourRank"][0].name} and their bird, ${obj.state["yourRank"][0].bird}, ranked ${obj.state["yourRank"][0].rank} globally!`});
    document.getElementById("globalButton").style.borderStyle = "inset";
    document.getElementById("flockButton").style.borderStyle = "outset";
    document.getElementById("eventButton").style.borderStyle = "outset";
    if(getRank(5)[0].rank < 50){
        document.getElementById("yourRank").style.height="0%";
    }
    else{
        document.getElementById("yourRank").style.height="auto"; 
    }
}

function flockLb(obj){
    document.getElementById("subTitle").innerText = "Flock";
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
    /*document.getElementById("subTitle").innerText = "Event";
    obj.setState({theLbDat: getLeaderbird(7),
        yourRank: getRank(7),
        quote: `${obj.state["yourRank"][0].name} and their bird, ${obj.state["yourRank"][0].bird}, ranked ${obj.state["yourRank"][0].rank} in this event!`});
    document.getElementById("globalButton").style.borderStyle = "outset";
    document.getElementById("flockButton").style.borderStyle = "outset";
    document.getElementById("eventButton").style.borderStyle = "inset";
    if(obj.state["yourRank"][0].rank < 50){
        document.getElementById("yourRank").style.height="0%";
    }*/
    //Don't do any of this, just send a bubble saying there are no events yet
}

function getLeaderbird(type){
    if(type === 5/*Leaderbirds.Global*/){
        //getGlobalLeaderbird();
        return [{name: "Fred", bird: "Kal", dist: 2.3},
        {name: "Robert", bird: "Lucky", dist: 2.0},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4},
        {name: "Lucy", bird: "Lucky", dist: 1.4}];
    }
    if(type === 6/*Leaderbirds.Flock*/){
        //stub for backend.get flock leadbird
        //getFlockLeaderbird();
        return [{name: "Fred", bird: "Kal", dist: 2.3},
        {name: "Robert", bird: "Lucky", dist: 2.0}];
    }
    else{
        return [];
    }
};

function getRank(type){
    if(type === 5/*Leaderbirds.Global*/){
        //getGlobalRank();
        return [{rank: 2, name: "Robert", bird: "Lucky", dist: 2.0},];
    }
    if(type === 6/*Leaderbirds.Flock*/){
        //stub for backend.get flock leadbird
        //getFlockRank();
        return [{rank: 2, name: "Robert", bird: "Lucky", dist: 2.0}];
    }
    else{
        return [];
    }
}
