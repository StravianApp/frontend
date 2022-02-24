import "./UserStats.scss";
import { Component } from 'react';
import {
    getUserAchievements,
    getUserStats
} from '../../utils/api.js';

class Pg extends Component{
    constructor(props){
        super(props);
        this.state = {stats: getUserStats(),
        achievements: getUserAchievements()}
    }

    componentDidMount(){
        this.setState({stats: getUserStats(),
            achievements: getUserAchievements()
        });
    }

    render() {
        return (
            <div class="parent">
                <div id="statsFrame" class="stats">
                    <div class="notBr">
                    <table>
                        <tr>
                            <th>Time Frame</th>
                            <th>Distance Travelled</th>
                        </tr>
                        <tr>
                            <td>This Week</td>
                            <td>{this.state.stats.week}</td>
                        </tr>
                        <tr>
                            <td>This Month</td>
                            <td>{this.state.stats.month}</td>
                        </tr>
                        <tr>
                            <td>This Year</td>
                            <td>{this.state.stats.year}</td>
                        </tr>
                        <tr>
                            <td>Since Hatching</td>
                            <td>{this.state.stats.allTime}</td>
                        </tr>
                    </table>
                    </div>
                    <div class="break"></div>
                    <div class="notBr">
                    <table>
                        <tr>
                            <th>Achievement</th>
                            <th>Summary</th>
                        </tr>
                        {this.state.achievements.map((val,key) => {
                        return(
                            <tr>
                                <td>{val.name}</td>
                                <td>{val.summary}</td>
                            </tr>
                        )
                    })}
                    </table> 
                    </div>   
                </div>
            </div>
        );
    }
}



const UserStats = () => (
    <div class="page"> 
        <div id="title" class="title">
            <div>All About You</div>
        </div>
        <Pg />
    </div>
)

export default UserStats;