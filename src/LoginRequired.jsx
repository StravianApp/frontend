import { useEffect } from "react";
import { loggedIn } from "./utils/login";

const LoginRequired = ({ component }) => {
    useEffect(() => {
        if (!loggedIn()) window.location.href = '/app/login';
    }, []);
    return component;
};

export default LoginRequired;