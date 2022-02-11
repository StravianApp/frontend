import { Outlet } from "react-router-dom";
import React from 'react';
import './Layout.scss';

function openNav(){
  document.getElementById("navDrawer").style.width = "75%";
  document.getElementById("shader").style.width = "100%";
  document.getElementById("navDrawerButton").style.left = "75%";
}

function closeNav(){
  document.getElementById("navDrawer").style.width = "0%";
  document.getElementById("shader").style.width = "0%";
  document.getElementById("navDrawerButton").style.left = "0%";
}

function toggleNav(){
  if(document.getElementById("navDrawer").style.width == "0%"){
    openNav();
  }
  else{
    closeNav();
  }
}



const Layout = ({children}) => {
    return (
      <>

      <div id="navDrawer" class="navDrawer">
        <a href="/nest">Nest</a>
        <a href="/leaderbird">Leaderbird</a>
        <a href="/user-stats">User Stats</a>
        <a href="/bird-page">Bird's Page</a>
        <a href="/your-flock">Your Flock</a>
        <a href="/settwings">Settwings</a>
      </div>

      <div id="shader" class="shader" onClick={toggleNav}></div>

      <div onClick={toggleNav}
      id = "navDrawerButton"
      class="navDrawerButton">
        &nbsp;
      </div>

      

      <main>{children}</main>
      </>
    )
}











      /*<div id="layout-root">
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */
        
        
        /* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */
        //<Outlet />

export default Layout;