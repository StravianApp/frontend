import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { exchangeStravaCodeForLoginCode } from "../../utils/api";
import { Button } from "reactstrap";

import logo from '../../assets/logos/full-text-1.png';
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
            { code && (<>
                <b>Copy the login code:</b><br />
                <input type="text_" value={code} ref={codeEl} /> &nbsp;
                {navigator.clipboard && <Button onClick={() => navigator.clipboard.writeText(code)}>Copy</Button>}
                <br /><br />
                <b>Close this window and paste it into the login page:</b>
                <br />
            </>)}
            { error && (<div className="error">
                { error }
            </div>)}
            <Button className="closeBtn" onClick={() => setCloseWindow(true)}>Close window</Button>
        </div>
    );
};

export default LoggedIn;