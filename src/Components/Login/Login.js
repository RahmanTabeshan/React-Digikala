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
                    return <UserPass userName={userName} setUserName={setUserName} /> ;
                }else{
                    //code component
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
