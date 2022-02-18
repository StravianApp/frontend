import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { exchangeStravaCodeForLoginCode } from "../../utils/api";

const LoggedIn = () => {
    const searchParams = useSearchParams()[0];
    const [code, setCode] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!searchParams.entries().next().done) {
            const loginCode = exchangeStravaCodeForLoginCode(searchParams.get('code'));
            if (loginCode) setCode(loginCode);
            else setError('An error occurred. Please close this window and try again.');
        }
    }, [searchParams]);

    return (
        <div className="logged-in-main">
            { code && (<div>
                Your login code is: { code }. Please copy this code, close this window, and paste it into the Stravian login page.
            </div>)}
            { error && (<div>
                { error }
            </div>)}
            <button onClick={window.close}>Close window</button>
        </div>
    );
};

export default LoggedIn;