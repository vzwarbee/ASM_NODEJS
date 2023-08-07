import React, { useEffect } from "react";
import Login from "./login";
import LogOut from "./logout";
import { gapi } from "gapi-script";

const clientid = '36885881628-rpr2jcd4eqtvbm0d8nigag9pch2gbl72.apps.googleusercontent.com';
const User = () => {

    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                clientId: clientid
            });
        });
    }, []);

    return (
        <>
            <Login />
            <LogOut />
        </>
    );
};

export {User, clientid};
