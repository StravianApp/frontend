import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { exchangeStravaCodeForLoginCode } from "../../utils/api";

const LoggedIn = () => {
    const searchParams = useSearchParams()[0];
    const [code, setCode] = useState(null);

    useEffect(() => {
        if (!searchParams.entries().next().done) {
            const loginCode = exchangeStravaCodeForLoginCode(searchParams.get('code'));
            setCode(loginCode);
        }
    }, [searchParams]);

    return (
        <div className="logged-in-main">
            <button onClick={window.close}>Close</button>
            { code };
        </div>
    );
};

export default LoggedIn;