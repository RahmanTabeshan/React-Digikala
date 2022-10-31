import React from "react";
import { useState } from "react";
import UserLog from "./UserLog";

const Login = () => {
    const [userName,setUserName]=useState("") ;
    return (
        <React.Fragment>
            {userName ? userName  : <UserLog setUserName={setUserName} />}
        </React.Fragment>
    );
};

export default Login;
