import { useState } from "react";
import UserLog from "./UserLog/UserLog";
import UserPass from "./UserPass/UserPass";

const Login = () => {
    const [userName, setUserName] = useState("");
    if (userName) {
        if(userName.type==="Email"){
            return <UserPass userName={userName} setUserName={setUserName} /> ;
        }else{
            if(userName.validate){
                if(userName.pass){
                    if(userName.code){
                        // user exist password exist but login by code => code component 
                    }else{
                        return <UserPass userName={userName} setUserName={setUserName} /> ;
                    }
                }else{
                    //user exist but password not exist => code component
                }
            }else{
                // user not exist => code component
            }
        }
        console.log(userName);
    }else{
        return <UserLog setUserName={setUserName} />;
    }
};

export default Login;
