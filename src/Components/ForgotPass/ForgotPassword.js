import { useState } from "react";
import Code from "../Common/Code/Code";
import ForgotUser from "./ForgotUser/ForgotUser";

/* eslint-disable react-hooks/exhaustive-deps */
const ForgotPassword = () => {
    const [userName,setUserName] = useState("");
    const submitHandle = (e)=>{
        e.preventDefault() ;
    }
    if(userName){
        if(userName.code){
            if(userName.reset){
                // navigate to reset page by user Data
                console.log("Navigate to reset page by userData",userName) ;
            }else{
                return <Code setUserName={setUserName} userName={userName} submitHandle={submitHandle} />
            }
        }
    }else{
        return <ForgotUser setUserName={setUserName} userName={userName} />
    }
}
 
export default ForgotPassword;
