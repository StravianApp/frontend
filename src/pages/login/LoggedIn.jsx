import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const LoggedIn = () => {
    const searchParams = useSearchParams()[0];

    useEffect(() => {
        if (!searchParams.entries().next().done) {
            window.opener.postMessage(
                searchParams.toString(),
                window.location.protocol + '//' + window.location.host
            )
            // window.close();
        }
    }, [searchParams]);

    return null;
};

export default LoggedIn;