import { useEffect } from "react"
import { logout } from "../../utils/login";

const Logout = () => {

    useEffect(() => {
        logout();
        window.location.href = "/app/login";
    }, []);

    return null;
}

export default Logout;