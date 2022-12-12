import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Code from "../Common/Code/Code";
import ForgotUser from "./ForgotUser/ForgotUser";

/* eslint-disable react-hooks/exhaustive-deps */
const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const validCode = () => {
        navigate(location.pathname, { state: null });
        setUserName({ ...userName, codeValid: true });
    };
    if (userName) {
        if (userName.code) {
            if (userName.codeValid) {
                // navigate to reset page by user Data
                return (
                    <Navigate to={`/users/password/reset/`} state={userName} />
                );
            } else {
                return (
                    <Code
                        setUserName={setUserName}
                        userName={userName}
                        validCode={validCode}
                    />
                );
            }
        }
    } else {
        return <ForgotUser setUserName={setUserName} userName={userName} />;
    }
};

export default ForgotPassword;
