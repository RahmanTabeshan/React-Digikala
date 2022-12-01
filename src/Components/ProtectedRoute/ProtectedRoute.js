import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";

const ProtectedRoute = ({path,children}) => {
    const [cookies] = useCookies();
    const user = useSelector(state => state.User) ;
    if(cookies.user || user ){
        return <Navigate to={path} replace />;
    }
    return children ;
}
 
export default ProtectedRoute;