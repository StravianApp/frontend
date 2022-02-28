import { useState, useRef } from 'react';
import { Outlet } from "react-router-dom";
import './Layout.scss';
import birds from './assets/menu-birds.png';

const Layout = () => {
    const [navOpen, setNavOpen] = useState(false);
    const navDrawer = useRef(null);
    const shader = useRef(null);
    const navDrawerButton = useRef(null);

    const toggleNav = () => {
        if (navOpen) {
            navDrawer.current.style.width = "0%";
            shader.current.style.width = "0%";
            navDrawerButton.current.style.left = "8px";
        }
        else {
            navDrawer.current.style.width = "75%";
            shader.current.style.width = "100%";
            navDrawerButton.current.style.left = "calc(75% + 8px)";
        }
        setNavOpen(!navOpen);
    }


    return (
        <>

            <div ref={navDrawer} id="navDrawer" className="navDrawer">
                <a href="/app">Your Nest</a>
                <a href="/app/leaderbird">Leaderbird</a>
                <a href="/app/user-stats">User Stats</a>
                <a href="/app/flock">Your Flock</a>
                <a className="l" href="/app/about">Abou</a><a className="s" target="_blank" href={getLink()} rel="noreferrer">t</a>
                <a href="/app/settwings">Settwings</a>
            </div>

            <div ref={shader} id="shader" className="shader" onClick={toggleNav}></div>

            <div ref={navDrawerButton} onClick={toggleNav}
                id="navDrawerButton"
                className="navDrawerButton">
                <img src={birds} alt="Menu" />
            </div>

            <Outlet />
        </>
    )
}
export default Layout;


const arr = ["https://twitter.com/birdsarentreal?s=21",
    "https://flappybird.io/",
    "https://en.wikipedia.org/wiki/Crime_in_Antarctica",
    "https://mcphee.com/products/inflatable-toast-mattress",
    "https://en.wikipedia.org/wiki/Peterborough_ditch_murders"];
function getLink() {
    return arr[Math.floor((Math.random() * arr.length))];
}