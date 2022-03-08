import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { exchangeStravaCodeForLoginCode } from "../../utils/api";
import { Button } from "reactstrap";

import logo from '../../assets/logos/full-text-3.png';
import './logged-in.scss';

const LoggedIn = () => {
    const searchParams = useSearchParams()[0];
    const [code, setCode] = useState(null);
    const [error, setError] = useState('Please wait...');
    const [closeWindow, setCloseWindow] = useState(false);
    const codeEl = useRef(null);

    useEffect(() => {
        if (!searchParams.entries().next().done) {
            exchangeStravaCodeForLoginCode(searchParams.get('code')).then((loginCode) => {
                setError('');
                if (loginCode) setCode(loginCode);
                else setError('An error occurred. Please close this window and try again.');
            }).catch((err) => setError('An error occurred. Please close this window and try again.'));
        }
    }, [searchParams]);

    useEffect(() => {
        if (code) codeEl.current.select();
    }, [code]);

    useEffect(() => {
        if (closeWindow) window.close();
    }, [closeWindow]);

    return (
        <div className="logged-in-main">
            <div className="logo-container">
                <img className='logo' src={logo} alt="Stravian Logo" />
            </div>
            {code && (<>
                <div className="content-box">
                    <div className="text_">Copy the login code:</div>
                    <input type="text" contentEditable={false} value={code} ref={codeEl} /><br />
                    {navigator.clipboard && <Button className="copyBtn" onClick={() => navigator.clipboard.writeText(code)}>Copy</Button>}
                </div>
                <div className="content-box">
                    <div className="text_">Close this window and paste the code into the login screen of the Stravian app:</div>
                    <Button className="closeBtn" onClick={() => setCloseWindow(true)}>Close window</Button>
                    <br />
                    <br />
                    <div className="text_">(If you're on iOS you may have to manually go back to the app)</div>
                </div>
            </>)}
            {error && (<div className="error content-box">
                <div className="text_">{error}</div>
                <Button className="closeBtn" onClick={() => setCloseWindow(true)}>Close window</Button>
            </div>)}
        </div>
    );
};

export default LoggedIn;