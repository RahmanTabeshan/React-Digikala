import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useCookie from "../Common/useCookies/useCookies";

const ProtectWelcome = ({path,children}) => {

    const [cookies] = useCookie();
    const user = useSelector(state => state.User) ;
    const data = useSelector(state => state.Transfer) ;
    console.log(data);
    
    if(data.welcome || cookies.user || user ){
        return children;
    }
    return <Navigate to={path} replace={true} />;
}
 
export default ProtectWelcome;