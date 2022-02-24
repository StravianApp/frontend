import React from 'react';
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


const Layout = () => {
    return (
      <>

      <div id="navDrawer" className="navDrawer">
        <a href="/app">Nest</a>
        <a href="/app/leaderbird">Leaderbird</a>
        <a href="/app/user-stats">User Stats</a>
        <a href="/app/bird">Your Bird</a>
        <a href="/app/flock">Your Flock</a>
        <a className="l" href="/app/about">Abou</a><a className="s" target="_blank" href={getLink()} rel="noreferrer">t</a>
        <a href="/app/settwings">Settwings</a>
      </div>

      <div id="shader" className="shader" onClick={toggleNav}></div>

      <div onClick={toggleNav}
      id = "navDrawerButton"
      className="navDrawerButton">
        &nbsp;
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
function getLink(){
  return arr[Math.floor((Math.random() * arr.length))];
}