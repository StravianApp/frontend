import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { submitLoginDetails } from "../../utils/api";

const LoggedIn = () => {
    const params = useSearchParams()[0];

    useEffect(() => {
        const [code, scope] = [params.get('code'), params.get('scope')];
        if (code && scope) submitLoginDetails(code, scope);
        window.location.href = "/app";
    }, [params]);

    return null;
};

export default LoggedIn;