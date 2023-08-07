import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { clientid } from "./user";


const Login = () => {
    const [user, setUser] = useState('');

    const loginThanhCong = (res) => {
        setUser(res.profileObj.email);
    }

    if (user !== '') {
        return (
            <b>Hello {user}</b>
        );
    } else {
        return (
            <div id="signInButton">
                <GoogleLogin
                    clientId={clientid}
                    onSuccess={loginThanhCong}
                    buttonText="Login with google"
                    isSignedIn={true}
                />
            </div>
        );
    }
};

export default Login;
