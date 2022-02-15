import { Outlet } from "react-router-dom";
import './Layout.scss';

function openNav() {
    document.getElementById("navDrawer").style.width = "75%";
    document.getElementById("shader").style.width = "100%";
    document.getElementById("navDrawerButton").style.left = "75%";
}

function closeNav() {
    document.getElementById("navDrawer").style.width = "0%";
    document.getElementById("shader").style.width = "0%";
    document.getElementById("navDrawerButton").style.left = "0%";
}

function toggleNav() {
    if (document.getElementById("navDrawer").style.width === "0%") {
        openNav();
    }
    else {
        closeNav();
    }
}



const Layout = () => (
    <div id="layout-root">
        <div id="navDrawer" className="navDrawer">
            <a href="/app">Nest</a>
            <a href="/app/leaderbird">Leaderbird</a>
            <a href="/app/user-stats">User Stats</a>
            <a href="/app/bird-page">Bird Page</a>
            <a href="/app/your-flock">Your Flock</a>
            <a href="/app/settwings">Settwings</a>
        </div>

        <div id="shader" className="shader" onClick={toggleNav}></div>

        <div onClick={toggleNav}
            id="navDrawerButton"
            className="navDrawerButton">
            &nbsp;
        </div>
        <Outlet />
    </div>
);

export default Layout;