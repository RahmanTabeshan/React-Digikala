import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Code from "../Common/Code/Code";
import useCookie from "../Common/useCookies/useCookies";
import ForgotUser from "./ForgotUser/ForgotUser";


const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [cookies,setCookie,removeCookie] = useCookie() ;
    const [userName, setUserName] = useState("");

    const validCode = () => {
        navigate(location.pathname, { state: null });
        setUserName({ ...userName, codeValid: true });
    };
    useEffect(()=>{
        return () => {
            removeCookie("fgt_pwd", { sameSite: "lax" });
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    if (userName) {
        if (userName.code) {
            if (userName.codeValid) {
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
