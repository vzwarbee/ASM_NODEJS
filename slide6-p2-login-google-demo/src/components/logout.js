import { GoogleLogout } from "react-google-login";
import { clientid } from "./user";

const LogOut = () => {
    

    const logoutSuccess = () => {
        alert('Logout success!');
        window.location.reload(true);
    };

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientid}
                buttonText="Logout with google"
                onLogoutSuccess={logoutSuccess}
            />
        </div>
    );
};

export default LogOut;
