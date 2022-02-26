import "./UserStats.scss";
import { Component } from 'react';
import {
    getUserAchievements,
    getUserStats
} from '../../utils/api.js';
import { getUsername } from "../../utils/login";
import { getDisUnit } from "../../utils/api.js";

const disUnit = getDisUnit();
class Pg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: getUserStats(),
            achievements: getUserAchievements()
        }
    }

    componentDidMount() {
        this.setState({
            stats: getUserStats(),
            achievements: getUserAchievements()
        });
    }

    render() {
        return (<>
            <div className="content-box username">
                <div className="subtitle_">Your Username</div>
                <div className="text_">
                    Your username is <b>{getUsername()}</b>.
                </div>
            </div>

            <hr className="section-divider" />

            <div className="content-box">
                <div className="subtitle_">Distance travelled</div>
                <div className="distance-stat text_"><div className="period">This week</div><div className="stat">{this.state.stats.week} {disUnit}</div></div>
                <div className="distance-stat text_"><div className="period">This month</div><div className="stat">{this.state.stats.month} {disUnit}</div></div>
                <div className="distance-stat text_"><div className="period">This year</div><div className="stat">{this.state.stats.year} {disUnit}</div></div>
                <div className="distance-stat text_"><div className="period">All time</div><div className="stat">{this.state.stats.allTime} {disUnit}</div></div>
            </div>

            <hr className="section-divider" />

            <div className="content-box achievements">
                <div className="subtitle_">Achievements</div>
                {this.state.achievements.map((achievement) => (
                    <div className="achievement text_">
                        <div className="title">{achievement.name}</div>
                        <div className="description">{achievement.summary}</div>
                    </div>
                ))}

            </div>
        </>




            // <div className="parent">
            //     <div id="statsFrame" className="stats">
            //         <div class="notBr">
            //         <table>
            //             <tr>
            //                 <th>Time Frame</th>
            //                 <th>Distance Travelled</th>
            //             </tr>
            //             <tr>
            //                 <td>This Week</td>
            //                 <td>{this.state.stats.week}</td>
            //             </tr>
            //             <tr>
            //                 <td>This Month</td>
            //                 <td>{this.state.stats.month}</td>
            //             </tr>
            //             <tr>
            //                 <td>This Year</td>
            //                 <td>{this.state.stats.year}</td>
            //             </tr>
            //             <tr>
            //                 <td>Since Hatching</td>
            //                 <td>{this.state.stats.allTime}</td>
            //             </tr>
            //         </table>
            //         </div>
            //         <div class="break"></div>
            //         <div class="notBr">
            //         <table>
            //             <tr>
            //                 <th>Achievement</th>
            //                 <th>Summary</th>
            //             </tr>
            //             {this.state.achievements.map((val,key) => {
            //             return(
            //                 <tr>
            //                     <td>{val.name}</td>
            //                     <td>{val.summary}</td>
            //                 </tr>
            //             )
            //         })}
            //         </table> 
            //         </div>   
            //     </div>
            // </div>
        );
    }
}



const UserStats = () => (
    <div className="page-container">
        <div className="page-header">User Stats</div>
        <div className="stats-main page-main">
            <Pg />
        </div>
    </div>
)

export default UserStats;