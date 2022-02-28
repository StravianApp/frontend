import { Outlet } from "react-router-dom";

import './root-layout.scss';

import cloud from './assets/cloud.svg';

const RootLayout = () => {
    return (
        <>
            <div className="clouds">
                <img className="cloud cloud1" src={cloud} alt="" />
                <img className="cloud cloud2" src={cloud} alt="" />
                <img className="cloud cloud3" src={cloud} alt="" />
                <img className="cloud cloud4" src={cloud} alt="" />
                <img className="cloud cloud5" src={cloud} alt="" />
            </div>
            <Outlet />
        </>
    )
}
export default RootLayout;