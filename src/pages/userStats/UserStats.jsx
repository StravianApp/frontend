import "./UserStats.scss";
import { useEffect, useState } from 'react';
import {
    getUserAchievements,
    getUserStats,
    getDisUnit
} from '../../utils/api.js';
import { getUsername } from "../../utils/login";


const UserStats = () => {
    const [stats, setStats] = useState({week: null, month: null, year: null, allTime: null});
    const [achievements, setAchievements] = useState([]);
    const [disUnit, setDisUnit] = useState("");

    useEffect(() => {
        getUserAchievements().then((r) => setAchievements(r));
        getUserStats().then((r) => setStats(r));
        getDisUnit().then((r) => setDisUnit(r));
    }, []);

    return <div className="page-container">
        <div className="page-header">Profile</div>
        <div className="stats-main page-main">
            <div className="content-box username">
                <div className="subtitle_">Your Username</div>
                <div className="text_">
                    Your username is <b>{getUsername()}</b>.
                </div>
            </div>

            <hr className="section-divider" />

            <div className="content-box">
                <div className="subtitle_">Distance travelled</div>
                <div className="distance-stat text_"><div className="period">This week</div><div className="stat">{stats.week} {disUnit}</div></div>
                <div className="distance-stat text_"><div className="period">This month</div><div className="stat">{stats.month} {disUnit}</div></div>
                <div className="distance-stat text_"><div className="period">This year</div><div className="stat">{stats.year} {disUnit}</div></div>
                <div className="distance-stat text_"><div className="period">All time</div><div className="stat">{stats.allTime} {disUnit}</div></div>
            </div>

            <hr className="section-divider" />

            <div className="content-box achievements">
                <div className="subtitle_">Achievements</div>
                {achievements.map((achievement) => (
                    <div className="achievement text_">
                        <div className="title">{achievement.name}</div>
                        <div className="description">{achievement.summary}</div>
                    </div>
                ))}

            </div>
        </div>
    </div>
};

export default UserStats;