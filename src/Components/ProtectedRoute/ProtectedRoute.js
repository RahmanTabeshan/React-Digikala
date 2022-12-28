
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";
import useCookie from "../Common/useCookies/useCookies";

const ProtectedRoute = ({path,children}) => {
    const [cookies] = useCookie();
    const user = useSelector(state => state.User) ;
    if(cookies.user || user ){
        return <Navigate to={path} replace={true} />;
    }
    return children ;
}
 
export default ProtectedRoute;